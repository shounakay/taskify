import React from "react";
import { TaskForm } from "./TaskForm";
import { AddTaskForm } from "../utils/helpers";

export const Modal = ({
  isModalOpen,
  setIsModalOpen,
  formVals,
  clearFormVals,
  handleCreateTask,
}: {
  clearFormVals: () => void;
  handleCreateTask: (val: AddTaskForm) => void;
  formVals: AddTaskForm;
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
}) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      {isModalOpen ? (
        <div className="">
          <div
            className={`fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity ${
              isModalOpen
                ? "opacity-100"
                : "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            }`}
          ></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <div
                className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ${isModalOpen ? "translate-y-0 opacity-100 sm:scale-100" : "translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"}`}
              >
                <section className="flex flex-col gap-5 py-4">
                  <h4 className="mt-2 self-center text-xl font-semibold text-neutral-600">
                    Add your task
                  </h4>
                  <TaskForm
                    formVals={formVals}
                    handleCreateTask={handleCreateTask}
                    setIsModalOpen={setIsModalOpen}
                    clearFormVals={clearFormVals}
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
