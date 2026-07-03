"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";

// ==========================================
// 1. DETAILED DATA (All 6 Services)
// ==========================================
type ServiceSection = {
  heading: string;
  text: string;
  image: string;
};

type ServiceFeatures = {
  details: string[];
  whyUs: string[];
};

type ServiceInfo = {
  title: string;
  heroDesc: string;
  heroImage: string;
  features: ServiceFeatures;
  sections: ServiceSection[];
};

const serviceData: Record<string, ServiceInfo> = {
  "dry-van": {
    title: "Dry Van Dispatch Service",
    heroDesc:
      "The backbone of the American supply chain. Our dry van dispatch service is engineered for owner-operators who demand consistency, high mileage, and top-tier rates. We navigate the complexities of the FTL and LTL markets to keep your trailer full, minimize deadhead, and protect your bottom line on every single run.",
    heroImage: "/Image4.jpg",
    features: {
      details: [
        "Strategic lane matching to completely minimize deadhead miles",
        "Direct access to top-tier shippers and broker networks",
        "Aggressive rate negotiations to secure top 10% market rates",
        "Meticulous route planning avoiding high-toll and congested areas",
      ],
      whyUs: [
        "Transparent communication with no hidden fees",
        "No forced dispatch—you approve every load",
        "Dedicated single point of contact for your account",
        "Expertise in consumer goods, retail, and FMCG freight",
      ],
    },
    sections: [
      {
        heading: "Engineering Profitable Lane Sequences",
        text: "In the dry van sector, your profitability hinges on what happens after your current delivery. We don't just find your next load; we build a sequential lane plan. By analyzing freight density and seasonal trends, our dispatchers pre-book your backhauls before you even drop your current load. This strategic approach eliminates wasted time at truck stops waiting on load boards, ensuring your wheels are constantly turning and generating revenue.",
        image: "/Image1.png",
      },
      {
        heading: "Mastering the FTL & LTL Dynamics",
        text: "Whether you are running dedicated Full Truckload (FTL) routes or maximizing your trailer space with multi-stop Less-Than-Truckload (LTL) freight, our team knows how to optimize the dispatch. We calculate the exact profitability of every stop, factoring in detention times, driver unloading requirements, and fuel costs. Our goal is to ensure you are compensated fairly for every touchpoint of the journey.",
        image: "/Image2.jpeg",
      },
      {
        heading: "Your Dedicated Logistics Partner",
        text: "We understand that as an owner-operator, your truck is your business. You will never be routed through a faceless call center. You get a dedicated dispatcher who learns your specific preferences—whether you hate driving in the Northeast, prefer specific truck stops, or need to be home on weekends. We align our dispatch strategy with your life goals, not just your logbook.",
        image: "/Image3.png",
      },
    ],
  },
  reefer: {
    title: "Reefer Dispatch Service",
    heroDesc:
      "Reefer trucking demands precision, timing, and careful attention to detail. We help drivers connect with temperature-controlled freight such as food, frozen goods, and pharmaceutical shipments that require strict delivery standards. Our focus is to match you with reliable loads that fit your schedule while maintaining proper handling requirements throughout the trip. The goal is to keep your truck moving with consistent, well-organized freight opportunities without unnecessary delays.",
    heroImage: "/image5.jpeg",
    features: {
      details: [
        "Strict transit time management to prevent cargo spoilage",
        "Coordination of temperature set-points and continuous monitoring",
        "Specialized routing to avoid extreme weather delays",
        "Handling of complex fuel surcharges for reefer units",
      ],
      whyUs: [
        "Deep network in food-grade and pharmaceutical logistics",
        "Priority access to high-paying seasonal produce lanes",
        "Proactive communication with receivers to reduce detention",
        "Experts in frozen, chilled, and multi-temp freight",
      ],
    },
    sections: [
      {
        heading: "Protecting High-Value Perishables",
        text: "Hauling a reefer isn't just driving; it's asset protection. A load of pharmaceuticals or fresh produce can be worth hundreds of thousands of dollars. Our dispatchers meticulously vet brokers and shippers, ensuring you only haul for reputable companies that respect your time at the dock. We plan your routes to avoid extreme heat or freezing conditions that put undue stress on your reefer unit, protecting both the cargo and your fuel budget.",
        image: "/image6.jpeg",
      },
      {
        heading: "Capitalizing on Seasonal Peaks",
        text: "The refrigerated freight market is highly cyclical. During the peak produce seasons in Florida, California, or the Pacific Northwest, rates skyrocket. Our dispatch team actively tracks agricultural harvest schedules and weather patterns to position you in the right market at the exact right time. We secure those high-paying seasonal lanes before the masses flood the market, maximizing your annual earnings.",
        image: "/image7.jpeg",
      },
      {
        heading: "Navigating Strict Receiver Protocols",
        text: "Reefer receivers are notoriously strict. From waiting in numbered dock lines to passing stringent USDA or FDA inspections, the process can eat into your Hours of Service (HOS). We proactively call receivers ahead of your arrival to confirm appointment times, check dock delays, and ensure all paperwork (like Bills of Lading and temperature logs) is perfectly prepped so you can drop and run without hassle.",
        image: "/image8.jpeg",
      },
    ],
  },
  "flatbed-step-deck": {
    title: "Flatbed & Step Deck Dispatch",
    heroDesc:
      "Heavy-haul and oversized freight requires a specialized mindset. From securing multi-state permits to coordinating pilot cars, our flatbed and step deck dispatchers handle the intense logistics of heavy equipment, machinery, and building materials so you can focus on safe driving.",
    heroImage: "/image9.jpeg",
    features: {
      details: [
        "Complete assistance with oversized and overweight permits",
        "Verification of proper load securement protocols",
        "Pre-trip route surveys for low clearances and restricted routes",
        "Coordination with pilot cars, escorts, and state police",
      ],
      whyUs: [
        "Direct relationships with heavy-haul brokers and shippers",
        "High-margin load sourcing for specialized equipment",
        "Deep understanding of axle weight distribution laws",
        "Expertise in hauling steel, lumber, and heavy machinery",
      ],
    },
    sections: [
      {
        heading: "Mastering the Complexities of Oversized Freight",
        text: "Flatbed freight isn't point-and-shoot logistics. Hauling an excavator or a wind turbine blade requires a symphony of permits, route surveys, and escort coordination. Our dispatch team takes over this heavy lifting. We map out your route inch by inch, checking bridge heights, weight restrictions, and construction zones. We ensure your permits are filed accurately and on time, preventing costly fines or out-of-route delays.",
        image: "/image10.jpeg",
      },
      {
        heading: "Securing High-Margin Industrial Loads",
        text: "Flatbed and step deck operators command premium rates because the barrier to entry is high. We leverage our deep connections in the construction, mining, and energy sectors to keep your trailer loaded with high-paying industrial freight. Whether it's coils of steel, heavy machinery, or modular building components, we negotiate rates that accurately reflect the specialized equipment and skills you bring to the table.",
        image: "/image11.jpeg",
      },
      {
        heading: "Prioritizing Safety and Compliance",
        text: "In the flatbed world, an improperly secured load isn't just a fine; it's a fatal hazard. While we handle the logistics, we take load securement seriously. Our dispatchers cross-reference the commodity being hauled with FMCSA securement guidelines to ensure you have the right chains, straps, and corner protectors before you even arrive at the shipper. Your safety is our top priority.",
        image: "/image12.jpeg",
      },
    ],
  },
  hotshot: {
    title: "Services We Provide For Hotshot",
    heroDesc:
      "When every minute counts, hotshot trucking delivers—and we make sure you never miss a high-paying urgent load. We specialize in expedited freight for dually and gooseneck operators who move time-sensitive shipments across the country.Our goal is simple: keep your wheels turning, your schedule flexible, and your earnings consistently high.",
    heroImage: "/Hotshot.png",
    features: {
      details: [
        "Instant load sourcing for urgent, breakdown freight",
        "Multi-stop coordination for complex expedited deliveries",
        "Access to exclusive urgent freight networks",
        "Fast-track rate confirmations and digital paperwork",
      ],
      whyUs: [
        "Lightning-fast response times to secure urgent loads",
        "Premium per-mile rates for expedited services",
        "Deep understanding of oilfield and automotive logistics",
        "Flexible scheduling tailored to single operators",
      ],
    },
    sections: [
      {
        heading: "Speed as a Competitive Advantage",
        text: "In hotshot trucking, timing decides everything. The fastest carrier to accept a load often secures the best rate.Our dispatch team works around the clock, monitoring freight boards and direct broker feeds to identify urgent, high-paying opportunities in your area. As soon as a load matches your truck and location, we notify you instantly, negotiate strong rates on your behalf, and get you dispatched without delay.",
        image: "/image16.jpeg",
      },
      {
        heading: "Dominate the Oilfield & Automotive Sectors",
        text: "Hotshot trucking plays a vital role in keeping oilfield operations and automotive supply chains moving without delay. We connect you with high-priority loads like urgent equipment, replacement parts, and time-sensitive deliveries that these industries depend on. Our strong broker network helps you access consistent freight in high-demand lanes. These sectors offer some of the best-paying opportunities for hotshot drivers. We position your truck where urgency meets profitability.",
        image: "/image17.jpeg",
      },
      {
        heading: "Agility and Flexibility for the Solo Operator",
        text: "We know hotshot operators often wear every hat—from driver to mechanic to dispatcher. We take the dispatch hat off your head. Need to be home by Friday for a family event? We filter your loads accordingly. Need a day off after a grueling multi-stop run? We adjust your schedule. We provide the logistical backbone so you can enjoy the freedom that drew you to hotshotting in the first place.",
        image: "/image18.jpeg",
      },
    ],
  },
  "box-truck": {
    title: "Service We Provide For Box Truck",
    heroDesc:
      "Box trucks play an important role in local and regional logistics, especially for short-haul and last-mile deliveries. We help box truck operators find suitable freight that matches their capacity, route, and availability. Our focus is to keep your schedule active with practical loads that make sense for your business. Instead of long waiting times, we aim to support consistent freight flow within your operating area.",
    heroImage:
      "https://images.unsplash.com/photo-1577835718060-a065d9a3a132?q=80&w=1200&auto=format&fit=crop",
    features: {
      details: [
        "Match box truck loads based on your location and availability",
        "Help find local and regional freight opportunities",
        "Assist with multi-stop delivery coordination",
        "Provide timely updates on available loads",
      ],
      whyUs: [
        "Focus on real local and regional freight opportunities",
        "Helps reduce empty miles and waiting time",
        "Flexible scheduling based on driver availability",
        "Clear and simple communication with drivers",
      ],
    },
    sections: [
      {
        heading: "Conquering Local & Regional Logistics",
        text: "Box truck work mainly focuses on city routes, nearby cities, and regional deliveries rather than long-haul trips. We help you find loads that fit real-world traffic conditions, delivery windows, and warehouse requirements. The idea is to reduce empty miles and improve daily efficiency by connecting you with workable routes. With better planning and load selection, you can complete your day more smoothly without unnecessary delays. Our goal is to make your local operations more organized and practical.",
        image:
          "https://images.unsplash.com/photo-1687365414588-b8fd44e201ba?q=80&w=1200&auto=format&fit=crop",
      },
      {
        heading: "Seamless Warehouse Integration",
        text: "Most box truck freight comes from warehouses, distribution centers, retail stores, and local supply chains. We help connect drivers with these types of facilities where regular freight movement happens. Instead of waiting for random loads, we try to align you with steady operational routes based on availability. This helps create more predictable work opportunities over time. The focus is on building consistency within your local freight network.",
        image:
          "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=1200",
      },
      {
        heading: "High-Frequency, Low-Stress Operations",
        text: "Box truck driving often involves multiple stops, tight schedules, and frequent pickups or deliveries. We assist in organizing your loads in a way that reduces confusion and wasted time during the day. While the work is fast-paced, proper coordination helps make it more manageable. We also support basic communication with brokers and shippers when needed. The aim is to help you stay productive without unnecessary operational stress.",
        image:
          "https://images.unsplash.com/photo-1603714228681-b399854b8f80?q=80&w=1200&auto=format&fit=crop",
      },
    ],
  },
  "power-only": {
    title: "Power Only Dispatch Service",
    heroDesc:
      "Maximize your driving time and eliminate the hassle of trailer ownership. With power-only dispatch, you provide the tractor, we provide the pre-loaded trailer. Experience the ultimate drop-and-hook efficiency and keep your truck moving 24/7.",
    heroImage: "/Poweronly.png",
    features: {
      details: [
        "Seamless drop-and-hook load matching for maximum efficiency",
        "Zero responsibility for trailer maintenance or storage",
        "Access to massive networks of pre-loaded containers and trailers",
        "Ideal for high-turnover intermodal and container freight",
      ],
      whyUs: [
        "Massive drop-and-hook trailer network across the US",
        "Drastically reduced loading and unloading wait times",
        "No trailer lease payments or physical damage liability",
        "Perfect for maximizing daily miles",
      ],
    },
    sections: [
      {
        heading: "Eliminating the Trailer Headache",
        text: "Power-only trucking removes the need to own or manage your own trailer, along with the costs of maintenance, insurance, and storage. Instead, we connect you with shippers and brokers who already have pre-loaded trailers ready to move. You simply pick up the trailer, deliver the freight, and move on to the next load. This setup helps reduce downtime and simplifies operations by focusing only on driving. It’s a practical way to stay on the road without the extra responsibilities of trailer ownership.",
        image: "/image13.jpeg",
      },
      {
        heading: "Unmatched Turnaround Times",
        text: "In traditional trucking, loading and unloading can eat up 3 to 4 hours of your day. With power-only drop-and-hook operations, you can be back on the highway in under 45 minutes. Our dispatchers focus heavily on these high-speed freight lanes, particularly in intermodal yards and container ports. By eliminating dock delays, we help you squeeze an extra 100+ miles into your daily drive time, directly translating to higher gross revenue.",
        image: "/image14.jpeg",
      },
      {
        heading: "Scaling Your Fleet Made Easy",
        text: "If you are looking to grow from a single truck to a small fleet, power-only is the easiest way to scale. You don't have to buy a matching trailer for every new truck you purchase. Just add a truck to our power-only network, and we will instantly provide it with a loaded trailer. This asset-light business model drastically reduces your overhead costs and accelerates your path to profitability as a fleet owner.",
        image: "/image15.png",
      },
    ],
  },
};

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.18, staggerChildren: 0.14 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

