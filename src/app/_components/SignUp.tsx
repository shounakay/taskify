"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const signUpFormSchema = z
  .object({
    username: z.string().min(7, "Username has to be atleast 7 char long"),
    password: z.string().min(5, "Has to be atleast 5 characters"),
    confirmPassword: z.string(),
    name: z.string(),
  })
  .refine((data) => data.confirmPassword === data.password, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });

export type TSignUpFormSchema = z.infer<typeof signUpFormSchema>;

export const SignUp = () => {
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
  });

  const handleRegisterUser = async (data: TSignUpFormSchema) => {
    console.log("data", data);
    const res = await fetch("/api/auth/register-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    console.log("res", res);
    if (res.ok) {
      router.push("/auth/signin");
    } else {
      console.error("hey error happened");
    }
    reset();
  };

  return (
    <section className=" bg-santas-gray-950 flex min-w-[300px] flex-col rounded-md px-16 py-12">
      <p className="self-center text-xl font-semibold uppercase text-neutral-200">
        Register
      </p>
      <form
        className="mt-4 flex flex-col gap-3"
        onSubmit={handleSubmit(handleRegisterUser)}
      >
        <div className="flex flex-col gap-1 text-neutral-200">
          <label className="text-sm">Full Name</label>
          <input
            type="text"
            placeholder="FullName"
            {...register("name")}
            className="bg-santas-gray-900 w-72 min-w-0 rounded-md px-2 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          />
          {errors.username ? (
            <span className=" text-xs text-red-400">
              {errors.username.message}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-1 text-neutral-200">
          <label className="text-sm">Username</label>
          <input
            type="text"
            placeholder="Username"
            {...register("username")}
            className="bg-santas-gray-900 rounded-md px-2 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
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
            {...register("password")}
            placeholder="Password"
            className="bg-santas-gray-900 rounded-md px-2 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          />
          {errors.password ? (
            <span className=" text-xs text-red-400">
              {errors.password.message}
            </span>
          ) : null}
        </div>
        <div className="flex flex-col gap-1 text-neutral-200">
          <label className="text-sm">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword")}
            className="bg-santas-gray-900 rounded-md px-2 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900"
          />
          {errors.confirmPassword ? (
            <span className=" text-xs text-red-400">
              {errors.confirmPassword.message}
            </span>
          ) : null}
        </div>
        <button
          type="submit"
          className=" min-w-[100px] rounded-md bg-neutral-900 px-2 py-2 text-center text-neutral-200 transition-all hover:-translate-y-0.5 hover:bg-neutral-800"
        >
          SignUp
        </button>
      </form>
      <p className="mt-2 text-sm text-neutral-200">
        Have an account?{" "}
        <Link
          href="/auth/signin"
          className=" text-breaker-bay-600 border-breaker-bay-600 border-b-[1px]"
        >
          Signin
        </Link>
      </p>
    </section>
  );
};
