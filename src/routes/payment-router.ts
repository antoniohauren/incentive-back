import { createPaymentHandler } from "@/handlers/payment/create-payment-handler";
import { paymentRequestSchema } from "@/models/payment-model";
import { validator } from "@/utils/schema-validator";
import { Hono } from "hono";

const paymentRouter = new Hono();

paymentRouter.post(
  "create",
  validator(paymentRequestSchema),
  createPaymentHandler,
);

export { paymentRouter };
