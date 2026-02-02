import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userAddApi } from "../api/user-add.api";
import { toast } from "sonner";
import { userQueries } from "@/entities/user";
import type { AxiosError } from "axios";
import type { CreateUserError } from "./types";

export const useCreateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: userAddApi.createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: userQueries.all(),
      });

      toast.success("Пользователь успешно создан!");
    },
    onError: (error: AxiosError<CreateUserError>) => {
      const serverError = error.response?.data;

      if (serverError?.username) {
        const message = Array.isArray(serverError.username)
          ? serverError.username[0]
          : serverError.username;

        return toast.error(message);
      }

      toast.error("Не удалось создать пользователя");
    },
  });
};
