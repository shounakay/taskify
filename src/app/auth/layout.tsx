import "@/styles/globals.css";

import { TRPCReactProvider } from "@/trpc/react";
import { Fira_Code } from "next/font/google";
import React from "react";
import { Provider } from "../_components/Provider";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-firaCode",
  subsets: ["latin"],
});

export const metadata = {
  title: "Taskify",
  description: "Task Manager App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();
  if (!session?.user) {
    redirect("/");
  }
  return (
    <html lang="en" className="h-full">
      <body className={`font-sans ${firaCode.variable} h-full`}>
        <TRPCReactProvider>
          <Provider>
            <main className="bg-bg1 min-h-full bg-neutral-700 bg-cover bg-no-repeat">
              {children}
            </main>
          </Provider>
        </TRPCReactProvider>
      </body>
    </html>
  );
};

export default layout;
