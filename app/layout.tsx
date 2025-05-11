import "@/globals.css";

import { GoogleAnalytics } from "@next/third-parties/google";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

import MainHeader from "@/components/main-header";
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
      <body>
        <NextTopLoader />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="bg-background" vaul-drawer-wrapper="">
            <MainHeader />
            <div>{children}</div>
          </div>
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_GA_ID!} />
    </html>
  );
}
