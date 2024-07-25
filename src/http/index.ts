import Fastify from "fastify";
import { initServer } from "@ts-rest/fastify";
import { contract } from "./contract";
import { addTask, findTaskById } from "@/db";
import dayjs from "dayjs";

const app = Fastify();

const s = initServer();

const router = s.router(contract, {
  addTask: async ({ body }) => {
    const taskId = await addTask({
      title: body.title,
      description: body.description,
      notes: body.notes,
      date: dayjs(body.date).toDate(),
    });

    return {
      status: 201,
      body: {
        id: taskId,
      },
    };
  },
  findTaskById: async ({ params }) => {
    const task = await findTaskById(params.id);

    if (!task) return { status: 404, body: "Task not found" };

    return {
      status: 200,
      body: {
        title: task.title,
        description: task.description,
        notes: task.notes,
        date: dayjs(task.date).toISOString(),
      },
    };
  },
});

app.register(s.plugin(router));

export default app;
