import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import "lenis/dist/lenis.css";
import ReactLenis from "lenis/react";

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
      <body className={`${font.className} antialiased`}>
        {/* Gradient background element */}
        <div className="fixed inset-0 -z-50">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-blue-950" />
        </div>

        <ReactLenis root>
          {children}
          <Toaster />
        </ReactLenis>
      </body>
    </html>
  );
}
