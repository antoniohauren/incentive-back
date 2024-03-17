import type { PaymentUpdateRequest } from "@/models/payment-model";
import { updatePaymentService } from "@/services/payment/update-payment-service";
import type { Handler } from "hono";

export const updatePaymentHandler: Handler = async (c) => {
  const body = await c.req.json<PaymentUpdateRequest>();
  const id = c.req.param("id");

  const { success, message } = await updatePaymentService(id, body);

  if (success) {
    return c.json({ success, message });
  }

  return c.json({ success, message }, 400);
};
