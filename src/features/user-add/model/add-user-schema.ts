import z from "zod";

export const addUserSchema = z.object({
  role: z.string(), 
  name: z.string(), 
  surname: z.string(), 
  username: z.string(), 
  password: z.string(),
});

export type AddUserFormSchema = z.infer<typeof addUserSchema>;
