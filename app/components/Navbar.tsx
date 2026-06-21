"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold text-green-600">
          Smart Solar Urja
        </h1>

        <ul className="hidden md:flex gap-8 font-medium text-gray-700">

          <li className="hover:text-green-600 cursor-pointer">
            Home
          </li>

          <li className="hover:text-green-600 cursor-pointer">
            About
          </li>

          <li className="hover:text-green-600 cursor-pointer">
            Services
          </li>

          <li className="hover:text-green-600 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-green-600 cursor-pointer">
            Contact
          </li>

        </ul>

      </div>
    </motion.nav>
  );
}