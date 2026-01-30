import type { PaginationResponse } from "./main-types";

export interface City {
  id: number;
  name: string;
}

export interface Region {
  id: number;
  name: string;
  cities: City[];
}

export interface GetRegionsResponse extends PaginationResponse {
  results: Region[]
}
