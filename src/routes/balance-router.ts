import { createBalanceHandler } from "@/handlers/balance";
import { balanceRequestSchema } from "@/models/balance-model";
import { validator } from "@/utils/schema-validator";
import { Hono } from "hono";

const balanceRouter = new Hono();

balanceRouter.post(
  "/create",
  validator(balanceRequestSchema),
  createBalanceHandler,
);

export { balanceRouter };
