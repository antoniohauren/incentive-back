import type { SignInRequest } from "@/models/auth-model";
import { signInService } from "@/services/auth/sign-in-service";
import type { Handler } from "hono";

export const signInHandler: Handler = async (c) => {
  const body = await c.req.json<SignInRequest>();

  const { success, message, data } = await signInService(body);

  if (success) {
    return c.json({ success, data });
  }

  return c.json({ success, message }, 400);
};
