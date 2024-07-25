import { relations } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { eventsOnUsers } from "./events-on-users";
import { eventDates } from "./event-dates";
import { eventTimes } from "./event-times";
import { eventRecurrence } from "./event-recurrence";

export const events = sqliteTable("events", {
  id: integer("id").primaryKey(),
  title: text("title").notNull(),
  description: text("description"),
  notes: text("notes"),
  timezone: text("timezone").notNull(),
  isTask: integer("is_task", { mode: "boolean" }).notNull(),
  deletedAt: integer("deleted_at", { mode: "timestamp" }),
});

export const eventsRelations = relations(events, ({ many, one }) => ({
  date: one(eventDates, {
    fields: [events.id],
    references: [eventDates.eventId],
  }),
  time: one(eventTimes, {
    fields: [events.id],
    references: [eventTimes.eventId],
  }),
  recurrence: one(eventRecurrence, {
    fields: [events.id],
    references: [eventRecurrence.eventId],
  }),
  users: many(eventsOnUsers),
}));
