import { z } from "zod";

export interface AddTaskForm {
  title: string;
  description: string;
  //   status: "In Progress" | "Done" | "To Do";
  status: STATUS_ENUM;
}

export enum STATUS_ENUM {
  IN_PROGRESS = "In Progress",
  TO_DO = "To Do",
  DONE = "Done",
}

export const schema = z.object({
  search: z.string(),
});

export type TScheme = z.infer<typeof schema>;
