"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CommunitySection() {
  return (
    <section className="relative py-20 sm:py-28 bg-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-6">
            <Users className="w-6 h-6 text-blue-400" />
          </div>

          <h2 className="font-brand-display text-4xl sm:text-5xl lg:text-6xl text-white font-light leading-tight mb-6">
            Aprende. Construye. <span className="italic font-normal text-blue-400">Comparte.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed mb-10">
            Forma parte de una comunidad de personas que quieren aprender IA aplicándola a problemas reales, y no solo charlando sobre el futuro.
          </p>

          <Link
            href="/formaciones"
            className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm sm:text-base px-8 py-4 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
          >
            <span>Quiero enterarme de próximos talleres</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
