import { Signin } from "@/app/_components/Signin";
import React from "react";

const Signinpage = () => {
  return (
    <article className="flex min-h-screen w-full flex-col items-center justify-center gap-6">
      <h4 className="w-[85%] text-center  text-3xl leading-snug text-neutral-400 lg:w-2/3 lg:text-[42px]">
        <span className="text-quarter-spanish-white-500">Sign in</span>{" "}
        <span>
          to{" "}
          <span className="text-quarter-spanish-white-500">
            view and organise
          </span>{" "}
          your tasks and keep track of all your day to day routines
        </span>
      </h4>
      <Signin />
    </article>
  );
};

export default Signinpage;
