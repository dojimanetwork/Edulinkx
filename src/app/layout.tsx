import type { Metadata } from "next";
import localFont from 'next/font/local';
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Edulinkx - Blockchain Education, Redefined",
  description: "Shaping Our Children's Future with Edulinkx",
};

const neueMontreal = localFont({
  weight: '400',
  src: [
    {
      path: './fonts/NeueMontreal-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/NeueMontreal-Medium.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-nm',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${neueMontreal.variable}`}>{children}</body>
    </html>
  );
}
