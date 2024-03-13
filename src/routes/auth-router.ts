import { signInHandler } from "@/handlers/auth";
import { signInSchema } from "@/models/auth-model";
import { validator } from "@/utils/schema-validator";
import { Hono } from "hono";

const authRouter = new Hono();

authRouter.post("sign-in", validator(signInSchema), signInHandler);

export { authRouter };
