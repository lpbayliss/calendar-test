import { initContract } from "@ts-rest/core";
import z from "zod";

const c = initContract();

export const contract = c.router({
  addTask: {
    method: "POST",
    path: "/api/tasks",
    body: z.object({
      title: z.string(),
      description: z.string().optional(),
      notes: z.string().optional(),
      date: z.string().datetime(),
    }),
    responses: {
      201: z.object({
        id: z.number(),
      }),
    },
    summary: "Create a new task",
  },
  findTaskById: {
    method: "GET",
    path: "/api/tasks/:id",
    pathParams: z.object({
      id: z.coerce.number(),
    }),
    responses: {
      200: z.object({
        title: z.string(),
        description: z.string().nullable(),
        notes: z.string().nullable(),
        date: z.string().datetime(),
      }),
      404: z.literal("Task not found"),
    },
    summary: "Get a task by id",
  },
});
