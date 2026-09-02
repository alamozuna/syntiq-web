"use client";

import React, { useState, useEffect, useRef } from "react";
import { Calculator, ArrowRight, Clock, TrendingUp, Target } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

// Smooth number interpolator hook (250ms)
function useInterpolatedNumber(targetValue: number, durationMs = 280) {
  const [displayValue, setDisplayValue] = useState(targetValue);
  const prevValueRef = useRef(targetValue);

  useEffect(() => {
    const startValue = prevValueRef.current;
    const diff = targetValue - startValue;
    if (diff === 0) return;

    const startTime = performance.now();
    let frameId: number;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      // Ease out cubic
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + diff * ease);

      setDisplayValue(current);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        prevValueRef.current = targetValue;
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [targetValue, durationMs]);

  return displayValue;
}

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(3);
  const [hoursPerWeek, setHoursPerWeek] = useState(12);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [isUpdating, setIsUpdating] = useState(false);

  // Trigger brief highlight on slider change
  const triggerHighlight = () => {
    setIsUpdating(true);
    const t = setTimeout(() => setIsUpdating(false), 350);
    return () => clearTimeout(t);
  };

  // Calculations (conservative 60% automation)
  const WEEKS_PER_YEAR = 46; // descontando festivos y vacaciones
  const AUTOMATION_FACTOR = 0.6;
  const totalHoursYearly = Math.round(teamSize * hoursPerWeek * WEEKS_PER_YEAR * AUTOMATION_FACTOR);
  const totalSavingsYearly = Math.round(totalHoursYearly * hourlyRate);
  const estimatedCourseInvestment = Math.max(teamSize * 250, 250);
  const rotiMultiplier = Math.round((totalSavingsYearly / estimatedCourseInvestment) * 10) / 10;

  // Interpolated values
  const animatedHours = useInterpolatedNumber(totalHoursYearly);
  const animatedSavings = useInterpolatedNumber(totalSavingsYearly);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="calculadora" className="relative py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Sliders & Copy */}
          <div className="lg:col-span-6">
            <div className="mb-8">
              <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase block mb-2">
                CALCULADORA ROTI
              </span>
              <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light leading-tight">
                ¿Cuánto tiempo <br />
                <span className="italic font-normal text-blue-600">podrías recuperar?</span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-light mt-4 leading-relaxed">
                Estima el impacto potencial de automatizar tareas repetitivas.
              </p>
            </div>

            <div className="space-y-6 bg-slate-50/80 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xs">
              {/* Input 1: Team Size */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label htmlFor="team-size-slider" className="text-xs font-semibold text-slate-800">
                    Personas a formar
                  </label>
                  <span className="text-xs font-mono font-semibold text-blue-600 bg-white border border-blue-200 px-2.5 py-0.5 rounded-full shadow-xs">
                    {teamSize} {teamSize === 1 ? "persona" : "personas"}
                  </span>
                </div>
                <input
                  id="team-size-slider"
                  type="range"
                  min="1"
                  max="30"
                  value={teamSize}
                  onChange={(e) => {
                    setTeamSize(parseInt(e.target.value, 10));
                    triggerHighlight();
                  }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>1 persona</span>
                  <span>30 personas</span>
                </div>
              </div>

              {/* Input 2: Repetitive Hours */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label htmlFor="hours-slider" className="text-xs font-semibold text-slate-800">
                    Horas repetitivas / semana por persona
                  </label>
                  <span className="text-xs font-mono font-semibold text-blue-600 bg-white border border-blue-200 px-2.5 py-0.5 rounded-full shadow-xs">
                    {hoursPerWeek} h/sem
                  </span>
                </div>
                <input
                  id="hours-slider"
                  type="range"
                  min="2"
                  max="30"
                  value={hoursPerWeek}
                  onChange={(e) => {
                    setHoursPerWeek(parseInt(e.target.value, 10));
                    triggerHighlight();
                  }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>2 h/sem</span>
                  <span>30 h/sem</span>
                </div>
              </div>

              {/* Input 3: Hourly Rate */}
              <div>
                <div className="flex justify-between items-center mb-2.5">
                  <label htmlFor="rate-slider" className="text-xs font-semibold text-slate-800">
                    Costo medio / hora
                  </label>
                  <span className="text-xs font-mono font-semibold text-blue-600 bg-white border border-blue-200 px-2.5 py-0.5 rounded-full shadow-xs">
                    {hourlyRate} €/h
                  </span>
                </div>
                <input
                  id="rate-slider"
                  type="range"
                  min="15"
                  max="120"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => {
                    setHourlyRate(parseInt(e.target.value, 10));
                    triggerHighlight();
                  }}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>15 €/h</span>
                  <span>120 €/h</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Output Card */}
          <div className="lg:col-span-6">
            <div
              className={cn(
                "rounded-3xl bg-[#0F172A] text-white p-7 sm:p-9 shadow-lg border border-slate-800 transition-all duration-300",
                isUpdating && "ring-2 ring-blue-500/50"
              )}
            >
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-blue-900/60 text-blue-400 flex items-center justify-center">
                    <Calculator className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 font-medium">
                    Proyección de Impacto
                  </span>
                </div>
                <span className="text-[10px] font-mono text-blue-400 bg-blue-950/60 border border-blue-800/80 px-2 py-0.5 rounded-full">
                  Base 60% automatizable
                </span>
              </div>

              {/* 3 Main Outputs */}
              <div className="space-y-6">
                {/* 1. HORAS RECUPERABLES / AÑO */}
                <div>
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    HORAS RECUPERABLES / AÑO
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-brand-display font-light text-white tracking-tight">
                      {animatedHours.toLocaleString("es-ES")}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">horas/año</span>
                  </div>
                </div>

                {/* 2. IMPACTO ECONÓMICO ESTIMADO */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    IMPACTO ECONÓMICO ESTIMADO
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-brand-display font-light text-blue-400 tracking-tight">
                      {formatCurrency(animatedSavings)}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">al año</span>
                  </div>
                </div>

                {/* 3. ROTI POTENCIAL */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    ROTI POTENCIAL
                  </span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-brand-display font-light text-emerald-400 tracking-tight">
                      {rotiMultiplier}x
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      retorno sobre inversión formativa
                    </span>
                  </div>
                </div>
              </div>

              {/* Microcopy required by Prompt */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <p className="text-[11px] text-slate-400 font-light leading-relaxed mb-6">
                  Estimación orientativa. El resultado real depende del proceso y nivel de automatización.
                </p>

                <Link
                  href="#formaciones"
                  className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold py-3 px-5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <span>Ver próximos talleres</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
