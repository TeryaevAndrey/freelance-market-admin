import { axiosInstance } from "@/shared/api/base";
import type { SignInParams, SignInResponse } from "../model/types";

export const signInApi = {
  signIn: async (params: SignInParams): Promise<SignInResponse> => {
    const response = await axiosInstance.post<SignInResponse>(
      "/accounts/login/",
      params
    );
    return response.data;
  },
};