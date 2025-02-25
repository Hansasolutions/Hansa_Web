import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "汉萨智联 | HANSEATIC SOLUTIONS | 助力中国企业进军欧洲市场",
  description: "汉萨智联提供中国企业进军欧洲市场的一站式本地化服务，从市场咨询到落地执行，助力企业无缝融入欧洲市场。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className="scroll-smooth bg-[var(--background)]">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} bg-[var(--background)]`}>{children}</body>
    </html>
  );
}
