import { insertPaymentSchema } from "@/schemas";
import type { z } from "zod";

export const paymentRequestSchema = insertPaymentSchema.pick({
  name: true,
  description: true,
  balanceId: true,
  value: true,
});

export type PaymentRequest = z.infer<typeof paymentRequestSchema>;
