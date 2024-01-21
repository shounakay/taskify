import "@/styles/globals.css";

import { Fira_Code } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Nav } from "../_components/Nav";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`font-sans ${firaCode.variable} h-full`}>
        <TRPCReactProvider>
          <main className=" bg-mortar-500 min-h-full">
            <Nav />
            {children}
          </main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
