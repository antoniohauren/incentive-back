import { SignUpRequest } from "@/models/auth-model";
import { signUpService } from "@/services/auth/sign-up-service";
import { Handler } from "hono";

export const signUpHandler: Handler = async (c) => {
  const body = await c.req.json<SignUpRequest>();

  const { success, data, message } = await signUpService(body);

  if (success) {
    return c.json({ success, data });
  }

  return c.json({ success, message }, 400);
};
