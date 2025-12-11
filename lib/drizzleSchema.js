import { pgTable, varchar, integer, serial, timestamp, uniqueIndex, text } from 'drizzle-orm/pg-core';

export const reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  stars: integer('stars').notNull(),
  review: varchar('review', { length: 2000 }).notNull(),
  created_at: timestamp('created_at', { mode: 'date', withTimezone: true }).defaultNow().notNull(),
}, (table) => {
  return {
    emailIdx: uniqueIndex('email_idx').on(table.email),
  };
});

export const registrations = pgTable('registrations', {
  id: serial('id').primaryKey(),
  restaurant_name: varchar('restaurant_name', { length: 255 }).notNull(),
  contact_person: varchar('contact_person', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  location: varchar('location', { length: 500 }).notNull(),
  business_type: varchar('business_type', { length: 100 }).notNull(),
  delivery_options: varchar('delivery_options', { length: 255 }).notNull(),
  message: text('message'),
  created_at: timestamp('created_at', { mode: 'date', withTimezone: true }).defaultNow().notNull(),
  status: varchar('status', { length: 50 }).default('pending').notNull(),
});
