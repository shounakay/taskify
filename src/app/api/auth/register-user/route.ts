import { db } from "@/server/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { signUpFormSchema } from "@/app/utils/helpers";

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { username, password, confirmPassword, name } =
      signUpFormSchema.parse(body);
    if (!username || !password || !confirmPassword || !name) {
      return NextResponse.json(
        {
          user: null,
          message: "Name, username and password is required",
          isError: true,
        },
        { status: 404 },
      );
    }
    if (password !== confirmPassword) {
      return NextResponse.json(
        { user: null, message: "Passwords dont match", isError: true },
        { status: 400 },
      );
    }
    const duplicateUser = await db.user.findUnique({
      where: { username },
    });
    if (duplicateUser) {
      return NextResponse.json(
        { user: null, message: "User already exists", isError: true },
        { status: 409 },
      );
    }
    const hashedPassword = await hash(password, 10);
    const user = await db.user.create({
      data: { username, password: hashedPassword, name },
    });
    const { password: userPass, ...rest } = user;
    return NextResponse.json({ user: rest }, { status: 201 });
  } catch (err) {
    console.error("err", err);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 },
    );
  }
};
