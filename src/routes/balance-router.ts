import {
  createBalanceHandler,
  getBalanceHandler,
  getBalanceListHandler,
  updateBalanceHandler,
} from "@/handlers/balance";
import { deleteBalanceHandler } from "@/handlers/balance/delete-balance-handler";
import {
  balanceRequestSchema,
  balanceUpdateSchema,
} from "@/models/balance-model";
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
balanceRouter.patch(
  "/:id",
  validator(balanceUpdateSchema),
  updateBalanceHandler,
);
balanceRouter.delete("/:id", deleteBalanceHandler);

export { balanceRouter };
