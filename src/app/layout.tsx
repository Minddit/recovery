import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";

import "./globals.css";

import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Data Visualization Dashboard",
  description:
    "The Data Visualization Dashboard serves as an excellent starting point for projects focused on data analysis and representation.",
  alternates: {
    canonical: "/"
  },
  openGraph: {
    url: "/",
    title: "Data Visualization Dashboard",
    description:
      "The Data Visualization Dashboard serves as an excellent starting point for projects focused on data analysis and representation.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Visualization Dashboard",
    description:
      "The Data Visualization Dashboard serves as an excellent starting point for projects focused on data analysis and representation."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={GeistSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
