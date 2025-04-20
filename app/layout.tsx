import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";

const font = Funnel_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { template: "%s | TrackerPro", default: "TrackerPro" },
  description: "TrackerPro is a powerful wallet tracker for Solana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
