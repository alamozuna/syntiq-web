"use client";

import React from "react";
import { motion } from "framer-motion";
import { Database, Bot, ShieldCheck, TrendingUp, ArrowUpRight, Check } from "lucide-react";

const PILLARS = [
  {
    number: "01",
    label: "DATA ENGINEERING & PIPELINE",
    title: "Ingestión & Unificación de Datos",
    highlight: "Conecta fuentes dispersas.",
    description:
      "Transformamos datos caóticos y aislados (emails, WhatsApp, hojas de cálculo, ERP) en un modelo canónico centralizado con memoria vectorial para alimentar agentes inteligentes.",
    icon: Database,
    bullets: [
      "Extracción y limpieza automatizada de registros",
      "Bases vectoriales con búsqueda semántica (RAG)",
      "Cero pérdida de información operativa",
    ],
    badge: "Base de Datos Unificada",
  },
  {
    number: "02",
    label: "COGNITIVE ARCHITECTURE",
    title: "Agentes Autónomos Especializados",
    highlight: "Razonamiento multinivel.",
    description:
      "No son simples chatbots. Desplegamos sistemas agénticos con roles definidos que razonan, priorizan leads, redactan documentos técnicos y ejecutan acciones transaccionales 24/7.",
    icon: Bot,
    bullets: [
      "Orquestación avanzada con n8n & Claude 3.5",
      "Toma de decisiones lógicas basada en contexto",
      "Reducción del 'Task Zero' a cero fricción",
    ],
    badge: "Agentes con Contexto",
  },
  {
    number: "03",
    label: "SECURITY & COMPLIANCE",
    title: "Gobernanza & Blindaje Legal",
    highlight: "Human-in-the-loop.",
    description:
      "Garantizamos que ninguna IA opere a ciegas. Con supervisión experta, auditoría de logs y protocolos de cumplimiento (ISO 13485/FDA/GDPR), eliminamos el riesgo de alucinación y filtración.",
    icon: ShieldCheck,
    bullets: [
      "Supervisión humana obligatoria en producción",
      "Protección de propiedad intelectual e IP",
      "Logs auditables y cifrado de credenciales",
    ],
    badge: "100% Inexpugnable",
  },
  {
    number: "04",
    label: "BUSINESS PROFITABILITY",
    title: "Ejecución & Rentabilidad Neta",
    highlight: "Impacto en balance.",
    description:
      "Convertimos la eficiencia en margen neto. Rescatamos el lucro cesante nocturno y de fin de semana, eliminando el techo de cristal operativo para que tu empresa crezca sin duplicar plantilla.",
    icon: TrendingUp,
    bullets: [
      "Erradicación del 'No-Show' y leads fríos",
      "Automatización de cobros, citas y soporte",
      "Costos operativos predecibles y controlados",
    ],
    badge: "ROI de 5x a 12x",
  },
];

export default function PillarsSection() {
  return (
    <section id="soluciones" className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="brand-label text-blue-400">
              01 — ARQUITECTURA DE VALOR FUNDACIONAL
            </span>
            <h2 className="font-brand-display text-3xl sm:text-5xl lg:text-6xl text-white font-light mt-3 leading-tight">
              Los 4 Pilares del{" "}
              <span className="italic text-blue-500 font-normal">Orden Operativo</span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            No agregamos parches superficiales ni vendemos &quot;vaporware&quot;. Diseñamos el sistema
            operativo definitivo para erradicar cuellos de botella y maximizar tu rentabilidad neta.
          </p>
        </div>

        {/* 4 Asymmetric Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl bg-slate-900/40 border border-slate-800 p-6 sm:p-8 hover:border-blue-500/40 transition-all duration-300 group hover:shadow-glow-sm flex flex-col justify-between"
              >
                {/* Top Badge & Number */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl sm:text-3xl font-light text-slate-400 group-hover:text-blue-400 transition-colors">
                      {pillar.number}
                    </span>
                    <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60">
                      {pillar.badge}
                    </span>
                  </div>

                  <span className="brand-label text-blue-400/90 text-[10px] block mb-2">
                    {pillar.label}
                  </span>

                  <h3 className="font-brand-display text-2xl sm:text-3xl text-white font-normal mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                {/* Bullets List */}
                <div className="pt-6 border-t border-slate-800/60 space-y-2.5">
                  {pillar.bullets.map((bullet) => (
                    <div key={bullet} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-blue-950/60 border border-blue-500/30 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-blue-400" />
                      </div>
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
