"use client";

import { motion } from "framer-motion";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50 via-white to-white py-20">

      {/* Background Decorations */}

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-green-200/20 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow-200/20 blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            OUR SERVICES
          </span>

          <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Complete Solar Solutions
            <span className="text-green-600">
              {" "}for Homes & Businesses
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            Smart Surya Urja provides reliable solar solutions for homes,
            commercial establishments and industrial properties across
            Siliguri and nearby areas, along with dependable maintenance
            and customer support.
          </p>

        </motion.div>

      </div>

    </section>
  );
}