"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "../shared/Button";
import { DISCORD_INVITE_LINK } from "@/constants";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const gradientVariants = {
  hidden: { backgroundPosition: "0% 50%" },
  visible: {
    backgroundPosition: "100% 50%",
    transition: {
      duration: 8,
      repeat: Infinity,
      repeatType: "reverse" as "reverse",
      ease: "linear",
    },
  },
};

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32"
      >
        {/* Logo */}
        <motion.div
          variants={itemVariants}
          className="mb-8 w-24 h-24 flex items-center justify-center rounded-2xl p-4"
        >
          <Image
            src="/tp-logo-white.png"
            alt="Solana Tracker Pro"
            width={80}
            height={80}
            draggable={false}
            className="hover:scale-105 transition-transform duration-300"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-purple-600">
            Track{" "}
          </span>
          <motion.span
            variants={gradientVariants}
            className="font-bold bg-clip-text text-transparent bg-[length:300%_100%] bg-gradient-to-r from-purple-dino via-ocean-blue to-surge-green"
          >
            SOLANA
          </motion.span>{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-400 to-white">
            Wallets
          </span>
          <br />
          <motion.span variants={itemVariants} className="text-purple-400">
            Like A Pro Trader
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-400 max-w-2xl mb-8"
        >
          Monitor transactions, analyze portfolio performance, and get real-time
          alerts for wallet transactions - all in one powerful server.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex gap-4 mb-12">
          <Link href={DISCORD_INVITE_LINK} target="_blank">
            <Button>Start Tracking</Button>
          </Link>
          <Link href="/#features">
            <Button variant="outline">See How It Works</Button>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          className="flex flex-wrap items-center justify-center md:justify-start gap-8 text-center"
        >
          {[
            { value: "1,000+", label: "Wallets Tracked" },
            { value: "$20M+", label: "Assets Monitored" },
            { value: "24/7", label: "Real-time Updates" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              custom={index}
              className="px-4"
            >
              <div className="text-3xl font-bold text-purple-400">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating SOL coins animation */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3],
          transition: {
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute top-1/4 left-1/4 opacity-30"
      >
        <Image
          src="/sol-icon.png"
          draggable={false}
          width={40}
          height={40}
          alt="SOL"
        />
      </motion.div>

      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.5, 0.2],
          transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          },
        }}
        className="absolute top-1/3 right-1/4 opacity-20"
      >
        <Image
          src="/sol-icon.png"
          draggable={false}
          width={30}
          height={30}
          alt="SOL"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
