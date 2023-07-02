import { AxiosInstance, AxiosRequestConfig } from 'axios';
import { asyncStates, roles } from './utils.js';

export interface IAxiosInstance extends AxiosInstance {
  request<T = any, R = T, D = any>(config: AxiosRequestConfig<D>): Promise<R>;
  get<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  delete<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  head<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  options<T = any, R = T, D = any>(url: string, config?: AxiosRequestConfig<D>): Promise<R>;
  post<T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  put<T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
  patch<T = any, R = T, D = any>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<R>;
}

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
  todos?: ITodo[];
};

export type ITodo = {
  id: number;
  text: string;
  author_id: any;
  is_completed: boolean;
  is_edited_by_admin: boolean;
  author?: IUser;
};


