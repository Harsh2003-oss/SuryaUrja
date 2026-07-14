"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function AboutCTA() {
  return (
    <section className="py-20 bg-green-600">

      <div className="max-w-5xl mx-auto px-6 text-center text-white">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Switch to Solar?
          </h2>

          <p className="mt-6 text-lg text-green-100 leading-8 max-w-3xl mx-auto">
            Whether you're planning for your home, shop, office or industrial
            space, Smart Surya Urja is here to help you choose the right solar
            solution.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-10 bg-white text-green-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Get Free Consultation
            <FaArrowRight />
          </Link>

        </motion.div>

      </div>

    </section>
  );
}