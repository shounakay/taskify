import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/multitask.svg";
import React from "react";

const MainPage = () => {
  return (
    <section className="flex min-h-full w-full flex-wrap items-center justify-center gap-12 bg-neutral-800 px-8 lg:gap-28">
      <div className="flex basis-[450px] flex-col gap-12">
        <h4 className="text-quarter-spanish-white-300 text-balance text-center text-3xl font-semibold lg:text-left">
          Elevate your productivity with our ultimate day planner.Organize and
          plan your day seamlessly in one powerful tool.
        </h4>
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
      </div>
      <aside className="basis-[600px]">
        <Image src={hero} alt="hero" width={900} />
      </aside>
    </section>
  );
};

export default MainPage;
