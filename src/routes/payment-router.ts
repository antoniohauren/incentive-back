import {
  deletePaymentHandler,
  getPaymentListHandler,
} from "@/handlers/payment";
import { createPaymentHandler } from "@/handlers/payment/create-payment-handler";
import { getPaymentHandler } from "@/handlers/payment/get-payment-handler";
import { updatePaymentHandler } from "@/handlers/payment/update-payment-handler";
import {
  paymentRequestSchema,
  paymentUpdateSchema,
} from "@/models/payment-model";
import { validator } from "@/utils/schema-validator";
import { Hono } from "hono";

const paymentRouter = new Hono();

paymentRouter.post(
  "create",
  validator(paymentRequestSchema),
  createPaymentHandler,
);
paymentRouter.get("/:id", getPaymentHandler);
paymentRouter.get("/", getPaymentListHandler);
paymentRouter.patch(
  "/:id",
  validator(paymentUpdateSchema),
  updatePaymentHandler,
);
paymentRouter.delete("/:id", deletePaymentHandler);

export { paymentRouter };
