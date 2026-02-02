import type { CreateUserParams, CreateUserResponse } from "@/entities/user";
import { axiosInstance } from "@/shared/api/base";

export const userAddApi = {
  createUser: async (params: CreateUserParams): Promise<CreateUserResponse> => {
    const response = await axiosInstance.post<CreateUserResponse>(
      "/accounts/create/",
      params,
    );

    return response.data;
  },
};
