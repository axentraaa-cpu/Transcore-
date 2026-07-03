"use client";

import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { RiArrowDownSLine } from "react-icons/ri";

const services = [
  {
    name: "Dry Van",
    desc: "Reliable freight planning for standard enclosed loads with stronger weekly consistency.",
    slug: "dry-van",
    image: "/Dryvan.png",
  },
  {
    name: "Reefer",
    desc: "Temperature-controlled freight support with tighter appointment handling and timing.",
    slug: "reefer",
    image: "/Reefer.png",
  },
  {
    name: "Flatbed / Step Deck",
    desc: "Specialized coordination for oversized freight, machinery, and open-deck hauling.",
    slug: "flatbed-step-deck",
    image: "/Flatbed.png",
  },
  {
    name: "Hotshot",
    desc: "Fast-turn load planning for urgent freight and operators who need quick options.",
    slug: "hotshot",
    image: "/Hotshot.png",
  },
  {
    name: "Box Truck",
    desc: "Local and regional freight planning built for flexible delivery schedules.",
    slug: "box-truck",
    image: "/Boxtruck.png",
  },
  {
    name: "Power Only",
    desc: "Drop-and-hook support that cuts downtime and keeps your tractor moving.",
    slug: "power-only",
    image: "/Poweronly.png",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />

      <section className="px-4 pb-24 pt-32 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <h1 className="text-5xl font-bold text-white md:text-6xl">
            Dispatch Services
          </h1>
          <p className="mt-5 text-lg text-gray-400">
            We connect carriers with high-paying loads and handle everything in
            between.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-12">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-accent-500/50 hover:shadow-[0_0_28px_rgba(249,115,22,0.16)] xl:col-span-4 ${index === 5 ? "xl:col-start-9" : ""}`}
            >
              <div className="relative h-[270px] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover brightness-[0.98] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.2)_38%,rgba(2,6,23,0.78)_100%)]" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                <h2 className="max-w-[240px] text-[2rem] font-bold leading-none text-white">
                  {service.name}
                </h2>

                <div className="mt-5 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="max-w-[240px] text-sm leading-6 text-gray-300/90">
                    {service.desc}
                  </p>

                  <div className="mt-5">
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 rounded-full border border-accent-400/70 bg-black/30 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-black/45"
                    >
                      Learn More
                      <RiArrowDownSLine className="h-4 w-4 rotate-[-90deg]" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
