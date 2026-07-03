import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-navy-900">
      <Navbar />
      <section className="relative overflow-hidden px-4 pb-24 pt-32 text-center">
        <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
        <div className="mx-auto max-w-5xl">
          <div className="mb-16">
            <div className="mb-2 text-sm font-semibold uppercase tracking-wider text-accent-500">
              Pricing
            </div>
            <h1 className="mb-6 text-5xl font-bold">
              Simple, Transparent <span className="text-accent-500">Rates</span>
            </h1>
            <p className="text-lg text-gray-400">
              No hidden fees. We only make money when you make money.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="pricing-card relative w-full max-w-md overflow-hidden rounded-2xl border border-accent-500 bg-navy-900 p-8 text-left shadow-xl shadow-accent-500/10">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_32%)]" />
              <div className="pricing-shine pointer-events-none absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-[-20deg]" />

              <h2 className="relative z-10 mb-2 text-2xl font-bold">Under Your Authority</h2>
              <div className="relative z-10 mb-6">
                <span className="text-5xl font-black text-accent-500">5%</span>
                <span className="ml-2 text-gray-400">starting at gross revenue</span>
              </div>

              <ul className="relative z-10 mb-8 space-y-3">
                {[
                  "Box Truck: 10%",
                  "Hotshot: 5%",
                  "Flatbed/StepDeck: 5%",
                  "Dry Van/Reefer: 5%",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-gray-300">
                    <CheckCircle size={18} className="shrink-0 text-accent-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/get-started"
                className="relative z-10 block rounded-lg bg-accent-500 py-3 text-center font-bold text-white transition-all hover:bg-accent-600"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
