import type { Metadata } from "next";
import "./globals.css";

// Import the fonts in your _app.js or a custom Document
import { Merriweather } from 'next/font/google';
import Header from "@/components/containers/header";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ['300', '400', '700', '900']
});
export const metadata: Metadata = {
  title: "oriodev",
  description: "ori: portfolio and digital garden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${merriweather.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
