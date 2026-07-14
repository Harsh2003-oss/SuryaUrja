"use client";

import { motion } from "framer-motion";
import CalculatorCard from "./CalculatorCard";
import SubsidyCard from "./SubsidyCard";

export default function CalculatorSection() {
  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-b from-white via-green-50 to-white">

      {/* Background Decorations */}

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-green-200/20 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-yellow-200/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold text-sm">
            SOLAR SAVINGS
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            Savings &
            <span className="text-green-600">
              {" "}Government Subsidy
            </span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
            Estimate your potential savings with rooftop solar and
            learn how Smart Surya Urja can guide you through the
            available government subsidy process.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-stretch">

          <CalculatorCard />

          <SubsidyCard />

        </div>

      </div>
    </section>
  );
}