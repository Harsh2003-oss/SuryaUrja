"use client";

import { motion } from "framer-motion";
import {
  FaLeaf,
  FaFileAlt,
  FaCheckCircle,
  FaHome,
  FaArrowRight,
} from "react-icons/fa";

export default function SubsidyCard() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="h-full rounded-3xl bg-gradient-to-br from-green-600 to-green-700 p-8 text-white shadow-xl"
    >
      {/* Badge */}

      <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
        🇮🇳 Government Support
      </span>

      {/* Heading */}

      <h3 className="mt-6 text-3xl font-bold leading-tight">
        Government Subsidy Guidance
      </h3>

      <p className="mt-4 text-green-100 leading-7">
        Eligible homeowners may receive financial assistance
        under the rooftop solar subsidy scheme. Our team helps
        you understand the process and complete the required
        documentation.
      </p>

      {/* Benefits */}

      <div className="mt-8 space-y-5">

        <div className="flex items-start gap-4">
          <FaHome className="mt-1 text-xl text-yellow-300" />

          <div>
            <h4 className="font-semibold">
              Rooftop Solar Guidance
            </h4>

            <p className="text-green-100 text-sm">
              Assistance for eligible residential rooftop
              installations.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaFileAlt className="mt-1 text-xl text-yellow-300" />

          <div>
            <h4 className="font-semibold">
              Documentation Support
            </h4>

            <p className="text-green-100 text-sm">
              We help you prepare and understand the required
              documents.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaCheckCircle className="mt-1 text-xl text-yellow-300" />

          <div>
            <h4 className="font-semibold">
              Eligibility Assistance
            </h4>

            <p className="text-green-100 text-sm">
              Guidance on eligibility and available subsidy
              options.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <FaLeaf className="mt-1 text-xl text-yellow-300" />

          <div>
            <h4 className="font-semibold">
              Clean Energy Future
            </h4>

            <p className="text-green-100 text-sm">
              Save money while contributing to a cleaner and
              greener environment.
            </p>
          </div>
        </div>

      </div>

      {/* Button */}

    {/* Button */}

<a
  href="https://pmsuryaghar.gov.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-10 flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-semibold text-green-700 transition hover:gap-5"
>
  Learn About Subsidy
  <FaArrowRight />
</a>

      {/* Disclaimer */}

      <p className="mt-6 text-xs text-green-200 leading-6">
        * Subsidy availability, eligibility and benefits depend
        on prevailing Government policies and are subject to
        change.
      </p>
    </motion.div>
  );
}