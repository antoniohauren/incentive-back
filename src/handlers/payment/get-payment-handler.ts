import { getPaymentService } from "@/services/payment/get-payment-service";
import type { Handler } from "hono";

export const getPaymentHandler: Handler = async (c) => {
  const id = c.req.param("id");

  const { success, data, message } = await getPaymentService(id);

  if (success) {
    return c.json({ success, data });
  }

  return c.json({ success, message }, 400);
};
