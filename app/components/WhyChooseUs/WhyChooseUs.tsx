"use client";

import { motion } from "framer-motion";
import {
  FaSolarPanel,
  FaBolt,
  FaShieldAlt,
  FaLeaf,
  FaUsers,
  FaHandHoldingHeart,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSolarPanel />,
    title: "Premium Solar Panels",
    desc: "High-efficiency panels designed for maximum power generation and long-term savings.",
  },
  {
    icon: <FaBolt />,
    title: "Lower Electricity Bills",
    desc: "Reduce your monthly electricity expenses by up to 80% with smart solar solutions.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Installation",
    desc: "Certified engineers ensure safe, professional and reliable installation.",
  },
  {
    icon: <FaShieldAlt />,
    title: "25-Year Warranty",
    desc: "Premium products backed by industry-leading long-term warranties.",
  },
  {
    icon: <FaLeaf />,
    title: "Eco-Friendly Energy",
    desc: "Generate clean renewable energy while reducing your carbon footprint.",
  },
  {
    icon: <FaHandHoldingHeart />,
    title: "Lifetime Support",
    desc: "Complete support from consultation to maintenance whenever you need us.",
  },
];

const stats = [
  {
    number: "500+",
    title: "Homes Powered",
  },
  {
    number: "25",
    title: "Years Warranty",
  },
  {
    number: "80%",
    title: "Bill Savings",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-green-50 overflow-hidden">

      {/* Background Blur */}

      <div className="absolute -top-20 -left-20 w-60 h-60 bg-green-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-200/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            WHY CHOOSE US
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Why Thousands Trust
            <span className="text-green-600">
              {" "}Smart Solar Urja
            </span>
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600 leading-7">
            Premium solar solutions, expert installation and dedicated
            customer support to maximize your savings.
          </p>

        </motion.div>

        {/* Feature Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-2xl border border-green-100 bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-green-600 text-3xl text-white shadow-lg transition duration-300 group-hover:scale-110 group-hover:rotate-6">

                {item.icon}

              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 leading-7">
                {item.desc}
              </p>

            </motion.div>

          ))}

        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-5 mt-14"
        >

          {stats.map((item, index) => (

            <div
              key={index}
              className="rounded-2xl border border-green-100 bg-white py-6 text-center shadow-md"
            >

              <h3 className="text-4xl font-bold text-green-600">
                {item.number}
              </h3>

              <p className="mt-2 text-gray-600">
                {item.title}
              </p>

            </div>

          ))}

        </motion.div>

      </div>

    </section>
  );
}