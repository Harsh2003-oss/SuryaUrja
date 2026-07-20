"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-green-600">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Switch to Solar?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-green-100">
            Whether you're planning a solar system for your home, business or industrial property, Smart Surya Urja is here to help you choose the right solution.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-green-600 transition hover:bg-gray-100"
          >
            Get Free Consultation
            <FaArrowRight />
          </Link>

        </motion.div>

      </div>

    </section>
  );
}