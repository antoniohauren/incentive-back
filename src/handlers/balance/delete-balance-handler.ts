import { deleteBalanceService } from "@/services/balance";
import type { Handler } from "hono";

export const deleteBalanceHandler: Handler = async (c) => {
  const id = c.req.param("id");

  const { success, message } = await deleteBalanceService(id);

  if (success) {
    return c.json({ success, message });
  }

  return c.json({ success, message }, 400);
};
