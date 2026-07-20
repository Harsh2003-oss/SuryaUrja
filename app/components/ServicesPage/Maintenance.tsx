"use client";

import { motion } from "framer-motion";
import {
  FaTools,
  FaClock,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    icon: <FaTools />,
    title: "Routine Check-Up",
    description:
      "Regular inspections help keep your solar system performing efficiently and identify potential issues early.",
  },
  {
    icon: <FaClock />,
    title: "Timely Maintenance",
    description:
      "Prompt maintenance services to ensure smooth operation and maximize the lifespan of your solar system.",
  },
  {
    icon: <FaHeadset />,
    title: "Immediate Assistance",
    description:
      "Need help? Our team is available to guide you and provide quick support whenever required.",
  },
];

export default function Maintenance() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
            MAINTENANCE & SUPPORT
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">
            We're Here Even
            <span className="text-green-600"> After Installation</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            Our commitment doesn't end after installing your solar system.
            We provide reliable support and maintenance to help your system
            perform at its best.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {services.map((service, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl bg-white border border-green-100 shadow-md hover:shadow-xl transition-all p-8"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-white text-2xl">

                {service.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">

                {service.title}

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                {service.description}

              </p>

              <div className="mt-6 flex items-center gap-2 text-green-600 font-medium">

                <FaCheckCircle />

                <span>Reliable Customer Support</span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}