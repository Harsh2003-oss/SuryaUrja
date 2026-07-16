"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaMapMarkerAlt } from "react-icons/fa";

type Props = {
  title: string;
  image: string;
  description: string;
  location: string;
};

export default function ProjectCard({
  title,
  image,
  description,
  location,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl bg-white border border-green-100 shadow-md hover:shadow-xl transition-all"
    >
      <div className="relative h-72 overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        <div className="absolute bottom-6 left-6">

          <h3 className="text-2xl font-bold text-white">
            {title}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-green-300">

            <FaMapMarkerAlt />

            <span>{location}</span>

          </div>

        </div>

      </div>

      <div className="p-6">

        <p className="text-gray-600 leading-7">
          {description}
        </p>

        <button className="mt-6 flex items-center gap-2 font-semibold text-green-600 group-hover:gap-4 transition-all">

          View Installation

          <FaArrowRight />

        </button>

      </div>
    </motion.div>
  );
}