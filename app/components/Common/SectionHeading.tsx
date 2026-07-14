"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  badge: string;
  title: string;
  highlight?: string;
  description: string;
};

export default function SectionHeading({
  badge,
  title,
 highlight,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <span className="inline-flex items-center rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-green-700">
        {badge}
      </span>

      <h2 className="mt-5 text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
        {title}

        {highlight && (
          <span className="text-green-600">
            {" "}
            {highlight}
          </span>
        )}
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-gray-600">
        {description}
      </p>
    </motion.div>
  );
}