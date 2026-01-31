import { useMutation, useQueryClient } from "@tanstack/react-query";
import { manageUserApi } from "./manage-user.api";
import { toast } from "sonner";
import { userQueries } from "@/entities/user";

export const useDeactivateUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: manageUserApi.deactivate,
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: userQueries.all()
      })
      
      if (data.is_active) {
        toast.success("Пользователь активирован");
      } else {
        toast.success("Пользователь деактивирован");
      }
    },
    onError: () => {
      toast.error("Ошибка");
    },
  });
};
