"use client";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
];

const serviceLinks = [
  {
    name: "Dry Van",
    desc: "Standard freight transport",
    slug: "dry-van",
  },
  {
    name: "Reefer",
    desc: "Temperature-controlled",
    slug: "reefer",
  },
  {
    name: "Flatbed / Step Deck",
    desc: "Heavy-duty hauling",
    slug: "flatbed-step-deck",
  },
  {
    name: "Hotshot",
    desc: "Expedited delivery",
    slug: "hotshot",
  },
  {
    name: "Box Truck",
    desc: "Regional logistics",
    slug: "box-truck",
  },
  {
    name: "Power Only",
    desc: "Dedicated power",
    slug: "power-only",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-navy-900/78 backdrop-blur-xl shadow-lg shadow-black/20" : "bg-transparent"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between lg:grid lg:grid-cols-[220px_minmax(0,1fr)_220px]">
          <Link
            href="/"
            className="inline-flex items-center text-2xl font-bold tracking-tight text-white"
          >
            <span className="text-accent-500">Trans</span>
            <span className="text-white">core</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center justify-center gap-10 lg:flex">
            {/* 1. Home & About (First 2 links) */}
            {links.slice(0, 2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/90 hover:text-accent-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}

            {/* 2. Services Dropdown (Now 3rd Position) */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 text-sm text-white/90 hover:text-accent-400 transition-colors duration-200">
                Services{" "}
                <ChevronDown
                  className="w-4 h-4 transition-transform duration-200"
                  style={{
                    transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-4 w-[500px] bg-navy-800/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl shadow-black/50 p-5"
                  >
                    {/* Arrow fixed to the right side */}
                    <div className="absolute -top-2 right-8 w-4 h-4 bg-navy-800/95 border-l border-t border-white/10 rotate-45"></div>

                    <div className="grid grid-cols-2 gap-1">
                      {serviceLinks.map((service, index) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setDropdownOpen(false)}
                          className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                        >
                          <div className="mt-0.5 flex h-10 min-w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-xs font-bold tracking-[0.2em] text-accent-400 transition-all group-hover:border-accent-500/40 group-hover:bg-accent-500/10">
                            0{index + 1}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {service.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {service.desc}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>

                    <Link
                      href="/services"
                      onClick={() => setDropdownOpen(false)}
                      className="block mt-3 pt-3 border-t border-white/10 text-center text-sm text-accent-400 hover:text-accent-300 font-semibold transition-colors"
                    >
                      View All Services
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 3. Pricing & Contact (Remaining links) */}
            {links.slice(2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-white/90 hover:text-accent-400 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden items-center justify-end lg:flex">
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center rounded-2xl bg-accent-500 px-6 py-3 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-accent-600 hover:shadow-xl hover:shadow-accent-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 lg:hidden"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-navy-800/95 backdrop-blur-md border-t border-white/10 pb-4 overflow-y-auto max-h-[80vh]"
        >
          {/* Mobile: First 2 Links (Home, About) */}
          {links.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile: Services Section */}
          <div className="px-6 py-3 text-gray-400 text-xs font-bold uppercase tracking-wider">
            Services
          </div>
          {serviceLinks.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              onClick={() => setIsOpen(false)}
              className="block pl-10 pr-6 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5"
            >
              {service.name}
            </Link>
          ))}

          {/* Mobile: Remaining Links (Pricing, Contact) */}
          {links.slice(2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-3 text-gray-300 hover:text-white hover:bg-white/5"
            >
              {link.name}
            </Link>
          ))}

          <div className="px-6 pt-4">
            <Link
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-accent-500 text-white px-5 py-2.5 rounded-lg font-semibold"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
