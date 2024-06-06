import { mysqlTable, uniqueIndex, varchar, int } from "drizzle-orm/mysql-core";

export const reviews = mysqlTable("countries", {
  id: varchar("id", { length: 36 }).primaryKey(),
  order_id: varchar("order_id", { length: 36 }),
  store_id: varchar("store_id", { length: 36 }),
  order_rating: int("order_rating"),
  order_comment: varchar("order_comment", { length: 500 }),
  delivery_rating: int("delivery_rating"),
  delivery_comment: varchar("delivery_comment", { length: 500 }),
});
