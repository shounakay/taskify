import Link from "next/link";
import React from "react";

export const HeroActions = () => {
  return (
    <div className="flex items-center gap-8 self-center lg:self-start">
      <Link href="/auth/signup">
        <button className="rounded-md border-[0.5px] bg-neutral-200 px-2 py-2 text-neutral-800 transition-all hover:bg-neutral-400 hover:text-neutral-900">
          Join Now
        </button>
      </Link>
      <Link href="/tasks">
        <button className="rounded-md border-[0.5px]  bg-neutral-200 px-2 py-2 text-neutral-800 transition-all hover:bg-neutral-400 hover:text-neutral-900">
          View Tasks
        </button>
      </Link>
    </div>
  );
};
