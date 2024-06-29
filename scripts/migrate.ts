import { createClient } from "@libsql/client";
import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import { migrate } from "drizzle-orm/libsql/migrator";

config({ path: ".env.local" });

const client = createClient({
  url: process.env.DB_CONNECTION_URL!,
  authToken: process.env.DB_AUTH_TOKEN!,
});

const db = drizzle(client);

const main = async () => {
  try {
    await migrate(db, { migrationsFolder: "migrations" });
  } catch (error) {
    console.log("Error during migration:", error);
    process.exit(1);
  }
};

main();