// ==========================================
// 2. PAGE LOGIC & UI
// ==========================================
export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = serviceData[params.slug];

  if (!service) {
    return null;
  }

  return (
    <main className="bg-navy-900 min-h-screen text-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={sectionVariants}>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed text-justify">
                {service.heroDesc}
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/get-started"
                  className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3 rounded-lg font-bold transition-all shadow-lg shadow-accent-500/25 flex items-center gap-2"
                >
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link
                  href="/contact"
                  className="border border-white/20 hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition-all"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div
              variants={sectionVariants}
              whileHover={{ scale: 1.02 }}
              className="relative lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl shadow-black/50 border border-white/10"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={service.heroImage}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. DETAILED SECTIONS (Zig-Zag Layout) */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {service.sections.map((section, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={staggerVariants}
              className="grid lg:grid-cols-2 gap-16 items-center mb-28 last:mb-0"
            >
              {/* Text Container */}
              <motion.div
                variants={sectionVariants}
                className={`${index % 2 !== 0 ? "order-2" : "order-1"}`}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-accent-400">
                  {section.heading}
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed text-justify">
                  {section.text}
                </p>
              </motion.div>

              {/* Image Container */}
              {/* Image Container */}
              <motion.div
                variants={sectionVariants}
                whileHover={{ y: -8, scale: 1.01 }}
                className={`relative w-full rounded-xl overflow-hidden shadow-lg border border-white/5 group ${index % 2 !== 0 ? "order-1" : "order-2"}`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CARDS SECTION */}
      <section className="py-16 bg-navy-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12"
          >
            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-navy-800 p-8 rounded-2xl border border-white/5 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                What We Do For You
              </h3>
              <ul className="space-y-4">
                {service.features.details.map((d, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle
                      className="text-accent-500 mt-1 shrink-0"
                      size={20}
                    />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-navy-800 p-8 rounded-2xl border border-white/5 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">
                Why Choose Us
              </h3>
              <ul className="space-y-4">
                {service.features.whyUs.map((w, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle
                      className="text-accent-500 mt-1 shrink-0"
                      size={20}
                    />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        className="py-24 text-center bg-navy-800/50 border-t border-white/5"
      >
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-bold mb-6 text-white">
            Ready to grow your fleet with {service.title}?
          </h3>
          <Link
            href="/get-started"
            className="inline-block bg-white text-navy-900 px-10 py-4 rounded-full font-bold hover:bg-gray-200 transition-all"
          >
            Get a Quote Now
          </Link>
        </div>
      </motion.div>

      <Footer />
    </main>
  );
}
