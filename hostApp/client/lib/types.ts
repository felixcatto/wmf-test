import { components } from './apiTypes/schema.js';
import { asyncStates, roles } from './utils.js';

export type IAnyObj = {
  [key: string]: any;
};

export type IMakeEnum = <T extends ReadonlyArray<string>>(
  ...args: T
) => { [key in T[number]]: key };

export type IMakeUrlFor = <T extends object>(
  rawRoutes: T
) => (name: keyof T, args?, opts?) => string;

export type IRole = keyof typeof roles;
export type IAsyncState = keyof typeof asyncStates;
export type IMode = 'test' | 'development' | 'production';

export type IUser = {
  id: number;
  name: string;
  role: IRole;
  email: string;
  password_digest: string;
};

export type IPet = components['schemas']['Pet'];
