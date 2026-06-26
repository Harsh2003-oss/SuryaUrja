"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Residential Solar",
    location: "Siliguri",
    capacity: "5 KW Installed",
    image: "/project1.jpg",
  },
  {
    title: "Commercial Solar",
    location: "Jalpaiguri",
    capacity: "20 KW Installed",
    image: "/project2.jpg",
  },
  {
    title: "Industrial Solar",
    location: "Darjeeling",
    capacity: "100 KW Installed",
    image: "/project3.jpg",
  },
];

export default function Projects() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold">
            Our Recent
            <span className="text-green-600">
              {" "}Projects
            </span>
          </h2>

          <p className="text-gray-600 mt-4">
            Trusted solar installations across homes,
            businesses and industries.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                shadow-xl
                cursor-pointer
              "
            >

              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="
                  h-[400px]
                  w-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-black/70
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  flex
                  flex-col
                  justify-center
                  items-center
                  text-white
                  text-center
                  p-6
                "
              >

                <h3 className="text-3xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-lg mb-2">
                  📍 {project.location}
                </p>

                <p className="mb-5">
                  ⚡ {project.capacity}
                </p>

                <button
                  className="
                    bg-green-600
                    hover:bg-green-700
                    px-6
                    py-3
                    rounded-lg
                  "
                >
                  View Details →
                </button>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}