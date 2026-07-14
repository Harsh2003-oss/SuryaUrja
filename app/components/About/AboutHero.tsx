"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import Button from "../Common/Button";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">

      {/* Background Decorations */}

      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-green-200/20 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-yellow-200/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="inline-flex rounded-full bg-green-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-green-700">
              About Smart Surya Urja
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">

              Building a

              <span className="text-green-600">
                {" "}Greener Future
              </span>

              <br />

              One Rooftop at a Time.

            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">

              Smart Solar Urja is committed to helping homes,
              businesses and industries in Siliguri embrace
              clean, affordable and reliable solar energy through
              quality products, professional installation and
              dependable support.

            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <Button href="/contact">
                Get Free Consultation
              </Button>

              <Button
                href="/services"
                variant="secondary"
              >
                Our Services
              </Button>

            </div>

            {/* Small Highlights */}

            <div className="mt-12 grid grid-cols-2 gap-6">

              <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-md">

                <h3 className="text-2xl font-bold text-green-600">
                  Clean Energy
                </h3>

                <p className="mt-2 text-gray-600">
                  Sustainable solar solutions for homes and businesses.
                </p>

              </div>

              <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-md">

                <h3 className="text-2xl font-bold text-green-600">
                  Local Support
                </h3>

                <p className="mt-2 text-gray-600">
                  Proudly serving Siliguri and nearby areas.
                </p>

              </div>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >

            <div className="relative">

              <Image
                src="/hero_img.png"
                alt="Smart Solar Urja"
                width={700}
                height={700}
                priority
                className="rounded-3xl shadow-2xl"
              />

              {/* Floating Card */}

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white p-5 shadow-xl">

                <p className="text-sm text-gray-500">
                  Serving
                </p>

                <h3 className="text-2xl font-bold text-green-600">
                  Siliguri & Nearby Areas
                </h3>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}