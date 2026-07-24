import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sholeh Alirezaei",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col bg-mist-800 text-mist-300 h-screen'>
        <Header />
        <main className='px-2 sm:px-8 md:px-12 lg:px-24 h-full overflow-scroll scrollbar-none scrollbar-thumb-pink-600 sm:scrollbar-thin md:scrollbar-gutter-stable scroll-ml-2'>
          {children}
        </main>
      </body>
    </html>
  );
}
