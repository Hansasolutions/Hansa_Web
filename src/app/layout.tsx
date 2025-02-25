import type { Metadata } from "next";
import { Inter, Noto_Sans_SC, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const notoSansSC = Noto_Sans_SC({ 
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-noto-sans-sc'
});
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-roboto'
});

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
    <html lang="zh" className={`scroll-smooth bg-[var(--background)] ${notoSansSC.variable} ${roboto.variable}`}>
      <body className={`${inter.className} bg-[var(--background)]`}>{children}</body>
    </html>
  );
}
