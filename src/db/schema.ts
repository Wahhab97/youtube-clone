import { pgTable, text, timestamp, uniqueIndex, uuid } from "drizzle-orm/pg-core";

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  clerkId: text().unique().notNull(),
  name: text("name").notNull(),
  // TODO: Add banner field
  imageUrl: text("image_url").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
}, (t) => [uniqueIndex("clerk_id_inx").on(t.clerkId)]);