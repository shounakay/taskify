"use client";

import React from "react";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import { TScheme } from "../utils/helpers";

export const SearchInput = ({
  handleSubmit,
  onSubmit,
  register,
}: {
  handleSubmit: UseFormHandleSubmit<
    {
      search: string;
    },
    undefined
  >;
  register: UseFormRegister<{
    search: string;
  }>;
  onSubmit: (data: TScheme) => void;
}) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-3">
      <input
        type="search"
        {...register("search")}
        size={25}
        className="rounded-md bg-neutral-200 px-1 py-2"
        placeholder="Search tasks"
      />
      <button
        type="submit"
        className="rounded-md bg-quarter-spanish-white-600 px-2 py-2 text-neutral-200 hover:bg-quarter-spanish-white-400"
      >
        Submit
      </button>
    </form>
  );
};
