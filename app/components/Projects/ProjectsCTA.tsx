"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function ProjectsCTA() {
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
            Let's Power Your Property with Solar
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-green-100 leading-8">
            Whether it's a home, shop, office or industrial property,
            Smart Surya Urja is ready to help you make the switch to clean and
            cost-effective solar energy.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-3 mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-green-600 transition hover:bg-gray-100"
          >
            Get Free Consultation
            <FaArrowRight />
          </Link>

        </motion.div>

      </div>

    </section>
  );
}