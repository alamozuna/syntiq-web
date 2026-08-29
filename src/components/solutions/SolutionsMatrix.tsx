"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Boxes,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Zap,
  Clock,
  Coins,
  Cpu,
  Lock,
  Workflow,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SOLUTIONS_DATA = [
  {
    id: "productized",
    tabLabel: "Motor Productizado (PyMEs)",
    tag: "PLUG & PLAY DE ALTA VELOCIDAD",
    title: "Infraestructura de IA Plug-and-Play para PyMEs y Despachos",
    subtitle:
      "Erradica las tareas repetitivas y rescata el lucro cesante con un sistema estandarizado que opera 24/7 sin aumentar tu nómina.",
    icon: Boxes,
    deliveryTime: "Despliegue en 7 a 14 días",
    targetAudience: "PyMEs, clínicas, despachos legales, inmobiliarias y agencias",
    painPoint:
      "Leads que se enfrían de madrugada, citas canceladas a última hora y personal administrativo saturado respondiendo lo mismo.",
    solutionCore:
      "Orquestador n8n + Claude 3.5 + WhatsApp Cloud + Google Calendar + Stripe/CRM totalmente integrado.",
    features: [
      "Calificación de prospectos y enrutamiento inteligente en <30 segundos",
      "Asistente conversacional de WhatsApp 24/7 con memoria contextual",
      "Sistema anti-no-show con confirmación y recordatorios automatizados",
      "Sincronización directa con CRM, correo y bases de datos",
      "Mantenimiento continuo de servidores y optimización de tokens",
    ],
    ctaText: "Ver Plan Productizado",
    href: "#diagnostico",
  },
  {
    id: "consultative",
    tabLabel: "Motor Consultivo (Enterprise)",
    tag: "TRANSFORMACIÓN ESTRATÉGICA A MEDIDA",
    title: "Auditoría y Desarrollo Estratégico de IA para Gran Empresa",
    subtitle:
      "Modernización profunda de la cadena de valor operativa: orquestación de datos, agentes autónomos y conexión con sistemas ERP.",
    icon: Building2,
    deliveryTime: "Proyectos por fases de 4 a 12 semanas",
    targetAudience: "Empresas medianas, sector industrial, manufactura y corporaciones",
    painPoint:
      "Sistemas heredados rígidos, deuda tecnológica acumulada, falta de talento interno en IA y procesos lentos no automatizados.",
    solutionCore:
      "Auditoría técnica en planta, arquitectura de agentes distribuidos, control estadístico y pipelines de datos seguros.",
    features: [
      "Auditoría integral de procesos para detección quirúrgica de cuellos de botella",
      "Despliegue de agentes autónomos conectados a ERPs corporativos (SAP, Salesforce)",
      "Control estadístico de variabilidad y optimización algorítmica (Python/Minitab)",
      "Documentación técnica homologada para fondos y subvenciones de innovación",
      "Acuerdos de Nivel de Servicio (SLAs) y soporte de ingeniería dedicado",
    ],
    ctaText: "Agendar Auditoría Enterprise",
    href: "#diagnostico",
  },
  {
    id: "governance",
    tabLabel: "Gobernanza & Compliance",
    tag: "BLINDAJE LEGAL Y ÉTICO",
    title: "Capa de Gobernanza, Ciberseguridad & Blindaje de IA",
    subtitle:
      "Garantiza que la adopción de IA en tu empresa sea segura, ética, libre de alucinaciones y legalmente inexpugnable.",
    icon: ShieldCheck,
    deliveryTime: "Auditoría continua & monitoreo 24/7",
    targetAudience: "Direcciones legales, directores de IT, CFOs y comités de riesgo",
    painPoint:
      "Riesgo de filtración de secretos comerciales, alucinaciones en respuestas críticas, 'token bleeding' y falta de cumplimiento normativo.",
    solutionCore:
      "Protocolos Human-in-the-Loop, anonimización PII, auditoría de propiedad intelectual y cumplimiento ISO 13485 / FDA / OMA.",
    features: [
      "Auditoría de logs con supervisión humana sistemática en producción",
      "Protección estricta de propiedad intelectual (IP) y secretos comerciales",
      "Cumplimiento normativo internacional (RGPD / LOPD / ISO 13485 / FDA)",
      "Políticas de contención de costes de tokens y prevención de sobrecargas",
      "Certificación de seguridad técnica y mitigación de sesgos algorítmicos",
    ],
    ctaText: "Consultar Blindaje Legal",
    href: "#diagnostico",
  },
];

export default function SolutionsMatrix() {
  const [activeTab, setActiveTab] = useState<string>("productized");

  const current = SOLUTIONS_DATA.find((s) => s.id === activeTab) || SOLUTIONS_DATA[0];
  const Icon = current.icon;

  return (
    <section className="relative py-24 sm:py-32 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="brand-label text-blue-400">
            02 — MATRIZ DE SOLUCIONES & MODELO OPERATIVO
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-white font-light mt-3 leading-tight">
            Dos motores de impacto adaptados a tu{" "}
            <span className="italic text-blue-500 font-normal">etapa de crecimiento</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Desde la implementación rápida de agentes productizados hasta consultoría técnica de
            alta ingeniería y blindaje legal enterprise.
          </p>
        </div>

        {/* Interactive Segment Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {SOLUTIONS_DATA.map((tab) => {
            const TabIcon = tab.icon;
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex items-center gap-2 px-5 py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer",
                  isActive
                    ? "bg-blue-600 text-white shadow-glow-sm scale-[1.02]"
                    : "bg-slate-900/80 text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white"
                )}
              >
                <TabIcon className="w-4 h-4" />
                <span>{tab.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Solution Detail Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Solution Story & Features (7 cols) */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-blue-400 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{current.tag}</span>
                </div>

                <h3 className="font-brand-display text-2xl sm:text-4xl text-white font-light leading-tight">
                  {current.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                  {current.subtitle}
                </p>

                {/* Pain vs Solution Box */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/30">
                    <span className="text-[10px] font-mono text-red-400 font-semibold block mb-1">
                      EL PROBLEMA A RESOLVER:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">{current.painPoint}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/30">
                    <span className="text-[10px] font-mono text-emerald-400 font-semibold block mb-1">
                      NÚCLEO DE LA SOLUCIÓN:
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {current.solutionCore}
                    </p>
                  </div>
                </div>

                {/* Feature Checkmarks */}
                <div className="space-y-3 pt-2">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                    CAPACIDADES TÉCNICAS INCLUIDAS:
                  </span>
                  <div className="grid gap-2.5">
                    {current.features.map((feat) => (
                      <div key={feat} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-slate-200">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Execution Card & Summary (5 cols) */}
              <div className="lg:col-span-5 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Modelo de Implementación</h4>
                    <span className="text-xs font-mono text-emerald-400">
                      {current.deliveryTime}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300 border-y border-slate-800 py-4">
                  <div>
                    <span className="text-slate-400 font-mono text-[10px] block">
                      DIRIGIDO A:
                    </span>
                    <p className="mt-0.5 text-slate-200 font-medium">{current.targetAudience}</p>
                  </div>
                  <div>
                    <span className="text-slate-400 font-mono text-[10px] block">
                      GARANTÍA SYNTIQ:
                    </span>
                    <p className="mt-0.5 text-slate-200">
                      Integración &quot;Human-in-the-Loop&quot; y 0% de alucinaciones en producción.
                    </p>
                  </div>
                </div>

                <a
                  href={current.href}
                  className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-3.5 rounded-xl transition-all shadow-glow-sm hover:shadow-glow-md"
                >
                  <span>{current.ctaText}</span>
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
