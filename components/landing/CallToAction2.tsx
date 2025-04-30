"use client";

import { motion } from "framer-motion";
import Button from "../shared/Button";

const CallToAction = () => {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden">
      {/* Animated SOL background elements */}
      <motion.div
        animate={{
          rotate: 360,
          transition: {
            duration: 120,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute -left-20 -top-20 w-64 h-64 bg-blue-900/10 rounded-full filter blur-[80px]"
      />

      <motion.div
        animate={{
          rotate: -360,
          transition: {
            duration: 150,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute -right-20 -bottom-20 w-72 h-72 bg-purple-900/10 rounded-full filter blur-[90px]"
      />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-purple-500 mb-4">
            Stop guessing.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Start tracking.
            </span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Join{" "}
            <span className="text-purple-400 font-medium">1,200+ traders</span>{" "}
            who track wallets smarter
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button>Start Free Trial</Button>
          <Button variant="outline">
            <span className="flex items-center gap-2">
              <i className="bx bxl-discord-alt text-xl" />
              Join Discord
            </span>
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-wrap justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2">
            <i className="bx bx-time-five text-purple-400" />
            <span>30-second setup</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
