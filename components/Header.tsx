"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./shared/Button";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between px-10 py-3">
      {/* Left nav links */}
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

      {/* Center logo */}
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

      {/* Right user actions */}
      <div className="w-[33%] flex gap-3 items-center justify-end">
        {session ? (
          <>
            <Button>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              title="Logout"
              className="text-white hover:text-red-500 transition-colors"
            >
              <i className="bx bx-log-out text-2xl"></i>
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="on-hover-underline">
              Login
            </Link>
            <Button>
              <Link href="/signup">Get Started</Link>
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
