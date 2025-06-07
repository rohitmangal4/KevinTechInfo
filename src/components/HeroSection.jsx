import { motion } from "framer-motion";
import { useState } from "react";
import EnquiryPopup from "./EnquieryPopup";

export default function HeroSection({ title, subtitle, description }) {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <section className="relative isolate min-h-[90vh] flex items-center justify-center py-16 px-5 sm:px-7 bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0 -z-10 to-transparent" />

      {/* Glass card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-xl shadow-black/30 max-w-5xl w-full py-16 px-6 sm:px-10"
      >
        <h1 className="text-3xl sm:text-5xl font-bold mb-4 bg-gradient-to-r text-cyan-400">
          {title}
        </h1>

        {subtitle && (
          <h2 className="text-lg sm:text-xl text-slate-300 mb-4 font-medium">
            {subtitle}
          </h2>
        )}

        <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
          {description}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setShowPopup(true)}
            className="mt-4 px-6 py-4 bg-cyan-500 font-semibold text-white rounded-full hover:bg-cyan-600"
          >
            Get In Enquiry
          </button>
          <a
            href="/services/web-development"
            className="inline-block rounded-full border  border-cyan-400/70 mt-4 px-6 py-4 text-sm font-semibold text-cyan-300 hover:bg-white/5 transition active:scale-95"
          >
            Explore Services
          </a>
        </div>
      </motion.div>
      {showPopup && <EnquiryPopup onClose={() => setShowPopup(false)} />}

    </section>
  );
}
