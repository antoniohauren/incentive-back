import { relations } from "drizzle-orm";
import {
  decimal,
  numeric,
  pgTable,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import type { z } from "zod";
import { user } from "./user-schema";

export const balance = pgTable("balance", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  startMoney: decimal("start_money").notNull(),
  currentMoney: numeric("current_money").notNull(),
  userId: uuid("user_id").notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
});

export const balanceRelations = relations(balance, ({ one }) => ({
  user: one(user, {
    fields: [balance.userId],
    references: [user.id],
  }),
}));

export const selectBalanceSchema = createSelectSchema(balance);
export const insertBalanceSchema = createInsertSchema(balance);

export type SelectBalance = z.infer<typeof selectBalanceSchema>;
export type InsertBalance = z.infer<typeof insertBalanceSchema>;
