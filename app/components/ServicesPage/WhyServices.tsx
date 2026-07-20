"use client";

import { motion } from "framer-motion";
import {
  FaSolarPanel,
  FaUserTie,
  FaShieldAlt,
  FaFileInvoiceDollar,
  FaHeadset,
  FaTools,
} from "react-icons/fa";

const features = [
  {
    icon: <FaSolarPanel />,
    title: "Customized Solutions",
    desc: "Every property is different. We recommend solar systems based on your energy needs and available roof space.",
  },
  {
    icon: <FaUserTie />,
    title: "Professional Installation",
    desc: "Our installation process focuses on quality workmanship, safety and attention to detail.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Components",
    desc: "We use trusted solar equipment designed for reliable performance and long-term durability.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Subsidy Guidance",
    desc: "We help you understand the available government subsidy process and required documentation.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance Support",
    desc: "Routine inspections and timely maintenance help your solar system perform efficiently.",
  },
  {
    icon: <FaHeadset />,
    title: "Local Customer Support",
    desc: "Based in Siliguri, we're available to assist customers before, during and after installation.",
  },
];

export default function WhyServices() {
  return (
    <section className="py-16 bg-white">

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
            WHY OUR SERVICES
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-900">

            Why Choose

            <span className="text-green-600">
              {" "}Smart Surya Urja
            </span>

          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">

            We believe in honest consultation, quality installation and
            dependable support to help you make a confident switch to solar energy.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-14">

          {features.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-green-100 bg-green-50 p-8 shadow-sm hover:shadow-xl transition-all"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-white text-2xl">

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">

                {item.title}

              </h3>

              <p className="mt-4 text-gray-600 leading-7">

                {item.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}