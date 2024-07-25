import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { events } from "./events";

export const eventDates = sqliteTable("event_dates", {
  id: integer("id").primaryKey(),
  eventId: integer("event_id").references(() => events.id),
  beginDate: integer("begin_date", { mode: "timestamp" }).notNull(),
  endDate: integer("end_date", { mode: "timestamp" }).notNull(),
});
