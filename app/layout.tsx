import type { Metadata } from "next";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";
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
    <html lang="en" className={font.className}>
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased h-full overflow-hidden">
        {" "}
        {/* Removed overflow-y: auto */}
        <div className="fixed inset-0 -z-50">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-950 to-blue-800" />
        </div>
        <ReactLenis root className="h-full overflow-y-auto">
          {" "}
          {/* Added h-full and overflow-y-auto here */}
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
