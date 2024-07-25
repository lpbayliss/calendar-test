import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { events } from "./events";

export const eventRecurrence = sqliteTable("event_recurrences", {
  id: integer("id").primaryKey(),
  eventId: integer("event_id").references(() => events.id),
  recurrence: text("recurrence", {
    enum: ["daily", "weekly", "monthly", "annually"],
  }),
  recurrenceStep: integer("recurrence_step"),
  recurMonthlyOn: text("recur_monthly_on", {
    enum: ["day_of_week", "day_of_month"],
  }),
  recurUntil: text("recur_until", {
    enum: ["recur_until_count", "recur_until_date", "recur_forever"],
  }),
  recurUntilDate: integer("recur_until_date", { mode: "timestamp" }),
  recurUntilCount: integer("recur_until_count"),
  recurrenceCompleteAt: integer("recurrence_complete_at", {
    mode: "timestamp",
  }),
});
