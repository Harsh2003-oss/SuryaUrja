"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

type Props = {
  title: string;
  description: string;
  image: string;
  features: string[];
  reverse?: boolean;
};

export default function ServiceSection({
  title,
  description,
  image,
  features,
  reverse = false,
}: Props) {
  return (
    <section className="py-12">

      <div
        className={`grid lg:grid-cols-2 gap-12 items-center ${
          reverse ? "lg:grid-flow-dense" : ""
        }`}
      >

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={reverse ? "lg:col-start-2" : ""}
        >

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <Image
              src={image}
              alt={title}
              width={700}
              height={500}
              className="h-[420px] w-full object-cover transition duration-500 hover:scale-105"
            />

          </div>

        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold text-gray-900">

            {title}

          </h2>

          <p className="mt-6 text-gray-600 leading-8">

            {description}

          </p>

          <div className="mt-8 space-y-4">

            {features.map((item, index) => (

              <div
                key={index}
                className="flex items-center gap-3"
              >

                <FaCheckCircle className="text-green-600" />

                <span className="text-gray-700">

                  {item}

                </span>

              </div>

            ))}

          </div>

          <button className="mt-10 inline-flex items-center gap-3 rounded-xl bg-green-600 px-7 py-4 font-semibold text-white transition hover:bg-green-700">

            Get Free Consultation

            <FaArrowRight />

          </button>

        </motion.div>

      </div>

    </section>
  );
}