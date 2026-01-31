import type { GetRegionsResponse } from "../types/regions.types";
import { axiosInstance } from "./base";

export const regionsApi = {
  getRegions: async (): Promise<GetRegionsResponse> => {
    const response = await axiosInstance.get<GetRegionsResponse>("/regions/list/");
    return response.data;
  },
};
