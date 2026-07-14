"use client";

import { motion } from "framer-motion";
import FAQItem from "./FAQItem";
import { faqs } from "./faqData";

export default function FAQ() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold text-sm">
            FAQs
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about solar
            installation, savings, subsidy and maintenance.
          </p>

        </motion.div>

        <div className="mt-12 space-y-5">

          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}

        </div>

      </div>

    </section>
  );
}