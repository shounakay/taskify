import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const taskRouter = createTRPCRouter({
  getUserTasks: protectedProcedure
    .input(z.object({ searchText: z.string(), filter: z.string() }))
    .query(async ({ ctx, input }) => {
      const session = ctx.session;
      const { searchText, filter } = input;
      const tasks = await ctx.db.task.findMany({
        where: {
          ...(filter && { status: filter }),
          userId: session.user.id,
          ...(searchText && {
            OR: [
              { title: { contains: searchText, mode: "insensitive" } },
              { description: { contains: searchText, mode: "insensitive" } },
            ],
          }),
        },
      });
      return tasks;
    }),
  createTask: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        status: z.enum(["To Do", "In Progress", "Done"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { title, description, status } = input;
      const session = ctx.session;
      const task = await ctx.db.task.create({
        data: {
          title,
          description,
          status,
          userId: session.user.id,
        },
      });
      return task;
    }),
  updateTask: protectedProcedure
    .input(
      z.object({
        taskId: z.string(),
        title: z.string(),
        description: z.string(),
        status: z.enum(["In Progress", "To Do", "Done"]),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { session, db } = ctx;
      const { taskId, status, title, description } = input;
      const task = await db.task.update({
        where: {
          id: taskId,
          userId: session.user.id,
        },
        data: {
          title,
          description,
          status,
          // dueDate
        },
      });
      return task;
    }),
  deleteTask: protectedProcedure
    .input(z.object({ taskId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { session, db } = ctx;
      const { taskId } = input;
      const task = await db.task.delete({ where: { id: taskId } });
      return task;
    }),
});
