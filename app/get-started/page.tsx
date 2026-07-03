"use client";
import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Upload, X, CheckCircle, Loader2 } from "lucide-react";

function FileDropzone({
  label,
  keyName,
  files,
  onDrop,
  onRemove,
}: {
  label: string;
  keyName: string;
  files: Record<string, File[]>;
  onDrop: (files: File[], key: string) => void;
  onRemove: (key: string) => void;
}) {
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (f) => onDrop(f, keyName),
    accept: {
      "application/pdf": [".pdf"],
      "image/png": [".png"],
      "image/jpeg": [".jpg"],
    },
    maxFiles: 1,
  });

  return (
    <div
      {...getRootProps()}
      className="border border-dashed border-white/20 rounded-lg p-4 text-center cursor-pointer hover:border-accent-500 transition-colors bg-navy-800/50 h-full flex items-center justify-center"
    >
      <input {...getInputProps()} />
      {files[keyName]?.length ? (
        <div className="flex w-full items-center gap-2 text-green-400 text-sm min-w-0">
          <CheckCircle size={16} className="shrink-0" />
          <span className="min-w-0 flex-1 truncate text-left" title={files[keyName][0].name}>
            {files[keyName][0].name}
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(keyName);
            }}
            className="text-red-400 hover:text-red-300 shrink-0"
          >
            <X size={14} />
          </button>
        </div>
      ) : (
        <div className="text-gray-400 text-sm flex items-center gap-2">
          <Upload size={16} /> Upload {label}
        </div>
      )}
    </div>
  );
}

export default function GetStarted() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [files, setFiles] = useState<Record<string, File[]>>({});

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    mc_dot: "",
    truck_type: "",
    service_needed: "",
    message: "",
  });

  const handleDrop = useCallback((acceptedFiles: File[], key: string) => {
    setFiles((prev) => ({ ...prev, [key]: acceptedFiles }));
  }, []);

  const handleRemove = (key: string) => {
    setFiles((prev) => ({ ...prev, [key]: [] }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    Object.entries(form).forEach(([k, v]) => formData.append(k, v));
    Object.entries(files).forEach(([k, v]) =>
      v.forEach((file) => formData.append(k, file)),
    );

    try {
      const res = await fetch("/api/submit-carrier", {
        method: "POST",
        body: formData,
      });
      if (res.ok) setSuccess(true);
      else alert("Something went wrong. Please try again.");
    } catch {
      alert("Network error.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-navy-900 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center p-10 bg-navy-800 rounded-2xl border border-green-500/50 shadow-xl max-w-md"
        >
          <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-3">Application Received!</h2>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="bg-navy-900 min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Carrier <span className="text-accent-500">Onboarding</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Fill out the form below to get started.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-6 bg-navy-800/50 p-8 md:p-10 rounded-2xl border border-white/5"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                First Name *
              </label>
              <input
                placeholder="Luke"
                required
                type="text"
                value={form.first_name}
                onChange={(e) =>
                  setForm({ ...form, first_name: e.target.value })
                }
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Last Name *
              </label>
              <input
                placeholder="Belmar"
                required
                type="text"
                value={form.last_name}
                onChange={(e) =>
                  setForm({ ...form, last_name: e.target.value })
                }
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address *
              </label>
              <input
                placeholder="example@gmail.com"
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Phone Number *
              </label>
              <input
                placeholder="(999)-999-9999"
                required
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-500"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                MC Number or DOT Number *
              </label>
              <input
                required
                placeholder="MC-1234567"
                type="text"
                value={form.mc_dot}
                onChange={(e) => setForm({ ...form, mc_dot: e.target.value })}
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Truck Type *
              </label>
              <select
                required
                value={form.truck_type}
                onChange={(e) =>
                  setForm({ ...form, truck_type: e.target.value })
                }
                className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-500"
              >
                <option value="">Select truck type...</option>
                {[
                  "Box Truck",
                  "Dry Van",
                  "Reefer",
                  "Flatbed",
                  "Step Deck",
                  "Hotshot",
                  "Power Only",
                  "RGN",
                ].map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Service Needed *
            </label>
            <select
              required
              value={form.service_needed}
              onChange={(e) =>
                setForm({ ...form, service_needed: e.target.value })
              }
              className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-500"
            >
              <option value="">Select service...</option>
              {[
                "Dispatching",
                "Carrier Setup",
                "Invoicing",
                "Factoring",
                "ELD",
                "DOT Compliance",
                "IFTA Reporting",
              ].map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Message/Additional info
            </label>
            <textarea
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-navy-900 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-500 resize-none"
            />
          </div>

          <div className="border-t border-white/10 pt-8">
            <h3 className="text-lg font-semibold mb-4">
              Upload Documents Mandatory
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <FileDropzone
                label="MC Authority"
                keyName="mc_authority"
                files={files}
                onDrop={handleDrop}
                onRemove={handleRemove}
              />
              <FileDropzone
                label="W9 Form"
                keyName="w9"
                files={files}
                onDrop={handleDrop}
                onRemove={handleRemove}
              />
              <FileDropzone
                label="COI (Insurance)"
                keyName="coi"
                files={files}
                onDrop={handleDrop}
                onRemove={handleRemove}
              />
              <FileDropzone
                label="NOA (Factoring) Or Voided Check"
                keyName="noa"
                files={files}
                onDrop={handleDrop}
                onRemove={handleRemove}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-accent-500 hover:bg-accent-600 disabled:bg-accent-500/50 disabled:cursor-not-allowed text-white font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 text-lg mt-4"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" /> Submitting...
              </>
            ) : (
              "Submit Application"
            )}
          </button>
        </motion.form>
      </div>
      <Footer />
    </main>
  );
}
