import {
  deletePaymentHandler,
  getPaymentListHandler,
} from "@/handlers/payment";
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
paymentRouter.get("/", getPaymentListHandler);
paymentRouter.delete("/:id", deletePaymentHandler);

export { paymentRouter };
