import { getBalanceListService } from "@/services/balance";
import type { Handler } from "hono";

export const getBalanceListHandler: Handler = async (c) => {
  const { success, data, message } = await getBalanceListService();

  if (success) {
    return c.json({ success, data });
  }

  return c.json({ success, message }, 400);
};
