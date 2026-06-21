"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full font-medium mb-5">
            Smart Solar Solutions
          </span>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight">
            Power Your Future
            <span className="block text-green-600">
              With Clean Energy
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Save money on electricity bills with reliable and affordable
            solar solutions for homes, businesses and industries.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg transition">
              Get Free Quote
            </button>

            <button className="border border-green-600 text-green-600 px-8 py-3 rounded-lg hover:bg-green-50 transition">
              Learn More
            </button>
          </div>

          <div className="flex gap-8 mt-10">
            <div>
              <h3 className="text-2xl font-bold">25+</h3>
              <p className="text-gray-500">Years Lifespan</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">70%</h3>
              <p className="text-gray-500">Bill Savings</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">100%</h3>
              <p className="text-gray-500">Green Energy</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="w-[450px] h-[350px] rounded-3xl bg-gradient-to-br from-green-100 to-yellow-100 shadow-xl flex items-center justify-center">
            <div className="text-center">
              <div className="text-7xl animate-pulse">☀️</div>

              <h3 className="text-xl font-semibold mt-4">Solar Energy</h3>

              <p className="text-gray-600 mt-2">
                Clean • Affordable • Sustainable
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}