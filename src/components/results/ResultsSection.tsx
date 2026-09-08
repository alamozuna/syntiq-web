"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, CheckCircle2, Star, TrendingUp, Presentation } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "La parte práctica fue genial y muy esclarecedora.",
    author: "Participante",
    context: "Taller de IA Agéntica y Antigravity",
  },
  {
    quote: "Combinaron muy bien teoría, práctica y humor.",
    author: "Participante",
    context: "Taller de IA Agéntica y Antigravity",
  },
  {
    quote: "Utilizaron ejemplos de la vida real y conceptos fáciles de comprender.",
    author: "Participante",
    context: "Taller de IA Agéntica y Antigravity",
  },
];

export default function ResultsSection() {
  return (
    <section id="resultados" className="scroll-mt-24 relative py-20 sm:py-28 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="brand-label text-blue-400 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase">
            EXPERIENCIAS REALES
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-white font-light mt-3 leading-tight">
            Lo que dicen quienes ya <br className="hidden sm:block" />
            <span className="italic font-normal text-blue-400">aprendieron con nosotros</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Feedback recogido después de nuestro taller de IA Agéntica y Antigravity.
          </p>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl bg-slate-800/50 border border-slate-700/60 p-6 flex flex-col justify-between hover:border-slate-600 transition-all duration-200"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-500/30 mb-4" />
                <p className="text-sm text-slate-200 font-light leading-relaxed mb-6 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>
              
              <div className="pt-4 border-t border-slate-700/60">
                <span className="font-semibold text-white text-xs block">{item.author}</span>
                <span className="text-[10px] text-slate-400 font-light">{item.context}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3 Metrics Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/40"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-900/40 text-blue-400 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 fill-current" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="font-brand-display text-2xl font-light text-white block leading-tight">4.7</span>
                <span className="text-slate-400 text-sm">/ 5</span>
              </div>
              <span className="text-xs text-slate-300 font-medium block mt-0.5">Ritmo y coordinación</span>
              <span className="text-[10px] text-slate-500 font-light">13 respuestas del taller</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/40"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-900/30 text-emerald-400 flex items-center justify-center shrink-0">
              <Presentation className="w-5 h-5" />
            </div>
            <div>
              <span className="font-brand-display text-2xl font-light text-white block leading-tight">12 <span className="text-slate-400 text-sm font-sans">de</span> 13</span>
              <span className="text-xs text-slate-300 font-medium block mt-0.5">Calificaron la explicación como excelente</span>
              <span className="text-[10px] text-slate-500 font-light">Taller de IA Agéntica y Antigravity</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-2xl bg-slate-800/40 border border-slate-700/40"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-900/30 text-indigo-400 flex items-center justify-center shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <span className="font-brand-display text-2xl font-light text-white block leading-tight">11 <span className="text-slate-400 text-sm font-sans">de</span> 13</span>
              <span className="text-xs text-slate-300 font-medium block mt-0.5">Saldrán a aplicar IA y automatización</span>
              <span className="text-[10px] text-slate-500 font-light">Intención declarada</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

