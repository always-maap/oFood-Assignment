import { mysqlTable, varchar, int } from "drizzle-orm/mysql-core";

export const reviews = mysqlTable("reviews", {
  id: varchar("id", { length: 36 }).primaryKey(),
  order_id: varchar("order_id", { length: 36 }).notNull(),
  store_id: varchar("store_id", { length: 36 }).notNull(),
  order_rating: int("order_rating").notNull(),
  order_comment: varchar("order_comment", { length: 500 }),
  delivery_rating: int("delivery_rating").notNull(),
  delivery_comment: varchar("delivery_comment", { length: 500 }),
});
