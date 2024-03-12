import * as z from "zod";

export const SignupFormSchema = z
  .object({
    email: z.string().email().min(2, {
      message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(6),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "Passwords don't match",
    path: ["confirm"],
  });

export const LoginFormSchema = z.object({
  email: z.string().email().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(6),
});
