"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sun,
  BadgeCheck,
  Wrench,
  IndianRupee,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "MNRE Approved",
    desc: "Government compliant solar solutions.",
  },
  {
    icon: Sun,
    title: "Premium Panels",
    desc: "High efficiency solar technology.",
  },
  {
    icon: BadgeCheck,
    title: "25 Year Warranty",
    desc: "Long-term performance guarantee.",
  },
  {
    icon: Wrench,
    title: "Expert Installation",
    desc: "Professional installation team.",
  },
  {
    icon: IndianRupee,
    title: "Subsidy Assistance",
    desc: "Help with government subsidy process.",
  },
  {
    icon: Headphones,
    title: "Lifetime Support",
    desc: "Maintenance and customer support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center">
          Why Choose
          <span className="text-green-600">
            {" "}Smart Solar Urja
          </span>
        </h2>

        <p className="text-center text-gray-600 mt-4 mb-14">
          Reliable solar solutions designed for long-term savings.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                className="
                p-8
                rounded-2xl
                border
                hover:border-green-500
                hover:shadow-xl
                transition
                "
              >
                <Icon
                  size={40}
                  className="text-green-600 mb-4"
                />

                <h3 className="text-xl font-bold mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}