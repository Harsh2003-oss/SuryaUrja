"use client";

import { motion } from "framer-motion";
import SectionHeading from "../Common/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "./ProjectsData";

export default function Gallery() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          badge="INSTALLATION GALLERY"
          title="Recent"
          highlight="Installations"
          description="A glimpse of the solar installations completed by Smart Surya Urja. As we continue serving customers across Siliguri and North Bengal, this gallery will keep growing."
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 mt-14"
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              location={project.location}
            />
          ))}
        </motion.div>

      </div>

    </section>
  );
}