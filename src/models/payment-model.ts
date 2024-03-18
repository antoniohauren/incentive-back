import { insertPaymentSchema, selectPaymentSchema } from "@/schemas";
import { z } from "zod";

export const paymentRequestSchema = insertPaymentSchema
  .pick({
    name: true,
    description: true,
    balanceId: true,
  })
  .extend({
    value: z.number().positive(),
  });

export const paymentResponseSchema = selectPaymentSchema;

export const paymentUpdateSchema = insertPaymentSchema.partial().pick({
  name: true,
  description: true,
});

export type PaymentRequest = z.infer<typeof paymentRequestSchema>;
export type PaymentResponse = z.infer<typeof paymentResponseSchema>;
export type PaymentListResponse = PaymentResponse[];
export type PaymentUpdateRequest = z.infer<typeof paymentUpdateSchema>;
