import { describe, expect, test, beforeEach } from "vitest";
import { createCalendarService, CreateEntryInput, greeting } from ".";
import dayjs from "dayjs";

describe("greeting", () => {
  test("returns 'Hello, World!'", () => {
    expect(greeting()).toBe("Hello, World!");
  });
});

describe("When creating an entry", () => {
  let calendarService: ReturnType<typeof createCalendarService>;
  let entryInput: CreateEntryInput;

  beforeEach(() => {
    calendarService = createCalendarService();
    entryInput = {};
  });

  describe("And it is an event", () => {
    beforeEach(() => {
      entryInput.type = "event";
    });

    describe("And it is during a single day", () => {
      describe("And it is a one off", () => {
        describe("And it is in the past", () => {
          beforeEach(() => {
            entryInput.startTime = dayjs()
              .startOf("day")
              .add(9, "hour")
              .subtract(1, "week")
              .toDate();
            entryInput.endTime = dayjs()
              .startOf("day")
              .add(10, "hour")
              .subtract(1, "week")
              .toDate();
          });

          test("Should ...", () => {
            expect(calendarService.createEntry(entryInput)).not.toThrow();
          });
        });

        describe("And it is today", () => {
          beforeEach(() => {
            entryInput.startTime = dayjs()
              .startOf("day")
              .add(9, "hour")
              .toDate();
            entryInput.endTime = dayjs()
              .startOf("day")
              .add(10, "hour")
              .toDate();
          });

          test("Should ...", () => {
            expect(calendarService.createEntry(entryInput)).not.toThrow();
          });
        });

        describe("And it is tomorrow", () => {
          beforeEach(() => {
            entryInput.startTime = dayjs()
              .startOf("day")
              .add(1, "day")
              .add(9, "hour")
              .toDate();
            entryInput.endTime = dayjs()
              .startOf("day")
              .add(1, "day")
              .add(10, "hour")
              .toDate();
          });

          test("Should ...", () => {
            expect(calendarService.createEntry(entryInput)).not.toThrow();
          });
        });

        describe("And it is later this week", () => {
          beforeEach(() => {
            entryInput.startTime = dayjs()
              .startOf("day")
              .add(3, "day")
              .add(9, "hour")
              .toDate();
            entryInput.endTime = dayjs()
              .startOf("day")
              .add(3, "day")
              .add(10, "hour")
              .toDate();
          });

          test("Should ...", () => {
            expect(calendarService.createEntry(entryInput)).not.toThrow();
          });
        });

        describe("And it is next week", () => {
          beforeEach(() => {
            entryInput.startTime = dayjs()
              .startOf("day")
              .add(1, "week")
              .add(1, "day")
              .add(9, "hour")
              .toDate();
            entryInput.endTime = dayjs()
              .startOf("day")
              .add(1, "week")
              .add(1, "day")
              .add(10, "hour")
              .toDate();
          });

          test("Should ...", () => {
            expect(calendarService.createEntry(entryInput)).not.toThrow();
          });
        });

        describe("And it is next month", () => {
          beforeEach(() => {
            entryInput.startTime = dayjs()
              .startOf("day")
              .add(1, "day")
              .add(1, "month")
              .add(9, "hour")
              .toDate();
            entryInput.endTime = dayjs()
              .startOf("day")
              .add(1, "day")
              .add(1, "month")
              .add(10, "hour")
              .toDate();
          });

          test("Should ...", () => {
            expect(calendarService.createEntry(entryInput)).not.toThrow();
          });
        });

        describe("And it is next year", () => {
          beforeEach(() => {
            entryInput.startTime = dayjs()
              .startOf("day")
              .add(1, "day")
              .add(1, "year")
              .add(9, "hour")
              .toDate();
            entryInput.endTime = dayjs()
              .startOf("day")
              .add(1, "day")
              .add(1, "year")
              .add(10, "hour")
              .toDate();
          });

          test("Should ...", () => {
            expect(calendarService.createEntry(entryInput)).not.toThrow();
          });
        });
      });

      describe.skip("And it is repeating", () => {
        describe("And it is with a start date", () => {
          describe("And it is daily", () => {});
          describe("And it is weekly", () => {});
          describe("And it is monthly", () => {});
          describe("And it is yearly", () => {});
        });

        describe("And it is without a start date", () => {
          describe("And it is daily", () => {});
          describe("And it is weekly", () => {});
          describe("And it is monthly", () => {});
          describe("And it is yearly", () => {});
        });
      });
    });

    describe.skip("When it is overnight", () => {
      describe("And it is a one off", () => {
        describe("And it is in the past", () => {});
        describe("And it is today", () => {});
        describe("And it is tomorrow", () => {});
        describe("And it is later this week", () => {});
        describe("And it is next week", () => {});
        describe("And it is next month", () => {});
        describe("And it is next year", () => {});
      });

      describe("And it is repeating", () => {
        describe("And it is with a start date", () => {
          describe("And it is daily", () => {});
          describe("And it is weekly", () => {});
          describe("And it is monthly", () => {});
          describe("And it is yearly", () => {});
        });

        describe("And it is without a start date", () => {
          describe("And it is daily", () => {});
          describe("And it is weekly", () => {});
          describe("And it is monthly", () => {});
          describe("And it is yearly", () => {});
        });
      });
    });

    describe.skip("When it is for a whole day", () => {
      describe("And it is a one off", () => {
        describe("And it is in the past", () => {});
        describe("And it is today", () => {});
        describe("And it is tomorrow", () => {});
        describe("And it is later this week", () => {});
        describe("And it is next week", () => {});
        describe("And it is next month", () => {});
        describe("And it is next year", () => {});
      });

      describe("And it is repeating", () => {
        describe("And it is with a start date", () => {
          describe("And it is daily", () => {});
          describe("And it is weekly", () => {});
          describe("And it is monthly", () => {});
          describe("And it is yearly", () => {});
        });

        describe("And it is without a start date", () => {
          describe("And it is daily", () => {});
          describe("And it is weekly", () => {});
          describe("And it is monthly", () => {});
          describe("And it is yearly", () => {});
        });
      });
    });

    describe.skip("When it is for multiple days", () => {
      describe("And it is a one off", () => {
        describe("And it is in the past", () => {});
        describe("And it is today", () => {});
        describe("And it is tomorrow", () => {});
        describe("And it is later this week", () => {});
        describe("And it is next week", () => {});
        describe("And it is next month", () => {});
        describe("And it is next year", () => {});
      });

      describe("And it is repeating", () => {
        describe("And it is with a start date", () => {
          describe("And it is daily", () => {});
          describe("And it is weekly", () => {});
          describe("And it is monthly", () => {});
          describe("And it is yearly", () => {});
        });

        describe("And it is without a start date", () => {
          describe("And it is daily", () => {});
          describe("And it is weekly", () => {});
          describe("And it is monthly", () => {});
          describe("And it is yearly", () => {});
        });
      });
    });

    describe.skip("When it is for multiple whole days", () => {
      describe("And it is a one off", () => {
        describe("And it is in the past", () => {});
        describe("And it is today", () => {});
        describe("And it is tomorrow", () => {});
        describe("And it is later this week", () => {});
        describe("And it is next week", () => {});
        describe("And it is next month", () => {});
        describe("And it is next year", () => {});
      });

      describe("And it is repeating", () => {
        describe("And it is with a start date", () => {
          describe("And it is daily", () => {});
          describe("And it is weekly", () => {});
          describe("And it is monthly", () => {});
          describe("And it is yearly", () => {});
        });

        describe("And it is without a start date", () => {
          describe("And it is daily", () => {});
          describe("And it is weekly", () => {});
          describe("And it is monthly", () => {});
          describe("And it is yearly", () => {});
        });
      });
    });
  });

  describe.skip("And it is a task", () => {
    describe("And it is without reminders", () => {
      describe("And it is a one off", () => {
        describe("And it is in the past", () => {});
        describe("And it is today", () => {});
        describe("And it is tomorrow", () => {});
        describe("And it is later this week", () => {});
        describe("And it is next week", () => {});
        describe("And it is next month", () => {});
        describe("And it is next year", () => {});
      });

      describe("And it is repeating", () => {
        describe("And it is with a start date", () => {
          describe("And it is daily", () => {});
          describe("And it is weekly", () => {});
          describe("And it is monthly", () => {});
          describe("And it is yearly", () => {});
        });

        describe("And it is without a start date", () => {
          describe("And it is daily", () => {});
          describe("And it is weekly", () => {});
          describe("And it is monthly", () => {});
          describe("And it is yearly", () => {});
        });
      });
    });

    describe("With reminders", () => {
      describe("One reminder", () => {
        describe("One off", () => {
          describe("In the past", () => {});
          describe("Today", () => {});
          describe("Tomorrow", () => {});
          describe("Later this week", () => {});
          describe("Next week", () => {});
          describe("Next month", () => {});
          describe("Next year", () => {});
        });

        describe("Repeating", () => {
          describe("With start date", () => {
            describe("Daily", () => {});
            describe("Weekly", () => {});
            describe("Monthly", () => {});
            describe("Yearly", () => {});
          });

          describe("Without start date", () => {
            describe("Daily", () => {});
            describe("Weekly", () => {});
            describe("Monthly", () => {});
            describe("Yearly", () => {});
          });
        });
      });

      describe("Many reminders", () => {
        describe("One off", () => {
          describe("In the past", () => {});
          describe("Today", () => {});
          describe("Tomorrow", () => {});
          describe("Later this week", () => {});
          describe("Next week", () => {});
          describe("Next month", () => {});
          describe("Next year", () => {});
        });

        describe("Repeating", () => {
          describe("With start date", () => {
            describe("Daily", () => {});
            describe("Weekly", () => {});
            describe("Monthly", () => {});
            describe("Yearly", () => {});
          });

          describe("Without start date", () => {
            describe("Daily", () => {});
            describe("Weekly", () => {});
            describe("Monthly", () => {});
            describe("Yearly", () => {});
          });
        });
      });
    });
  });
});
