"use client";

import { motion } from "framer-motion";
import Button from "./shared/Button";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      description: "Perfect for casual tracking",
      features: [
        "Track 1 wallet or token",
        "Wallet info (Balance, Name if known)",
        "Token details (Creation date, name, holders)",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Pro",
      price: "$15",
      description: "Best for active traders",
      features: [
        "Everything in Free",
        "Track 50+ wallets",
        "Website + Discord tracking",
        "Trending token recommendations (24h stats)",
        "Telegram bot channel (coming soon)",
        "Priority support",
      ],
      cta: "Subscribe Now",
      popular: true,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-br from-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Choose the plan that fits your tracking needs
          </motion.p>
        </div>

        <div className="flex-center flex-col md:flex-row gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-xl p-6 border ${
                plan.popular
                  ? "border-purple-500 shadow-purple-500 bg-gradient-to-tr from-purple-950 via-blue-950 to-green-950"
                  : "border-gray-700 bg-gray-800/30"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 -translate-y-1/2 bg-gradient-to-tr from-purple-500 via-blue-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-2xl font-bold ${
                    plan.popular ? "text-purple-400" : "text-white"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-end mt-2">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  {plan.price !== "$0" && (
                    <span className="ml-1 text-gray-400">/month</span>
                  )}
                </div>
                <p className="text-gray-400 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                    : "bg-gray-700 hover:bg-gray-600"
                }`}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
