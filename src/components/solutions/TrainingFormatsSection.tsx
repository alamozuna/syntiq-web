"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, Building, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const FORMATS = [
  {
    id: "taller",
    badge: "2–4 horas",
    badgeIcon: Clock,
    title: "Taller Intensivo",
    outcome: "Construye una solución funcional en una sola sesión.",
    target: "Profesionales y equipos que quieren empezar rápido.",
    points: [
      "1 flujo específico resuelto de principio a fin",
      "Plantilla ejecutable lista para tu día a día",
      "Sales de la sesión con el sistema operando",
    ],
    ctaText: "Ver talleres",
    ctaHref: "/formaciones#talleres",
    isFeatured: false,
  },
  {
    id: "modular",
    badge: "4 semanas",
    badgeIcon: Calendar,
    title: "Programa Modular",
    outcome: "Pasa de los fundamentos a construir tu propio sistema con IA.",
    target: "Profesionales que quieren dominar prompting, código y agentes.",
    points: [
      "De tareas simples a fuerza laboral de agentes",
      "Proyecto personal guiado y validado",
      "Acceso directo a sesiones de mentoría",
    ],
    ctaText: "Ver programa",
    ctaHref: "/formaciones#programa",
    isFeatured: true,
  },
  {
    id: "incompany",
    badge: "Para equipos",
    badgeIcon: Building,
    title: "Formación In-Company",
    outcome: "Aplicamos la formación directamente sobre procesos reales de tu empresa.",
    target: "Equipos corporativos y departamentos que necesitan capacitarse juntos.",
    points: [
      "Adaptado a vuestras herramientas y políticas",
      "Enfoque en erradicar cuellos de botella reales",
      "Supervisión y métricas de adopción",
    ],
    ctaText: "Formar a mi equipo",
    ctaHref: "/contacto?modalidad=in-company",
    isFeatured: false,
  },
];

export default function TrainingFormatsSection() {
  return (
    <section id="formaciones" className="relative py-20 sm:py-28 bg-slate-50/60 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase">
            FORMATOS DE FORMACIÓN
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light mt-3 leading-tight">
            Elige cómo <span className="italic font-normal text-blue-600">quieres aprender.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Formaciones enfocadas en construir soluciones reales desde la primera sesión.
          </p>
        </div>

        {/* 3 Maven-style Large Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {FORMATS.map((format, idx) => {
            const BadgeIcon = format.badgeIcon;

            return (
              <motion.div
                key={format.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={cn(
                  "relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 bg-white",
                  format.isFeatured
                    ? "border-2 border-blue-500 shadow-md ring-4 ring-blue-50/70"
                    : "border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm"
                )}
              >
                {/* Popular Pill */}
                {format.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-mono font-semibold tracking-wider uppercase shadow-xs">
                      Más elegido
                    </span>
                  </div>
                )}

                <div>
                  {/* Top: Duration Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                      <BadgeIcon className="w-3.5 h-3.5 text-blue-600" />
                      <span>{format.badge}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-brand-display text-2xl sm:text-3xl text-slate-900 font-normal mb-3">
                    {format.title}
                  </h3>

                  {/* Outcome Quote */}
                  <p className="text-sm font-medium text-slate-800 leading-snug mb-4">
                    &ldquo;{format.outcome}&rdquo;
                  </p>

                  {/* Target Audience Pill */}
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 mb-6">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                      Ideal para:
                    </span>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      {format.target}
                    </p>
                  </div>

                  {/* Checkpoints */}
                  <ul className="space-y-2.5 mb-8">
                    {format.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 font-light">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={format.ctaHref}
                    className={cn(
                      "group w-full min-h-[44px] inline-flex items-center justify-center gap-2 rounded-full py-3 px-5 text-xs sm:text-sm font-semibold transition-all duration-200 shadow-xs",
                      format.isFeatured
                        ? "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    )}
                  >
                    <span>{format.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
