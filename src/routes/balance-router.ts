import {
  createBalanceHandler,
  getBalanceHandler,
  getBalanceListHandler,
} from "@/handlers/balance";
import { balanceRequestSchema } from "@/models/balance-model";
import { validator } from "@/utils/schema-validator";
import { Hono } from "hono";

const balanceRouter = new Hono();

balanceRouter.post(
  "/create",
  validator(balanceRequestSchema),
  createBalanceHandler,
);

balanceRouter.get("/:id", getBalanceHandler);
balanceRouter.get("/", getBalanceListHandler);

export { balanceRouter };
