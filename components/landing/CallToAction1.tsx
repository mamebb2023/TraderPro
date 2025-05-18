"use client";

import { motion } from "framer-motion";
import Button from "../shared/Button";
import Link from "next/link";
import { DISCORD_INVITE_LINK } from "@/constants";

const CallToAction = () => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            transition: {
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600/10 rounded-full filter blur-[80px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            transition: {
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-600/10 rounded-full filter blur-[90px]"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-6"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-400 to-purple-600">
            Track
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
            Any Solana Wallet
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto"
        >
          Monitor transactions, token balances, and coin movements for any
          wallet address. Perfect for tracking competitors, influencers, or
          project treasuries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
            <Link href={DISCORD_INVITE_LINK} target="_blank">
          <Button>
              Start Tracking Now
          </Button>
            </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
