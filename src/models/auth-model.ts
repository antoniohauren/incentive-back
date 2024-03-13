import type { z } from "zod";
import { userRequestSchema } from "./user-model";

export const signInSchema = userRequestSchema.pick({
  username: true,
  password: true,
});

export const signUpSchema = userRequestSchema.pick({
  username: true,
  password: true,
  email: true,
  name: true,
});

export type SignInRequest = z.infer<typeof signInSchema>;
export type SignUpRequest = z.infer<typeof signUpSchema>;
