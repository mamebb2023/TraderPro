"use client";

import { links } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import Button from "../shared/Button";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header when scrolling up or at top
      if (currentScrollY < lastScrollY.current || currentScrollY < 100) {
        setIsScrolled(false);
      }
      // Hide header when scrolling down
      else if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsScrolled(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    hidden: {
      y: "-100%",
      opacity: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.95,
    },
  };

  return (
    <AnimatePresence>
      {!isScrolled && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={headerVariants}
          className="fixed top-0 left-0 right-0 z-50 py-4 flex-center"
        >
          <motion.div className="w-[90%] md:w-[80%] lg:w-[70%] px-10 py-2 flex items-center justify-between bg-glass rounded-full transition-all">
            <Link href="/">
              <motion.div
                whileHover="hover"
                whileTap="tap"
                variants={linkVariants}
              >
                <Image
                  src="/tp-logo-black.png"
                  alt="TrackerPro"
                  width={40}
                  height={40}
                  className="transition-all duration-500"
                />
              </motion.div>
            </Link>

            <div className="hidden lg:flex gap-2 items-center">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="on-hover-underline"
                >
                  <motion.div
                    whileHover="hover"
                    whileTap="tap"
                    variants={linkVariants}
                    className="px-3 py-1"
                  >
                    {link.name}
                  </motion.div>
                </Link>
              ))}
            </div>

            <Link href="/">
              <Button>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.span>
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Header;
