"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Factory,
  Scale,
  Rocket,
  ArrowRight,
  TrendingUp,
  Clock,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const USE_CASES = [
  {
    id: "health",
    category: "Salud & Clínicas",
    icon: Stethoscope,
    title: "Clínicas Médicas, Dentales & Estéticas",
    problem:
      "25% de pérdida por pacientes que cancelan a última hora (no-show), secretaría saturada respondiendo precios y fuga de leads durante las noches.",
    solution:
      "Agente conversacional de WhatsApp 24/7 con triaje inteligente, sincronización con el software de gestión médica y confirmaciones automáticas con pago de seña.",
    results: [
      { label: "Reducción de No-Shows", value: "-82%" },
      { label: "Tiempo de Respuesta", value: "< 25 seg" },
      { label: "Citas Agendadas 24/7", value: "+38%" },
    ],
    quote:
      "El sistema de SyntIQ nos devolvió el control de la agenda médica y rescató más de $14,000 USD mensuales en citas que antes se perdían.",
    author: "Dirección Médica, Red de Clínicas Especializadas",
  },
  {
    id: "manufacturing",
    category: "Manufactura & Industria",
    icon: Factory,
    title: "Plantas de Producción & Dispositivos Médicos",
    problem:
      "Cuellos de botella en control de calidad, variabilidad no controlada en líneas de producción y alta carga manual para cumplir auditorías ISO 13485 / FDA.",
    solution:
      "Implementación de control estadístico algorítmico (Python/Minitab) integrado con agentes que auditan registros de lotes y alertan desviaciones antes de que generen mermas.",
    results: [
      { label: "Tiempo de Validación", value: "-68%" },
      { label: "Trazabilidad Lotes", value: "100% Digital" },
      { label: "No Conformidades", value: "0 Errores" },
    ],
    quote:
      "La rigurosidad técnica de Bryan y el equipo de SyntIQ nos permitió superar auditorías internacionales sin estrés operativo.",
    author: "Gerente de Operaciones, Fabricante de Precisión",
  },
  {
    id: "legal",
    category: "Legal & Financiero",
    icon: Scale,
    title: "Despachos de Abogados, Notarías & Asesorías",
    problem:
      "Cientos de horas perdidas revisando contratos extensos, buscando jurisprudencia dispersa y redactando memorandos repetitivos de bajo valor.",
    solution:
      "Motor RAG de análisis contractual y verificación de riesgos con supervisión legal experta ('Human-in-the-Loop') y estricta confidencialidad de datos.",
    results: [
      { label: "Generación de Borradores", value: "4x más rápido" },
      { label: "Diligencia Documental", value: "-75% tiempo" },
      { label: "Seguridad de Datos", value: "Cifrado PII" },
    ],
    quote:
      "Laura y el equipo legal de SyntIQ entienden perfectamente el riesgo jurídico. Ninguna otra agencia nos ofreció esta capa de blindaje normativo.",
    author: "Socio Director, Firma Jurídica Internacional",
  },
  {
    id: "saas",
    category: "B2B SaaS & Tech",
    icon: Rocket,
    title: "Empresas Tecnológicas, B2B SaaS & Agencias",
    problem:
      "Leads que tardan horas en recibir una respuesta comercial, procesos de onboarding manuales y sobrecarga del equipo de atención.",
    solution:
      "Arquitectura agéntica con n8n que califica prospectos en tiempo real, agenda demos automáticas y aprovisiona cuentas instantáneamente en la base de datos.",
    results: [
      { label: "Conversión de Leads", value: "+44%" },
      { label: "Onboarding Automatizado", value: "< 2 min" },
      { label: "Carga de Soporte", value: "-60%" },
    ],
    quote:
      "Nuestra velocidad de ventas se disparó. Hoy cerramos clientes en fines de semana mientras el equipo descansa.",
    author: "Head of Growth, B2B SaaS Platform",
  },
];

export default function UseCasesSection() {
  const [activeTab, setActiveTab] = useState<string>("health");
  const currentCase = USE_CASES.find((c) => c.id === activeTab) || USE_CASES[0];
  const Icon = currentCase.icon;

  return (
    <section id="casos-uso" className="relative py-24 sm:py-32 bg-[#030712] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="brand-label text-blue-400">
            05 — CASOS DE USO POR INDUSTRIA
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-white font-light mt-3 leading-tight">
            Impacto probado donde cada segundo{" "}
            <span className="italic text-blue-500 font-normal">significa rentabilidad</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Descubre cómo SyntIQ resuelve los dolores operativos más críticos en distintas
            verticales empresariales.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {USE_CASES.map((item) => {
            const TabIcon = item.icon;
            const isSelected = item.id === activeTab;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer",
                  isSelected
                    ? "bg-blue-600 text-white shadow-glow-sm scale-[1.02]"
                    : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
                )}
              >
                <TabIcon className="w-4 h-4" />
                <span>{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active Case Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentCase.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-slate-900/50 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Problem & Solution Details (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="brand-label text-blue-400 text-[10px]">
                      SECTOR: {currentCase.category}
                    </span>
                    <h3 className="font-brand-display text-2xl sm:text-3xl text-white font-normal mt-0.5">
                      {currentCase.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <div className="p-4 rounded-xl bg-slate-950/80 border border-red-900/30">
                    <span className="text-[10px] font-mono text-red-400 font-semibold block mb-1">
                      EL CUELLO DE BOTELLA INICIAL:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {currentCase.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950/80 border border-blue-900/30">
                    <span className="text-[10px] font-mono text-blue-400 font-semibold block mb-1">
                      ARQUITECTURA DE IA IMPLEMENTADA POR SYNTIQ:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {currentCase.solution}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-4 rounded-xl bg-blue-950/20 border-l-2 border-blue-500 text-xs sm:text-sm text-slate-300 italic">
                  &quot;{currentCase.quote}&quot;
                  <span className="block not-italic font-mono text-[10px] text-slate-400 mt-2 font-normal">
                    — {currentCase.author}
                  </span>
                </div>
              </div>

              {/* Right Column: Quantitative Metric Badges (5 cols) */}
              <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                <span className="brand-label text-slate-400 block pb-2 border-b border-slate-800">
                  IMPACTO CUANTIFICADO
                </span>

                <div className="space-y-4">
                  {currentCase.results.map((res) => (
                    <div
                      key={res.label}
                      className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between"
                    >
                      <span className="text-xs text-slate-300 font-medium">{res.label}</span>
                      <span className="text-lg font-bold font-mono text-emerald-400">
                        {res.value}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#diagnostico"
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm py-3 rounded-xl transition-all shadow-glow-sm"
                >
                  <span>Replicar esta Solución en mi Empresa</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
