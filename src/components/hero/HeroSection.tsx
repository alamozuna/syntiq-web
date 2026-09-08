"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, CheckCircle2, Clock } from "lucide-react";
import SyntIQHeroVisual from "./SyntIQHeroVisual";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-[#0F172A]">
      {/* Background Subtle Atmosphere */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-blue-500/15 blur-[130px] rounded-full" />
        <div className="absolute inset-0 bg-grid-pattern-dark opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="text-center lg:text-left mb-16 lg:mb-0">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex justify-center lg:justify-start mb-5"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 shadow-xs">
                <span className="brand-label text-[10px] tracking-widest uppercase font-semibold">
                  APRENDE · CONSTRUYE · AUTOMATIZA
                </span>
              </div>
            </motion.div>

            {/* H1 Principal (2-3 lines intentional breaks on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="max-w-3xl mx-auto lg:mx-0 mb-6"
            >
              <h1 className="font-brand-display text-4xl sm:text-6xl md:text-7xl lg:text-[4.25rem] font-light text-white tracking-tight leading-[1.08]">
                Aprende IA construyendo <br className="hidden sm:inline" />
                <span className="italic font-normal text-blue-500">sistemas que trabajan por ti.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-8 sm:mb-10"
            >
              Formación práctica en Inteligencia Artificial para aprender haciendo. Convierte tareas repetitivas en automatizaciones, aplicaciones y sistemas útiles que puedas aplicar de verdad en tu trabajo, negocio o carrera.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 mb-12 sm:mb-14"
            >
              <a
                href="/formaciones"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98]"
              >
                <span>Ver próximos talleres</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>

              <a
                href="#formaciones"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/25 hover:border-white/40 transition-all duration-200"
              >
                <BookOpen className="w-4 h-4 text-blue-400" />
                <span>Explorar formaciones</span>
              </a>
            </motion.div>

            {/* 3 Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.32 }}
              className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4 max-w-2xl mx-auto lg:mx-0 text-center sm:text-left"
            >
              <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                <div className="w-9 h-9 rounded-xl bg-blue-900/60 text-blue-400 flex items-center justify-center shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-brand-display text-xl sm:text-2xl font-light text-white block leading-tight">
                    4.7/5
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Valoración media</span>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                <div className="w-9 h-9 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-brand-display text-xl sm:text-2xl font-light text-white block leading-tight">
                    12/13
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Mayor claridad en IA</span>
                </div>
              </div>

              <div className="flex items-center justify-center sm:justify-start gap-3 p-3 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                <div className="w-9 h-9 rounded-xl bg-indigo-900/60 text-indigo-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-brand-display text-xl sm:text-2xl font-light text-white block leading-tight">
                    11/13
                  </span>
                  <span className="text-[11px] text-slate-400 font-medium">Intención de aplicar hoy</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none flex justify-center lg:justify-end"
          >
            <SyntIQHeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
