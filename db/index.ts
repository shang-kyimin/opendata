import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";

export const client = createClient({
  url: process.env.DB_CONNECTION_URL!,
  authToken: process.env.DB_AUTH_TOKEN!,
});

export const db = drizzle(client);


