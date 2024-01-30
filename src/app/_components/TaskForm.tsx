"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SelectMenu } from "./SelectMenu";
import {
  AddTaskForm,
  STATUSES,
  TTaskFromSchema,
  taskFormSchema,
} from "../utils/helpers";

export const TaskForm = ({
  formVals,
  setIsModalOpen,
  clearFormVals,
  handleCreateTask,
}: {
  formVals: AddTaskForm;
  handleCreateTask: (val: AddTaskForm) => void;
  clearFormVals: () => void;
  setIsModalOpen: (val: boolean) => void;
}) => {
  const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<
    undefined | AddTaskForm["status"]
  >();
  const { title, description, status } = formVals;

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors },
  } = useForm<TTaskFromSchema>({
    resolver: zodResolver(taskFormSchema),
    defaultValues: {
      title,
      description,
    },
  });

  useEffect(() => {
    if (status) {
      setSelectedItem(status);
    }
  }, [status]);

  const handleDropdownToggle = (val: boolean) => {
    setIsDropMenuOpen(val);
  };

  const handleFormSubmit = (data: TTaskFromSchema) => {
    handleCreateTask({
      ...data,
      status: selectedItem as AddTaskForm["status"],
    });
    setIsModalOpen(false);
  };

  return (
    <section className="flex w-full flex-col px-4 py-6">
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className=" flex flex-col gap-4"
      >
        <div className="flex flex-col gap-2">
          <label className="font-medium text-neutral-700">Title</label>
          <input
            type="text"
            className="rounded-md px-1 py-2 ring-1 ring-neutral-500"
            placeholder="Write the title of the task here"
            {...register("title")}
          />
          {errors.title ? (
            <span className="text-sm text-red-500">
              {errors.title?.message}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-medium text-neutral-700">Description</label>
          <textarea
            placeholder="Write the task description here"
            rows={5}
            wrap="soft"
            className="resize-none rounded-md px-1 py-2 ring-1 ring-neutral-500"
            {...register("description")}
          />
          {errors.description ? (
            <span className="text-sm text-red-500">
              {errors.description?.message}
            </span>
          ) : null}
        </div>
        <div className="mb-8 flex flex-col gap-2">
          <SelectMenu
            isDropMenuOpen={isDropMenuOpen}
            list={STATUSES as string[]}
            handleDropdownToggle={handleDropdownToggle}
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
          />
        </div>
        <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button
            type="submit"
            className="inline-flex w-full justify-center rounded-md bg-breaker-bay-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-breaker-bay-500 sm:ml-3 sm:w-auto"
          >
            Add
          </button>
          <button
            onClick={() => {
              setIsModalOpen(false);
              clearFormVals();
            }}
            type="button"
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
};
