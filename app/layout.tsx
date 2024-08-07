import "@/globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

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
        <NextTopLoader />
        <ThemeProvider attribute="class" defaultTheme="light">
          <div className="bg-background" vaul-drawer-wrapper="">
            <div className="h-dvh flex flex-col md:flex-row">
              <MainHeader />
              <MainSidebar />
              <ScrollArea className="md:flex-1">{children}</ScrollArea>
            </div>
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_GA_ID!} />
    </html>
  );
}
