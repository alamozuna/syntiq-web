"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Mail,
  MessageSquare,
  FileText,
  Cpu,
  Search,
  Zap,
  CheckCircle2,
  ArrowDown,
  RotateCcw,
} from "lucide-react";

type StepKey = "entrada" | "agente" | "analiza" | "ejecuta" | "resultado";

const STEPS: {
  key: StepKey;
  label: string;
  sub: string;
  icon: React.ElementType;
  color: string;
  activeBg: string;
  activeRing: string;
}[] = [
  {
    key: "entrada",
    label: "Entrada",
    sub: "Email · WhatsApp · Documento",
    icon: Mail,
    color: "blue",
    activeBg: "bg-blue-50/90",
    activeRing: "ring-blue-100 border-blue-400",
  },
  {
    key: "agente",
    label: "Agente IA",
    sub: "Evalúa el contenido y decide qué hacer",
    icon: Cpu,
    color: "blue",
    activeBg: "bg-blue-50/90",
    activeRing: "ring-blue-100 border-blue-400",
  },
  {
    key: "analiza",
    label: "Analiza",
    sub: "Clasifica, extrae datos y prioriza",
    icon: Search,
    color: "blue",
    activeBg: "bg-blue-50/90",
    activeRing: "ring-blue-100 border-blue-400",
  },
  {
    key: "ejecuta",
    label: "Ejecuta Acción",
    sub: "Responde, archiva o escala según las reglas",
    icon: Zap,
    color: "amber",
    activeBg: "bg-amber-50/90",
    activeRing: "ring-amber-100 border-amber-400",
  },
  {
    key: "resultado",
    label: "Resultado",
    sub: "Tarea completada con supervisión",
    icon: CheckCircle2,
    color: "emerald",
    activeBg: "bg-emerald-50/90",
    activeRing: "ring-emerald-100 border-emerald-400",
  },
];

const INPUTS = [
  { icon: Mail, label: "Email" },
  { icon: MessageSquare, label: "WhatsApp" },
  { icon: FileText, label: "Documento" },
];

export default function LiveAgentWorkflow() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // 6-second total loop: ~1.2s per step
  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STEPS.length);
    }, 1200);
    return () => clearInterval(timer);
  }, [isPlaying]);

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-50/80 border-b border-slate-200/80">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <span className="ml-1 text-xs font-mono font-medium text-slate-600">
            SyntIQ — Flujo de Agente
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-mono text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>En ejecución</span>
          </div>

          <button
            type="button"
            onClick={() => setIsPlaying((v) => !v)}
            aria-label={isPlaying ? "Pausar animación" : "Reanudar animación"}
            className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors"
            title={isPlaying ? "Pausar ciclo" : "Reanudar ciclo"}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Canvas */}
      <div className="p-4 sm:p-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-md mx-auto flex flex-col items-center gap-0">
          {STEPS.map((step, idx) => {
            const isActive = activeIdx === idx;
            const isPast = activeIdx > idx;
            const Icon = step.icon;

            return (
              <React.Fragment key={step.key}>
                {/* Node */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveIdx(idx);
                    setIsPlaying(false);
                  }}
                  className={cn(
                    "w-full rounded-2xl p-4 border transition-all duration-300 text-left cursor-pointer",
                    isActive
                      ? `${step.activeBg} ${step.activeRing} shadow-sm ring-2`
                      : isPast
                      ? "bg-white border-slate-200 opacity-60"
                      : "bg-white border-slate-200/90 shadow-xs"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0",
                        isActive && step.color === "blue" && "bg-blue-600 text-white shadow-xs",
                        isActive && step.color === "amber" && "bg-amber-500 text-white shadow-xs",
                        isActive && step.color === "emerald" && "bg-emerald-600 text-white shadow-xs",
                        !isActive && isPast && "bg-slate-100 text-slate-400",
                        !isActive && !isPast && "bg-slate-100 text-slate-500"
                      )}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                        <span>{step.label}</span>
                        {isActive && step.key === "resultado" && (
                          <span className="text-emerald-600 text-xs font-mono">✓</span>
                        )}
                      </h4>
                      {/* Show input icons for the first node */}
                      {step.key === "entrada" ? (
                        <div className="flex items-center gap-3 mt-1">
                          {INPUTS.map((inp) => {
                            const IIcon = inp.icon;
                            return (
                              <span
                                key={inp.label}
                                className="flex items-center gap-1 text-[11px] text-slate-500"
                              >
                                <IIcon className="w-3 h-3" />
                                <span>{inp.label}</span>
                              </span>
                            );
                          })}
                        </div>
                      ) : (
                        <p className="text-[11px] text-slate-500 font-light mt-0.5 truncate">
                          {step.sub}
                        </p>
                      )}
                    </div>
                  </div>
                </button>

                {/* Connector */}
                {idx < STEPS.length - 1 && (
                  <div className="flex flex-col items-center py-1">
                    <div
                      className={cn(
                        "w-0.5 h-5 transition-colors duration-300",
                        activeIdx > idx ? "bg-blue-500" : "bg-slate-200"
                      )}
                    />
                    <ArrowDown
                      className={cn(
                        "w-3 h-3 -mt-0.5 transition-colors duration-300",
                        activeIdx > idx ? "text-blue-500" : "text-slate-300"
                      )}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-5 py-3 bg-slate-50/90 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 font-mono">
        <span className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-blue-600" />
          <span>Flujo completo en segundos</span>
        </span>
        <span className="text-[11px] text-slate-400">
          Aprenderás a construir flujos como este desde tu primer taller.
        </span>
      </div>
    </div>
  );
}
