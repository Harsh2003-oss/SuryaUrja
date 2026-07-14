"use client";

import { motion } from "framer-motion";
import SectionHeading from "../Common/SectionHeading";
import {
  FaComments,
  FaClipboardCheck,
  FaSolarPanel,
  FaHeadset,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaComments />,
    title: "Free Consultation",
    desc: "We understand your energy needs and answer your questions.",
  },
  {
    icon: <FaClipboardCheck />,
    title: "Site Survey",
    desc: "Our team visits your location to design the best solar solution.",
  },
  {
    icon: <FaSolarPanel />,
    title: "Professional Installation",
    desc: "Quality installation with attention to safety and performance.",
  },
  {
    icon: <FaHeadset />,
    title: "After-Sales Support",
    desc: "We continue supporting you even after the installation is complete.",
  },
];

export default function OurStory() {
  return (
    <section className="py-16 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          badge="OUR STORY"
          title="Building Trust Through"
          highlight="Clean Energy"
          description="Smart Surya Urja was founded with a simple vision—to make solar energy affordable, reliable, and accessible for homes and businesses in Siliguri and nearby areas."
        />

        <div className="grid lg:grid-cols-2 gap-16 mt-14 items-start">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            <h3 className="text-3xl font-bold text-gray-900">
              Why We Started
            </h3>

            <p className="mt-6 text-gray-600 leading-8">
              Rising electricity costs and the growing need for clean energy
              inspired us to establish Smart Surya Urja.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              Our goal is to help families, shops, offices and industries
              switch to dependable rooftop solar systems with honest guidance,
              transparent pricing and quality workmanship.
            </p>

            <p className="mt-5 text-gray-600 leading-8">
              We believe every successful installation begins with trust,
              and our focus is to build long-term relationships by providing
              reliable service before, during and after installation.
            </p>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            {steps.map((step, index) => (

              <div
                key={index}
                className="flex gap-5 rounded-3xl border border-green-100 bg-white p-6 shadow-md"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-600 text-white text-xl">

                  {step.icon}

                </div>

                <div>

                  <h4 className="text-xl font-semibold">

                    {step.title}

                  </h4>

                  <p className="mt-2 text-gray-600 leading-7">

                    {step.desc}

                  </p>

                </div>

              </div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}