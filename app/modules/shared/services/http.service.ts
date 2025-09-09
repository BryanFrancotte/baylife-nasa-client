/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";

import config from "@/app/conifg";
import { HttpService } from "../models/http-service.model";

type Method = "post" | "get" | "delete" | "put" | "patch" | "head";

const createHeaders = (additionalHeaders: any) => {
  const httpHeaders = {
    "Content-Type": "application/json",
    ...additionalHeaders,
  };

  return httpHeaders;
};

const request = (
  endpoint: string,
  method: Method,
  body?: any,
  additionalHeaders?: any,
  additionalConfig?: any
): Promise<any> => {
  const header = createHeaders(additionalHeaders);
  return new Promise((resolve, reject) =>
    config(`${endpoint}`, {
      method,
      data: body,
      headers: header,
      ...additionalConfig,
    })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        if (!axios.isCancel(error)) {
          console.log("Error", error);
        }
        if (error.code === "ECONNABORTED") {
          reject({ isTimeout: true });
          return;
        }
        reject(error);
      })
  );
};

const exec = (
  endpoint: string,
  method: Method,
  body?: any,
  additionalHeaders?: any,
  additionalConfig?: any
): Promise<any> =>
  request(endpoint, method, body, additionalHeaders, additionalConfig);

const httpService: HttpService = {
  get: (url, additionalHeader) => exec(url, "get", undefined, additionalHeader),
  remove: (url) => exec(url, "delete"),
  post: (url, options, additionalConfig) =>
    exec(url, "post", options, null, additionalConfig),
  put: (url, options) => exec(url, "put", options),
  patch: (url, body) =>
    exec(url, "patch", body, { "Content-Type": "application/json-patch+json" }),
  postMultipart: (url, formData, additionalConfig) => {
    return new Promise((resolve, reject) =>
      config(`${url}`, {
        method: "post",
        data: formData,
        headers: {
          ...additionalConfig?.headers,
        },
        ...additionalConfig,
      })
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          if (!axios.isCancel(error)) {
            console.log("Error", error);
          }
          if (error.code === "ECONNABORTED") {
            reject({ isTimeout: true });
            return;
          }
          reject(error);
        })
    );
  },
};

export default httpService;
