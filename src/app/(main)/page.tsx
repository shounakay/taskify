import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/multitask.svg";
import React from "react";

const MainPage = () => {
  return (
    <section className="bg-mortar-500 flex min-h-[800px] w-full flex-wrap items-center justify-center gap-12 px-8 pt-6 lg:gap-28">
      <div className="flex basis-[600px] flex-col gap-4">
        <h4 className="text-3xl font-semibold text-neutral-200">
          One Stop for all your day tasks. Organise and plan your day with this
          tool for a better productivity
        </h4>
        <div className="flex items-center gap-4 self-center lg:self-start">
          <Link href="/">
            <button className="rounded-md border-[0.5px] bg-neutral-700 px-2 py-2 text-neutral-200">
              Join Now
            </button>
          </Link>
          <Link href="/id">
            <button className="rounded-md border-[0.5px]  bg-neutral-700 px-2 py-2 text-neutral-200">
              View Tasks
            </button>
          </Link>
        </div>
      </div>
      <aside className="basis-[600px]">
        <Image src={hero} alt="hero" />
      </aside>
    </section>
  );
};

export default MainPage;
