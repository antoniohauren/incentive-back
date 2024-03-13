import { getUserListService } from "@/services/user";
import { Handler } from "hono";

export const getUserListHandler: Handler = async (c) => {
  const { success, data, message } = await getUserListService();

  if (success) {
    return c.json({ success, data });
  }

  return c.json({ success, message }, 400);
};
