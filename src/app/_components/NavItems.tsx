import Link from "next/link";
import React from "react";

export const NavItems = () => {
  return (
    <div className="flex flex-col gap-16">
      <Link
        href="/"
        className="border-masala-300 max-w-fit cursor-pointer border-b-4 text-2xl font-semibold text-neutral-200"
      >
        Home
      </Link>
      <Link
        href="/"
        className="border-masala-300 max-w-fit cursor-pointer border-b-4 text-2xl font-semibold text-neutral-200"
      >
        My Tasks
      </Link>
      <Link
        href="/"
        className="border-masala-300 max-w-fit cursor-pointer border-b-4 text-2xl font-semibold text-neutral-200"
      >
        SignIn
      </Link>
      <Link
        href="/"
        className="border-masala-300 max-w-fit cursor-pointer border-b-4 text-2xl font-semibold text-neutral-200"
      >
        SignUp
      </Link>
    </div>
  );
};
