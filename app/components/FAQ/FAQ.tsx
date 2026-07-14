"use client";

import FAQItem from "./FAQItem";
import { faqs } from "./faqData";
import SectionHeading from "../Common/SectionHeading";

export default function FAQ() {
  return (
    <section className="py-16 bg-white">

      <div className="max-w-5xl mx-auto px-6">

        <SectionHeading
          badge="FAQs"
          title="Frequently Asked"
          highlight="Questions"
          description="Find answers to common questions about rooftop solar installation, savings, maintenance and government subsidy."
        />

        <div className="mt-12 space-y-5">

          {faqs.map((faq, index) => (

            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />

          ))}

        </div>

      </div>

    </section>
  );
}