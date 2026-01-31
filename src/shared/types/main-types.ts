export type WithNull<T> = T | null;

export interface PaginationResponse {
  count: number;
  next?: WithNull<string>;
  previous?: WithNull<string>;
}

export interface PaginationParams {
    page_size?: number;
    page?: number;
}
