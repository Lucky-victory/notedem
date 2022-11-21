export type ApiQueryResponse<T = any> = {
  message?: string;
  data: T | null;
};
