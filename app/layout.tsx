import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Advosion",
  icons: {
    icon: "/img/faveicon-advosion-v4.svg",
  },
  description:
    "Advosion er en kombineret advokat- og revisionsvirksomhed, der tilbyder juridisk og økonomisk rådgivning til både private og erhvervskunder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
