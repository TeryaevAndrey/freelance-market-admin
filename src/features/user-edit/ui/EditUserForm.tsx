import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shared/ui/form";
import { useForm } from "react-hook-form";
import type { EditUserFormSchema } from "../model/edit-user-schema";
import { Button } from "@/shared/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui/select";
import { Input } from "@/shared/ui/input";
import { useUpdateUser } from "../model/useUpdateUser";
import { useQuery } from "@tanstack/react-query";
import { userQueries, type User } from "@/entities/user";

interface Props {
  userId: number;
  user?: User;
}

export const EditUserForm = ({ userId, user }: Props) => {
  const { data: roles } = useQuery(
    userQueries.roles({ page: 1, page_size: 50 }),
  );
  const foundRoleId = roles?.results.find(
    (role) => role.name === user?.role,
  )?.id;

  const form = useForm<EditUserFormSchema>({
    defaultValues: {
      role: foundRoleId ? String(foundRoleId) : "",
      name: user?.first_name || "",
      surname: user?.last_name || "",
      username: user?.username || "",
    },
  });
  const { mutate, isPending } = useUpdateUser();

  const onSubmit = (data: EditUserFormSchema) => {
    mutate({
      id: userId,
      role: Number(data.role),
      first_name: data.name,
      last_name: data.surname,
      username: data.username,
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
          />

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
