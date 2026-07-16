"use client";

import { motion } from "framer-motion";
import {
  FaComments,
  FaSearchLocation,
  FaSolarPanel,
  FaCheckCircle,
  FaTools,
} from "react-icons/fa";
import SectionHeading from "../Common/SectionHeading";

const steps = [
  {
    icon: <FaComments />,
    title: "Consultation",
    desc: "We understand your electricity usage and discuss the most suitable solar solution.",
  },
  {
    icon: <FaSearchLocation />,
    title: "Site Visit",
    desc: "Our team visits your property to inspect the roof, shading and available installation area.",
  },
  {
    icon: <FaSolarPanel />,
    title: "Installation",
    desc: "Professional installation using quality materials while following proper safety standards.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Testing",
    desc: "The complete system is tested thoroughly before handing it over to you.",
  },
  {
    icon: <FaTools />,
    title: "Support",
    desc: "We remain available for maintenance, guidance and future assistance whenever required.",
  },
];

export default function WorkProcess() {
  return (
    <section className="py-16 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          badge="OUR PROCESS"
          title="How We"
          highlight="Work"
          description="From consultation to installation and after-sales support, we keep the process simple and transparent."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">

          {steps.map((step, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl p-6 shadow-md border border-green-100 text-center"
            >

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-600 text-2xl text-white">

                {step.icon}

              </div>

              <h3 className="mt-5 text-xl font-bold text-gray-900">

                {step.title}

              </h3>

              <p className="mt-3 text-gray-600 leading-7 text-sm">

                {step.desc}

              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}