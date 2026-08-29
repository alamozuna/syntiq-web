"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Brain,
  Workflow,
  TrendingUp,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    step: "01",
    id: "data",
    label: "DATA INGESTION",
    title: "1. Datos & Ingesta Unificada",
    subtitle: "De información dispersa y caótica a un lago de datos estructurado y vectorial.",
    icon: Database,
    accentColor: "blue",
    description:
      "Conectamos tus canales (WhatsApp, correo, CRM, ERP, formularios) y los unificamos en un pipeline de datos canónico. Limpiamos redundancias y creamos índices vectoriales (RAG) para que la IA disponga de memoria empresarial exacta.",
    codeSnippet: `// SyntIQ Ingestion Engine v2.4
const ingestedStream = await syntiqData.collect({
  sources: ["whatsapp_cloud", "imap_leads", "crm_deal_sync"],
  cleanPII: true,
  vectorizeEmbeddings: "text-embedding-3-large",
  destination: "SyntIQ_Memory_Vault_Postgres"
});`,
    kpis: [
      { label: "Fuentes Conectadas", value: "100% Omnicanal" },
      { label: "Limpieza PII", value: "Automática" },
      { label: "Indexación RAG", value: "< 50ms" },
    ],
  },
  {
    step: "02",
    id: "intelligence",
    label: "COGNITIVE INTELLIGENCE",
    title: "2. Inteligencia & Razonamiento Agéntico",
    subtitle: "Modelos de frontera con lógica estricta y roles empresariales asignados.",
    icon: Brain,
    accentColor: "indigo",
    description:
      "La información pasa por nuestro motor de razonamiento basado en Claude 3.5 Sonnet y agentes de frontera. El sistema no responde mecánicamente: califica la intención, evalúa el contexto financiero y decide la acción óptima con supervisión 'Human-in-the-Loop'.",
    codeSnippet: `// SyntIQ Agent Decision Loop
const agentDecision = await syntiqAgent.reason({
  context: ingestedStream.memoryTrace,
  intentClassification: "B2B_High_Value_Lead",
  governanceRules: ["NO_HALLUCINATION", "ISO_13485_COMPLIANT"],
  actionPlan: "DISPATCH_CALENDAR_INVITE_AND_SYNC_ERP"
});`,
    kpis: [
      { label: "Modelo Cognitivo", value: "Claude 3.5 / LLMs" },
      { label: "Validación Humana", value: "Logs Auditados" },
      { label: "Tasa de Alucinación", value: "0.00%" },
    ],
  },
  {
    step: "03",
    id: "automation",
    label: "WORKFLOW ORCHESTRATION",
    title: "3. Orquestación & Automatización",
    subtitle: "Ejecución transaccional instantánea a través de flujos en n8n.",
    icon: Workflow,
    accentColor: "emerald",
    description:
      "La decisión del agente se traduce en acciones en tu software real: creación de tratos en CRM, emisión de presupuestos, sincronización de calendarios, envío de confirmaciones por WhatsApp y actualización contable inmediata sin tocar un solo teclado.",
    codeSnippet: `// SyntIQ n8n Orchestrator Node
const execution = await n8nCluster.executeWorkflow({
  workflowId: "WF_ENTERPRISE_DISPATCH_09",
  nodes: ["whatsapp_auto_reply", "calendar_book", "hubspot_deal_create"],
  payload: agentDecision.validatedAction
});`,
    kpis: [
      { label: "Orquestador", value: "n8n Enterprise" },
      { label: "Tiempo de Ejecución", value: "< 280ms" },
      { label: "Disponibilidad", value: "99.98% Uptime" },
    ],
  },
  {
    step: "04",
    id: "results",
    label: "NET BUSINESS RESULTS",
    title: "4. Resultados de Negocio & Rentabilidad",
    subtitle: "Impacto tangible en el balance general y tiempo recuperado para el equipo.",
    icon: TrendingUp,
    accentColor: "blue",
    description:
      "El caos operativo se transforma en un balance financiero saludable: citas confirmadas sin no-show, leads atendidos en segundos durante la madrugada y el equipo directivo liberado de la mediocridad administrativa para enfocarse en la estrategia.",
    codeSnippet: `// SyntIQ ROI Metrics Dashboard
const financialImpact = {
  hoursSavedMonthly: "184 horas / equipo",
  revenueLeakagePrevented: "$12,800 USD / mes",
  responseSpeedImprovement: "32x más rápido",
  roiMultiplier: "9.4x inversión neta"
};`,
    kpis: [
      { label: "Respuesta al Lead", value: "< 30 seg" },
      { label: "No-Shows", value: "Reducción 85%" },
      { label: "Capacidad Operativa", value: "+340%" },
    ],
  },
];

