import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";
import "aos/dist/aos.css";
import AOSInit from "./components/AOSInit";
import FooterV2 from "./components/FooterV2";
import NavBar from "./components/NavBar";

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
      <body className={`${inter.variable} antialiased`}>
        <AOSInit />
        <div className="w-screen h-auto flex justify-center sticky z-10 top-12.5">
          <NavBar />
        </div>

        {children}
        <div>
          <FooterV2 />
        </div>
      </body>
    </html>
  );
}
