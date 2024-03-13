import { InsertUser } from "@/schemas";
import { createUserService } from "@/services";
import { Handler } from "hono";

const createUserHandler: Handler = async (c) => {
  const body = await c.req.json<InsertUser>();

  const success = await createUserService(body);

  if (success) {
    return c.json({ success }, 201);
  }

  return c.json({ success }, 400);
};

export { createUserHandler };
