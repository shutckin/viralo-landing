import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIRALO — готовые видео-креативы с помощью ИИ",
  description:
    "Готовые AI-видео для блогеров, экспертов, самозанятых и малого бизнеса. Пришлите голосовое или короткое ТЗ — получите видео-креатив для соцсетей, рекламы, сторис и Telegram.",
  openGraph: {
    title: "VIRALO — готовые видео-креативы с помощью ИИ",
    description:
      "Видео-креативы по голосовому или короткому ТЗ для Reels, Shorts, TikTok, Telegram, сторис и рекламы.",
    type: "website",
    locale: "ru_RU",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${sans.variable} ${mono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
