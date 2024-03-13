import { signInHandler, signUpHandler } from "@/handlers/auth";
import { signInSchema, signUpSchema } from "@/models/auth-model";
import { validator } from "@/utils/schema-validator";
import { Hono } from "hono";

const authRouter = new Hono();

authRouter.post("sign-in", validator(signInSchema), signInHandler);
authRouter.post("sign-up", validator(signUpSchema), signUpHandler);

export { authRouter };
