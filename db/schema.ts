import {
  pgTable,
  pgEnum,
  serial,
  text,
  timestamp,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";

// Enums
export const statusEnum = pgEnum("status", [
  "suggested",
  "exploring",
  "building",
  "shipped",
  "archived",
]);

export const createdByTypeEnum = pgEnum("created_by_type", [
  "owner",
  "visitor",
]);

// Tables
export const boardItems = pgTable("board_items", {
  id: serial("id").primaryKey(),

  title: text("title").notNull(),
  description: text("description").notNull(),

  status: statusEnum("status").default("suggested").notNull(),

  createdByType: createdByTypeEnum("created_by_type")
    .default("visitor")
    .notNull(),

  creatorName: text("creator_name"),
  creatorEmail: text("creator_email"),

  demoUrl: text("demo_url"),
  githubUrl: text("github_url"),
  blogUrl: text("blog_url"),

  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),

  updatedAt: timestamp("updated_at", { mode: "date" }).defaultNow().notNull(),
});

export const votes = pgTable("votes", {
  id: serial("id").primaryKey(),

  boardItemId: integer("board_item_id")
    .references(() => boardItems.id, { onDelete: "cascade" })
    .notNull(),

  visitorId: text("visitor_id").notNull(),

  createdAt: timestamp("created_at", { mode: "date" }).defaultNow().notNull(),
});

export const labels = pgTable("labels", {
  id: serial("id").primaryKey(),

  name: text("name").notNull().unique(),
});

// Junction table
export const boardItemLabels = pgTable(
  "board_item_labels",
  {
    boardItemId: integer("board_item_id")
      .references(() => boardItems.id, { onDelete: "cascade" })
      .notNull(),

    labelId: integer("label_id")
      .references(() => labels.id, { onDelete: "cascade" })
      .notNull(),
  },
  (table) => ({
    pk: primaryKey({
      columns: [table.boardItemId, table.labelId],
    }),
  }),
);
