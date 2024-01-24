"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignInResponse, signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const signinSchema = z.object({
  username: z.string().min(7, "Has to be atleast 7 characters"),
  password: z.string(),
});

export type TSigninSchema = z.infer<typeof signinSchema>;

export const Signin = () => {
  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { errors },
  } = useForm<TSigninSchema>({
    resolver: zodResolver(signinSchema),
  });
  const router = useRouter();

  const handleSignin = async (data: TSigninSchema) => {
    const { status, ok, error, url }: SignInResponse = (await signIn(
      "credentials",
      {
        username: data.username,
        password: data.password,
        redirect: false,
        callbackUrl: "/",
      },
    )) as SignInResponse;
    if (!ok && status === 401) {
      setError("password", {
        type: "server",
        message: "Username or password is wrong",
      });
    } else {
      router.push(url as string);
      reset();
    }
  };

  return (
    <section className=" bg-santas-gray-950 flex min-w-[300px] flex-col rounded-md px-16 py-12">
      <p className="self-center text-xl font-semibold uppercase text-neutral-200">
        Login With Credentials
      </p>
      <form
        className="mt-4 flex flex-col gap-3"
        onSubmit={handleSubmit(handleSignin)}
      >
        <div className="flex flex-col gap-1 text-neutral-200">
          <label className="text-sm">Username</label>
          <input
            type="text"
            placeholder="username"
            {...register("username")}
            className={`bg-santas-gray-900 w-72 min-w-0 rounded-md px-2 py-2 text-sm focus-visible:outline-none ${errors.password?.type === "server" || errors.username ? "ring-1 ring-red-500" : ""}`}
          />
          {errors.username ? (
            <span className=" text-xs text-red-400">
              {errors.username.message}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-1 text-neutral-200">
          <label className="text-sm">Password</label>
          <input
            type="password"
            placeholder="password"
            {...register("password")}
            className={`bg-santas-gray-900 w-72 min-w-0 rounded-md px-2 py-2 text-sm focus-visible:outline-none  ${errors.password?.type === "server" || errors.password ? "ring-1 ring-red-500" : ""}`}
          />
          {errors.password ? (
            <span className=" text-xs text-red-400">
              {errors.password.message}
            </span>
          ) : null}
        </div>
        <button
          type="submit"
          className="mt-4 min-w-[100px] rounded-md bg-neutral-900 px-2 py-2 text-center text-neutral-200 transition-all hover:-translate-y-0.5 hover:bg-neutral-800 hover:text-neutral-300"
        >
          Sign In
        </button>
      </form>
      <p className="mt-2 text-sm text-neutral-200">
        Don't have an account?{" "}
        <Link
          href="/auth/signup"
          className=" text-breaker-bay-600 border-breaker-bay-600 border-b-[1px]"
        >
          SignUp
        </Link>
      </p>
    </section>
  );
};
