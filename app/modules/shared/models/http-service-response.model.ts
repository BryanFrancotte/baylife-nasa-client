import { ApiResponse } from "./api-response.model";

export default interface HttpServiceResponse<T> extends ApiResponse<T> {
  status: number;
  hasCalledApi: boolean;
  headers?: HeadersInit;
}