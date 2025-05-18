"use client";

import { links, socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="flex justify-center py-5 md:py-7">
      <div
        className="w-full max-w-[90%] px-4 sm:px-6 md:px-8 rounded-3xl py-4"
        style={{
          background:
            "linear-gradient(to bottom right, #000, #000, #300030, #000030, rgb(0, 54, 7))",
        }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 py-6">
          <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <Image
                src="/tp-logo-white.png"
                alt="TrackerPro"
                width={50}
                height={50}
                className="flex-shrink-0"
              />
              <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text">
                TrackerPro
              </p>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Stay ahead of the Solana market with real-time wallet tracking and
              instant alerts.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-grow flex flex-col items-center md:items-start">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${getSocialColor(
                    social.name
                  )} p-2 rounded-full flex items-center justify-center hover:scale-105 transition-transform`}
                  aria-label={social.name}
                >
                  <i className={social.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 py-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-xs text-gray-500">
          <p className="mb-2 sm:mb-0">
            © {new Date().getFullYear()} TrackerPro
          </p>
          {/* Uncomment when ready */}
          {/* 
          <div className="flex gap-2">
            <Link href="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link>
            <span>|</span>
            <Link href="/terms-and-conditions" className="hover:text-gray-300">Terms</Link>
          </div>
          */}
        </div>
      </div>
    </section>
  );
};

// Helper function for social media colors
function getSocialColor(platform: string) {
  switch (platform.toLowerCase()) {
    case "twitter":
      return "bg-blue-500 hover:bg-blue-600";
    case "discord":
      return "bg-indigo-600 hover:bg-indigo-700";
    case "telegram":
      return "bg-blue-600 hover:bg-blue-700";
    case "github":
      return "bg-gray-800 hover:bg-gray-900";
    default:
      return "bg-purple-600 hover:bg-purple-700";
  }
}

export default Footer;
