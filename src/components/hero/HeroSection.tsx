"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Shield, Cpu, Zap } from "lucide-react";
import AgentOrchestratorVisual from "./AgentOrchestratorVisual";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 overflow-hidden bg-white">
      {/* Background Decorative Atmosphere & Laser Lines */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-100/50 blur-[140px] rounded-full" />
        <div className="absolute top-1/3 right-10 w-[500px] h-[400px] bg-indigo-50/60 blur-[120px] rounded-full" />
        <div className="absolute top-20 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="absolute inset-0 bg-grid-pattern-light opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200 text-blue-700 backdrop-blur-md shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="brand-label text-[10px] sm:text-[11px] tracking-widest uppercase">
              CONECTA · ORDENA · IMPULSA — SYNTIQ ENTERPRISE AI
            </span>
          </div>
        </motion.div>

        {/* Display H1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center max-w-5xl mx-auto mb-6"
        >
          <h1 className="font-brand-display text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-light text-[#0F172A] tracking-tight leading-[1.06]">
            Transformamos el caos operativo en un sistema inteligente{" "}
            <span className="italic font-normal text-blue-600 inline-block">
              que piensa por ti.
            </span>
          </h1>
        </motion.div>

        {/* Subtitle Value Proposition */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-xl text-slate-600 max-w-3xl mx-auto text-center font-light leading-relaxed mb-8 sm:mb-10"
        >
          Erradicamos los cuellos de botella y la fuga de capital invisible en tu empresa.
          Desplegamos <span className="text-slate-900 font-medium">arquitecturas de agentes autónomos</span>,
          orquestación de datos y automatización enterprise 24/7 sin inflar tus costos fijos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#diagnostico"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Solicitar Diagnóstico Operativo</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#flujo-ia"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-slate-200 shadow-sm hover:border-blue-300 transition-all duration-300"
          >
            <Cpu className="w-4 h-4 text-blue-600" />
            <span>Explorar Ecosistema de Agentes</span>
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-600 text-xs sm:text-sm font-mono mb-12"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-blue-600" />
            <span>Gobernanza Human-in-the-Loop</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>24/7 Ejecución Continua</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-600" />
            <span>Cero Alucinaciones en Prod</span>
          </div>
        </motion.div>

        {/* Hero Interactive Visual Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-200/50 via-indigo-100/50 to-blue-200/50 rounded-3xl blur-xl opacity-75 -z-10" />
          <AgentOrchestratorVisual />
        </motion.div>
      </div>
    </section>
  );
}
