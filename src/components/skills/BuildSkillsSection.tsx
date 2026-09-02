"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquareCode,
  Terminal,
  Workflow,
  Bot,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const SKILLS = [
  {
    number: "01",
    title: "PROMPTING",
    phrase: "Instrucciones precisas para obtener resultados consistentes.",
    icon: MessageSquareCode,
    badge: "Lenguaje Natural",
    microVisual: (
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[11px] text-slate-700 space-y-1">
        <div className="text-slate-400">&lt;prompt_estructurado&gt;</div>
        <div className="text-blue-600 font-medium">rol: Analista Financiero</div>
        <div className="text-slate-600">salida: JSON estricto sin relleno</div>
        <div className="text-emerald-600 flex items-center gap-1 text-[10px]">
          <CheckCircle2 className="w-3 h-3" /> 100% Determinista
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "VIBE CODING",
    phrase: "Convierte una idea en una herramienta funcional sin empezar desde cero.",
    icon: Terminal,
    badge: "Desarrollo Asistido",
    microVisual: (
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[11px] text-slate-700 space-y-1">
        <div className="flex items-center justify-between text-[10px] text-slate-400">
          <span>cursor // mini-app.tsx</span>
          <span className="text-emerald-600">✓ Listo</span>
        </div>
        <div className="text-slate-600 text-[10px]">
          <span className="text-blue-600 font-medium">&quot;Crea un dashboard de leads...&quot;</span>
        </div>
        <div className="text-slate-500 text-[10px] pt-1 border-t border-slate-200">
          Componente funcional generado en 2 min
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "AUTOMATIZACIÓN",
    phrase: "Conecta IA con las aplicaciones y procesos que ya utilizas.",
    icon: Workflow,
    badge: "n8n & APIs",
    microVisual: (
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[11px] text-slate-700">
        <div className="flex items-center justify-between gap-1 text-[10px] py-1">
          <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-700">Email</span>
          <ArrowRight className="w-3 h-3 text-slate-400" />
          <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700">n8n IA</span>
          <ArrowRight className="w-3 h-3 text-slate-400" />
          <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700">CRM</span>
        </div>
        <div className="text-[10px] text-slate-500 mt-1 text-center">
          Sincronización continua 24/7
        </div>
      </div>
    ),
  },
  {
    number: "04",
    title: "AGENTES",
    phrase: "Diseña flujos capaces de razonar, ejecutar y pedir supervisión cuando sea necesario.",
    icon: Bot,
    badge: "Supervisión Humana",
    microVisual: (
      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-[11px] text-slate-700 space-y-1">
        <div className="flex items-center justify-between text-[10px]">
          <span className="text-slate-500">Razonamiento</span>
          <span className="text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200 text-[9px]">
            HITL
          </span>
        </div>
        <div className="text-[10px] text-slate-600">
          Regla: si confianza &lt; 90% → alerta Slack
        </div>
        <div className="text-[10px] text-emerald-600 font-medium">
          Acción ejecutada con control humano
        </div>
      </div>
    ),
  },
];

export default function BuildSkillsSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase">
            QUÉ VAS A APRENDER A CONSTRUIR
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light mt-3 leading-tight">
            De usar IA a <span className="italic font-normal text-blue-600">construir con IA.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Aprende las habilidades que convierten un chatbot en una herramienta de trabajo.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SKILLS.map((skill, idx) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between hover:border-blue-300 hover:shadow-[0_12px_24px_-8px_rgba(15,23,42,0.06)] hover:-translate-y-1 transition-all duration-200 group"
              >
                <div>
                  {/* Top: Number & Badge */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-400 font-medium">
                      {skill.number}
                    </span>
                  </div>

                  {/* Title & Short Phrase */}
                  <h3 className="text-base font-bold text-slate-900 tracking-wide mb-2 font-mono">
                    {skill.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                    {skill.phrase}
                  </p>
                </div>

                {/* Minimal Visual Demo */}
                <div className="mt-auto pt-2">
                  {skill.microVisual}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
