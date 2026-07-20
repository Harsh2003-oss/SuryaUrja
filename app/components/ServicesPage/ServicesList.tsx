"use client";

import ServiceSection from "./ServiceSection";
import { services } from "./ServicesData";

export default function ServicesList() {
  return (
    <section className="bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {services.map((service, index) => (

          <ServiceSection
            key={index}
            title={service.title}
            image={service.image}
            description={service.description}
            features={service.features}
            reverse={index % 2 !== 0}
          />

        ))}

      </div>

    </section>
  );
}