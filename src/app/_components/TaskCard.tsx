import React from "react";
import { AddTaskForm } from "../utils/helpers";

export const TaskCard = ({
  title,
  description,
  status,
  id,
  onDeleteTask,
  onEditTask,
}: {
  id: string;
  title: string;
  description: string;
  status: AddTaskForm["status"] | string;
  dueDate: any;
  onDeleteTask: (id: string) => void;
  onEditTask: (id: string, val: AddTaskForm) => void;
}) => {
  return (
    <div className="mb-6 flex w-full flex-col gap-4 rounded-md border-[0.5px] border-neutral-500 bg-neutral-400 px-6 py-3 transition-all hover:bg-neutral-500">
      <div className="flex items-center justify-between">
        <h3 className="border-b-2 border-neutral-800 text-xl font-semibold text-neutral-800">
          {title}
        </h3>
        <button
          type="button"
          className={`rounded-md font-medium  ${status === "To Do" ? "  text-neutral-600" : status === "In Progress" ? "text-[#82f392]" : "   text-[#23d8de]"} cursor-default px-2 py-1`}
        >
          {status}
        </button>
      </div>
      <div className="w-3/4 text-base text-neutral-600">
        <p>{description}</p>
      </div>
      <div className="flex items-center justify-end">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() =>
              onEditTask(id, { title, status, description } as AddTaskForm)
            }
            className="  rounded-md border-[1px] border-breaker-bay-500 bg-breaker-bay-200 px-2 py-1 text-breaker-bay-500"
          >
            Edit
          </button>
          <button
            onClick={() => onDeleteTask(id)}
            type="button"
            className=" rounded-md border-[1px] border-red-500 bg-red-300 px-2 py-1 text-red-500"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
