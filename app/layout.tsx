import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollUp from "@/components/ScrollUp";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} antialiased`}>
        <ScrollUp />

        {children}
      </body>
    </html>
  );
}
