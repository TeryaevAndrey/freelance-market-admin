import z from "zod";

export const addUserSchema = z.object({
  role: z.string().min(1, "Выберите роль"),

  username: z
    .string()
    .min(1, "Введите имя пользователя")
    .min(3, "Имя пользователя должно быть не менее 3 символов"),

  password: z
    .string()
    .min(1, "Введите пароль")
    .min(6, "Пароль должен быть не менее 6 символов"),
});

export type AddUserFormSchema = z.infer<typeof addUserSchema>;
