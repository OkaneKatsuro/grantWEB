import type { Metadata } from "next";
import {Manrope, Rethink_Sans, Share_Tech_Mono} from "next/font/google";
import "./globals.css";
import { ScrollLockProvider } from "@/components/ScrollLockContext";

const geistSans = Rethink_Sans({
  variable: "--font-rethink-sans",
  subsets: ["latin"],
});

const geistMono = Manrope({
  variable: "--font-manrope",
  subsets: ["cyrillic"],
});

const shareTechMono = Share_Tech_Mono({
  variable: "--font-share-tech-mono",
  subsets: ["latin"],
  weight: "400",
});



export const metadata: Metadata = {
  title: "RentFlow",
  description: "Система автоматизации бизнес процессов в сфере аранеды недвидимости",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={shareTechMono.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${shareTechMono.variable} antialiased`}
        style={{ fontFamily: 'var(--font-share-tech-mono)' }}
      >
        <ScrollLockProvider>
          {children}
        </ScrollLockProvider>
      </body>
    </html>
  );
}
