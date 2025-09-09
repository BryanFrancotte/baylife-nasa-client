import axios from "axios";
import { env } from "@/lib/env";

export const apiClient = axios.create({
  baseURL: env.NEXT_PUBLIC_API_URL,
  timeout: 30000,
  withCredentials: false,
});

apiClient.interceptors.request.use((config) => {
  // Attach auth token here when auth store exists
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;


