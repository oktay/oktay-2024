import "@/globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

import MainHeader from "@/components/main-header";
import MainNav from "@/components/main-nav";
import { DEFAULT_SEO } from "@/lib/constants";

const GA_ID = process.env.NEXT_GA_ID;

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
      <body>
        <NextTopLoader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background" vaul-drawer-wrapper="">
            <MainHeader className="lg:hidden" />
            <div className="lg:grid grid-cols-[300px_1fr] container gap-24">
              <MainNav className="h-dvh sticky top-0 py-12 2xl:py-24 hidden lg:flex" />
              <div>{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </body>

      {GA_ID && <GoogleAnalytics gaId={GA_ID} />}
    </html>
  );
}
