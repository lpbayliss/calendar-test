import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

export const greeting = () => {
  return "Hello, World!";
};

const createEntryRepository = () => {
  const db = drizzle(
    createClient({
      url: "DATABASE_URL",
      authToken: "DATABASE_AUTH_TOKEN",
    })
  );

  return {};
};

export type CreateEntryInput = {} | any;

export const createCalendarService = () => {
  return {
    createEntry: (_input: CreateEntryInput) => {
      console.log(_input);
      throw new Error("Not implemented");
    },
  };
};
