"use client";

import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Dashboard", href: "/dashboard" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: "bx bxl-instagram",
      href: "https://instagram.com",
    },
    { name: "Telegram", icon: "bx bxl-telegram", href: "https://telegram.org" },
    {
      name: "Discord",
      icon: "bx bxl-discord-alt",
      href: "https://discord.com",
    },
  ];

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-3xl mx-4 md:mx-8 lg:mx-16 my-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          {/* Logo section (left) */}
          <div className="flex flex-col items-start">
            <Link href="/" className="mb-6">
              <Image
                src="/tp-logo-white.png"
                alt="TrackerPro"
                width={60}
                height={60}
                className="hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-gray-400 max-w-xs">
              The most powerful Solana wallet tracking platform for professional
              traders.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-white mb-2">
              Connect With Us
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                >
                  <i className={social.icon} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TrackerPro. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-gray-300 text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
