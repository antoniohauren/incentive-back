import { relations } from "drizzle-orm";
import {
  doublePrecision,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";
import { payment, selectPaymentSchema } from "./payment-schema";
import { user } from "./user-schema";

export const balance = pgTable("balance", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  startMoney: doublePrecision("start_money").notNull(),
  currentMoney: doublePrecision("current_money").notNull(),
  userId: uuid("user_id").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
});

export const balanceRelations = relations(balance, ({ one, many }) => ({
  user: one(user, {
    fields: [balance.userId],
    references: [user.id],
  }),
  payments: many(payment),
}));

export const selectBalanceSchema = createSelectSchema(balance);
export const insertBalanceSchema = createInsertSchema(balance);
export const updateBalanceSchema = insertBalanceSchema.partial().pick({
  name: true,
  description: true,
});
export const selectBalanceWithPaymentsSchema = selectBalanceSchema.extend({
  payments: z.array(selectPaymentSchema),
});

export type SelectBalance = z.infer<typeof selectBalanceSchema>;
export type InsertBalance = z.infer<typeof insertBalanceSchema>;
export type UpdateBalance = z.infer<typeof updateBalanceSchema>;
export type SelectBalanceWithPayments = z.infer<
  typeof selectBalanceWithPaymentsSchema
>;
