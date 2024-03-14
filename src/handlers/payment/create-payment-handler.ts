import type { PaymentRequest } from "@/models/payment-model";
import { createPaymentService } from "@/services/payment/create-payment-service";
import type { Handler } from "hono";

export const createPaymentHandler: Handler = async (c) => {
  const body = await c.req.json<PaymentRequest>();

  const { success, message } = await createPaymentService(body);

  if (success) {
    return c.json({ success, message }, 201);
  }

  return c.json({ success, message }, 400);
};
