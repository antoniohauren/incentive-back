import type { BalanceRequest } from "@/models/balance-model";
import { createBalanceService } from "@/services/balance";
import type { JwtPayload } from "@/utils/types";
import type { Handler } from "hono";

export const createBalanceHandler: Handler = async (c) => {
  const body = await c.req.json<BalanceRequest>();
  const user: JwtPayload = c.get("jwtPayload");

  const { success, message } = await createBalanceService(body, user.id);

  if (success) {
    return c.json({ success, message }, 201);
  }

  return c.json({ success, message }, 400);
};
