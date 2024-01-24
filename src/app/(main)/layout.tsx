import "@/styles/globals.css";

import { Fira_Code } from "next/font/google";

import { TRPCReactProvider } from "@/trpc/react";
import { Nav } from "../_components/Nav";
import { Provider } from "../_components/Provider";
import { getServerSession } from "next-auth";
import { Footer } from "../_components/Footer";

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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" className="h-full">
      <body className={`font-sans ${firaCode.variable} h-full`}>
        <TRPCReactProvider>
          <Provider>
            <main className="h-full bg-neutral-800">
              <Nav session={session}>
                <Footer>{children}</Footer>
              </Nav>
            </main>
          </Provider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
