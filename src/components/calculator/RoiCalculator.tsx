"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, TrendingUp, Clock, Target } from "lucide-react";
import { cn } from "@/lib/utils";

// Format numbers as currency/time
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
};

export default function RoiCalculator() {
  const [teamSize, setTeamSize] = useState(5);
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(25);
  
  const [results, setResults] = useState({
    yearlyHoursSaved: 0,
    yearlySavings: 0,
    rotiMultiplier: 0, // Return on Time Invested
  });

  // Calculate savings assuming a 70% automation potential of the repetitive tasks
  // (conservative estimate for tasks that LLMs/n8n can handle after training)
  useEffect(() => {
    const AUTOMATION_POTENTIAL = 0.70;
    const WEEKS_PER_YEAR = 48; // Discounting holidays/vacations
    
    // Total hours currently spent on repetitive tasks per year for the whole team
    const totalRepetitiveHoursYearly = teamSize * hoursPerWeek * WEEKS_PER_YEAR;
    
    // Hours that will actually be saved using AI (70% of repetitive tasks)
    const hoursSaved = totalRepetitiveHoursYearly * AUTOMATION_POTENTIAL;
    
    // Financial savings
    const financialSavings = hoursSaved * hourlyRate;
    
    // Estimated cost of training (Course average $300/person, conservative)
    const estimatedTrainingCost = teamSize * 300;
    
    // Return On Training Investment (Multiplier)
    const roti = financialSavings / estimatedTrainingCost;
    
    setResults({
      yearlyHoursSaved: Math.round(hoursSaved),
      yearlySavings: Math.round(financialSavings),
      rotiMultiplier: Math.round(roti * 10) / 10,
    });
  }, [teamSize, hoursPerWeek, hourlyRate]);

  return (
    <section id="calculadora" className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Context & Sliders */}
          <div>
            <div className="mb-10">
              <span className="brand-label text-blue-600 mb-4 block">
                CALCULADORA ROTI (Return on Time Invested)
              </span>
              <h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] font-light tracking-tight leading-tight mb-6">
                ¿Cuánto tiempo y dinero recuperarás al formarte en IA?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
                Nuestros talleres no son un gasto, son la inversión más rentable que puedes hacer. Calcula el impacto anual de capacitar a tu equipo para delegar tareas repetitivas a la IA.
              </p>
            </div>

            <div className="space-y-8 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200">
              
              {/* Slider 1: Team Size */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-700">
                    Personas de tu equipo a formar
                  </label>
                  <span className="text-sm font-mono font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {teamSize} {teamSize === 1 ? 'persona' : 'personas'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="50"
                  step="1"
                  value={teamSize}
                  onChange={(e) => setTeamSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-mono uppercase">
                  <span>1 (Solo yo)</span>
                  <span>50+ (Corporativo)</span>
                </div>
              </div>

              {/* Slider 2: Repetitive Hours */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-700">
                    Horas semanales en tareas automatizables (por persona)
                  </label>
                  <span className="text-sm font-mono font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {hoursPerWeek}h / sem
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  step="1"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-mono uppercase">
                  <span>Poco (2h)</span>
                  <span>Casi todo (40h)</span>
                </div>
              </div>

              {/* Slider 3: Hourly Rate */}
              <div>
                <div className="flex justify-between mb-3">
                  <label className="text-sm font-semibold text-slate-700">
                    Costo medio por hora (Salario)
                  </label>
                  <span className="text-sm font-mono font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                    {formatCurrency(hourlyRate)} / hr
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="150"
                  step="5"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-mono uppercase">
                  <span>Junior (10€)</span>
                  <span>Directivo (150€)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Results Panel */}
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-600/5 rounded-[2.5rem] transform rotate-3" />
            <div className="absolute inset-0 bg-indigo-600/5 rounded-[2.5rem] transform -rotate-2" />
            
            <div className="relative bg-[#0F172A] rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-slate-800 overflow-hidden">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              
              <div className="flex items-center gap-3 mb-10">
                <div className="p-2.5 bg-blue-900/50 rounded-xl border border-blue-800/50">
                  <Calculator className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Proyección de Impacto</h3>
                  <p className="text-xs text-slate-400 font-mono">Basado en 70% de automatización (Conservador)</p>
                </div>
              </div>

              <div className="space-y-8">
                {/* Metric 1 */}
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-2 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-emerald-400" />
                    Horas Recuperadas al Año
                  </p>
                  <p className="text-4xl sm:text-5xl font-brand-display font-light text-white tracking-tight">
                    {results.yearlyHoursSaved.toLocaleString('es-ES')} <span className="text-xl text-slate-500">horas</span>
                  </p>
                </div>

                <div className="w-full h-px bg-slate-800" />

                {/* Metric 2 */}
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-2 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-blue-400" />
                    Ahorro Financiero Estimado Anual
                  </p>
                  <p className="text-4xl sm:text-5xl font-brand-display font-light text-blue-400 tracking-tight">
                    {formatCurrency(results.yearlySavings)}
                  </p>
                </div>
                
                <div className="w-full h-px bg-slate-800" />

                {/* Metric 3 */}
                <div>
                  <p className="text-sm text-slate-400 font-medium mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-purple-400" />
                    Multiplicador ROTI Estimado
                  </p>
                  <div className="flex items-end gap-3">
                    <p className="text-4xl sm:text-5xl font-brand-display font-light text-white tracking-tight">
                      {results.rotiMultiplier}x
                    </p>
                    <p className="text-xs text-slate-500 mb-2 max-w-[140px] leading-tight">
                      Retorno por cada euro invertido en formación.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="/contacto"
                  className="group flex items-center justify-center gap-2 w-full bg-white hover:bg-slate-50 text-slate-900 font-semibold py-4 px-6 rounded-xl transition-all duration-300"
                >
                  <span>Reservar Plaza en el Próximo Taller</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <p className="text-center text-[10px] text-slate-500 mt-3 font-mono">
                  EL APRENDIZAJE SE AMORTIZA EN EL PRIMER MES
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
