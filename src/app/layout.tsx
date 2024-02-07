import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/navbar/navbar";

const roboto = Roboto({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "TP next js",
  description: "Anthony SAPET",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
          {children}
      </body>
    </html>
  );
}
