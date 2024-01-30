import { Tasks } from "@/app/_components/Tasks";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession();
  if (!session?.user) {
    redirect("/auth/signin");
  }
  return (
    <section className="flex min-h-full w-full flex-col gap-5 bg-neutral-800 px-6 py-20 lg:px-16">
      <article className="mb-8 self-center text-pretty font-mono text-[30px]  font-bold text-neutral-200 lg:text-[50px]">
        <h6 className="px-14">Welcome, {session.user.name}</h6>
        <p className="text-center text-base font-semibold text-neutral-400 lg:text-xl">
          Stay productive with the ability to add, edit and delete your tasks
        </p>
      </article>
      <article className="flex w-full items-center bg-neutral-800">
        <Tasks />
      </article>
      <section className="flex flex-col"></section>
    </section>
  );
};

export default page;
