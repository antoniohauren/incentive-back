import { createUserHandler, getUserHandler } from "@/handlers";
import { Hono } from "hono";

const userRouter = new Hono();

userRouter.get("/:id", getUserHandler);
userRouter.post("/create", createUserHandler);

export { userRouter };
