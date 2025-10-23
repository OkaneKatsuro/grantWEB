import type { Metadata } from "next";
import {Manrope, Rethink_Sans} from "next/font/google";
import "./globals.css";

const geistSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const geistMono = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic"],
});



export const metadata: Metadata = {
  title: "Название",
  description: "Система автоматизации бизнес процессов в сфере аранеды недвидимости",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
