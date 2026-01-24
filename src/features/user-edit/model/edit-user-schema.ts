import z from "zod";

export const editUserSchema = z.object({
  role: z.string(),
  name: z.string(),
  surname: z.string(),
  username: z.string(),
});

export type EditUserFormSchema = z.infer<typeof editUserSchema>;
