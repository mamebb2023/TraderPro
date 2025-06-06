"use client";

import { features } from "@/constants";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section
      id="features"
      className="relative py-20 bg-gradient-to-b from-black via-gray-950 to-black"
    >
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          transition: {
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/60 rounded-full filter blur-[90px]"
      />
      <motion.div
        animate={{
          x: [0, -100, 0],
          y: [0, 50, 0],
          transition: {
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/60 rounded-full filter blur-[90px]"
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 mb-4"
          >
            Powerful Tracking Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Everything you need to monitor your Solana wallets effectively
          </motion.p>
        </div>

        <div className="flex justify-center flex-wrap gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative z-5 p-5 w-80 rounded-lg border transition-all duration-300 hover:border-transparent`}
              style={{
                background: `linear-gradient(to bottom right, black, ${feature.bgcolor}, black)`,
                borderColor: feature.bgcolor,
                color: feature.color,
              }}
            >
              <div className="flex-center flex-col gap-1">
                <div
                  className={`flex-center border-t border-l p-3 rounded-full`}
                  style={{ borderColor: feature.color }}
                >
                  <i className={`bx ${feature.icon} text-2xl`} />
                </div>
                <h3 className={`text-xl font-semibold`}>{feature.title}</h3>
                <p className={`mt-2 text-gray-400 text-center`}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
