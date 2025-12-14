import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { TopBanner } from "@/components/layout/TopBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Alternative Eye: Beyond the File | Crime Meets Code",
  description: "Decoding the systems of silence behind the world's most complex cases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${bebasNeue.variable} ${inter.variable} antialiased bg-[#0a0a0a] text-white`}
      >
        <TopBanner />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
