"use client";

import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[90%] max-w-4xl h-[300px] rounded-3xl bg-gradient-to-br from-purple-500 via-blue-500 to-green-500 opacity-40 blur-2xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex-center flex-col bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl p-10 text-center text-white"
        >
          <p className="text-sm font-bold uppercase tracking-wider mb-2 text-transparent bg-clip-text bg-gradient-to-br from-purple-500 via-blue-500 to-green-500">
            TrackerPro
          </p>
          <h2 className="text-4xl font-extrabold mb-4 text-white">
            Stay Ahead with Real-Time Alerts
          </h2>
          <p className="text-lg text-blue-900 mb-6">
            Monitor wallets, get instant notifications, and never miss a move on
            the Solana blockchain.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border border-white text-white px-6 py-3 rounded-xl hover:bg-white/10 transition">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
