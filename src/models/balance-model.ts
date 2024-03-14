import { insertBalanceSchema, selectBalanceSchema } from "@/schemas";
import type { z } from "zod";

export const balanceRequestSchema = insertBalanceSchema.pick({
  name: true,
  startMoney: true,
  description: true,
});

export const balanceResponseSchema = selectBalanceSchema;

export type BalanceRequest = z.infer<typeof balanceRequestSchema>;
export type BalanceResponse = z.infer<typeof balanceResponseSchema>;
export type BalanceListResponse = BalanceResponse[];
