"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { BadgeDollarSign, Headset, ShieldCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delayChildren: 0.2,
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const features = [
  {
    icon: BadgeDollarSign,
    title: "Profit-First Dispatch",
    description:
      "We focus on stronger rates, smart lane selection, and fewer deadhead miles for every run.",
  },
  {
    icon: Headset,
    title: "24/7 Real Support",
    description:
      "Our team stays available when timing gets tight and the road gets unpredictable.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Back Office",
    description:
      "From paperwork to broker coordination, we keep your operations organized and moving.",
  },
];

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageScale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.08]),
    { stiffness: 120, damping: 22 }
  );
  const imageY = useSpring(useTransform(scrollYProgress, [0, 1], [24, -24]), {
    stiffness: 100,
    damping: 20,
  });

  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />
      <section
        ref={sectionRef}
        className="relative overflow-hidden bg-[#050816] py-24 md:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(255,122,0,0.12),transparent_28%),radial-gradient(circle_at_86%_80%,rgba(255,122,0,0.08),transparent_24%)]" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto grid max-w-7xl gap-8 px-4 md:px-6 xl:grid-cols-[1.06fr_0.94fr]"
        >
          <motion.div
            variants={itemVariants}
            className="rounded-3xl border border-orange-500/20 bg-white/5 p-6 backdrop-blur-xl md:p-8 xl:p-10"
          >
            <motion.p
              variants={itemVariants}
              className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-[#FF7A00]"
            >
              About Us
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="max-w-2xl text-4xl font-bold leading-tight text-white md:text-5xl xl:text-6xl"
            >
              Built by Truckers,
              <br />
              <span className="bg-gradient-to-r from-[#FF7A00] to-orange-300 bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(255,122,0,0.14)]">
                For Truckers
              </span>
            </motion.h1>

            <motion.div
              variants={itemVariants}
              className="mt-8 max-w-xl space-y-5 text-base leading-8 text-[#A0A0A0]"
            >
              <p>
                Transcore was built to support owner-operators and small fleets
                who need more than load booking. We help carriers run smarter,
                earn stronger, and stay focused on the road.
              </p>
              <p>
                Our team understands dispatch from the inside out, because we
                know the pressure of timing, rate negotiation, broker
                communication, and keeping every mile productive.
              </p>
              <p>
                We combine transparent communication, dependable systems, and
                day-to-day logistics support to become the kind of dispatch
                partner that our partners can actually trust.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10 space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="flex items-start gap-4 rounded-2xl border border-orange-500/10 bg-black/20 px-4 py-4"
                  >
                    <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-orange-500/20 bg-orange-500/10 text-[#FF7A00]">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h3 className="text-base font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#A0A0A0]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={itemVariants} className="mt-10">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center rounded-full bg-orange-500 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(255,122,0,0.24)] transition-all hover:bg-orange-400 hover:shadow-[0_0_34px_rgba(255,122,0,0.34)]"
                >
                  Get Started
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-orange-500/15 bg-white/5 backdrop-blur-sm">
              <motion.div
                style={{ scale: imageScale, y: imageY }}
                className="relative h-[320px] w-full md:h-[420px] xl:min-h-[720px]"
              >
                <Image
                  src="/Who-we-are.png"
                  alt="Transcore truck dispatch operations on the highway"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,22,0.06)_0%,rgba(5,8,22,0.28)_38%,rgba(5,8,22,0.82)_100%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,122,0,0.18),transparent_26%)]" />
              </motion.div>

              <div className="relative z-10 -mt-16 px-6 pb-6 md:-mt-20 md:px-8 md:pb-8">
                <div className="rounded-3xl border border-orange-500/20 bg-[#050816]/86 p-5 shadow-[0_18px_40px_rgba(5,8,22,0.36)] backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#FF7A00]">
                    Dispatch with Confidence
                  </p>
                  <h2 className="mt-3 max-w-sm text-3xl font-bold leading-tight text-white">
                    Reliable support built for serious carriers.
                  </h2>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="rounded-2xl border border-white/5 bg-white/5 px-3 py-4">
                      <p className="text-sm font-semibold text-white">Trust</p>
                    </div>
                    <div className="rounded-2xl border border-white/5 bg-white/5 px-3 py-4">
                      <p className="text-sm font-semibold text-white">Support</p>
                    </div>
                    <div className="rounded-2xl border border-white/5 bg-white/5 px-3 py-4">
                      <p className="text-sm font-semibold text-white">
                        Reliability
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
