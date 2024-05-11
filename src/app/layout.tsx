import "./globals.css";

import Footer from "@/components/fragments/Footer";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Header from "@/components/fragments/Header";
import type { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "FAR.DEV",
  description:
    "Tech wizzard that ready to turn your dream into reality 🔮, together lets create an app that's scale!",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
    other: { rel: "apple-touch-icon", url: "/favicon.png" },
  },
  authors: [{ name: "FAR.DEV", url: "https://far.dev" }],
  openGraph: {
    images: [
      {
        url: "https://site.farrel.cloud/opengraph-image",
        width: 1200,
        height: 630,
        alt: "FARREL.DEV",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistMono.variable} ${GeistSans.variable}`}>
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
