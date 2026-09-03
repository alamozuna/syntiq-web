import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Clock, Calendar, Building, ArrowRight, Check, Sparkles } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCatalog from "@/components/solutions/CourseCatalog";

export const metadata: Metadata = {
  title: "Formaciones | SyntIQ — Talleres prácticos de IA",
  description:
    "Elige tu formato: talleres intensivos de 2-4 horas, programa modular de 4 semanas o formación in-company para equipos. Aprende IA construyendo soluciones reales.",
  openGraph: {
    title: "Formaciones | SyntIQ — Talleres prácticos de IA",
    description:
      "Elige tu formato: talleres intensivos, programa modular o formación in-company. Aprende IA construyendo.",
  },
};

const FORMATS = [
  {
    id: "talleres",
    badge: "2–4 horas",
    badgeIcon: Clock,
    title: "Taller Intensivo",
    headline: "Construye una solución funcional en una sola sesión.",
    description:
      "Sesiones prácticas donde resuelves un problema real de principio a fin. Sales con un flujo operando.",
    target: "Profesionales y equipos que quieren empezar rápido.",
    points: [
      "1 flujo específico resuelto de principio a fin",
      "Plantilla ejecutable lista para tu día a día",
      "Sales de la sesión con el sistema operando",
    ],
    upcoming: [
      {
        name: "De prompt a agente: tu primer flujo con IA",
        date: "Próximamente",
        spots: "Plazas limitadas",
      },
      {
        name: "Automatiza tu bandeja de entrada con IA",
        date: "Próximamente",
        spots: "Plazas limitadas",
      },
    ],
    ctaText: "Reservar plaza",
    ctaHref: "/contacto?modalidad=taller",
    isFeatured: false,
  },
  {
    id: "programa",
    badge: "4 semanas",
    badgeIcon: Calendar,
    title: "Programa Modular",
    headline:
      "Pasa de los fundamentos a construir tu propio sistema con IA.",
    description:
      "Un recorrido guiado de 4 semanas: desde prompting hasta agentes autónomos, con proyecto personal validado.",
    target: "Profesionales que quieren dominar prompting, código y agentes.",
    points: [
      "De tareas simples a fuerza laboral de agentes",
      "Proyecto personal guiado y validado",
      "Acceso directo a sesiones de mentoría",
    ],
    upcoming: [
      {
        name: "Programa Modular — Cohorte Q4 2026",
        date: "Próximamente",
        spots: "Plazas limitadas",
      },
    ],
    ctaText: "Ver programa",
    ctaHref: "/contacto?modalidad=modular",
    isFeatured: true,
  },
  {
    id: "in-company",
    badge: "Para equipos",
    badgeIcon: Building,
    title: "Formación In-Company",
    headline:
      "Aplicamos la formación directamente sobre procesos reales de tu empresa.",
    description:
      "Diseñamos talleres y programas adaptados a las herramientas, políticas y cuellos de botella de tu organización.",
    target:
      "Equipos corporativos y departamentos que necesitan capacitarse juntos.",
    points: [
      "Adaptado a vuestras herramientas y políticas",
      "Enfoque en erradicar cuellos de botella reales",
      "Supervisión y métricas de adopción",
    ],
    upcoming: [],
    ctaText: "Formar a mi equipo",
    ctaHref: "/contacto?modalidad=in-company",
    isFeatured: false,
  },
];

export default function FormacionesPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-slate-900">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden bg-white">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-blue-100/40 blur-[130px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 shadow-xs mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] tracking-widest uppercase font-semibold font-mono">
              FORMACIONES SYNTIQ
            </span>
          </div>

          <h1 className="font-brand-display text-4xl sm:text-6xl font-light text-[#0F172A] tracking-tight leading-[1.08] mb-5">
            Elige cómo{" "}
            <span className="italic font-normal text-blue-600">
              quieres aprender.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Formaciones enfocadas en construir soluciones reales desde la
            primera sesión. Talleres, programa modular y formación para
            empresas.
          </p>
        </div>
      </section>

      {/* Formats */}
      <section className="py-12 sm:py-20 bg-slate-50/60 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12 sm:space-y-16">
            {FORMATS.map((format) => {
              const BadgeIcon = format.badgeIcon;

              return (
                <div
                  key={format.id}
                  id={format.id}
                  className="scroll-mt-24 bg-white rounded-3xl border border-slate-200/90 shadow-xs overflow-hidden"
                >
                  <div className="p-6 sm:p-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-mono font-medium">
                          <BadgeIcon className="w-3.5 h-3.5 text-blue-600" />
                          <span>{format.badge}</span>
                        </span>
                        {format.isFeatured && (
                          <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[10px] font-mono font-semibold tracking-wider uppercase">
                            Más elegido
                          </span>
                        )}
                      </div>
                    </div>

                    <h2 className="font-brand-display text-3xl sm:text-4xl text-slate-900 font-normal mb-3">
                      {format.title}
                    </h2>

                    <p className="text-base sm:text-lg font-medium text-slate-800 leading-snug mb-2 max-w-2xl">
                      &ldquo;{format.headline}&rdquo;
                    </p>

                    <p className="text-sm text-slate-600 font-light leading-relaxed mb-6 max-w-2xl">
                      {format.description}
                    </p>

                    {/* Two columns: Points + Upcoming */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 mb-8">
                      {/* Checkpoints */}
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                          Qué incluye
                        </span>
                        <ul className="space-y-2.5">
                          {format.points.map((pt, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-sm text-slate-600 font-light"
                            >
                              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Upcoming */}
                      {format.upcoming.length > 0 && (
                        <div>
                          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
                            Próximas fechas
                          </span>
                          <div className="space-y-2">
                            {format.upcoming.map((ev, i) => (
                              <div
                                key={i}
                                className="p-3 rounded-xl bg-slate-50 border border-slate-200/80"
                              >
                                <p className="text-xs font-medium text-slate-800 mb-1">
                                  {ev.name}
                                </p>
                                <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono">
                                  <span>{ev.date}</span>
                                  <span className="text-emerald-600">
                                    {ev.spots}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Target + CTA */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
                      <div className="text-xs text-slate-500 font-light">
                        <span className="font-medium text-slate-700">
                          Ideal para:{" "}
                        </span>
                        {format.target}
                      </div>
                      <Link
                        href={format.ctaHref}
                        className={`group inline-flex items-center justify-center gap-2 rounded-full py-3 px-6 text-sm font-semibold transition-all duration-200 shadow-xs shrink-0 ${
                          format.isFeatured
                            ? "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-md"
                            : "bg-slate-900 hover:bg-slate-800 text-white"
                        }`}
                      >
                        <span>{format.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* The bottom note has been removed as per the new design, CourseCatalog goes below */}
        </div>
      </section>

      <CourseCatalog />

      <Footer />
    </main>
  );
}
