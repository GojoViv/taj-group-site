import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Faizal Taj | Director, TAJ Group of Companies",
  description:
    "Faizal Taj — Director of TAJ Group of Companies. Third-generation family business operating across Malaysia, Singapore, Dubai, and Chennai. Advisory consulting, fund management, international logistics, and global ventures.",
  keywords: [
    "Faizal Taj",
    "TAJ Group",
    "TAJ Group of Companies",
    "Advisory Consulting",
    "Fund Management",
    "International Logistics",
    "Malaysia",
    "Singapore",
    "Dubai",
    "Chennai",
    "Global Business",
  ],
  openGraph: {
    title: "Faizal Taj | Director, TAJ Group of Companies",
    description:
      "Third-generation family business. Pioneering cross-country brands, concepts, products, and ventures globally.",
    type: "website",
    url: "https://tajgroup.in",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#0a0c14] text-white antialiased">{children}</body>
    </html>
  );
}
