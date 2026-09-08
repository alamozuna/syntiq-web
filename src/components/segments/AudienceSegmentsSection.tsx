"use client";

import React from "react";
import { motion } from "framer-motion";
import { User, GraduationCap, Lightbulb, Building } from "lucide-react";
import { cn } from "@/lib/utils";

const SEGMENTS = [
  {
    id: "profesionales",
    title: "Profesionales",
    description:
      "Automatiza tareas repetitivas y domina herramientas para destacarte en tu trabajo actual o potenciar tu carrera.",
    icon: User,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
  },
  {
    id: "estudiantes",
    title: "Estudiantes",
    description:
      "Investiga más rápido, sintetiza información y aprende a usar las herramientas que las empresas ya están exigiendo.",
    icon: GraduationCap,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
  },
  {
    id: "emprendedores",
    title: "Emprendedores",
    description:
      "Construye prototipos, automatiza tu administración y escala tus operaciones como si tuvieras un equipo entero.",
    icon: Lightbulb,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
  },
  {
    id: "empresas",
    title: "Empresas",
    description:
      "Capacita a tu equipo con flujos adaptados a tus procesos para reducir cuellos de botella y multiplicar la eficiencia.",
    icon: Building,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-100",
  },
];

export default function AudienceSegmentsSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase block mb-4">
            PARA QUIÉN ES SYNTIQ
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light leading-tight mb-5">
            IA aplicada a <span className="italic font-normal text-blue-600">tu realidad.</span>
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-light max-w-2xl mx-auto leading-relaxed">
            No importa si trabajas solo, estudias o lideras un equipo. Aprender a trabajar con IA te da una ventaja injusta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SEGMENTS.map((segment, idx) => {
            const Icon = segment.icon;
            return (
              <motion.div
                key={segment.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={cn(
                  "p-8 rounded-3xl border bg-white flex flex-col items-start transition-all hover:shadow-md",
                  segment.borderColor,
                  "hover:border-slate-300"
                )}
              >
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center mb-6", segment.bgColor, segment.color)}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-brand-display text-xl sm:text-2xl font-medium text-slate-900 mb-3">
                  {segment.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  {segment.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
