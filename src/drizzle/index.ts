import "dotenv/config";
import { Pool } from "pg";

import { type NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";

import * as schema from "@/schemas";

if (
  !process.env.DB_NAME ||
  !process.env.DB_HOST ||
  !process.env.DB_USER ||
  !process.env.DB_PASS ||
  !process.env.DB_PORT
) {
  throw new Error("Missing database credentials!");
}

const pool = new Pool({
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
});

export const db: NodePgDatabase<typeof schema> = drizzle(pool, { schema });
