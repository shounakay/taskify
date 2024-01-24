import React, { SetStateAction } from "react";
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
      {/* Background backdrop, show/hide based on modal state.

  Entering: "ease-out duration-300"
    From: "opacity-0"
    To: "opacity-100"
  Leaving: "ease-in duration-200"
    From: "opacity-100"
    To: "opacity-0" */}
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
              {/* Modal panel, show/hide based on modal state.

Entering: "ease-out duration-300"
  From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
  To: "opacity-100 translate-y-0 sm:scale-100"
Leaving: "ease-in duration-200"
  From: "opacity-100 translate-y-0 sm:scale-100"
  To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" */}
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
                {/* <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Deactivate account
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All
                          of your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
