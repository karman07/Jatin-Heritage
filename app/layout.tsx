import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Heritage Construction | Built On Trust. Crafted To Last.",
  description:
    "Heritage Construction — 5+ years framing, drywall, paint, tile, flooring, bathroom & basement renovation, decks and fencing. Proudly serving London, Ontario and the surrounding area, Canada.",
  openGraph: {
    title: "Heritage Construction | Built On Trust. Crafted To Last.",
    description:
      "Full-service construction and renovation serving London, Ontario and the surrounding area. Built on trust. Crafted to last.",
    images: ["/images/banner.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
