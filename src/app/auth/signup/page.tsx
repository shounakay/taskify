import { SignUp } from "@/app/_components/SignUp";
import React from "react";

const page = () => {
  // ! TODO : Redirect to home when already logged in
  return (
    <article className="flex min-h-screen w-full items-center justify-center">
      <SignUp />
    </article>
  );
};

export default page;
