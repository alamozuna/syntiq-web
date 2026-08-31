"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  LayoutTemplate,
  Building2,
  CheckCircle2,
  ArrowRight,
  Clock,
  CalendarDays,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Sustituimos Motor Productizado/Consultivo por Formatos Educativos
const FORMATIONS = [
  {
    id: "talleres",
    title: "Talleres Intensivos",
    subtitle: "Para profesionales que buscan resultados inmediatos",
    icon: Clock,
    description:
      "Sesiones prácticas de 2 a 4 horas donde construyes una solución específica en vivo. Sales del taller con la automatización funcionando.",
    targetAudience: "Freelancers, marketers, analistas y profesionales independientes.",
    features: [
      "100% práctico y guiado paso a paso",
      "Plantillas ejecutables listas para usar",
      "Resultados funcionales en la misma sesión",
      "Temáticas: AntiGravity, Vibe Coding, Inbox Autopilot",
      "Acceso a la grabación de la sesión",
    ],
    priceLabel: "Desde $49 USD",
    color: "blue",
    cta: "Ver Próximos Talleres",
  },
  {
    id: "curso-modular",
    title: "Curso Modular (4 Semanas)",
    subtitle: "Maestría Agéntica Completa",
    icon: CalendarDays,
    description:
      "Programa estructurado en cohortes que cubre los 4 pilares de la metodología SyntIQ. Desde los fundamentos del prompting hasta la orquestación avanzada en n8n.",
    targetAudience: "Líderes de equipo, consultores tech y profesionales en transición a IA.",
    features: [
      "Cohortes en vivo con plazas limitadas",
      "Proyectos prácticos semanales con feedback",
      "Comunidad privada de alumnos (Discord)",
      "Certificado de finalización oficial",
      "Plantillas y frameworks empresariales exclusivos",
    ],
    priceLabel: "Próxima Cohorte: Septiembre",
    color: "emerald",
    cta: "Ver Programa Completo",
  },
  {
    id: "in-company",
    title: "Formación In-Company",
    subtitle: "Para equipos corporativos y universidades",
    icon: Building2,
    description:
      "Programas formativos a medida diseñados para alinear a todo tu equipo o institución bajo una misma metodología operativa de IA.",
    targetAudience: "Departamentos corporativos, pymes estructuradas y centros educativos.",
    features: [
      "Auditoría previa de necesidades operativas",
      "Temario adaptado a las herramientas de la empresa",
      "Instructor dedicado para la organización",
      "Casos de uso reales de vuestro sector",
      "Métricas de adopción y evaluación post-formación",
    ],
    priceLabel: "Presupuesto a medida",
    color: "indigo",
    cta: "Solicitar Propuesta",
  },
];

export default function SolutionsMatrix() {
  const [activeTab, setActiveTab] = useState(FORMATIONS[0].id);

  return (
    <section id="formaciones" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="brand-label text-blue-600 mb-4 block">
            CATÁLOGO DE FORMACIONES
          </span>
          <h2 className="font-brand-display text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] font-light tracking-tight leading-[1.1] mb-6">
            Aprende a tu ritmo. <br />
            <span className="font-normal italic text-slate-500">
              Aplica desde el día uno.
            </span>
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            Elige el formato que mejor se adapte a tu disponibilidad y objetivos.
            Todas nuestras formaciones comparten el mismo rigor metodológico 100% práctico.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-1.5 bg-slate-100 rounded-2xl sm:rounded-full max-w-4xl mx-auto mb-12 sm:mb-16">
          {FORMATIONS.map((form) => {
            const isActive = activeTab === form.id;
            const Icon = form.icon;

            return (
              <button
                key={form.id}
                onClick={() => setActiveTab(form.id)}
                className={cn(
                  "relative flex-1 flex items-center justify-center gap-2.5 px-6 py-4 sm:py-3.5 rounded-xl sm:rounded-full text-sm font-medium transition-all duration-300",
                  isActive
                    ? "text-[#0F172A] bg-white shadow-sm"
                    : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50"
                )}
              >
                <Icon
                  className={cn(
                    "w-4 h-4 transition-colors",
                    isActive ? "text-blue-600" : "text-slate-400"
                  )}
                />
                <span>{form.title}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {FORMATIONS.map(
              (form) =>
                activeTab === form.id && (
                  <motion.div
                    key={form.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-subtle-card"
                  >
                    {/* Left Column: Description */}
                    <div className="lg:col-span-7 space-y-6">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[11px] font-mono mb-2">
                        <Target className="w-3.5 h-3.5" />
                        <span>Ideal para: {form.targetAudience}</span>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-brand-display font-light text-[#0F172A] mb-2">
                          {form.title}
                        </h3>
                        <p className="text-blue-600 font-medium text-sm">
                          {form.subtitle}
                        </p>
                      </div>

                      <p className="text-slate-600 font-light leading-relaxed">
                        {form.description}
                      </p>

                      <div className="pt-6 mt-6 border-t border-slate-100">
                        <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
                          ¿Qué incluye este formato?
                        </h4>
                        <ul className="space-y-3">
                          {form.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <CheckCircle2
                                className={cn(
                                  "w-5 h-5 shrink-0 mt-0.5",
                                  form.color === "blue"
                                    ? "text-blue-500"
                                    : form.color === "emerald"
                                    ? "text-emerald-500"
                                    : "text-indigo-500"
                                )}
                              />
                              <span className="text-sm text-slate-700 font-light">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column: Call to Action Panel */}
                    <div className="lg:col-span-5">
                      <div
                        className={cn(
                          "rounded-2xl p-8 border text-center h-full flex flex-col justify-center",
                          form.color === "blue"
                            ? "bg-blue-50/50 border-blue-100"
                            : form.color === "emerald"
                            ? "bg-emerald-50/50 border-emerald-100"
                            : "bg-indigo-50/50 border-indigo-100"
                        )}
                      >
                        <div className="mb-8">
                          <span className="text-[10px] font-mono tracking-widest uppercase text-slate-500 mb-2 block">
                            Inversión / Estado
                          </span>
                          <span
                            className={cn(
                              "text-xl sm:text-2xl font-semibold",
                              form.color === "blue"
                                ? "text-blue-900"
                                : form.color === "emerald"
                                ? "text-emerald-900"
                                : "text-indigo-900"
                            )}
                          >
                            {form.priceLabel}
                          </span>
                        </div>

                        <a
                          href="/contacto"
                          className={cn(
                            "inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full text-white font-medium transition-all shadow-sm hover:shadow-md",
                            form.color === "blue"
                              ? "bg-blue-600 hover:bg-blue-700"
                              : form.color === "emerald"
                              ? "bg-emerald-600 hover:bg-emerald-700"
                              : "bg-indigo-600 hover:bg-indigo-700"
                          )}
                        >
                          <span>{form.cta}</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                        
                        <p className="mt-4 text-[11px] text-slate-500 font-light">
                          Plazas limitadas por sesión para asegurar la calidad de la enseñanza.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
