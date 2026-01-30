import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { useForm } from "react-hook-form";
import type { FormSchema } from "../model/form-schema";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useSignIn } from "../model/useSignIn";

export const SignInForm = () => {
  const form = useForm<FormSchema>();

  const { mutate, isPending } = useSignIn();

  const username = form.watch("username");
  const password = form.watch("password");

  const isFieldsFilled = username && password;

  const onSubmit = (data: FormSchema) => {
    mutate({
      username: data.username,
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

        <Button className="w-full mt-6" type="submit" disabled={isPending || !isFieldsFilled}>
          {isPending ? "Вход..." : "Войти"}
        </Button>
      </form>
    </Form>
  );
};
