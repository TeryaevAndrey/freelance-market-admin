import { axiosInstance } from "@/shared/api/base";
import type {
  DeactivateUserParams,
  DeactivateUserResponse,
} from "../model/types";

export const manageUserApi = {
  deactivate: async (
    params: DeactivateUserParams,
  ): Promise<DeactivateUserResponse> => {
    const response = await axiosInstance.patch<DeactivateUserResponse>(
      `/accounts/${params.id}/deactivate/`,
    );

    return response.data;
  },
};
