"use client";

import { motion } from "framer-motion";
import Button from "../shared/Button";
import { plans } from "@/constants";

const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
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
                  ? "shadow-lg bg-gradient-to-tr from-purple-600 via-blue-600 to-green-600 text-white"
                  : "border-gray-200 bg-gray-100 text-gray-800"
              } w-full`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-6 -translate-y-1/2  bg-gradient-to-tr from-purple-600 via-blue-500 to-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  Best Value
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold">{plan.name}</h3>
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
                    plan.popular ? "text-blue-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <svg
                      className={`h-5 w-5 mt-0.5 mr-2 flex-shrink-0 ${
                        plan.popular ? "text-blue-200" : "text-green-500"
                      }`}
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
                    <span
                      className={plan.popular ? "text-white" : "text-gray-700"}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 hover:bg-blue-700 text-white"
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
