"use client";

import { motion } from "framer-motion";
import Button from "../shared/Button";
import { why } from "@/constants";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="relative py-10 md:py-14 lg:py-20 bg-white overflow-hidden"
    >
      {/* Floating elements */}
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
      {/* Floating elements */}
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

      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Why Choose Us?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The most comprehensive Solana wallet tracking solution
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-5 relative z-10">
          {why.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
              }}
              viewport={{ once: true }}
              className="w-[250px]"
            >
              <div className="h-full p-6 rounded-2xl bg-white border border-purple-200 hover:border-transparent shadow-sm hover:shadow-md transition-all">
                <div
                  className={`w-14 h-14 ${feature.bgColor} ${feature.color} rounded-xl flex items-center justify-center mb-4`}
                >
                  <i className={`bx ${feature.icon} text-2xl`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                  <br />
                  {feature.comingSoon && (
                    <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  )}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, type: "spring" }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <Button>Join Our Discord →</Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
