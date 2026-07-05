"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >

          {/* Logo */}

          <Link
            href="/"
            className="transition-transform duration-300 hover:scale-105"
          >
            <Image
              src="/logo.png"
              alt="Smart Solar Urja"
              width={210}
              height={60}
              priority
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-lg font-medium transition-all duration-300 group ${
                  pathname === item.href
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                {item.name}

                <span
                  className={`absolute left-0 -bottom-2 h-[3px] rounded-full bg-green-600 transition-all duration-300 ${
                    pathname === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}

          </nav>

          {/* Desktop Button */}

          <button className="hidden lg:flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <FaPhoneAlt />
            Get Free Quote
          </button>

          {/* Mobile Button */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-2xl text-green-600"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-white border-t">

          <div className="flex flex-col py-4">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`px-6 py-4 font-medium ${
                  pathname === item.href
                    ? "text-green-600"
                    : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <button className="mx-6 mt-4 bg-green-600 text-white py-3 rounded-xl">
              Get Free Quote
            </button>

          </div>

        </div>
      )}
    </header>
  );
}