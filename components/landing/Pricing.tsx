"use client";

import { motion } from "framer-motion";
import Button from "../shared/Button";
import { DISCORD_INVITE_LINK, plans } from "@/constants";
import Link from "next/link";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="relative py-20 bg-gradient-to-t from-transparent to-purple-950/20"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-tr from-purple-500 to-blue-500 mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
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
              className={`relative rounded-xl p-6 w-full ${
                plan.popular
                  ? "shadow-lg border-purple-200 bg-gradient-to-tr from-purple-600 via-blue-600 to-green-600 text-white"
                  : "border border-gray-800 bg-gray-900 text-gray-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 -translate-y-1/2  bg-gradient-to-tr from-purple-600 via-blue-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Best Value
                </div>
              )}

              <div className="mb-6">
                <div className="font-bold flex justify-start items-center">
                  {plan.name === "Free" ? (
                    plan.name
                  ) : (
                    <div className="bg-white px-1 rounded-md">
                    <span className="bg-clip-text bg-gradient-to-tr from-purple-500 via-blue-500 to-green-500 text-transparent">
                      {plan.name}
                    </span>
                    </div>
                  )}
                </div>
                <div className="flex items-end mt-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "$0" && (
                    <span
                      className={`ml-1 ${
                        plan.popular ? "text-blue-100" : "text-gray-500"
                      }`}
                    >
                      /month
                    </span>
                  )}
                </div>
                <p
                  className={`mt-2 ${
                    plan.popular ? "text-blue-100" : "text-gray-400"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <i className="bx bx-check text-purple-200"></i>
                    <span
                      className={plan.popular ? "text-white" : "text-gray-300"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href={DISCORD_INVITE_LINK} target="_blank">
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-white text-blue-600 hover:bg-gray-100"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
