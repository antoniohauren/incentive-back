import { insertUserSchema, selectUserSchema } from "@/schemas";
import { z } from "zod";

export const userRequestSchema = insertUserSchema
  .omit({
    passwordHash: true,
    salt: true,
  })
  .extend({
    password: z.string().min(8),
    email: z.string().email(),
  });
export const userResponseSchema = selectUserSchema.omit({
  passwordHash: true,
  salt: true,
});

export type UserRequest = z.infer<typeof userRequestSchema>;
export type UserResponse = z.infer<typeof userResponseSchema>;
export type UserListResponse = UserResponse[];
