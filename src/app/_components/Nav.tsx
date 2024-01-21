"use client";

import React, { useState } from "react";
import hamburger from "../../../public/hamburger.png";
import cross from "../../../public/cross.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { NavItems } from "./NavItems";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname: string = usePathname();
  return (
    <>
      <header>
        <nav className="flex items-center justify-between px-4 py-4">
          <div>
            <h4 className=" text-xl font-medium text-neutral-800">Taskify</h4>
          </div>
          <section>
            <div className="block items-center lg:hidden">
              {isMenuOpen ? (
                <Image
                  src={cross}
                  alt="cross"
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                />
              ) : (
                <Image
                  src={hamburger}
                  alt="menu"
                  className="cursor-pointer"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                />
              )}
            </div>
            <div className="hidden items-center gap-5 pr-4 lg:flex">
              <h3 className="hover:text-ebony-clay-200 cursor-pointer text-lg font-medium text-neutral-200 transition-all hover:-translate-y-1 hover:[text-shadow:rgba(234,230,235,0.9)_0px_0px_9px]">
                My Tasks
              </h3>
              <button
                className=" cursor-pointer rounded-md
  bg-neutral-200 px-3 py-2 text-neutral-800 shadow-[0px_19px_20px_10px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024] transition-all hover:-translate-y-1
hover:bg-neutral-400"
              >
                Login
              </button>
              <button className="cursor-pointer rounded-md bg-neutral-200 px-3 py-2 text-neutral-800  shadow-[0px_19px_20px_10px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024] transition-all hover:-translate-y-1 hover:bg-neutral-400">
                SignUp
              </button>
            </div>
          </section>
        </nav>
      </header>
      {isMenuOpen ? (
        <section className=" bg-masala-900 z-10 min-h-screen w-full px-8 py-14">
          <NavItems />
        </section>
      ) : null}
    </>
  );
};
