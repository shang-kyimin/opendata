import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { z } from "zod";

export const firstNamesTable = sqliteTable("first_names", {
  id: integer("id").primaryKey(),
  firstName: text("first_name").notNull(),
  gender: text("gender", { enum: ["male, female"] }).notNull(),
});

export const familyNamesTable = sqliteTable("family_names", {
  id: integer("id").primaryKey(),
  familyName: text("family_name").notNull(),
});

export const professionalsTable = sqliteTable("professionals", {
  id: integer("id").primaryKey(),
  professional: text("professional").notNull().default("Jobless"),
});

export const usernamesTable = sqliteTable("usernames", {
  id: integer("id").primaryKey(),
  firstNameId: integer("first_name_id").notNull().references(() => firstNamesTable.id),
  familyNameId: integer("family_name_id").notNull().references(() => familyNamesTable.id),
  birthdate: text("birthdate"),
  professional: text("professional").notNull().references(() => professionalsTable.id),
  createdAt: text("created_at").notNull().default(sql`(CURRENT_TIMESTAMP)`),
});

// First Name
export const InsertFirstNameSchema = createInsertSchema(firstNamesTable);
export const SelectFirstNameSchema = createSelectSchema(firstNamesTable);

export type InsertFirstName = typeof firstNamesTable.$inferInsert;
export type SelectFirstName = typeof firstNamesTable.$inferSelect;

// Family Name
export const InsertFamilyNameSchema = createInsertSchema(familyNamesTable);
export const SelectFamilyNameSchema = createSelectSchema(familyNamesTable);

export type InsertFamilyName = typeof familyNamesTable.$inferInsert;
export type SelectFamilyName = typeof familyNamesTable.$inferSelect;

// Professionals
export const InsertProfessionalSchema = createInsertSchema(professionalsTable);
export const SelectProfessionalSchema = createSelectSchema(professionalsTable);

export type InsertProfessional = typeof professionalsTable.$inferInsert;
export type SelectProfessional = typeof professionalsTable.$inferSelect;

// Username
export const InsertUsernameSchema = createInsertSchema(usernamesTable);
export const SelectUsernameSchema = createSelectSchema(usernamesTable);

export type InsertUsername = typeof usernamesTable.$inferInsert;
export type SelectUsername = typeof usernamesTable.$inferSelect;


export const messagesTable = sqliteTable("messages", {
  id: integer("id").primaryKey(),
  anonymous: text("anonymous").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull().default(sql`(CURRENT_TIMESTAMP)`),
});

// Messages
export const InsertMessageSchema = createInsertSchema(messagesTable);
export const SelectMessageSchema = createSelectSchema(messagesTable);

export type InsertMessage = typeof messagesTable.$inferInsert;
export type SelectMessage = typeof messagesTable.$inferSelect;


export const countsTable = sqliteTable("counts", {
  id: integer("id").primaryKey(),
  tableName: text("table_name", { enum: ["first_names", "family_names", "professionals", "usernames", "messages"] }).notNull(),
  count: integer("count").notNull().default(0),
});

// Counts
export const InsertCountSchema = createInsertSchema(countsTable);
export const SelectCountSchema = createSelectSchema(countsTable);

export type InsertCount = typeof countsTable.$inferInsert;
export type SelectCount = typeof countsTable.$inferSelect;


// Tables
export const Table = {
  "first_names": 1,
  "family_names": 2,
  "professionals": 3,
  "usernames": 4,
  "messages": 5,
};