export default function ProcessFlowEngine() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const currentStage = STAGES[activeStep];
  const Icon = currentStage.icon;

  return (
    <section id="flujo-ia" className="relative py-24 sm:py-32 bg-[#060a12] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="brand-label text-blue-400">
            03 — CÓMO FUNCIONA EL MOTOR SYNTIQ
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-white font-light mt-3 leading-tight">
            Data → Intelligence → Automation →{" "}
            <span className="italic text-blue-500 font-normal">Rentabilidad Neta</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Inspirado en la gobernanza de datos enterprise de Dataiku y la precisión agéntica de V7 Labs.
            Haz clic en cada fase para inspeccionar el flujo técnico.
          </p>
        </div>

        {/* 4 Steps Selector Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {STAGES.map((s, index) => {
            const StepIcon = s.icon;
            const isSelected = index === activeStep;
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveStep(index)}
                className={cn(
                  "p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden cursor-pointer",
                  isSelected
                    ? "bg-slate-900 border-blue-500 shadow-glow-sm"
                    : "bg-slate-950/70 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40"
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={cn(
                      "font-mono text-xs font-semibold",
                      isSelected ? "text-blue-400" : "text-slate-400"
                    )}
                  >
                    FASE {s.step}
                  </span>
                  <StepIcon
                    className={cn(
                      "w-4 h-4",
                      isSelected ? "text-blue-400" : "text-slate-400"
                    )}
                  />
                </div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-100 line-clamp-1">
                  {s.title.split(". ")[1]}
                </h4>
                <p className="text-[11px] text-slate-400 font-mono mt-1">{s.label}</p>

                {isSelected && (
                  <motion.div
                    layoutId="active-stage-indicator"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Stage Content Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="rounded-3xl bg-slate-900/50 border border-slate-800/90 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-md"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Stage Explanation & KPIs (6 cols) */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="brand-label text-blue-400 text-[10px]">
                      ETAPA {currentStage.step} // {currentStage.label}
                    </span>
                    <h3 className="font-brand-display text-2xl sm:text-3xl text-white font-normal mt-0.5">
                      {currentStage.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                  {currentStage.description}
                </p>

                {/* KPI Badges */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                  {currentStage.kpis.map((kpi) => (
                    <div
                      key={kpi.label}
                      className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center font-mono"
                    >
                      <span className="text-[9px] sm:text-[10px] text-slate-400 block mb-1">
                        {kpi.label}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-emerald-400">
                        {kpi.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Code Snippet / Architecture Terminal (6 cols) */}
              <div className="lg:col-span-6 bg-slate-950 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <Code2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>syntiq_engine_pipeline_{currentStage.id}.ts</span>
                  </div>
                  <span className="text-[10px] text-emerald-400">● LIVE RUNTIME</span>
                </div>

                <pre className="p-4 sm:p-6 text-xs sm:text-[13px] font-mono text-blue-300/90 overflow-x-auto leading-relaxed bg-[#030712]">
                  {currentStage.codeSnippet}
                </pre>

                <div className="px-4 py-2.5 bg-slate-900/60 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Modo: Producción Enterprise</span>
                  <span className="text-slate-300">Trazabilidad: 100% Auditada</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
