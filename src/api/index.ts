export interface ResponseData<T> {
  msg: string;
  code: number;
  data: T;
  message: string;
}

export type APIResponse<T> = Promise<ResponseData<T>>;

export interface Pagination<T> {
  total: number;
  page: number;
  pageSize: number;
  data: Array<T>;
  last_page: number;
}
