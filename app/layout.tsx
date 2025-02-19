import type { Metadata } from "next";
import "@/styles/globals.css";
import { Header } from "@/components/header";
import { notoSansKR } from "@/styles/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.API_URL}`),
  title: {
    template: "%s | 최은하의 포트폴리오 사이트",
    default: "최은하의 포트폴리오 사이트",
  },
  description: "최은하의 포트폴리오 사이트입니다.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    images: "/opengraph-image.jpg",
  },
  robots: {
    follow: true,
    index: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSansKR.className} antialiased w-full overflow-x-hidden bg-bg-default`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
