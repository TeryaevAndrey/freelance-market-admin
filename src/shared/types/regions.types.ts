export interface City {
  id: number;
  name: string;
}

export interface Region {
  id: number;
  name: string;
  cities: City[];
}

export type GetRegionsResponse = Region[];
