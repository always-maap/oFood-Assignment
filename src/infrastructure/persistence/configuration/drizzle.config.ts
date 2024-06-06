import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/infrastructure/persistence/configuration/*.schema.ts",
  out: "./src/infrastructure/persistence/migration",
  dialect: "mysql",
  dbCredentials: {
    host: process.env.MYSQL_HOST!,
    password: process.env.MYSQL_PASSWORD!,
    user: process.env.MYSQL_USERNAME!,
    database: process.env.MYSQL_DATABASE!,
  },
});
