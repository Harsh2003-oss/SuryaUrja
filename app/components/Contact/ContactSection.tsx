"use client";

import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

export default function ContactSection() {
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
                  <h4 className="font-semibold text-lg">Call / WhatsApp</h4>
                  <p className="text-gray-600">8759230346</p>
                  <p className="text-gray-600">8927256630</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                  <FaEnvelope />
                </div>

                <div>
                  <h4 className="font-semibold text-lg">Email</h4>
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
                  <h4 className="font-semibold text-lg">Office Address</h4>
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

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
              />

              <select className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600">
                <option>Select Property Type</option>
                <option>Home</option>
                <option>Shop</option>
                <option>Office</option>
                <option>Factory</option>
              </select>

              <textarea
                rows={5}
                placeholder="Tell us about your requirement..."
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-green-600"
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-green-600 py-4 font-semibold text-white transition hover:bg-green-700"
              >
                Send Message
              </button>

            </form>

          </motion.div>

        </div>

      </div>

    </section>
  );
}