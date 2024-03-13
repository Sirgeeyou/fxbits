import * as z from "zod";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB in bytes
const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

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

export const AddListingSchema = z.object({
  title: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(6, {
    message: "Description must be at least 6 characters",
  }),
  image: z.any(),
  category: z.any(),
  price: z.coerce.number(),
  shortDescription: z.string().max(50),
  fileName: z.string(),
});
