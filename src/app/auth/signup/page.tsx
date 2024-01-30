import { SignUp } from "@/app/_components/SignUp";
import React from "react";

const page = () => {
  return (
    <article className="flex min-h-screen w-full flex-col items-center justify-center gap-6">
      <h4 className="w-[85%] text-center  text-3xl leading-snug text-neutral-400 lg:w-2/3 lg:text-[42px]">
        <span className="text-quarter-spanish-white-500">Sign up</span>{" "}
        <span>
          to keep all{" "}
          <span className="text-quarter-spanish-white-500">
            your tasks secure
          </span>{" "}
          whenever you need them.
        </span>
      </h4>
      <SignUp />
    </article>
  );
};

export default page;
