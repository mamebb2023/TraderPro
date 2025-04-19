import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./shared/Button";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-10 py-3">
      <div className="w-[33%] flex gap-4 items-center">
        <Link href="/#pricing" className="on-hover-underline">
          Pricing
        </Link>
        <Link href="/#how-it-works" className="on-hover-underline">
          How It Works
        </Link>
        <Link href="/#features" className="on-hover-underline">
          Features
        </Link>
      </div>

      <div className="w-[33%] flex-center border-l border-r border-gray-500/50">
        <Link href="/">
          <Image
            src="/tp-logo-white.png"
            alt="TrackerPro"
            width={50}
            height={50}
            className="hover:scale-105 transition-all duration-500"
          />
        </Link>
      </div>

      <div className="w-[33%] flex gap-2 items-center justify-end">
        <Link href="/login" className="on-hover-underline">
          Login
        </Link>
        <Button className="w-36 h-10">
          <Link href="/signup" className="">
            Get Started
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Header;
