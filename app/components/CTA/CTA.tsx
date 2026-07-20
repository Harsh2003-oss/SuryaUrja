"use client";

import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
      import Link from "next/link";

export default function CTA() {
  return (
    <section className="relative py-20 overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-600 to-green-500"></div>

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-white/10 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-yellow-300/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-block rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
            READY TO GO SOLAR?
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
            Start Saving on Your
            <br />
            Electricity Bills Today
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-green-100 leading-8">
            Whether you're planning solar for your home, shop or
            business, Smart Surya Urja is here to help you choose
            the right solution with expert guidance and
            professional installation.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <button className="flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-green-700 shadow-lg transition hover:scale-105">

              Get Free Quote

              <FaArrowRight />

            </button>

            <Link
href="/contact"
             className="flex items-center gap-3 rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700">

              <FaPhoneAlt />

              Contact Us

            
</Link>
          </div>

        </motion.div>

      </div>

    </section>
  );
}