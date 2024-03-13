import {
  createUserHandler,
  getUserHandler,
  getUserListHandler,
} from "@/handlers/user";
import { userRequestSchema } from "@/models";
import { validator } from "@/utils/schema-validator";
import { Hono } from "hono";

const userRouter = new Hono();

userRouter.get("/:id", getUserHandler);
userRouter.get("/", getUserListHandler);
userRouter.post("/create", validator(userRequestSchema), createUserHandler);

export { userRouter };
