"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MessageSquare,
  FileText,
  Cpu,
  Layers,
  CheckCircle2,
  Sparkles,
  Zap,
  ArrowDown,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";

type StepType = "input" | "thinking" | "action" | "done";

export default function LiveAgentWorkflow() {
  const [currentStep, setCurrentStep] = useState<StepType>("input");
  const [activeInputType, setActiveInputType] = useState<"email" | "whatsapp" | "pdf">("email");
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Subtle 6-second loop
  useEffect(() => {
    if (!isAutoPlaying) return;

    const steps: StepType[] = ["input", "thinking", "action", "done"];
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextIdx = (steps.indexOf(prev) + 1) % steps.length;
        if (nextIdx === 0) {
          // Rotate active input
          setActiveInputType((curr) =>
            curr === "email" ? "whatsapp" : curr === "whatsapp" ? "pdf" : "email"
          );
        }
        return steps[nextIdx];
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <div className="w-full rounded-3xl bg-white border border-slate-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
      {/* Top Application Canvas Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-slate-50/80 border-b border-slate-200/80">
        <div className="flex items-center gap-2.5">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-300" />
          </div>
          <span className="ml-1 text-xs font-mono font-medium text-slate-600">
            SyntIQ Studio — Live Agent Workflow
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-[10px] font-mono text-emerald-700">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>En ejecución</span>
          </div>

          <button
            type="button"
            onClick={() => setIsAutoPlaying((v) => !v)}
            aria-label={isAutoPlaying ? "Pausar animación" : "Reanudar animación"}
            className="p-1 text-slate-400 hover:text-slate-700 rounded transition-colors"
            title={isAutoPlaying ? "Pausar ciclo" : "Reanudar ciclo"}
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Visual Canvas */}
      <div className="p-4 sm:p-8 bg-gradient-to-b from-white to-slate-50/50">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          
          {/* 1. INPUT NODE */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider uppercase">
                01. Fuentes de Entrada
              </span>
              <span
                className={cn(
                  "text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors",
                  currentStep === "input"
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "bg-slate-100 text-slate-500"
                )}
              >
                INPUT
              </span>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-3">
              {[
                { id: "email", label: "Email", icon: Mail, detail: "Nueva consulta cliente" },
                { id: "whatsapp", label: "WhatsApp", icon: MessageSquare, detail: "Audio / Texto recibido" },
                { id: "pdf", label: "PDF / Doc", icon: FileText, detail: "Factura adjunta" },
              ].map((item) => {
                const isSelected = activeInputType === item.id;
                const isStepActive = currentStep === "input" && isSelected;
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setActiveInputType(item.id as "email" | "whatsapp" | "pdf");
                      setCurrentStep("input");
                    }}
                    className={cn(
                      "p-2.5 sm:p-3 rounded-2xl border text-left transition-all duration-200",
                      isSelected
                        ? isStepActive
                          ? "bg-blue-50/90 border-blue-400 shadow-sm ring-2 ring-blue-100"
                          : "bg-white border-blue-300 shadow-xs"
                        : "bg-white/80 border-slate-200/80 opacity-70 hover:opacity-100"
                    )}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div
                        className={cn(
                          "w-6 h-6 rounded-lg flex items-center justify-center transition-colors",
                          isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
                        )}
                      >
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-semibold text-slate-800">{item.label}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 truncate hidden sm:block">
                      {item.detail}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Connector Down */}
          <div className="py-2 sm:py-3 flex flex-col items-center">
            <div
              className={cn(
                "w-0.5 h-6 sm:h-8 transition-all duration-300",
                currentStep === "input" || currentStep === "thinking"
                  ? "bg-blue-500"
                  : "bg-slate-200"
              )}
            />
            <ArrowDown
              className={cn(
                "w-3.5 h-3.5 -mt-1 transition-colors duration-300",
                currentStep === "input" || currentStep === "thinking"
                  ? "text-blue-500"
                  : "text-slate-300"
              )}
            />
          </div>

          {/* 2. AI AGENT (THINKING) */}
          <div
            className={cn(
              "w-full rounded-2xl p-4 sm:p-5 border transition-all duration-300 text-left bg-white",
              currentStep === "thinking"
                ? "border-blue-400 shadow-md ring-2 ring-blue-100"
                : "border-slate-200/90 shadow-xs"
            )}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div
                  className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center transition-colors",
                    currentStep === "thinking" ? "bg-blue-600 text-white shadow-xs" : "bg-slate-100 text-slate-600"
                  )}
                >
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900">
                    Agente de IA (Razonamiento Lógico)
                  </h4>
                  <p className="text-[11px] text-slate-500 font-light">
                    Evalúa contexto, reglas de negocio y políticas
                  </p>
                </div>
              </div>

              <span
                className={cn(
                  "text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors",
                  currentStep === "thinking"
                    ? "bg-blue-100 text-blue-700 font-semibold animate-pulse"
                    : "bg-slate-100 text-slate-500"
                )}
              >
                THINKING
              </span>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono">
              <span className="text-slate-500 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-blue-500" />
                <span>Modelo: Claude 3.5 / Gemini / GPT-4o</span>
              </span>
              <span className="text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200/60 font-medium">
                Reglas validadas
              </span>
            </div>
          </div>

          {/* 3-Way Connector */}
          <div className="w-full py-2 sm:py-3 relative flex justify-center">
            {/* Center stem */}
            <div
              className={cn(
                "w-0.5 h-4 transition-all duration-300",
                currentStep === "thinking" || currentStep === "action"
                  ? "bg-blue-500"
                  : "bg-slate-200"
              )}
            />
          </div>

          {/* 3. PARALLEL ACTIONS (ACTION) */}
          <div className="w-full">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[10px] font-mono text-slate-400 font-semibold tracking-wider uppercase">
                02. Decisiones & Acciones Simultáneas
              </span>
              <span
                className={cn(
                  "text-[10px] font-mono px-2 py-0.5 rounded-full transition-colors",
                  currentStep === "action"
                    ? "bg-blue-100 text-blue-700 font-semibold"
                    : "bg-slate-100 text-slate-500"
                )}
              >
                ACTION
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
              {[
                {
                  title: "Clasifica",
                  desc: "Detecta urgencia e intención",
                  tag: "NLP Semántico",
                },
                {
                  title: "Decide",
                  desc: "Aplica reglas de negocio",
                  tag: "Human-in-the-Loop",
                },
                {
                  title: "Ejecuta",
                  desc: "Conecta CRM, email y DB",
                  tag: "n8n / APIs",
                },
              ].map((act, i) => (
                <div
                  key={act.title}
                  className={cn(
                    "p-3 rounded-2xl border transition-all duration-300 bg-white",
                    currentStep === "action"
                      ? "border-blue-400 shadow-sm ring-1 ring-blue-100"
                      : "border-slate-200/90 shadow-xs"
                  )}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <h5 className="text-xs font-semibold text-slate-900">{act.title}</h5>
                  </div>
                  <p className="text-[11px] text-slate-500 font-light mb-2">{act.desc}</p>
                  <span className="inline-block text-[9px] font-mono px-2 py-0.5 rounded bg-slate-50 text-slate-600 border border-slate-200">
                    {act.tag}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Connector Down to Done */}
          <div className="py-2 sm:py-3 flex flex-col items-center">
            <div
              className={cn(
                "w-0.5 h-6 sm:h-8 transition-all duration-300",
                currentStep === "action" || currentStep === "done"
                  ? "bg-emerald-500"
                  : "bg-slate-200"
              )}
            />
            <ArrowDown
              className={cn(
                "w-3.5 h-3.5 -mt-1 transition-colors duration-300",
                currentStep === "action" || currentStep === "done"
                  ? "text-emerald-500"
                  : "text-slate-300"
              )}
            />
          </div>

          {/* 4. RESULT (DONE) */}
          <div
            className={cn(
              "w-full rounded-2xl p-4 sm:p-5 border transition-all duration-300 bg-white",
              currentStep === "done"
                ? "border-emerald-400 shadow-md ring-2 ring-emerald-100 bg-emerald-50/20"
                : "border-slate-200/90 shadow-xs"
            )}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className={cn(
                    "w-8 h-8 rounded-xl flex items-center justify-center transition-colors",
                    currentStep === "done" ? "bg-emerald-600 text-white" : "bg-emerald-50 text-emerald-600"
                  )}
                >
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-900 flex items-center gap-2">
                    <span>Resultado Ejecutado</span>
                    <span className="text-emerald-600 text-xs font-mono font-normal">✓ Éxito</span>
                  </h4>
                  <p className="text-[11px] text-slate-500 font-light">
                    Respuesta enviada · Tarea archivada · Registro completado
                  </p>
                </div>
              </div>

              <span
                className={cn(
                  "text-[10px] font-mono px-2.5 py-0.5 rounded-full transition-colors",
                  currentStep === "done"
                    ? "bg-emerald-100 text-emerald-800 font-semibold"
                    : "bg-slate-100 text-slate-500"
                )}
              >
                DONE
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Summary Bar */}
      <div className="px-5 py-3 bg-slate-50/90 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500 font-mono">
        <span className="flex items-center gap-2">
          <Zap className="w-3.5 h-3.5 text-blue-600" />
          <span>Tiempo de ciclo promedio: ~1.2s</span>
        </span>
        <span className="text-[11px] text-slate-400">
          Aprenderás a construir flujos como este desde tu primer taller.
        </span>
      </div>
    </div>
  );
}
