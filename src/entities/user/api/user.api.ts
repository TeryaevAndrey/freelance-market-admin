import { axiosInstance } from "@/shared/api/base";
import type { GetUsersParams, GetUsersResponse, User } from "../model/types";

export const userApi = {
  getUsersList: (params: GetUsersParams) =>
    axiosInstance
      .get<GetUsersResponse>("/accounts/list/", {
        params,
      })
      .then((res) => res.data),

  getUserById: (id: number) =>
    axiosInstance
      .get<User>(`/accounts/${id}/retrieve/`)
      .then((res) => res.data),
};
