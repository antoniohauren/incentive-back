import type { UserRequest } from "@/models";
import { createUserService } from "@/services/user";
import type { Handler } from "hono";

export const createUserHandler: Handler = async (c) => {
  const body = await c.req.json<UserRequest>();

  const { success, message } = await createUserService(body);

  if (success) {
    return c.json({ success, message }, 201);
  }

  return c.json({ success, message }, 400);
};
