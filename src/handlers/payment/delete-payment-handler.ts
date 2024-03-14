import { deletePaymentService } from "@/services/payment";
import type { Handler } from "hono";

export const deletePaymentHandler: Handler = async (c) => {
  const id = c.req.param("id");

  const { success, message } = await deletePaymentService(id);

  if (success) {
    return c.json({ success, message });
  }

  return c.json({ success, message }, 400);
};
