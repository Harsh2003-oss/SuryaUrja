"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

type ServiceCardProps = {
  title: string;
  image: string;
  description: string;
  features: string[];
};

export default function ServiceCard({
  title,
  image,
  description,
  features,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-green-100 bg-white shadow-md hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}

      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Gradient Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Title */}

        <h3 className="absolute bottom-5 left-5 text-3xl font-bold text-white">
          {title}
        </h3>
      </div>

      {/* Content */}

      <div className="p-6">

        <p className="text-gray-600 leading-7">
          {description}
        </p>

        {/* Features */}

        <div className="mt-6 space-y-3">

          {features.map((item, index) => (

            <div
              key={index}
              className="flex items-center gap-3"
            >
              <FaCheckCircle className="text-green-600" />

              <span className="text-gray-700">
                {item}
              </span>

            </div>

          ))}

        </div>

        {/* Button */}

        <button className="mt-8 flex items-center gap-2 text-green-600 font-semibold group-hover:gap-4 transition-all duration-300">

          Learn More

          <FaArrowRight />

        </button>

      </div>
    </motion.div>
  );
}