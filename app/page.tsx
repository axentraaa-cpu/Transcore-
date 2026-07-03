"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

// Remix Icons (Solid / Fill) Import
import { RiArrowDownSLine, RiCheckboxCircleFill } from "react-icons/ri";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

// Services Array - Remix Icons (Solid)
const services = [
  {
    name: "Dry Van",
    desc: "Reliable freight planning for standard enclosed loads with stronger weekly consistency.",
    slug: "dry-van",
    img: "/Dryvan.png",
  },
  {
    name: "Reefer",
    desc: "Temperature-controlled freight support with tighter appointment handling and timing.",
    slug: "reefer",
    img: "/Reefer.png",
  },
  {
    name: "Flatbed / Step Deck",
    desc: "Specialized coordination for oversized freight, machinery, and open-deck hauling.",
    slug: "flatbed-step-deck",
    img: "/Flatbed.png",
  },
  {
    name: "Hotshot",
    desc: "Fast-turn load planning for urgent freight and operators who need quick options.",
    slug: "hotshot",
    img: "/Hotshot.png",
  },
  {
    name: "Box Truck",
    desc: "Local and regional freight planning built for flexible delivery schedules.",
    slug: "box-truck",
    img: "/Boxtruck.png",
  },
  {
    name: "Power Only",
    desc: "Drop-and-hook support that cuts downtime and keeps your tractor moving.",
    slug: "power-only",
    img: "/Poweronly.png",
  },
];

const steps = [
  {
    num: "01",
    title: "Onboarding",
    desc: "Sign up in minutes and provide us with your carrier details and preferences.",
  },
  {
    num: "02",
    title: "Get Dispatcher",
    desc: "We assign you a dedicated dispatcher who knows your equipment and lanes.",
  },
  {
    num: "03",
    title: "Book Loads",
    desc: "We find and negotiate best high-paying loads for you instantly.",
  },
  {
    num: "04",
    title: "Haul & Earn",
    desc: "You drive the truck and get paid weekly with top market rates.",
  },
];

const testimonials = [
  {
    name: "Stacy M.",
    role: "Owner-Operator, Dry Van",
    text: "The entire setup with Transcore was painless and straightforward. They go the extra mile to reach out to you and make sure you have everything you need.",
    result: "Positive effect in 2 months",
  },
  {
    name: "David R.",
    role: "Reefer Driver",
    text: "I had a late receiver issue at night and expected to lose the whole next day. Their dispatcher rescheduled the appointment, updated the broker, and still helped me recover my week.",
    result: "Helped recover my weekly plan",
  },
  {
    name: "Carlos T.",
    role: "Fleet Owner, Box Trucks",
    text: "What I like most is that they don’t push random cheap freight just to keep the truck moving. The planning feels intentional, and that has made my small fleet a lot more stable.",
    result: "More stable weekly revenue",
  },
  {
    name: "Imran K.",
    role: "Hotshot Operator",
    text: "Hotshot loads move fast, and they move even faster. I usually get options quickly, with clear details, and they don’t waste my time with freight that doesn’t fit my trailer.",
    result: "Faster load matching",
  },
  {
    name: "Michael B.",
    role: "Flatbed Owner-Operator",
    text: "I switched because I was tired of chasing loads myself. Since working with Transcore, I spend more time driving and less time sitting on boards trying to piece together a week.",
    result: "Less time on load boards",
  },
  {
    name: "Ahsan Q.",
    role: "Dry Van Carrier",
    text: "Before Transcore, I was booking whatever I could find at the last minute. Now my week feels planned out, and I usually know what is next before I even unload.",
    result: "Weekly planning feels organized",
  },
  {
    name: "Ronnie L.",
    role: "Small Fleet Owner",
    text: "They treat my two trucks like a real business, not an afterthought. That matters because I need someone who understands margins, downtime, and how one bad week affects everything.",
    result: "Better support for a small fleet",
  },
];

const serviceCardMeta = [
  { img: "/Dryvan.png" },
  { img: "/Reefer.png" },
  { img: "/Flatbed.png" },
  { img: "/Hotshot.png" },
  { img: "/Boxtruck.png" },
  { img: "/Poweronly.png" },
];

