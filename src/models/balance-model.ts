import { insertBalanceSchema, selectBalanceSchema } from "@/schemas";
import type { z } from "zod";

export const balanceRequestSchema = insertBalanceSchema.pick({
  name: true,
  startMoney: true,
  description: true,
});

export const balanceResponseSchema = selectBalanceSchema;

export const balanceUpdateSchema = insertBalanceSchema
  .pick({
    name: true,
    description: true,
  })
  .partial();

export type BalanceRequest = z.infer<typeof balanceRequestSchema>;
export type BalanceResponse = z.infer<typeof balanceResponseSchema>;
export type BalanceListResponse = BalanceResponse[];
export type BalanceUpdateRequest = z.infer<typeof balanceUpdateSchema>;
