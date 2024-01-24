"use client";

import React, { useState } from "react";
import hamburger from "../../../public/hamburger-menu.png";
import cross from "../../../public/cross.png";
import Image from "next/image";
import { NavItems } from "./NavItems";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { Session } from "next-auth";
import taskifyLogo from "../../../public/taskify-nobg.svg";

export const Nav = ({
  session,
  children,
}: {
  session: Session | null;
  children?: React.ReactNode;
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <>
      <header className="bg-neutral-800">
        <nav className="flex items-center justify-between px-4 py-4">
          <Link href="/">
            <h4
              className=" text-quarter-spanish-white-300 text-xl font-semibold
            "
            >
              <Image src={taskifyLogo} alt="" width={120} height={50} />
            </h4>
          </Link>
          <section>
            <div className="block items-center lg:hidden">
              {isMenuOpen ? (
                <Image
                  src={cross}
                  alt="cross"
                  className=" cursor-pointer"
                  width={50}
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
              <Link href="/tasks">
                <h3 className="hover:text-ebony-clay-200 cursor-pointer text-lg font-medium text-neutral-200 transition-all hover:-translate-y-1 hover:[text-shadow:rgba(234,230,235,0.9)_0px_0px_9px]">
                  My Tasks
                </h3>
              </Link>
              {session?.user.name ? (
                <Link href="/">
                  <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className=" cursor-pointer rounded-md
  bg-red-500 px-3 py-2 text-neutral-200 shadow-[0px_19px_20px_10px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024] transition-all hover:-translate-y-1
hover:bg-red-400"
                  >
                    Sign Out
                  </button>
                </Link>
              ) : (
                <>
                  <Link href="/auth/signin">
                    <button
                      className=" cursor-pointer rounded-md
  bg-neutral-200 px-3 py-2 text-neutral-800 shadow-[0px_19px_20px_10px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024] transition-all hover:-translate-y-1
hover:bg-neutral-400"
                    >
                      Login
                    </button>
                  </Link>
                  <Link href="/auth/signup">
                    <button className="cursor-pointer rounded-md bg-neutral-200 px-3 py-2 text-neutral-800  shadow-[0px_19px_20px_10px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024,0px_3px_8px_0px_#00000024] transition-all hover:-translate-y-1 hover:bg-neutral-400">
                      SignUp
                    </button>
                  </Link>
                </>
              )}
            </div>
          </section>
        </nav>
        <div className="border-[0.5px] border-neutral-400 px-6" />
      </header>
      {isMenuOpen ? (
        <section className=" z-10 min-h-full bg-neutral-800 px-8 py-14">
          <NavItems />
        </section>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
