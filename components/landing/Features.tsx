"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      title: "Track Solana Wallets",
      description:
        "TrackerPro monitors multiple wallets with real-time updates on transactions",
      icon: "bx-wallet",
    },
    {
      title: "Fast Notification Alerts",
      description:
        "Get instant alerts for important wallet activity with TrackerPro",
      icon: "bx-bell",
    },
    {
      title: "Beautiful Notification UI",
      description: "Clean, intuitive interface for reciving alerts",
      icon: "bx-message-square",
    },
    {
      title: "Get Any Wallet Info",
      description:
        "Access detailed information about any Solana coin, including token balances and transaction history",
      icon: "bx-info-circle",
    },
    {
      title: "Discord Integration",
      description: "Receive notifications in our TrackerPro Discord server",
      icon: "bxl-discord-alt",
    },
    {
      title: "Telegram Bot Integration",
      description: "Get wallet updates through Telegram messages",
      icon: "bxl-telegram",
      comingSoon: true,
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: feature.comingSoon ? 0.6 : 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border ${
                feature.comingSoon
                  ? "border-gray-700/50"
                  : "border-transparent hover:border-purple-500/30"
              } transition-all duration-300`}
            >
              <div className="flex items-start">
                <div
                  className={`p-3 rounded-lg ${
                    feature.comingSoon
                      ? "bg-gray-700/50 text-gray-400"
                      : "bg-purple-600/10 text-purple-400"
                  }`}
                >
                  <i className={`bx ${feature.icon} text-2xl`} />
                </div>
                <div className="ml-4">
                  <h3
                    className={`text-xl font-semibold ${
                      feature.comingSoon ? "text-gray-400" : "text-white"
                    }`}
                  >
                    {feature.title}
                    <br />
                    {feature.comingSoon && (
                      <span className="ml-2 text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                        Coming Soon
                      </span>
                    )}
                  </h3>
                  <p
                    className={`mt-2 ${
                      feature.comingSoon ? "text-gray-500" : "text-gray-300"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
