import Image from "next/image";
import Link from "next/link";
import hero from "../../../public/multitask.svg";
import React from "react";
import { HeroActions } from "../_components/HeroActions";

const MainPage = () => {
  return (
    <section className="flex min-h-full w-full flex-wrap items-center justify-center gap-12 bg-neutral-800 px-8 lg:gap-28">
      <div className="flex basis-[450px] flex-col gap-12">
        <h4 className="text-balance text-center text-3xl font-semibold text-quarter-spanish-white-300 lg:text-left">
          Elevate your productivity with our ultimate day planner.Organize and
          plan your day seamlessly in one powerful tool.
        </h4>
        <HeroActions />
      </div>
      <aside className="basis-[600px]">
        <Image src={hero} alt="hero" width={900} />
      </aside>
    </section>
  );
};

export default MainPage;
