"use client";

import Link from "next/link";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Company */}

          <div>

            <h2 className="text-3xl font-bold">
              <span className="text-green-500">Smart</span>{" "}
              Surya{" "}
              <span className="text-green-500">Urja</span>
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Helping homes and businesses in Siliguri switch to
              clean, affordable and reliable solar energy with
              professional installation and dedicated support.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>
                <Link href="/" className="hover:text-green-400">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-green-400">
                  About
                </Link>
              </li>

              <li>
                <Link href="/services" className="hover:text-green-400">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/projects" className="hover:text-green-400">
                  Projects
                </Link>
              </li>

              <li>
                <Link href="/contact" className="hover:text-green-400">
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Our Services */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">

              <li>Residential Surya</li>

              <li>Commercial Surya</li>

              <li>Industrial Surya</li>

              <li>Surya Consultation</li>

              <li>Routine Maintenance</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3">

                <FaPhoneAlt className="mt-1 text-green-500" />

                <div>

                  <p>8759230346</p>

                  <p>8927256630</p>

                </div>

              </div>

              <div className="flex gap-3">

                <FaEnvelope className="mt-1 text-green-500" />

                <p>smartsuryaurja@gmail.com</p>

              </div>

              <div className="flex gap-3">

                <FaMapMarkerAlt className="mt-1 text-green-500" />

                <p>
                  Michael Madhusudan Colony,
                  <br />
                  P.O. Sahudangi Hat,
                  <br />
                  Siliguri
                </p>

              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-green-600 flex items-center justify-center transition"
              >
                <FaLinkedinIn />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Smart Surya Urja. All Rights Reserved.
          </p>

          <p className="text-gray-500 text-sm">
            Designed & Developed with ❤️ by Smart Surya Urja
          </p>

        </div>

      </div>

    </footer>
  );
}