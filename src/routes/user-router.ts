import { createUserHandler, getUserHandler } from "@/handlers";
import { insertUserSchema } from "@/schemas";
import { validator } from "@/utils/schema-validator";
import { Hono } from "hono";
import { z } from "zod";

const userRouter = new Hono();

const createSchema = insertUserSchema.extend({
  email: z.string().email(),
});

userRouter.get("/:id", getUserHandler);
userRouter.post("/create", validator(createSchema), createUserHandler);

export { userRouter };
