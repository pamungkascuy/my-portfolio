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

import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Arif Pamungkas | Fullstack Developer, UI/UX & Video Editor",
  description:
    "Portofolio profesional Arif Pamungkas — Fullstack Developer, UI/UX Designer & Video Editor berpengalaman dalam Flutter, Laravel, Figma, Premiere Pro, dan Computer Vision.",
  keywords: [
    "Arif Pamungkas",
    "Fullstack Developer",
    "Mobile Engineer",
    "UI/UX Designer",
    "Video Editor",
    "Flutter",
    "Laravel",
    "Figma",
    "Premiere Pro",
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var savedTheme = localStorage.getItem('portfolio_theme') || localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                  var savedLang = localStorage.getItem('portfolio_lang') || localStorage.getItem('lang');
                  if (savedLang) {
                    document.documentElement.lang = savedLang;
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--fg)] font-sans selection:bg-[var(--accent)] selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
