import { axiosInstance } from "@/shared/api/base";
import type {
  GetCategoriesParams,
  GetCategoriesResponse,
} from "../model/types";

export const categoryApi = {
  getCategoriesList: async (
    params: GetCategoriesParams,
  ): Promise<GetCategoriesResponse> => {
    const response = await axiosInstance.get<GetCategoriesResponse>(
      "/categories/",
      {
        params,
      },
    );

    return response.data;
  },
};
