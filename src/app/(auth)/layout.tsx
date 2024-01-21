import { TRPCReactProvider } from "@/trpc/react";
import { Fira_Code } from "next/font/google";
import React from "react";

export const firaCode = Fira_Code({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-firaCode",
  subsets: ["latin"],
});

export const metadata = {
  title: "Taskify",
  description: "Task Manager App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="h-full">
      <body className={`font-sans ${firaCode.variable} h-full`}>
        <TRPCReactProvider>
          <main className=" bg-mortar-500 min-h-full">{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
};

export default layout;
