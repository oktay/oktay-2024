import "./globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

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
          <div className="container">Header</div>
        </header>
        <ScrollArea className="hidden md:block md:w-[240px] lg:w-[320px] md:border-r bg-muted/60">
          <div className="container">Sidebar</div>
        </ScrollArea>
        <ScrollArea className="flex-1">{children}</ScrollArea>
      </body>
    </html>
  );
}
