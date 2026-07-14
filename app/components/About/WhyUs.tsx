"use client";

import { motion } from "framer-motion";
import SectionHeading from "../Common/SectionHeading";
import {
  FaHandshake,
  FaSolarPanel,
  FaUserShield,
  FaTools,
  FaMapMarkerAlt,
  FaHeadset,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaHandshake />,
    title: "Honest Consultation",
    desc: "We recommend solar solutions based on your actual energy needs and budget.",
  },
  {
    icon: <FaSolarPanel />,
    title: "Quality Products",
    desc: "We use reliable solar panels and components for long-term performance.",
  },
  {
    icon: <FaUserShield />,
    title: "Professional Installation",
    desc: "Every installation is carried out with safety, precision and attention to detail.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance Support",
    desc: "Routine maintenance and timely assistance to keep your system performing efficiently.",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Local Presence",
    desc: "Based in Siliguri, we understand the needs of customers across North Bengal.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer First",
    desc: "Our relationship doesn't end after installation—we're here whenever you need support.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          badge="WHY SMART SURYA URJA"
          title="Why Customers"
          highlight="Choose Us"
          description="Our focus is simple—provide dependable solar solutions with honest advice, quality workmanship and reliable customer support."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

          {reasons.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl bg-white border border-green-100 p-7 shadow-md hover:shadow-xl transition-all"
            >

              <div className="w-14 h-14 rounded-2xl bg-green-600 text-white flex items-center justify-center text-xl">

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

      </div>

    </section>
  );
}