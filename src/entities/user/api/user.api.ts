import { axiosInstance } from "@/shared/api/base";
import type { GetUsersParams, GetUsersResponse, User } from "../model/types";

export const userApi = {
  getUsersList: async (params: GetUsersParams): Promise<GetUsersResponse> => {
    const response = await axiosInstance.get<GetUsersResponse>("/accounts/list/", {
      params,
    });
    return response.data;
  },

  getUserById: async (id: number): Promise<User> => {
    const response = await axiosInstance.get<User>(`/accounts/${id}/retrieve/`);
    return response.data;
  },
};