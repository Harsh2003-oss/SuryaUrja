"use client";

import { motion } from "framer-motion";
import { FaBullseye, FaEye } from "react-icons/fa";
import SectionHeading from "../Common/SectionHeading";

export default function MissionVision() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          badge="MISSION & VISION"
          title="Driven by Purpose,"
          highlight="Focused on the Future"
          description="At Smart Surya Urja, our mission and vision guide every project we undertake, helping us deliver dependable solar solutions with honesty and quality."
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-14">

          {/* Mission Card */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-8 shadow-md hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-green-600 text-white flex items-center justify-center text-3xl">
              <FaBullseye />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Our Mission
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              To provide reliable, affordable and efficient rooftop solar
              solutions for homes, businesses and industries while ensuring
              professional installation, transparent pricing and dependable
              customer support.
            </p>
          </motion.div>

          {/* Vision Card */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            className="rounded-3xl border border-green-100 bg-gradient-to-br from-yellow-50 to-white p-8 shadow-md hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 rounded-2xl bg-yellow-500 text-white flex items-center justify-center text-3xl">
              <FaEye />
            </div>

            <h3 className="mt-6 text-3xl font-bold text-gray-900">
              Our Vision
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              To become one of the most trusted solar energy providers in
              Siliguri and North Bengal by helping more families and
              businesses adopt clean, sustainable and cost-effective energy
              solutions.
            </p>
          </motion.div>

        </div>

      </div>

    </section>
  );
}