import { useMutation } from "@tanstack/react-query";
import { signInApi } from "../api/sign-in.api";
import { useNavigate } from "react-router-dom";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const useSignIn = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: signInApi.signIn,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
      toast.success("Авторизация прошла успешно!");
    },
    onError: (err: AxiosError) => {
      const { status } = err;

      if (status === 400) {
        toast.error("Неверный логин или пароль");
      }
    },
  });
};
