"use client";

import React, { Suspense, useState } from "react";
import { Modal } from "./Modal";
import { api } from "@/trpc/react";
import { TaskCard } from "./TaskCard";
import {
  AddTaskForm,
  FILTERS,
  STATUS_ENUM,
  TScheme,
  schema,
} from "../utils/helpers";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DeleteModal } from "./DeleteModal";
import LoadingTasks from "./LoadingTasks";
import { NoTasks } from "./NoTasks";
import { NotFound } from "./NotFound";
import { SelectMenu } from "./SelectMenu";

export const Tasks = () => {
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<string>(
    FILTERS[0] as string,
  );
  const [deleteModalProps, setDeleteModalProps] = useState({
    isDeleteModalOpen: false,
    deleteTaskId: "",
  });
  const [isEdit, setIsEdit] = useState(false);
  const [editTaskId, setEditTaskId] = useState("");
  const [formVals, setFormVals] = useState<AddTaskForm>({
    title: "",
    description: "",
    status: STATUS_ENUM.TO_DO,
  });

  const { register, handleSubmit, reset } = useForm<TScheme>({
    resolver: zodResolver(schema),
  });

  const { data, isFetching, isRefetching, isError, status, refetch } =
    api.task.getUserTasks.useQuery({
      searchText,
      filter: selectedFilter === FILTERS[0] ? "" : selectedFilter,
    });
  const addTask = api.task.createTask.useMutation({
    onSuccess: () => {
      // Refetch the task data after successfully adding a new task
      refetch();
    },
  });
  const editTask = api.task.updateTask.useMutation({
    onSuccess: () => {
      // Refetch the task data after successfully adding a new task
      refetch();
    },
  });

  const deleteTask = api.task.deleteTask.useMutation({
    onSuccess: () => {
      // Refetch the task data after successfully adding a new task
      refetch();
    },
  });

  const clearFormVals = () => {
    setFormVals({ title: "", description: "", status: STATUS_ENUM.TO_DO });
  };

  const onSubmit = ({ search }: TScheme) => {
    setSearchText(search);
  };

  const handleEditTask = (id: string, val: AddTaskForm) => {
    setFormVals(val);
    setIsModalOpen(true);
    setEditTaskId(id);
    setIsEdit(true);
  };

  const handleCreateTask = (val: AddTaskForm) => {
    if (isEdit) {
      const task = editTask.mutate({ ...val, taskId: editTaskId });
      setIsEdit(false);
    } else {
      const task = addTask.mutate(val);
    }
    setIsModalOpen(false);
    reset();
  };

  const handleFilterDropdownToggle = (val: boolean) => {
    setIsFilterMenuOpen(val);
  };

  const handleDeleteTask = () => {
    const task = deleteTask.mutate({ taskId: deleteModalProps.deleteTaskId });
    setDeleteModalProps({ isDeleteModalOpen: false, deleteTaskId: "" });
  };

  const onDeleteSubmit = (id: string) => {
    setDeleteModalProps({ isDeleteModalOpen: true, deleteTaskId: id });
  };

  return (
    <section className="flex w-full flex-col gap-8">
      <section className="flex w-full flex-wrap items-center justify-between">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex items-center gap-3"
        >
          <input
            type="search"
            {...register("search")}
            size={25}
            className="rounded-md bg-neutral-200 px-1 py-2"
            placeholder="Search tasks"
          />
          <button
            type="submit"
            className="bg-quarter-spanish-white-600 hover:bg-quarter-spanish-white-400 rounded-md px-2 py-2 text-neutral-200"
          >
            Submit
          </button>
        </form>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setIsModalOpen((prev) => !prev)}
            className="bg-breaker-bay-600 hover:bg-breaker-bay-400 rounded-md px-2 py-2 text-neutral-200"
          >
            + Add Task
          </button>
          <div className="pb-8">
            <SelectMenu
              label="Filter By"
              isDropMenuOpen={isFilterMenuOpen}
              list={FILTERS as string[]}
              handleDropdownToggle={handleFilterDropdownToggle}
              selectedItem={selectedFilter}
              setSelectedItem={setSelectedFilter}
            />
          </div>
          {/* <SelectMenu /> */}
        </div>
      </section>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <section>
        {isFetching || isRefetching ? (
          <LoadingTasks />
        ) : isError ? (
          <div>Error</div>
        ) : data?.length ? (
          data?.map((task) => {
            return (
              <TaskCard
                onDeleteTask={onDeleteSubmit}
                onEditTask={handleEditTask}
                {...task}
              />
            );
          })
        ) : searchText ? (
          <NotFound />
        ) : (
          <NoTasks />
        )}
      </section>
      {/* <section>
        {data?.map((task) => {
          return (
            <TaskCard
              onDeleteTask={onDeleteSubmit}
              onEditTask={handleEditTask}
              {...task}
            />
          );
        })}
      </section> */}
      {/* </Suspense> */}
      <Modal
        clearFormVals={clearFormVals}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        formVals={formVals}
        handleCreateTask={handleCreateTask}
      />
      {deleteModalProps.isDeleteModalOpen ? (
        <DeleteModal
          handleDelete={handleDeleteTask}
          closeModal={() =>
            setDeleteModalProps({
              isDeleteModalOpen: false,
              deleteTaskId: "",
            })
          }
        />
      ) : null}
    </section>
  );
};