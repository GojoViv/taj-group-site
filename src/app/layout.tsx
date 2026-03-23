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
  title: "TAJ Corporation | Enduring Legacy. Institutional Leadership. Global Enterprise.",
  description:
    "TAJ Corporation — a long-term, values-driven global enterprise combining generational wisdom with modern execution. Founded by Late Mr. K. Tajudeen, led today by Mohamed Faizal Taj across 7 business platforms spanning India, Malaysia, Singapore and Dubai.",
  keywords: [
    "TAJ Corporation",
    "TAJ Group",
    "Faizal Taj",
    "Mohamed Faizal Taj",
    "K. Tajudeen",
    "Dr. T. Saleem Basha",
    "Taj Business Hub",
    "South India Shipping",
    "Taj Realtors",
    "Globe Locks",
    "DFO Direct Factory Outlet",
    "AABCD Asia Africa Business Corridor",
    "Taj Global Village",
    "India",
    "Malaysia",
    "Singapore",
    "Dubai",
    "Global Enterprise",
  ],
  openGraph: {
    title: "TAJ Corporation | Enduring Legacy. Institutional Leadership. Global Enterprise.",
    description:
      "Three generations of trust. Seven business platforms. One enduring vision. TAJ Corporation — rooted in India, built for the world.",
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
