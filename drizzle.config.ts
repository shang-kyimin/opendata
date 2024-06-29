import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  dialect: "sqlite",
  schema: "./db/schema.ts",
  driver: "turso",
  dbCredentials: {
    url: process.env.DB_CONNECTION_URL!,
    authToken: process.env.DB_AUTH_TOKEN!,
  },
  verbose: true,
  strict: true,
});


