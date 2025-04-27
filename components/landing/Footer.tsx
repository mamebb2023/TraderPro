"use client";

import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    { name: "Instagram", icon: "bx bxl-instagram", href: "#" },
    { name: "Telegram", icon: "bx bxl-telegram", href: "#" },
    { name: "Discord", icon: "bx bxl-discord-alt", href: "#" },
  ];

  return (
    <footer className="w-full border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo + Description */}
          <div className="md:col-span-4 flex-grow">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/tp-logo-white-md.png"
                alt="TrackerPro"
                width={60}
                height={60}
                className="flex-shrink-0"
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                TrackerPro
              </span>
            </div>
            <p className="text-gray-400">
              Professional Solana wallet tracking platform
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links - Right-aligned */}
          <div className="md:col-span-3 md:col-start-10">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
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

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} TrackerPro. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-gray-300 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-gray-500 hover:text-gray-300 text-sm"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
