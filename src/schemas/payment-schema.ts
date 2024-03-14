import { relations } from "drizzle-orm";
import {
  doublePrecision,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";
import { balance } from "./balance-schema";

export const payment = pgTable("payment", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  value: doublePrecision("value").notNull(),
  balanceId: uuid("balance_id").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const paymentRelations = relations(payment, ({ one }) => ({
  balance: one(balance, {
    fields: [payment.balanceId],
    references: [balance.id],
  }),
}));

export const selectPaymentSchema = createSelectSchema(payment);
export const insertPaymentSchema = createInsertSchema(payment);

export type SelectPayment = z.infer<typeof selectPaymentSchema>;
export type InsertPayment = z.infer<typeof insertPaymentSchema>;
