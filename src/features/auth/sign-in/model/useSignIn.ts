import { useMutation } from "@tanstack/react-query";
import { signInApi } from "../api/sign-in.api";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
    const navigate = useNavigate();
    
  return useMutation({
    mutationFn: signInApi.signIn,
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    },
  });
};
