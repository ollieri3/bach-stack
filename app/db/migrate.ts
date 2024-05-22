import { resolve } from "path";
import { fileURLToPath } from "url";

import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

import * as schema from "./schema";

const client = new pg.Client({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

console.log("Running migrations...");

client.connect();

const db = drizzle(client, { schema });

const migrationsPath = resolve(
  fileURLToPath(import.meta.url),
  "../../../drizzle",
);

// This will run migrations on the database, skipping the ones already applied
await migrate(db, { migrationsFolder: migrationsPath });

// Don't forget to close the connection, otherwise the script will hang
await client.end();

console.log("Done!");
