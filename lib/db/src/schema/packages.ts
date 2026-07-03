import { sql } from "drizzle-orm";
import {
  boolean,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
} from "drizzle-orm/pg-core";

export const packagesTable = pgTable("packages", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  slug: text("slug").notNull().unique(),
  tier: text("tier").notNull(),
  duration: text("duration").notNull(),
  title: text("title").notNull(),
  hotelMecca: text("hotel_mecca").notNull(),
  hotelMadinah: text("hotel_madinah").notNull(),
  flightType: text("flight_type").notNull().default("Direct"),
  landing: text("landing").notNull().default("Jeddah"),
  tags: text("tags").array().notNull().default(sql`'{}'::text[]`),
  priceFrom: integer("price_from").notNull(),
  posterUrl: text("poster_url"),
  featured: boolean("featured").notNull().default(false),
  isActive: boolean("is_active").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export const departuresTable = pgTable("departures", {
  id: uuid("id").primaryKey().default(sql`gen_random_uuid()`),
  packageId: uuid("package_id")
    .notNull()
    .references(() => packagesTable.id, { onDelete: "cascade" }),
  dateLabel: text("date_label").notNull(),
  quotaLabel: text("quota_label")
    .notNull()
    .default("Hubungi untuk sisa seat"),
  isActive: boolean("is_active").notNull().default(true),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true })
    .notNull()
    .defaultNow(),
});

export type InsertPackage = typeof packagesTable.$inferInsert;
export type SelectPackage = typeof packagesTable.$inferSelect;
export type InsertDeparture = typeof departuresTable.$inferInsert;
export type SelectDeparture = typeof departuresTable.$inferSelect;
