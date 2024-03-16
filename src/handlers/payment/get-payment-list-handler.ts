import { getPaymentListService } from "@/services/payment";
import type { Handler } from "hono";

export const getPaymentListHandler: Handler = async (c) => {
  const { success, data, message } = await getPaymentListService();

  if (success) {
    return c.json({ success, data });
  }

  return c.json({ success, message }, 400);
};
