"use client";

import React from "react";
import { motion } from "framer-motion";
import { Clock, Calendar, Building, ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const FORMATS = [
  {
    id: "presencial",
    badge: "Intensivo",
    badgeIcon: Building,
    title: "Presencial",
    outcome: "Talleres prácticos y experiencias de aprendizaje cercanas.",
    target: "Profesionales que valoran el networking y la guía en persona.",
    points: [
      "Interacción directa con los instructores",
      "Resolución de dudas en tiempo real",
      "Networking con otros profesionales",
    ],
    ctaText: "Ver talleres",
    ctaHref: "/formaciones",
    isFeatured: true,
  },
  {
    id: "virtual",
    badge: "En vivo",
    badgeIcon: Clock,
    title: "Virtual en vivo",
    outcome: "Participa desde cualquier lugar mientras construyes junto a los formadores.",
    target: "Personas que buscan flexibilidad sin perder la interactividad.",
    points: [
      "Transmisión en alta calidad",
      "Soporte y QA en vivo",
    ],
    ctaText: "Ver talleres",
    ctaHref: "/formaciones",
    isFeatured: false,
  },
  {
    id: "incompany",
    badge: "Para equipos",
    badgeIcon: Calendar,
    title: "In-Company",
    outcome: "Llevamos la formación al contexto, procesos y herramientas de tu equipo.",
    target: "Empresas que necesitan capacitar a departamentos enteros de forma alineada.",
    points: [
      "Adaptado a vuestras políticas y herramientas",
      "Ejercicios basados en sus procesos reales",
      "Alineación de equipo inmediata",
    ],
    ctaText: "Solicitar propuesta",
    ctaHref: "/formaciones/in-company",
    isFeatured: false,
  },
];

export default function TrainingFormatsSection() {
  return (
    <section id="formaciones" className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase">
            MODALIDADES
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light mt-3 leading-tight">
            Aprende como <span className="italic font-normal text-blue-600">realmente trabajas.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Formaciones enfocadas en construir soluciones reales desde la primera sesión. Elige el formato que mejor se adapte a ti.
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
                    ? "border-[1.5px] border-blue-500 shadow-[0_8px_24px_rgba(59,130,246,0.12)]"
                    : "border border-slate-200/90 shadow-xs hover:border-slate-300 hover:shadow-sm"
                )}
              >
                {/* Popular Pill */}
                {format.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="px-3.5 py-1 rounded-full bg-blue-600 text-white text-[10px] font-mono font-semibold tracking-wider uppercase shadow-xs">
                      Presencial
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

        {/* Accompaniment Note */}
        <div className="mt-16 sm:mt-20 max-w-3xl mx-auto text-center p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/60">
          <h3 className="font-brand-display text-lg sm:text-xl font-medium text-slate-900 mb-2">
            El aprendizaje no termina cuando termina el taller.
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
            Después de cada formación seguimos en contacto con los participantes para resolver dudas, recoger feedback y compartir próximas oportunidades de aprendizaje.
          </p>
        </div>
      </div>
    </section>
  );
}
