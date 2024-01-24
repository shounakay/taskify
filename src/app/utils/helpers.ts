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

export const STATUSES = ["To Do", "In Progress", "Done"];

export const taskFormSchema = z.object({
  title: z.string().max(70, "Title can be only 70 characters long"),
  description: z
    .string()
    .max(200, "Description can be only 200 characters long")
    .min(5, "Provide a detailed description"),
  //   status: z.enum(["In Progress, To Do", "Done"]),
});

export type TTaskFromSchema = z.infer<typeof taskFormSchema>;

export const FILTERS = ["All", "In Progress", "To Do", "Done"];

export const signUpFormSchema = z.object({
  username: z.string().min(7, "Username has to be atleast 7 char long"),
  password: z.string().min(5, "Has to be atleast 5 characters"),
  confirmPassword: z.string(),
  name: z.string(),
});
