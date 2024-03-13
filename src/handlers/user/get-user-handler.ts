import { getUserService } from "@/services/user";
import { Handler } from "hono";

export const getUserHandler: Handler = async (c) => {
  const id = c.req.param("id");

  const { success, data, message } = await getUserService(id);

  if (success) {
    return c.json({ success, data });
  }

  return c.json({ success, message }, 400);
};
