import { isEmpty } from 'lodash-es';
import { compile } from 'path-to-regexp';
import { IMakeEnum, IMakeUrlFor } from './types.js';
import axios from 'axios';

export const routes = {
  home: '/',
  users: '/users',
  user: '/users/:id',
  cats: '/cats',
} as const;

export const qs = {
  stringify: (obj = {}) => {
    if (isEmpty(obj)) return '';
    return Object.keys(obj)
      .sort()
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
      .join('&');
  },
  parse: queryString => {
    if (!queryString) return {};
    const queryParts = queryString
      .split('&')
      .map(pair => pair.split('=').map(el => decodeURIComponent(el)));

    return queryParts.reduce((acc, queryPart) => ({ ...acc, [queryPart[0]]: queryPart[1] }), {});
  },
  getPathname: url => url.split('?')[0],
  splitUrl: url => {
    const [pathname, rawQuery] = url.split('?');
    const query = qs.parse(rawQuery);
    return { pathname, query };
  },
};

export const makeUrlFor: IMakeUrlFor = rawRoutes => {
  const routes = Object.keys(rawRoutes).reduce(
    (acc, name) => ({ ...acc, [name]: compile(rawRoutes[name]) }),
    {} as any
  );

  return (name, routeParams = {}, query = {}) => {
    const toPath = routes[name];
    return isEmpty(query) ? toPath(routeParams) : `${toPath(routeParams)}?${qs.stringify(query)}`;
  };
};

export const getUrl = makeUrlFor(routes);
export const getApiUrl = (name: keyof typeof routes, routeParams?, query?) =>
  `/api${getUrl(name, routeParams, query)}`;

export const makeEnum: IMakeEnum = (...args) =>
  args.reduce((acc, key) => ({ ...acc, [key]: key }), {} as any);

export const roles = makeEnum('user', 'admin', 'guest');
export const asyncStates = makeEnum('idle', 'pending', 'resolved', 'rejected');
export const modes = makeEnum('test', 'development', 'production');

export const guestUser = {
  id: -111,
  name: 'Guest',
  role: roles.guest,
  email: '',
  password_digest: '',
} as const;

export const isBrowser = () => typeof window !== 'undefined';

export const isSignedIn = currentUser => currentUser.role !== roles.guest;
export const isAdmin = currentUser => currentUser.role === roles.admin;

export const isProduction = mode => mode === modes.production;
export const isDevelopment = mode => mode === modes.development;
export const isTest = mode => mode === modes.test;

const catsApiBaseUrl = 'https://cataas.com';

const getCatUrl = async path => {
  const response = await axios.get(`${catsApiBaseUrl}${path}`, {
    responseType: 'blob',
  });
  return URL.createObjectURL(response.data);
};

export const catsApi = {
  getRandomCat: async () => getCatUrl('/c'),
  getCatWithText: async text => getCatUrl(`/c/s/${text}`),
};
