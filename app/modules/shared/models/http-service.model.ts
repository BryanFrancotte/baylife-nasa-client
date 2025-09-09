/* eslint-disable @typescript-eslint/no-explicit-any */
//TODO: remove any with unknown

import HttpServiceResponse from "./http-service-response.model";

export type Options = { headers?: any };

export type OptionsWithBody = Options & { body?: any };

export interface HttpService {
  get: <T>(url: string, additionalHeader?: any) => Promise<T>;
  remove: (
    url: string,
    options?: Options
  ) => Promise<HttpServiceResponse<void>>;
  post: <T>(url: string, body: any, additionalConfig?: any) => Promise<T>;
  put: <T>(url: string, body: any) => Promise<T>;
  patch: <T>(url: string, body: any) => Promise<HttpServiceResponse<T>>;
  postMultipart: <T>(
    url: string,
    formData: FormData,
    additionalConfig?: any
  ) => Promise<T>;
}
