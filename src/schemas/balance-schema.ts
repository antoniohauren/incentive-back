import { sql } from "drizzle-orm";
import { decimal, numeric, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const balance = pgTable("balance", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  startMoney: decimal("start_money").notNull(),
  currentMoney: numeric("current_money").default(sql`start_money`).notNull(),
});
