import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

import * as reviews from "./reviews.schema.js";

let connection = await mysql.createConnection({
  host: process.env.MYSQL_HOST!,
  password: process.env.MYSQL_PASSWORD!,
  user: process.env.MYSQL_USERNAME!,
  database: process.env.MYSQL_DATABASE!,
});

export const db = drizzle(connection!, { schema: { ...reviews }, mode: "default" });
