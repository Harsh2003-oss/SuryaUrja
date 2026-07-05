"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-yellow-50">

      {/* Background Blur */}

      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-green-300/30 blur-3xl"></div>

      <div className="absolute -bottom-40 -right-40 w-[450px] h-[450px] rounded-full bg-yellow-300/30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 min-h-[88vh] flex items-center">

        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 items-center w-full">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="inline-flex items-center rounded-full bg-green-100 px-5 py-2 text-sm font-semibold text-green-700">
              ☀ Smart Solar Solutions
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-extrabold leading-tight text-gray-900">

              Power Your Future

              <br />

              <span className="text-green-600">
                With Smart Surya Urja
              </span>

            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Reduce electricity bills by up to
              <span className="font-bold text-green-600">
                {" "}80%
              </span>
              {" "}
              with premium rooftop solar solutions for homes,
              businesses and industries. We provide installation,
              subsidy guidance and long-term support.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-green-700">

                Request Site Visit

                <FaArrowRight />

              </button>

              <button className="flex items-center gap-3 rounded-xl border-2 border-green-600 px-8 py-4 font-semibold text-green-600 transition duration-300 hover:bg-green-600 hover:text-white">

                <FaPhoneAlt />

                Call Now

              </button>

            </div>

            {/* Trust */}

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full border border-green-100 bg-white px-4 py-2 shadow-sm">
                ✅ MNRE Approved
              </span>

              <span className="rounded-full border border-green-100 bg-white px-4 py-2 shadow-sm">
                🌞 Subsidy Assistance
              </span>

              <span className="rounded-full border border-green-100 bg-white px-4 py-2 shadow-sm">
                🛡️ 25-Year Warranty
              </span>

              <span className="rounded-full border border-green-100 bg-white px-4 py-2 shadow-sm">
                ⚡ Expert Installation
              </span>

            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-6 mt-12">

              <div>

                <h2 className="text-4xl font-bold text-green-600">
                  500+
                </h2>

                <p className="mt-2 text-gray-600">
                  Homes Powered
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-green-600">
                  ₹50L+
                </h2>

                <p className="mt-2 text-gray-600">
                  Customer Savings
                </p>

              </div>

              <div>

                <h2 className="text-4xl font-bold text-green-600">
                  25+
                </h2>

                <p className="mt-2 text-gray-600">
                  Years Panel Life
                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-green-300 blur-[120px] opacity-30"></div>

              <Image
                src="/hero_img.png"
                alt="Smart Solar Urja"
                width={900}
                height={900}
                priority
                className="relative w-full max-w-3xl drop-shadow-2xl"
              />

              {/* Savings Card */}

              <div className="absolute bottom-4 left-0 rounded-2xl bg-white p-5 shadow-xl">

                <p className="text-sm text-gray-500">
                  Estimated Monthly Savings
                </p>

                <h3 className="text-3xl font-bold text-green-600">
                  ₹4,500+
                </h3>

              </div>

              {/* Floating Badge */}

              <div className="absolute top-5 right-0 rounded-xl bg-green-600 px-5 py-3 font-semibold text-white shadow-lg">

                ⭐ Trusted Solar Partner

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}