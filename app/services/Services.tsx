"use client";

import ServiceCard from "./ServiceCard";
import { services } from "./ServicesData";
import SectionHeading from "../components/Common/SectionHeading";

export default function Services() {
  return (
    <section className="relative py-16 bg-white overflow-hidden">

      <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-green-200/20 blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-yellow-200/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          badge="OUR SOLAR SOLUTIONS"
          title="Smart Solar Solutions"
          highlight="for Every Need"
          description="Whether you're looking to power your home, shop, office or factory, Smart Solar Urja provides reliable solar solutions tailored to your energy needs in Siliguri and nearby areas."
        />

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