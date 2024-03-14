import { decimal, numeric, pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";

export const balance = pgTable("balance", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  startMoney: decimal("start_money").notNull(),
  currentMoney: numeric("current_money").notNull(),
});

export const selectBalanceSchema = createSelectSchema(balance);
export const insertBalanceSchema = createInsertSchema(balance);

export type SelectBalance = z.infer<typeof selectBalanceSchema>;
export type InsertBalance = z.infer<typeof insertBalanceSchema>;
