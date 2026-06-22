import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3020"),
  title: {
    default: `${business.name} – ${business.tagline}`,
    template: `%s | ${business.name}`,
  },
  description: business.description,
  keywords: [...business.seoKeywords],
  authors: [{ name: business.owner }],
  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "http://localhost:3020",
    siteName: business.name,
    title: `${business.name} – ${business.tagline}`,
    description: business.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${business.name} – ${business.tagline}`,
    description: business.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "http://localhost:3020",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className={`${dmSans.variable} h-full`}>
      <head>
        <JsonLd />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
