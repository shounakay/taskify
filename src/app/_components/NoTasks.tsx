import Image from "next/image";
import React from "react";
import noTasks from "../../../public/undraw_not_found_re_bh2e.svg";

export const NoTasks = () => {
  return (
    <div className="flex min-h-[500px] items-center justify-center">
      <div className="flex flex-col items-center gap-7">
        <Image src={noTasks} alt="no-tasks" />
        <h4 className="text-3xl text-neutral-500">No tasks found</h4>
      </div>
    </div>
  );
};
