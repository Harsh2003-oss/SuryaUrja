"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    property: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    setLoading(true);

    try {
     await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    name: formData.name,
    phone: formData.phone,
    email: formData.email,
    property: formData.property,
    message: formData.message,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);

      alert("✅ Enquiry sent successfully!");

      setFormData({
        name: "",
        phone: "",
        email: "",
        property: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send enquiry. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900">
              Get In Touch
            </h2>

            <p className="mt-5 text-gray-600 leading-8">
              Whether you're planning a new solar installation or simply
              have questions about solar energy, our team is ready to help.
              Reach out to us through any of the following channels.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                  <FaPhoneAlt />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Call / WhatsApp
                  </h4>

                  <p className="text-gray-600">
                    8759230346
                  </p>

                  <p className="text-gray-600">
                    8927256630
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Email
                  </h4>

                  <p className="text-gray-600">
                    smartsuryaurja@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Office Address
                  </h4>

                  <p className="text-gray-600">
                    Michael Madhusudan Colony
                  </p>

                  <p className="text-gray-600">
                    PO - Sahudangi Hut
                  </p>

                  <p className="text-gray-600">
                    Siliguri, West Bengal
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                  <FaClock />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    Working Hours
                  </h4>

                  <p className="text-gray-600">
                    Monday – Saturday
                  </p>

                  <p className="text-gray-600">
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-green-100 bg-slate-50 p-8 shadow-lg"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Send an Enquiry
            </h3>

            <p className="mt-3 text-gray-600">
              Fill in your details and we'll get back to you soon.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
              />

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
              />

              <select
                name="property"
                value={formData.property}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
              >
                <option value="">
                  Select Property Type
                </option>

                <option value="Home">Home</option>
                <option value="Shop">Shop</option>
                <option value="Office">Office</option>
                <option value="Factory">Factory</option>
              </select>

              <textarea
                rows={5}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your requirement..."
                required
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700 disabled:bg-gray-400"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}