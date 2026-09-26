import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arif Pamungkas | Fullstack Developer & Mobile Engineer",
  description:
    "Portofolio profesional Arif Pamungkas — Fullstack Developer & Mobile Engineer berpengalaman dalam Flutter, Laravel, Computer Vision, dan Cloud.",
  keywords: [
    "Arif Pamungkas",
    "Fullstack Developer",
    "Mobile Engineer",
    "Flutter",
    "Laravel",
    "React",
    "Next.js",
    "Computer Vision",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F6FFF8] text-[#1C2B24] font-sans selection:bg-[#6B9080] selection:text-[#F6FFF8]">
        {children}
      </body>
    </html>
  );
}
