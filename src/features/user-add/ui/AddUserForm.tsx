import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { useForm } from "react-hook-form";
import { addUserSchema, type AddUserFormSchema } from "../model/add-user-schema";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Input } from "@/shared/ui/input";
import { Button } from "@/shared/ui/button";
import { useQuery } from "@tanstack/react-query";
import { userQueries } from "@/entities/user";
import { useCreateUser } from "../model/useCreateUser";
import {zodResolver} from "@hookform/resolvers/zod";

export const AddUserForm = () => {
  const form = useForm<AddUserFormSchema>({
    resolver: zodResolver(addUserSchema),
    defaultValues: {
      role: "",
      username: "",
      password: "",
    },
  });
  const { data: roles } = useQuery(
    userQueries.roles({ page: 1, page_size: 50 }),
  );

  const { mutate, isPending } = useCreateUser();

  const onSubmit = (data: AddUserFormSchema) => {
    mutate({
      role: Number(data.role),
      username: data.username,
      password: data.password,
      password2: data.password,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Роль</FormLabel>
                <FormControl>
                  <Select
                    value={field.value}
                    name={field.name}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Выберите роль" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {roles?.results.map((role) => (
                          <SelectItem key={role.id} value={String(role.id)}>
                            {role.name}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* 
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input placeholder="Введите имя" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="surname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Фамилия</FormLabel>
                <FormControl>
                  <Input placeholder="Введите фамилию" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          /> */}

          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
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
              <FormItem className="md:col-span-2">
                <FormLabel>Пароль</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Введите пароль"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          className="w-full mt-6"
          type="submit"
          variant="default"
          disabled={isPending}
        >
          {!isPending ? "Сохранить" : "Загрузка..."}
        </Button>
      </form>
    </Form>
  );
};
