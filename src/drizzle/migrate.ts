import { type NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { Pool } from "pg";

async function main() {
  const pool = new Pool({ connectionString: process.env.DB_URL });
  const db: NodePgDatabase = drizzle(pool);

  console.log("Running migration...");

  await migrate(db, { migrationsFolder: "src/drizzle" });

  console.log("Migration success!");

  await pool.end();
}

main();
