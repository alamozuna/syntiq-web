"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  BrainCircuit,
  MessageSquare,
  Wand2,
  LockKeyhole,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Los 4 pilares de la metodología de aprendizaje
const LEARNING_PILLARS = [
  {
    id: "01",
    title: "Diagnóstico & Higiene",
    subtitle: "Evalúa tu nivel actual y elimina la parálisis por sobrecarga.",
    description:
      "Aprende a auditar tu flujo de trabajo diario y descubre exactamente qué tareas son delegables a la IA. Limpiamos la fricción antes de automatizar.",
    icon: BrainCircuit,
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50",
    textDark: "text-blue-900",
  },
  {
    id: "02",
    title: "Prompting Estructurado",
    subtitle: "Domina las conversaciones avanzadas con los LLMs.",
    description:
      "Deja de chatear y empieza a programar con lenguaje natural. Aprende la arquitectura de un prompt perfecto para obtener resultados predecibles y sin alucinaciones.",
    icon: MessageSquare,
    color: "from-indigo-500 to-purple-600",
    bgLight: "bg-indigo-50",
    textDark: "text-indigo-900",
  },
  {
    id: "03",
    title: "Vibe Coding & Agentes",
    subtitle: "Construye herramientas y flujos sin ser desarrollador senior.",
    description:
      "Desarrolla automatizaciones reales en n8n y crea aplicaciones con Cursor. El código ya no es una barrera; la lógica de negocio es tu única limitación.",
    icon: Wand2,
    color: "from-purple-500 to-fuchsia-600",
    bgLight: "bg-purple-50",
    textDark: "text-purple-900",
  },
  {
    id: "04",
    title: "Autopiloto & Gobernanza",
    subtitle: "Despliega empleados digitales autónomos con supervisión.",
    description:
      "Implementa sistemas que trabajan solos 24/7. Aprende a establecer barandillas de seguridad (Human-in-the-Loop) para garantizar que la IA nunca tome decisiones críticas sin tu OK.",
    icon: LockKeyhole,
    color: "from-fuchsia-500 to-rose-600",
    bgLight: "bg-fuchsia-50",
    textDark: "text-fuchsia-900",
  },
];

export default function PillarsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activePillar, setActivePillar] = useState<number | null>(null);

  return (
    <section
      id="metodologia"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-slate-50 overflow-hidden"
    >
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/50 border border-slate-300 text-slate-700 shadow-sm mb-6"
          >
            <span className="brand-label text-[10px] tracking-widest uppercase font-semibold">
              SCAFFOLDING EDUCATIVO
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-brand-display text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] font-light tracking-tight leading-[1.1] mb-6"
          >
            Los 4 Pilares del <br />
            <span className="font-normal italic text-blue-600">Método SyntIQ</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed"
          >
            No enseñamos teoría abstracta. Nuestra metodología se basa en la construcción práctica paso a paso: desde entender el problema hasta desplegar un agente autónomo.
          </motion.p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {LEARNING_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activePillar === idx;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.1 * idx + 0.3 }}
                onMouseEnter={() => setActivePillar(idx)}
                onMouseLeave={() => setActivePillar(null)}
                className={cn(
                  "relative p-8 rounded-3xl border transition-all duration-500 overflow-hidden group bg-white",
                  isActive
                    ? "border-blue-300 shadow-elevation-3 -translate-y-2"
                    : "border-slate-200 shadow-subtle-card hover:shadow-elevation-1"
                )}
              >
                {/* Number Watermark */}
                <div
                  className={cn(
                    "absolute -right-4 -top-6 text-[120px] font-brand-display font-bold leading-none transition-all duration-500 pointer-events-none",
                    isActive ? "text-slate-100/80 scale-110" : "text-slate-50/50"
                  )}
                >
                  {pillar.id}
                </div>

                <div className="relative z-10">
                  <div
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500",
                      isActive
                        ? `bg-gradient-to-br ${pillar.color} text-white shadow-lg scale-110`
                        : `${pillar.bgLight} text-slate-500`
                    )}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3
                    className={cn(
                      "text-xl font-semibold mb-3 transition-colors duration-300",
                      isActive ? pillar.textDark : "text-[#0F172A]"
                    )}
                  >
                    {pillar.title}
                  </h3>

                  <p className="text-sm font-medium text-slate-700 mb-4 leading-snug">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Minimal indicator arrow */}
                  <div
                    className={cn(
                      "mt-6 flex items-center gap-1 text-[11px] font-semibold tracking-wider uppercase transition-all duration-300",
                      isActive ? "text-blue-600 opacity-100" : "text-slate-300 opacity-0 -translate-x-2"
                    )}
                  >
                    <span>Ver Detalles en Temario</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
