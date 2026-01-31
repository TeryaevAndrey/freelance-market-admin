import { axiosInstance } from "@/shared/api/base";
import type {

  GetRolesParams,
  GetRolesResponse,
  GetUsersParams,
  GetUsersResponse,
  User,
} from "../model/types";

export const userApi = {
  getUsersList: async (params: GetUsersParams): Promise<GetUsersResponse> => {
    const response = await axiosInstance.get<GetUsersResponse>(
      "/accounts/list/",
      {
        params,
      },
    );
    return response.data;
  },

  getUserById: async (id: number): Promise<User> => {
    const response = await axiosInstance.get<User>(`/accounts/${id}/retrieve/`);
    return response.data;
  },

  getRoles: async (params: GetRolesParams): Promise<GetRolesResponse> => {
    const response = await axiosInstance.get<GetRolesResponse>("/roles/", {
      params,
    });

    return response.data;
  },
};
