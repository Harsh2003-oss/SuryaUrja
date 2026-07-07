"use client";

import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import { services } from "./ServicesData";

export default function Services() {
  return (
    <section className="relative py-16 bg-gradient-to-b from-white via-green-50 to-white overflow-hidden">

      {/* Background Decorations */}

      <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-green-200/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-yellow-200/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            OUR SOLAR SOLUTIONS
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
            Smart Solar Solutions
            <span className="text-green-600">
              {" "}for Every Need
            </span>
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-600 text-lg leading-8">
            Whether you're looking to power your home, shop, office, or factory,
            Smart Solar Urja provides reliable solar solutions tailored to your
            energy needs in and around <span className="font-semibold text-green-700">Siliguri</span>.
          </p>

        </motion.div>

        {/* Service Cards */}

        <div className="grid lg:grid-cols-2 gap-8 mt-12">

          {services.map((service, index) => (

            <ServiceCard
              key={index}
              title={service.title}
              image={service.image}
              description={service.description}
              features={service.features}
            />

          ))}

        </div>

      </div>

    </section>
  );
}