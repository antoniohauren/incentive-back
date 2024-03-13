import "dotenv/config";

import { Config } from "drizzle-kit";

export default {
  schema: "./src/schemas/index.ts",
  out: "./src/drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString: String(process.env.DB_URL),
  },
  verbose: true,
  strict: true,
} satisfies Config;
