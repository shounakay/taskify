import { PrismaAdapter } from "@next-auth/prisma-adapter";
import {
  getServerSession,
  type DefaultSession,
  type NextAuthOptions,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { db } from "@/server/db";
import { compare } from "bcrypt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession["user"];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
  callbacks: {
    session: ({ session, user, token, ...rest }) => {
      return {
        ...session,
        user: {
          ...session.user,
          username: token.name,
          sub: token.sub,
        },
      };
    },
    jwt: ({ token, user, account, profile, isNewUser, session }) => {
      return {
        ...token,
        username: token?.username ?? user?.name,
        name: token?.name ?? user?.name,
        userId: token?.userId ?? user?.id,
      };
    },
    signIn: ({ user, profile, account, email, credentials }) => {
      return !user ? false : true;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 3000,
  },
  pages: {
    signIn: "/auth/signin",
  },
  adapter: PrismaAdapter(db),
  providers: [
    CredentialsProvider({
      name: "Creds",
      credentials: {
        username: { label: "Username", placeholder: "" },
        password: { label: "Password", placeholder: "" },
      },
      async authorize(credentials, req) {
        try {
          const { username, password } = credentials ?? {};
          if (!username || !password) {
            return null;
          }
          const user = await db.user.findUnique({ where: { username } });
          const isPasswordMatch = await compare(
            password as string,
            user?.password as string,
          );
          if (user && isPasswordMatch) {
            return user;
          }
          return null;
        } catch (err) {
          console.error(err);
          return null;
        }
      },
    }),
  ],
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
