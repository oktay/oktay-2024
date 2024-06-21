import "@/globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";

import Menu from "@/components/menu";
import Navigation from "@/components/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DEFAULT_SEO } from "@/lib/constants";

export const metadata: Metadata = {
  ...DEFAULT_SEO,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="h-screen w-screen flex flex-col md:flex-row">
        <header className="sticky top-0 border-b md:hidden">
          <div className="container h-12 flex items-center -ml-2">
            <Menu />
          </div>
        </header>

        <ScrollArea className="hidden md:block md:w-[240px] lg:w-[320px] md:border-r bg-muted/20">
          <div className="px-2">
            <Navigation />
          </div>
        </ScrollArea>

        <ScrollArea className="md:flex-1">
          <main className="py-12 md:py-24">{children}</main>
        </ScrollArea>
      </body>
    </html>
  );
}
