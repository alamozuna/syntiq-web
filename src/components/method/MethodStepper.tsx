"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    number: "01",
    label: "AUDITA",
    tagline: "Encuentra tareas repetitivas y oportunidades.",
    icon: Search,
    detail: "Revisamos correos, hojas de cálculo o procesos manuales donde se pierde tiempo repetitivo.",
  },
  {
    number: "02",
    label: "DISEÑA",
    tagline: "Define contexto, reglas y resultado.",
    icon: PenTool,
    detail: "Estructuramos las instrucciones, los datos de entrada y el formato exacto de salida esperado.",
  },
  {
    number: "03",
    label: "CONSTRUYE",
    tagline: "Conecta IA con tus herramientas.",
    icon: Wrench,
    detail: "Enlazamos modelos de frontera con n8n, APIs o aplicaciones de trabajo diario mediante interfaces visuales.",
  },
  {
    number: "04",
    label: "DESPLIEGA",
    tagline: "Prueba, mide y añade supervisión.",
    icon: ShieldCheck,
    detail: "Añadimos barandillas de seguridad y supervisión humana (Human-in-the-Loop) para que opere con confianza.",
  },
];

export default function MethodStepper() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="metodo" className="scroll-mt-24 relative py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase">
            MÉTODO SYNTIQ
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light mt-3 leading-tight">
            No estudias el sistema. <br />
            <span className="italic font-normal text-blue-600">Lo construyes.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            El método SyntIQ convierte un problema real en una solución funcional.
          </p>
        </div>

        {/* Desktop Stepper (Horizontal with connector progress line) */}
        <div className="hidden md:block max-w-5xl mx-auto mb-12">
          <div className="relative">
            {/* Background connecting bar */}
            <div className="absolute top-7 left-12 right-12 h-0.5 bg-slate-100 z-0" />
            {/* Active connecting bar */}
            <div
              className="absolute top-7 left-12 h-0.5 bg-blue-600 transition-all duration-300 z-0"
              style={{ width: `${(activeStep / (STEPS.length - 1)) * 80}%` }}
            />

            {/* Step Nodes */}
            <div className="relative z-10 grid grid-cols-4 gap-4">
              {STEPS.map((step, idx) => {
                const isActive = activeStep === idx;
                const isPast = activeStep > idx;
                const Icon = step.icon;

                return (
                  <button
                    key={step.number}
                    type="button"
                    onClick={() => setActiveStep(idx)}
                    className="flex flex-col items-center text-center cursor-pointer group focus:outline-none"
                  >
                    {/* Node circle */}
                    <div
                      className={cn(
                        "w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-200 mb-4",
                        isActive
                          ? "bg-blue-600 text-white shadow-md scale-105"
                          : isPast
                          ? "bg-blue-50 text-blue-600 border border-blue-200"
                          : "bg-white border border-slate-200 text-slate-400 group-hover:border-slate-300"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Step label */}
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
                      PASO {step.number}
                    </span>
                    <h3
                      className={cn(
                        "text-sm font-bold tracking-wide transition-colors font-mono mb-1.5",
                        isActive ? "text-slate-900" : "text-slate-600"
                      )}
                    >
                      {step.label}
                    </h3>
                    <p className="text-xs text-slate-500 font-light leading-snug max-w-[180px]">
                      &ldquo;{step.tagline}&rdquo;
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Detail Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-center justify-between gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-brand-display font-light text-blue-600">
                {STEPS[activeStep].number}
              </span>
              <div>
                <span className="text-xs font-semibold text-slate-900 block font-mono">
                  {STEPS[activeStep].label} — {STEPS[activeStep].tagline}
                </span>
                <p className="text-xs text-slate-500 font-light mt-0.5">
                  {STEPS[activeStep].detail}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[11px] font-mono text-blue-600 shrink-0">
              <span>Paso {activeStep + 1} de 4</span>
            </div>
          </div>
        </div>

        {/* Mobile Stepper (Vertical, clean, no complex sticky) */}
        <div className="md:hidden space-y-4">
          {STEPS.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-mono text-slate-400">
                      {step.number}
                    </span>
                    <h3 className="text-xs font-bold font-mono text-slate-900">
                      {step.label}
                    </h3>
                  </div>
                  <p className="text-xs font-medium text-slate-700 mb-1">
                    &ldquo;{step.tagline}&rdquo;
                  </p>
                  <p className="text-[11px] text-slate-500 font-light leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
