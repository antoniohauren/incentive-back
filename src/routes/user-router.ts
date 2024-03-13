import { createUserHandler, getUserHandler } from "@/handlers";
import { userRequestSchema } from "@/schemas";
import { validator } from "@/utils/schema-validator";
import { Hono } from "hono";

const userRouter = new Hono();

userRouter.get("/:id", getUserHandler);
userRouter.post("/create", validator(userRequestSchema), createUserHandler);

export { userRouter };
