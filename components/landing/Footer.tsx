"use client";

import { links, socialLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo + Description */}
          <div className="md:col-span-4 flex-grow">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/tp-logo-black.png"
                alt="TrackerPro"
                width={60}
                height={60}
                className="flex-shrink-0"
              />
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text">
                TrackerPro
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links - Right-aligned */}
          <div className="md:col-span-3 md:col-start-10">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <div key={social.name}>
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${getSocialColor(
                      social.name
                    )} text-white p-3 rounded-full flex items-center justify-center text-xl hover:shadow-lg transition-all`}
                    aria-label={social.name}
                  >
                    <i className={social.icon} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            ©2024 - {new Date().getFullYear()} TrackerPro. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper function for social media colors
function getSocialColor(platform: string) {
  switch (platform.toLowerCase()) {
    case "twitter":
      return "bg-blue-400";
    case "discord":
      return "bg-indigo-500";
    case "telegram":
      return "bg-blue-500";
    case "github":
      return "bg-gray-700";
    case "medium":
      return "bg-green-500";
    default:
      return "bg-purple-500";
  }
}

export default Footer;
