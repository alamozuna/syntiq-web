"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { User, Users, LineChart, GraduationCap, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

const AUDIENCES = [
  {
    id: "freelancer",
    label: "Profesional Independiente",
    icon: User,
    color: "blue",
    testimonial: "Pasaba 15 horas a la semana leyendo correos de clientes y presupuestando. En el taller de 4 horas construí un agente que clasifica leads y redacta respuestas base. Ahora me dedico a cerrar ventas.",
    author: "María G.",
    role: "Consultora de Marketing",
    result: "15h semanales recuperadas",
  },
  {
    id: "directivo",
    label: "Líder de Equipo",
    icon: Users,
    color: "emerald",
    testimonial: "El curso modular nos dio el vocabulario y la metodología común que necesitábamos. Todo el departamento de operaciones ahora entiende cómo documentar un proceso para delegarlo a n8n.",
    author: "Carlos R.",
    role: "Director de Operaciones",
    result: "Adopción de IA al 100% en el equipo",
  },
  {
    id: "trader",
    label: "Trader / Analista",
    icon: LineChart,
    color: "indigo",
    testimonial: "No sé programar en Python, pero con Vibe Coding y Cursor aprendí a crear scripts que consumen APIs financieras en minutos. El taller te vuela la cabeza sobre lo que es posible hoy.",
    author: "David L.",
    role: "Analista Cuantitativo",
    result: "Scripts creados sin saber programar",
  },
  {
    id: "universidad",
    label: "Centro Educativo",
    icon: GraduationCap,
    color: "purple",
    testimonial: "El taller In-Company en CESTE para más de 50 alumnos fue un éxito rotundo. Lograron que perfiles no técnicos entendieran la arquitectura agéntica y construyeran asistentes funcionales.",
    author: "Dirección Académica",
    role: "CESTE Business School",
    result: "50+ Alumnos capacitados en una sesión",
  },
];

export default function UseCasesSection() {
  const [activeCase, setActiveCase] = useState(AUDIENCES[0].id);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const currentCase = AUDIENCES.find((c) => c.id === activeCase) || AUDIENCES[0];
  const CurrentIcon = currentCase.icon;

  return (
    <section 
      id="testimonios"
      ref={sectionRef} 
      className="relative py-24 sm:py-32 bg-slate-50 border-t border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="brand-label text-blue-600 mb-4 block">
            TESTIMONIOS DE ALUMNOS
          </span>
          <h2 className="font-brand-display text-4xl sm:text-5xl text-[#0F172A] font-light tracking-tight leading-[1.1] mb-6">
            Impacto real en perfiles muy diferentes
          </h2>
          <p className="text-lg text-slate-600 font-light leading-relaxed">
            La automatización no es exclusiva de desarrolladores de software. 
            Nuestra metodología está diseñada para que cualquier perfil profesional construya soluciones útiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Left Column: Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {AUDIENCES.map((audience) => {
              const Icon = audience.icon;
              const isActive = activeCase === audience.id;
              
              return (
                <button
                  key={audience.id}
                  onClick={() => setActiveCase(audience.id)}
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 text-left border",
                    isActive 
                      ? "bg-white border-blue-200 shadow-sm" 
                      : "bg-transparent border-transparent hover:bg-slate-200/50"
                  )}
                >
                  <div className={cn(
                    "p-3 rounded-xl transition-colors duration-300",
                    isActive 
                      ? `bg-${audience.color}-50 text-${audience.color}-600` 
                      : "bg-slate-100 text-slate-500"
                  )}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className={cn(
                      "font-semibold transition-colors duration-300",
                      isActive ? "text-[#0F172A]" : "text-slate-600"
                    )}>
                      {audience.label}
                    </h3>
                  </div>
                  
                  {isActive && (
                    <motion.div layoutId="active-indicator" className="ml-auto">
                      <ArrowRight className="w-4 h-4 text-blue-500" />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Testimonial Card */}
          <div className="lg:col-span-8 relative">
            {/* Background decorative blob */}
            <div className={cn(
              "absolute -inset-4 rounded-[3rem] blur-2xl opacity-20 transition-colors duration-1000 -z-10",
              `bg-${currentCase.color}-400`
            )} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCase.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-8 sm:p-12 shadow-elevation-2 border border-slate-200"
              >
                <Quote className="w-12 h-12 text-slate-200 mb-6" />
                
                <p className="text-xl sm:text-2xl text-slate-700 font-light leading-relaxed mb-10 italic">
                  "{currentCase.testimonial}"
                </p>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-8 border-t border-slate-100">
                  <div>
                    <p className="font-semibold text-slate-900 text-lg">
                      {currentCase.author}
                    </p>
                    <p className="text-slate-500 font-light text-sm">
                      {currentCase.role}
                    </p>
                  </div>
                  
                  <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl">
                    <span className="block text-[10px] font-mono text-blue-600 tracking-wider uppercase mb-1">
                      RESULTADO PRINCIPAL
                    </span>
                    <span className="text-sm font-semibold text-blue-900">
                      {currentCase.result}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
