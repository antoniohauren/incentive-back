import { UserRequest } from "@/schemas";
import { createUserService } from "@/services";
import { Handler } from "hono";

const createUserHandler: Handler = async (c) => {
  const body = await c.req.json<UserRequest>();

  const { success, message } = await createUserService(body);

  if (success) {
    return c.json({ success, message }, 201);
  }

  return c.json({ success, message }, 400);
};

export { createUserHandler };
