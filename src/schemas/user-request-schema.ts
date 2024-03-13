import { z } from "zod";
import { insertUserSchema } from "./user-schema";

export const userRequestSchema = insertUserSchema
  .omit({
    password_hash: true,
    salt: true,
  })
  .extend({
    password: z.string().min(8),
    email: z.string().email(),
  });

export type UserRequest = z.infer<typeof userRequestSchema>;
