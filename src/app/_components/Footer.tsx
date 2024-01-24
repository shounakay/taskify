import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCopyright } from "react-icons/md";
import taskifyLogo from "../../../public/taskify-nobg.svg";

export const Footer = ({ children }: { children?: React.ReactNode }) => {
  return (
    <>
      {/* <div className="w-full border-[1px] border-neutral-400" /> */}
      {children}
      <footer className="flex w-full flex-col justify-between bg-neutral-900 px-5 py-5 lg:px-24">
        <div className="flex w-full items-center justify-between">
          <div className="flex basis-[35%] items-center gap-3">
            <Link href="/">
              <h3 className="text-quarter-spanish-white-400 text-xl">
                <Image src={taskifyLogo} alt="" width={120} height={50} />
              </h3>
            </Link>
          </div>
          <div className="flex items-center justify-center gap-3">
            <Link href="/" className="">
              <h1 className="border-text-neutral-400 border-b-[0.5px] text-sm text-neutral-400 transition-all hover:-translate-y-[2px] hover:border-neutral-300 hover:text-neutral-300">
                Home
              </h1>
            </Link>
            <Link href="/tasks">
              <h1 className="border-text-neutral-400 border-b-[0.5px] text-sm text-neutral-400 transition-all hover:-translate-y-[2px] hover:border-neutral-300 hover:text-neutral-300">
                Tasks
              </h1>
            </Link>
            <Link href="/auth/signup">
              <h1 className="border-text-neutral-400 border-b-[0.5px] text-sm text-neutral-400 transition-all hover:-translate-y-[2px] hover:border-neutral-300 hover:text-neutral-300">
                Register
              </h1>
            </Link>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-400">
          <MdCopyright />
          <span>Copyright 2024.</span>
          <span>Made by Shounak</span>
        </div>
      </footer>
    </>
  );
};
