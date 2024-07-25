import { integer, sqliteTable } from "drizzle-orm/sqlite-core";
import { events } from "./events";

export const eventTimes = sqliteTable("event_times", {
  id: integer("id").primaryKey(),
  eventId: integer("event_id").references(() => events.id),
  beginHour: integer("begin_hour").notNull(),
  endMinute: integer("end_minute").notNull(),
  duration: integer("duration").notNull(),
});