const faqs = [
  {
    q: "How does dispatch work?",
    a: "We act as your liaison with brokers. We negotiate top rates, handle paperwork, and plan your routes so you can focus solely on driving safely.",
  },
  {
    q: "What documents do I need to start?",
    a: "You will need your MC Authority, W9, Certificate of Insurance (COI), and a Notice of Assignment (NOA) if using a factoring company.",
  },
  {
    q: "How do you find loads?",
    a: "We use load boards, direct broker relationships, and real-time market data to find most profitable loads in your area.",
  },
  {
    q: "When do I get paid?",
    a: "Payment depends on your factoring company or broker's payment terms. We ensure all rate confirmations and paperwork are submitted promptly to speed up process.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeReview, setActiveReview] = useState(1);

  const getReviewAtOffset = (offset: number) =>
    testimonials[
      (activeReview + offset + testimonials.length) % testimonials.length
    ];

  const visibleTestimonials = [
    getReviewAtOffset(-1),
    getReviewAtOffset(0),
    getReviewAtOffset(1),
  ];

  return (
    <main className="overflow-x-hidden">
      <Navbar />

      {/* 1. HERO */}
      <section className="relative min-h-[860px] overflow-hidden bg-navy-900">
        <Image
          src="/Hero.png"
          alt="Trucking Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-l from-navy-600/90 via-navy-900/55 to-transparent" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.08)_0%,rgba(2,6,23,0.16)_45%,rgba(2,6,23,0.72)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_36%,rgba(249,115,22,0.1),transparent_26%)]" />

        <div className="relative z-10 mx-auto flex min-h-[860px] max-w-7xl flex-col justify-between px-4 pb-12 pt-28 sm:px-6 lg:px-8 lg:pt-32">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="max-w-3xl text-left">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-accent-400"
              >
                Freight Operations Across The U.S.
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-6 text-5xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
              >
                Your Trusted Freight
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">
                  Dispatch Partner
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="mb-10 max-w-2xl text-lg leading-8 text-gray-300 md:text-xl"
              >
                We keep your trucks loaded with high-paying freight. Maximize
                your revenue while we handle the logistics, negotiation, and
                back-office operations.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <Link
                  href="/get-started"
                  className="inline-flex items-center justify-center rounded-2xl bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 text-lg font-bold transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-500/25"
                >
                  Get Started
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 hover:bg-white/10 text-white px-8 py-4 text-lg font-bold transition-all"
                >
                  Our Services
                </Link>
              </motion.div>
            </div>
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      {/* 2. WHO WE ARE */}
      <section className="py-0 bg-navy-900">
        <div className="grid md:grid-cols-2 gap-0 items-stretch overflow-hidden shadow-2xl shadow-black/50 border border-white/5 rounded-2xl mx-4 lg:mx-0">
          <div className="bg-navy-800 p-10 md:p-16 flex flex-col justify-center min-h-[500px]">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.p
                variants={fadeUp}
                className="text-accent-500 font-semibold mb-2 text-sm uppercase tracking-wider"
              >
                Who We Are
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
              >
                More Than Just <br />
                <span className="text-accent-500">Dispatchers</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-gray-400 mb-8 leading-relaxed"
              >
                At Transcore, we don&apos;t just book loads, we build
                partnerships. Founded by industry veterans, we understand
                challenges of the open road. Our mission is to minimize your
                empty miles and maximize your take-home pay.
              </motion.p>

              <motion.ul variants={fadeUp} className="space-y-4 mb-10">
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0"></div>
                  Fast Load Booking & Rate Negotiation
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0"></div>
                  24/7 Dedicated Dispatch Support
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 rounded-full bg-accent-500 shrink-0"></div>
                  Complete Back-Office Management
                </li>
              </motion.ul>

              <motion.div variants={fadeUp}>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 border border-white/20 hover:bg-white/10 text-white px-8 py-3.5 rounded-lg font-bold transition-all"
                >
                  Learn More About Us
                  <RiArrowDownSLine className="rotate-[-90deg] w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="/Who-we-are.png"
              alt="Truck on highway"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. WHAT WE OFFER */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-16 text-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Offer
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl">
              Connecting carriers with brokers to provide fast and reliable
              dispatch services across the US.
            </p>
          </div>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 xl:grid-cols-12"
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] transition-all duration-300 hover:border-accent-500/50 hover:shadow-[0_0_28px_rgba(249,115,22,0.16)] xl:col-span-4 ${i === 5 ? "xl:col-start-9" : ""}`}
              >
                <div className="relative h-[270px] w-full overflow-hidden">
                  <Image
                    src={serviceCardMeta[i].img}
                    alt={s.name}
                    fill
                    className="object-cover brightness-[0.98] contrast-[1.08] transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.04)_0%,rgba(2,6,23,0.2)_38%,rgba(2,6,23,0.78)_100%)]" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                  <h2 className="max-w-[240px] text-[2rem] font-bold leading-none text-white">
                    {s.name}
                  </h2>
                  <div className="mt-5 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="max-w-[240px] text-sm leading-6 text-gray-300/90">
                      {s.desc}
                    </p>
                    <div className="mt-5">
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-accent-400/70 bg-black/30 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-black/45"
                      >
                        Learn More
                        <RiArrowDownSLine className="rotate-[-90deg] h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. HOW IT WORKS */}
      <section className="relative overflow-hidden bg-navy-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(249,115,22,0.12),transparent_24%),radial-gradient(circle_at_92%_22%,rgba(255,255,255,0.04),transparent_18%)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <p className="mb-3 text-sm font-semibold tracking-[0.28em] text-accent-500">
              THE PROCESS
            </p>
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              How It Works
            </h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block">
              <div className="process-orbit relative h-[520px] overflow-hidden rounded-[36px] px-8 py-10">
                <svg
                  viewBox="0 0 860 420"
                  className="absolute inset-x-8 top-12 h-[360px] w-[calc(100%-4rem)]"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 20 250 C 100 310, 180 315, 250 215 S 415 120, 505 205 S 690 315, 840 140"
                    fill="none"
                    stroke="rgba(255,255,255,0.18)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="8 14"
                  />
                  <path
                    d="M 20 250 C 100 310, 180 315, 250 215 S 415 120, 505 205 S 690 315, 840 140"
                    fill="none"
                    stroke="rgba(249,115,22,0.95)"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>

                {steps.map((s, i) => {
                  const positions = [
                    {
                      wrapper: "left-[0.5%] top-[268px]",
                      node: "left-12",
                    },
                    {
                      wrapper: "left-[27%] top-[200px]",
                      node: "left-[96px]",
                    },
                    {
                      wrapper: "left-[53.5%] top-[255px]",
                      node: "left-[102px]",
                    },
                    {
                      wrapper: "right-[0.5%] top-[210px]",
                      node: "left-[112px]",
                    },
                  ];

                  return (
                    <motion.div
                      key={s.num}
                      initial={{ opacity: 0, y: 24, scale: 0.96 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      whileHover={{
                        y: -10,
                        rotateX: 6,
                        rotateY: i % 2 === 0 ? -4 : 4,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        delay: i * 0.12,
                        type: "spring",
                        stiffness: 180,
                        damping: 18,
                      }}
                      className={`absolute w-[236px] ${positions[i].wrapper}`}
                    >
                      <div
                        className={`process-node absolute top-[-18px] h-5 w-5 rounded-full border-4 border-navy-900 bg-white shadow-[0_0_8px_rgba(255,255,255,0.05)] ${positions[i].node}`}
                      />
                      <div className="process-card rounded-[28px] border border-white/10 bg-navy-800/85 p-6 shadow-2xl shadow-black/30 backdrop-blur-md">
                        <div className="mb-4 flex items-center justify-between">
                          <span className="text-xs font-semibold tracking-[0.25em] text-accent-500">
                            STEP {s.num}
                          </span>
                          <span className="text-5xl font-black leading-none text-accent-500/20 blur-[2px]">
                            {s.num}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {s.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-gray-400">
                          {s.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="space-y-5 lg:hidden">
              {steps.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="relative rounded-[24px] border border-white/10 bg-white/[0.04] p-6 pl-8 backdrop-blur-sm"
                >
                  <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-500 via-accent-500/40 to-transparent" />
                  <p className="text-xs font-semibold tracking-[0.25em] text-accent-500">
                    STEP {s.num}
                  </p>
                  <h3 className="mt-3 text-xl font-bold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING PREVIEW */}
      <section className="py-24 bg-navy-800/50 relative overflow-hidden">
        <motion.div
          animate={{ rotate: [0, 8, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl"
        />
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent-500 font-semibold mb-2">PRICING</p>
            <h2 className="text-4xl font-bold">Transparent, Simple Rates</h2>
          </div>
          <div className="flex justify-center">
            {[
              {
                title: "Under Your Authority",
                price: "5%",
                sub: "starting at gross revenue",
                features: [
                  "Box Truck: 10%",
                  "Hotshot: 5%",
                  "Flatbed/StepDeck: 5%",
                  "Dry Van/Reefer: 5%",
                ],
                highlight: true,
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -14, rotateX: 7, rotateY: -5, scale: 1.01 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                className={`pricing-card relative overflow-hidden p-8 rounded-2xl border ${plan.highlight ? "bg-navy-900 border-accent-500 shadow-xl shadow-accent-500/10 w-full max-w-md" : "bg-navy-800 border-white/5"}`}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_32%)]" />
                <motion.div
                  animate={{ x: ["-120%", "140%"] }}
                  transition={{
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "linear",
                    repeatDelay: 1.5,
                  }}
                  className="pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]"
                />
                <h3 className="relative z-10 mb-2 text-xl font-bold">{plan.title}</h3>
                <div className="relative z-10 mb-6">
                  <span className="text-5xl font-black text-accent-500">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-2">{plan.sub}</span>
                </div>
                <ul className="relative z-10 mb-8 space-y-3">
                  {plan.features.map((f, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3 text-gray-300 text-sm"
                    >
                      <RiCheckboxCircleFill
                        size={18}
                        className="text-accent-500 shrink-0"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/get-started"
                  className={`relative z-10 block rounded-lg py-3 text-center font-bold transition-all ${plan.highlight ? "bg-accent-500 hover:bg-accent-600 text-white" : "border border-white/20 hover:bg-white/10 text-white"}`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="relative overflow-hidden bg-navy-900 py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(249,115,22,0.08),transparent_24%),radial-gradient(circle_at_84%_10%,rgba(255,255,255,0.04),transparent_20%)]" />
        <div className="relative mx-auto max-w-7xl px-4">
          <div className="mb-14 flex flex-col items-center gap-6 text-center">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-accent-500">
                Reviews
              </p>
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                What Drivers Actually Say
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Real feedback from owner-operators and fleets who care about
                communication, stronger rates, and fewer wasted hours.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous review"
                onClick={() =>
                  setActiveReview((current) =>
                    (current - 1 + testimonials.length) % testimonials.length
                  )
                }
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-accent-500/50 hover:bg-white/10"
              >
                &#8249;
              </button>
              <button
                type="button"
                aria-label="Next review"
                onClick={() =>
                  setActiveReview((current) => (current + 1) % testimonials.length)
                }
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all hover:border-accent-500/50 hover:bg-white/10"
              >
                &#8250;
              </button>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 md:items-center">
            {visibleTestimonials.map((t, index) => {
              const isFocused = index === 1;

              return (
                <motion.article
                  key={`${t.name}-${activeReview}-${index}`}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{
                    opacity: isFocused ? 1 : 0.82,
                    y: 0,
                    scale: isFocused ? 1 : 0.93,
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className={`relative overflow-hidden rounded-[30px] border p-5 text-left shadow-[0_24px_60px_rgba(2,6,23,0.35)] transition-all duration-300 md:min-h-[360px] md:p-6 ${
                    isFocused
                      ? "border-accent-500/60 bg-[linear-gradient(180deg,rgba(15,23,42,0.98)_0%,rgba(10,15,28,0.98)_100%)] shadow-[0_28px_80px_rgba(249,115,22,0.18)]"
                      : "border-white/10 bg-white/[0.04]"
                  }`}
                >
                  {isFocused && (
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent" />
                  )}
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-500">
                      Review
                    </span>
                    <div className="flex items-center gap-1 text-accent-400">
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                      <span>★</span>
                    </div>
                  </div>

                  <p className="min-h-[168px] text-sm leading-7 text-gray-200 md:min-h-[196px] md:text-base">
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent-500/40 bg-accent-500/15 text-sm font-bold text-white">
                        {t.name
                          .split(" ")
                          .map((part) => part[0])
                          .join("")
                          .slice(0, 2)}
                      </div>
                      <div className="min-w-0">
                        <p className="text-base font-bold text-white">{t.name}</p>
                        <p className="text-sm text-gray-400">{t.role}</p>
                      </div>
                    </div>

                    <span className="mt-4 inline-flex rounded-full border border-accent-500/35 bg-accent-500/10 px-4 py-2 text-xs font-semibold text-accent-200">
                      {t.result}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
          <div className="mt-8 flex items-center justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                aria-label={`Go to review ${index + 1}`}
                onClick={() => setActiveReview(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeReview ? "w-8 bg-accent-500" : "w-2.5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-navy-800/50">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-accent-500 font-semibold mb-2">FAQ</p>
            <h2 className="text-4xl font-bold">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-navy-800 border border-white/5 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center p-6 text-left font-semibold hover:bg-white/5 transition-colors"
                >
                  {faq.q}
                  <RiArrowDownSLine
                    className={`w-5 h-5 text-gray-400 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    className="px-6 pb-6 text-gray-400 text-sm"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA BANNER */}
      <section className="py-24 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent-500/10 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Keep Your Trucks Moving?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Stop wasting time on load boards. Let our experts secure the best
            freight for your rig while you focus on the road.
          </p>
          <Link
            href="/get-started"
            className="inline-block bg-accent-500 hover:bg-accent-600 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all hover:shadow-xl hover:shadow-accent-500/25 hover:-translate-y-1"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
