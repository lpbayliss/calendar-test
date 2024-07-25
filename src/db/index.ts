import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
import * as schema from "@/db/schema/index";
import { and, eq } from "drizzle-orm";
import dayjs from "dayjs";

const client = createClient({
  url: "file:local.db",
});
const db = drizzle(client, { schema });

export const addTask = async (input: {
  title: string;
  description?: string;
  notes?: string;
  date: Date;
}) => {
  const taskId = await db.transaction(async (tx) => {
    const taskEvent = await tx
      .insert(schema.events)
      .values({
        title: input.title,
        description: input.description,
        notes: input.notes,
        timezone: "Australia/Melbourne",
        isTask: true,
      })
      .returning({ insertedId: schema.events.id });

    const taskDate = dayjs(input.date).startOf("day").toDate();

    await tx
      .insert(schema.eventDates)
      .values({
        eventId: taskEvent[0].insertedId,
        beginDate: taskDate,
        endDate: taskDate,
      })
      .returning({ insertedId: schema.events.id });

    return taskEvent[0].insertedId;
  });

  return taskId;
};

export const findTaskById = async (id: number) => {
  const tasks = await db
    .select({
      title: schema.events.title,
      description: schema.events.description,
      notes: schema.events.notes,
      date: schema.eventDates.beginDate,
    })
    .from(schema.events)
    .innerJoin(
      schema.eventDates,
      eq(schema.events.id, schema.eventDates.eventId)
    )
    .where(and(eq(schema.events.isTask, true), eq(schema.events.id, id)))
    .limit(1);
  if (tasks.length === 0) return null;
  return tasks[0];
};

export default db;
