import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google';

import "./globals.css";
import { Merriweather } from 'next/font/google';

import Header from "@/components/containers/header";
import Footer from "@/components/containers/footer";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: ['300', '400', '700', '900']
});
export const metadata: Metadata = {
  title: "oriodev.",
  description: "ori: portfolio and digital garden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const tag = process.env.GOOGLE_ANALYTICS_TAG || '';

  return (
    <html lang="en">
      <head>
        <script data-site="NJOHFHJ" src="https://localhost:8000/script.js" defer></script>
      </head>
      <body
        className={`${merriweather.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
      <GoogleAnalytics gaId={tag} />
    </html>
  );
}
