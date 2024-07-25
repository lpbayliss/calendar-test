import { integer, primaryKey, sqliteTable } from "drizzle-orm/sqlite-core";
import { users } from "./users";
import { events } from "./events";
import { relations } from "drizzle-orm";

export const eventsOnUsers = sqliteTable(
  "events_on_users",
  {
    eventId: integer("event_id")
      .notNull()
      .references(() => events.id),
    userId: integer("user_id")
      .notNull()
      .references(() => users.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.eventId] }),
  })
);

export const eventsOnUsersRelations = relations(eventsOnUsers, ({ one }) => ({
  events: one(events, {
    fields: [eventsOnUsers.eventId],
    references: [events.id],
  }),
  users: one(users, {
    fields: [eventsOnUsers.userId],
    references: [users.id],
  }),
}));
