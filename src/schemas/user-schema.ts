import { pgTable, timestamp, uuid, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const user = pgTable("user", {
  id: uuid("id").defaultRandom().notNull().primaryKey(),
  name: varchar("name", { length: 256 }).notNull(),
  username: varchar("username", { length: 256 }).notNull().unique(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password_hash: varchar("password_hash", { length: 256 }).notNull(),
  salt: varchar("salt", { length: 100 }).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
});

export const selectUserSchema = createSelectSchema(user);
export const insertUserSchema = createInsertSchema(user);

export type SelectUser = z.infer<typeof selectUserSchema>;
export type InsertUser = z.infer<typeof insertUserSchema>;

export const userRequestSchema = insertUserSchema
  .omit({
    password_hash: true,
    salt: true,
  })
  .extend({
    password: z.string().min(8),
    email: z.string().email(),
  });
export const userResponseSchema = selectUserSchema.omit({
  password_hash: true,
  salt: true,
});

export type UserRequest = z.infer<typeof userRequestSchema>;
export type userResponse = z.infer<typeof userResponseSchema>;
