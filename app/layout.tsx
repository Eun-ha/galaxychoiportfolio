import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="wrapper w-auto lg:w-[1080px] my-0 mx-auto">
          <header className="flex h-[50px] bg-rose-300 justify-between">
            <h1>Choi Logo</h1>
            <nav className="flex justify-evenly bg-rose-450">
              <Link className="px-4" href="/">
                Home
              </Link>
              <Link className="px-4" href="/resume">
                resume
              </Link>
              <Link className="px-4" href="/work">
                work
              </Link>
            </nav>
          </header>
          {children}
        </div>
      </body>
    </html>
  );
}
