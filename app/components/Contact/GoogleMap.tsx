"use client";

import { motion } from "framer-motion";

export default function GoogleMap() {
  return (
    <section className="py-16 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            FIND US
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Visit Our Office
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            You're always welcome to visit our office for a free consultation
            about rooftop solar solutions.
          </p>

        </motion.div>

        <div className="mt-10 overflow-hidden rounded-3xl shadow-xl border border-green-100">

          <iframe
            src="https://www.google.com/maps?q=26.676,88.435&z=16&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            style={{ border: 0 }}
            allowFullScreen
          ></iframe>

        </div>

      </div>

    </section>
  );
}