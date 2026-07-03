"use client";

import { useState, useRef } from "react"; // <-- useRef import kiya
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState<"success" | "error" | "">("");

  // 1. Form ke liye Ref banaya taake baad mein clear kar sakein
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    setStatusType("");

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("Message sent successfully!");
        setStatusType("success");

        // 2. Yahan Ref ka use karke form ko reset kar rahe hain (Safe tareeka)
        if (formRef.current) {
          formRef.current.reset();
        }
      } else {
        setStatus("Failed to send message.");
        setStatusType("error");
      }
    } catch (error: unknown) {
      console.error("Submission Error:", error);
      setStatus("Something went wrong.");
      setStatusType("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <section className="pt-32 pb-24 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <div className="text-accent-500 font-semibold mb-2 uppercase tracking-wider text-sm">
          Contact Us
        </div>
        <h1 className="text-5xl font-bold mb-12">
          Get In <span className="text-accent-500">Touch</span>
        </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { delayChildren: 0.2, staggerChildren: 0.15 } },
          }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Left Side: Contact Info */}
          <div className="space-y-8">
            {[{
              Icon: Phone,
              title: "Phone",
              text: "(417) 233-4790",
            },{
              Icon: Mail,
              title: "Email",
              text: "sales@transcore.com",
            },{
              Icon: MapPin,
              title: "Office",
              text: "123 Logistics Ave, Suite 100",
            }].map(({ Icon, title, text }) => (
            <motion.div
              key={title}
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
              }}
              whileHover={{ x: 6 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-500 shrink-0">
                <Icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1">{title}</h3>
                <p className="text-gray-400">{text}</p>
              </div>
            </motion.div>
            ))}
          </div>

          {/* Right Side: Form */}
          {/* 3. Yahan ref={formRef} lagaya hai */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
            }}
            className="bg-navy-800 p-8 rounded-2xl border border-white/5 space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-500"
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              required
              className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-500 resize-none"
            ></textarea>

            {status && (
              <p
                className={`text-sm font-medium ${statusType === "success" ? "text-green-400" : "text-red-400"}`}
              >
                {status}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </motion.div>
      </section>
      <Footer />
    </main>
  );
}
