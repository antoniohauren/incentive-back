import { createUserHandler, getUserHandler } from "@/handlers";
import { insertUserSchema } from "@/schemas";
import { validator } from "@/utils/schema-validator";
import { Hono } from "hono";

const userRouter = new Hono();

userRouter.get("/:id", getUserHandler);
userRouter.post("/create", validator(insertUserSchema), createUserHandler);

export { userRouter };
