interface ApiErrorMessage {
  code: string;
  context: string;
  message: string;
  stactTrace: string;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  error: ApiErrorMessage;
  pageNumber?: number;
  pageSize?: number;
  totalPages?: number;
  totalRecords?: number;
  type: string;
}
