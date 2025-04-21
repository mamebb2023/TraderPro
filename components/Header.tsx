"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Button from "./shared/Button";
import { useSession, signOut } from "next-auth/react";
import Loading from "./shared/Loading";
import { AnimatePresence, motion } from "framer-motion";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const Header = () => {
  const { data: session, status } = useSession();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const page = document.getElementById("page");
    if (!page) return;

    const handleScroll = () => {
      if (page.scrollTop > 150) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    page.addEventListener("scroll", handleScroll);
    return () => page.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      enablePageScroll();
    } else {
      setIsMenuOpen(true);
      disablePageScroll();
    }
  };

  const menuVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0, transition: { delay: 0.5 } },
  };

  const menuContentVariants = {
    initial: {
      clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)",
    },
    animate: {
      clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)",
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
    exit: {
      clipPath: "polygon(100% 0, 100% 0%, 100% 100%, 100% 100%)",
      transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-7 lg:px-10 transition-all duration-300 ${
        isScrolled ? "py-2 backdrop-blur-xs bg-black/5" : "py-4 bg-transparent"
      }`}
    >
      {/* Left nav links (desktop) */}
      <div className="hidden md:flex w-[33%] gap-4 items-center">
        <Link href="/#features" className="on-hover-underline">
          Features
        </Link>
        <Link href="/#how-it-works" className="on-hover-underline">
          How It Works
        </Link>
        <Link href="/#pricing" className="on-hover-underline">
          Pricing
        </Link>
      </div>

      {/* Center logo (desktop/mobile) */}
      <div className="md:w-[33%] flex-center md:border-l md:border-r md:border-gray-500/50">
        <Link href="/">
          <Image
            src="/tp-logo-white.png"
            alt="TrackerPro"
            width={isScrolled ? 40 : 50}
            height={isScrolled ? 40 : 50}
            className="hover:scale-105 transition-all duration-500"
          />
        </Link>
      </div>

      {/* Right user actions (desktop)*/}
      <div className="hidden w-[33%] md:flex gap-3 items-center justify-end">
        {status === "loading" ? (
          <Loading />
        ) : session ? (
          <>
            <Button>
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              title="Logout"
              className="text-white hover:text-red-500 transition-colors"
            >
              <i className="bx bx-log-out"></i>
            </button>
          </>
        ) : (
          <>
            <Link href="/connect-wallet" className="on-hover-underline">
              Login
            </Link>
            <Button>
              <Link href="/signup">Get Started</Link>
            </Button>
          </>
        )}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-2 cursor-pointer">
          <i className="bx bx-menu-alt-right" />
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={menuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="z-10 fixed top-0 left-0 bg-black/60 h-screen w-screen flex justify-end"
            >
              <motion.div
                variants={menuContentVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="w-2/3 h-full bg-gradient-to-tr from-purple-dino-dark via-ocean-blue-dark to-surge-green-dark flex flex-col"
              >
                <div className="flex item-center justify-end p-1">
                  <button onClick={toggleMenu} className="p-2 cursor-pointer">
                    <i className="bx bx-x" />
                  </button>
                </div>

                <div className="flex-grow flex items-end">
                  <div className="flex flex-col gap-1 p-5 items-start">
                    <Link
                      href="/"
                      onClick={toggleMenu}
                      className="on-hover-underline text-xl"
                    >
                      Home
                    </Link>
                    <Link
                      href="/#features"
                      onClick={toggleMenu}
                      className="on-hover-underline text-xl"
                    >
                      Features
                    </Link>
                    <Link
                      href="/#how-it-works"
                      onClick={toggleMenu}
                      className="on-hover-underline text-xl"
                    >
                      How It Works
                    </Link>
                    <Link
                      href="/#pricing"
                      onClick={toggleMenu}
                      className="on-hover-underline text-xl"
                    >
                      Pricing
                    </Link>
                  </div>
                </div>

                <div className="flex-center gap-3 bg-white/30 p-4 m-4 rounded-md">
                  {status === "loading" ? (
                    <Loading />
                  ) : session ? (
                    <>
                      <Button>
                        <Link href="/dashboard">Dashboard</Link>
                      </Button>
                      <button
                        onClick={() => signOut({ callbackUrl: "/" })}
                        title="Logout"
                        className="hover:text-red-500 transition"
                      >
                        <i className="bx bx-log-out"></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline">
                        <Link href="/connect-wallet">Login</Link>
                      </Button>
                      <Button>
                        <Link href="/signup">Get Started</Link>
                      </Button>
                    </>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
