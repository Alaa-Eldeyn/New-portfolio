import type { Metadata } from "next";
import "./globals.css";
import ScrollUp from "@/components/ScrollUp";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";

const cairo = localFont({
  src: "./fonts/Cairo-Bold.woff2",
  variable: "--cairo",
});

export const metadata: Metadata = {
  title: "Alaa Eldeyn's Portfolio",
  description: "a portfolio website for Alaa Eldeyn",
  icons: ["/favicon.ico"],
  keywords: [
    "portfolio",
    "web developer",
    "Alaa Eldeyn",
    "Alaa Eldeyn's Portfolio",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "3lwa88",
    "an agilest, Front-End Developer with experience in designing and developing scalable websites and dashboards to support the digital growth of leading brands in Egypt, Turkey, and currently Saudi Arabia. Skilled in creating dynamic, responsive user interfaces with a focus on performance optimization and user-centered designs that enhance engagement and achieve business goals.",
  ],
  openGraph: {
    title: "Alaa Eldeyn's Portfolio",
    description: "a portfolio website for Alaa Eldeyn",
    url: "/",
    siteName: "Alaa Eldeyn",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/1728632322492.jpg",
        alt: "Alaa Eldeyn Portfolio Preview",
      },
    ],
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <Analytics />
      <body className={` ${cairo.variable} antialiased`}>
        <ScrollUp />
        {children}
      </body>
    </html>
  );
}
