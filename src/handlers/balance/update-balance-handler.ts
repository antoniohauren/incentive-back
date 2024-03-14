import type { BalanceUpdateRequest } from "@/models/balance-model";
import { updateBalanceService } from "@/services/balance";
import type { Handler } from "hono";

export const updateBalanceHandler: Handler = async (c) => {
  const body = await c.req.json<BalanceUpdateRequest>();
  const id = c.req.param("id");

  const { success, message } = await updateBalanceService(id, body);

  if (success) {
    return c.json({ success, message });
  }

  return c.json({ success, message }, 400);
};
