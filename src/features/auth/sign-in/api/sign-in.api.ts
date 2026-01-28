import { axiosInstance } from "@/shared/api/base";
import type { SignInParams, SignInResponse } from "../model/types";

export const signInApi = {
    signIn: (params: SignInParams) => axiosInstance.post<SignInResponse>("/accounts/login/", params).then((res) => res.data)
}