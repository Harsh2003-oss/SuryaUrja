"use client";

import CalculatorCard from "./CalculatorCard";
import SubsidyCard from "./SubsidyCard";
import SectionHeading from "../Common/SectionHeading";

export default function CalculatorSection() {
  return (
    <section className="relative py-16 overflow-hidden bg-slate-50">

      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-green-200/20 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-yellow-200/20 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        <SectionHeading
          badge="SOLAR SAVINGS"
          title="Calculate Your"
          highlight="Savings"
          description="Estimate your electricity bill savings and learn about the available government subsidy for residential rooftop solar systems."
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-stretch">

          <CalculatorCard />

          <SubsidyCard />

        </div>

      </div>

    </section>
  );
}