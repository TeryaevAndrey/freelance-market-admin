import { userApi, type UpdateUserParams } from "@/entities/user";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: (params: UpdateUserParams) => userApi.updateUser(params),
    onSuccess: () => {
      toast.success("Данные пользователя успешно обновлены!");
    },
    onError: () => {
      toast.error("Не удалось обновить данные пользователя");
    },
  });
};
