"use client";

import React, { useState } from "react";
import {
  TrendingUp,
  Sparkles,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { formatCurrency, formatNumber } from "@/lib/utils";

export default function RoiCalculator() {
  const [employees, setEmployees] = useState<number>(8);
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(7);
  const [hourlyRate, setHourlyRate] = useState<number>(30);

  // Calculations
  const weeklyWastedHours = employees * hoursPerWeek;
  const annualWastedHours = weeklyWastedHours * 50; // 50 working weeks
  const annualCapitalLeakage = annualWastedHours * hourlyRate;
  const hoursRecoveredBySyntiq = Math.round(annualWastedHours * 0.82); // 82% automation rate
  const annualNetSavings = Math.round(annualCapitalLeakage * 0.74);
  const estimatedRoiMultiplier = Math.max(5.2, parseFloat((annualNetSavings / (employees * 1200)).toFixed(1)));

  return (
    <section id="calculadora" className="relative py-24 sm:py-32 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="brand-label text-blue-600 font-semibold">
            04 — CALCULADORA DE RETORNO & FUGA DE CAPITAL
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light mt-3 leading-tight">
            ¿Cuánto dinero pierde tu empresa por{" "}
            <span className="italic text-blue-600 font-normal">ineficiencias operativas?</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Ajusta las variables de tu equipo y calcula en tiempo real las horas recuperadas y el
            ahorro neto al desplegar la infraestructura de agentes de SyntIQ.
          </p>
        </div>

        {/* Main Calculator Box */}
        <div className="rounded-3xl bg-white border border-slate-200 p-6 sm:p-10 lg:p-12 shadow-subtle-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Sliders (6 cols) */}
            <div className="lg:col-span-6 space-y-8">
              {/* Slider 1: Employees */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-semibold text-slate-800">
                    Número de colaboradores / personal operativo
                  </label>
                  <span className="font-mono text-base font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                    {employees} personas
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>1 persona</span>
                  <span>50 personas</span>
                  <span>100+ personas</span>
                </div>
              </div>

              {/* Slider 2: Hours wasted per week */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-semibold text-slate-800">
                    Horas semanales dedicadas a tareas repetitivas (por persona)
                  </label>
                  <span className="font-mono text-base font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                    {hoursPerWeek} h / semana
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="25"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>2 horas</span>
                  <span>12 horas</span>
                  <span>25 horas</span>
                </div>
              </div>

              {/* Slider 3: Hourly rate */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs sm:text-sm font-semibold text-slate-800">
                    Costo promedio por hora del colaborador
                  </label>
                  <span className="font-mono text-base font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-lg border border-blue-200">
                    ${hourlyRate} USD / h
                  </span>
                </div>
                <input
                  type="range"
                  min="12"
                  max="120"
                  step="2"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400">
                  <span>$12 / hora</span>
                  <span>$60 / hora</span>
                  <span>$120 / hora</span>
                </div>
              </div>

              {/* Pain notification */}
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-700" />
                <span className="font-light">
                  Tu equipo pierde actualmente <strong>{formatNumber(annualWastedHours)} horas al año</strong> en
                  copiar datos, responder preguntas redundantes y gestionar agendas.
                </span>
              </div>
            </div>

            {/* Right Column: Calculated Impact Card (6 cols) */}
            <div className="lg:col-span-6 bg-[#0F172A] text-slate-200 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-elevation-3">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <span className="brand-label text-blue-400 text-xs flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> DIAGNÓSTICO ESTIMADO SYNTIQ
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-500/40">
                  Alta Rentabilidad
                </span>
              </div>

              {/* Fuga de capital invisible */}
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400 block">
                  FUGA DE CAPITAL INVISIBLE ACTUAL (ANUAL):
                </span>
                <span className="text-3xl sm:text-4xl font-light font-brand-display text-red-400 block">
                  {formatCurrency(annualCapitalLeakage)}
                </span>
                <p className="text-[11px] text-slate-400 font-light">
                  Costo directo pagado en salarios absorbidos por fricción operativa.
                </p>
              </div>

              {/* 2 Result Grid */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-800">
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block mb-1">
                    HORAS RESCATADAS / AÑO
                  </span>
                  <span className="text-2xl font-bold font-mono text-blue-400">
                    +{formatNumber(hoursRecoveredBySyntiq)} h
                  </span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block mb-1">
                    AHORRO NETO ESTIMADO
                  </span>
                  <span className="text-2xl font-bold font-mono text-emerald-400">
                    {formatCurrency(annualNetSavings)}
                  </span>
                </div>
              </div>

              {/* ROI Multiplier */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                  <span className="text-xs font-semibold text-slate-200">
                    Multiplicador de ROI Proyectado:
                  </span>
                </div>
                <span className="text-base font-bold font-mono text-blue-300">
                  ~{estimatedRoiMultiplier}x retorno
                </span>
              </div>

              <a
                href="#diagnostico"
                className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-3.5 rounded-xl transition-all shadow-sm hover:shadow-md"
              >
                <span>Solicitar Auditoría Operativa Personalizada</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
