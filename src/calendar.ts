export type CreateEntryInput = NonNullable<unknown>;

export const createCalendarService = () => {
  return {
    createEntry: (_input: CreateEntryInput) => {
      console.log(_input);
      throw new Error("Not implemented");
    },
  };
};
