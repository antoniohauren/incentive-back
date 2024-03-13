import { z } from "zod";
import { userRequestSchema } from "./user-model";

export const signInSchema = userRequestSchema.pick({
  username: true,
  password: true,
});

export type SignInRequest = z.infer<typeof signInSchema>;
