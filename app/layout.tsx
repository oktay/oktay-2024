import "@/globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import MainHeader from "@/components/main-header";
import MainSidebar from "@/components/main-sidebar";
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
    <html lang="en" className={GeistSans.variable} suppressHydrationWarning>
      <body className="overflow-hidden">
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="bg-background" vaul-drawer-wrapper="">
            <div className="flex flex-col h-[100dvh] md:flex-row">
              <MainHeader />
              <MainSidebar />
              <ScrollArea className="md:flex-1">{children}</ScrollArea>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
