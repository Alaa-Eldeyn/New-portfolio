import type { Metadata } from "next";
import "./globals.css";
import ScrollUp from "@/components/ScrollUp";
import localFont from "next/font/local";

const inter = localFont({
  src: "./fonts/Inter-Regular.woff",
  variable: "--inter",
});

export const metadata: Metadata = {
  title: "Alaa Eldeyn's Portfolio",
  description: "a portfolio website for Alaa Eldeyn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.variable} !font-inter antialiased`}>
        <ScrollUp />

        {children}
      </body>
    </html>
  );
}
