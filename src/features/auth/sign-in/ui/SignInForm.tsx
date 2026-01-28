import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { FormSchema } from "../model/form-schema";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { axiosInstance } from "@/shared/api/base";
import type { SignInParams, SignInResponse } from "../model/types";

export const SignInForm = () => {
  const form = useForm<FormSchema>();
  const navigate = useNavigate();

  const signInMutation = useMutation({
    mutationFn: async (params: SignInParams) => {
      const { data } = await axiosInstance.post<SignInResponse>(
        "/accounts/login",
        params
      );
      return data;
    },
    onSuccess: (data) => {
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    },
  });

  const onSubmit = (data: FormSchema) => {
    signInMutation.mutate({
      email: data.username,
      password: data.password,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Логин</FormLabel>
                <FormControl>
                  <Input placeholder="Введите логин" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Введите пароль"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button
          className="w-full mt-6"
          type="submit"
          disabled={signInMutation.isPending}
        >
          Войти
        </Button>
      </form>
    </Form>
  );
};
