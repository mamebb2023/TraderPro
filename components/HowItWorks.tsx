"use client";

import { motion } from "framer-motion";
import Button from "./shared/Button";

const HowItWorks = () => {
  const steps = [
    {
      title: "Secure Wallet Login",
      description: "Connect your Solana wallet with one click",
      icon: "bx bxs-lock",
      accent: "from-purple-500 to-indigo-500",
      borderColor: "border-purple-700/50",
      shadowColor: "shadow-purple-500",
      bgGradient: "bg-gradient-to-br from-purple-500 to-indigo-500",
    },
    {
      title: "Add Tracking Targets",
      description: "Paste any wallet address",
      icon: "bx bx-plus",
      accent: "from-blue-500 to-emerald-500",
      borderColor: "border-blue-700/50",
      shadowColor: "shadow-blue-500",
      bgGradient: "bg-gradient-to-br from-blue-500 to-emerald-500",
    },
    {
      title: "Real-Time Alerts",
      description: "Get notifications in our website or Discord",
      icon: "bx bxs-bell-ring",
      accent: "from-amber-500 to-pink-500",
      borderColor: "border-amber-700/50",
      shadowColor: "shadow-amber-500",
      bgGradient: "bg-gradient-to-br from-amber-500 to-pink-500",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative py-24 bg-gradient-to-b from-gray-900 to-black overflow-hidden"
    >
      {/* Floating gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          transition: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          },
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-900/10 rounded-full filter blur-[90px]"
      />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              Effortless Monitoring
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Track any Solana wallet in three simple steps
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                type: "spring",
                damping: 10,
              }}
              viewport={{ once: true }}
              className="group"
            >
              <div
                className={`h-full backdrop-blur-lg rounded-2xl border ${step.borderColor} p-8 transition-all duration-300 hover:border-transparent bg-gradient-to-br from-gray-900/20 via-gray-700/10 to-gray-800/5 hover:scale-[101%] shadow-md hover:${step.shadowColor}`}
              >
                {/* Step number */}
                <div
                  className={`absolute -top-5 -left-5 flex items-center justify-center w-20 h-20 rounded-full ${step.bgGradient} text-white font-bold text-2xl`}
                >
                  {index + 1}
                </div>

                {/* Icon and content */}
                <div className="relative flex justify-between gap-3 pt-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-white mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{step.description}</p>
                  </div>

                  <div
                    className={`flex-shrink-0 w-16 h-16 rounded-2xl ${step.bgGradient} text-white p-3 shadow-lg flex items-center justify-center`}
                  >
                    <i className={`bx ${step.icon} text-2xl`} />
                  </div>
                </div>

                {/* Image placeholder - replace with Next/Image */}
                <div className="relative h-48 rounded-xl overflow-hidden border border-gray-700/50 group-hover:border-gray-600/50 transition-all mt-4">
                  <div className="absolute inset-0 bg-gray-900/50 flex items-center justify-center text-gray-500">
                    [Step {index + 1} Screenshot]
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          viewport={{ once: true }}
          className="mt-20 flex justify-center"
        >
          <Button className="px-10 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Start Tracking Today →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
