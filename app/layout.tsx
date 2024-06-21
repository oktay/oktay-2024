import "./globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import Menu from "@/components/layout/menu";
import Navigation from "@/components/layout/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Oktay Çolakoğlu",
  description:
    "Frontend Developer, design enthusiast, gamer and lifelong learner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="md:h-screen md:w-screen md:flex">
        <header className="sticky top-0 border-b md:hidden">
          <div className="container h-12 flex items-center -ml-2">
            <Menu />
          </div>
        </header>

        <ScrollArea className="hidden md:block md:w-[240px] lg:w-[320px] md:border-r bg-muted/60">
          <div className="px-2">
            <Navigation />
          </div>
        </ScrollArea>

        <ScrollArea className="flex-1">{children}</ScrollArea>
      </body>
    </html>
  );
}
