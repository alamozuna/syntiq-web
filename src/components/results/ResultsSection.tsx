"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote, ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";

const CASES = [
  {
    category: "Gestión de Correo & Leads",
    before: "15 h/semana en clasificación manual de emails y presupuestos",
    built: "Agente de clasificación semántica + respuestas base con n8n",
    after: "Tiempo recuperado para prospección comercial y ventas",
  },
  {
    category: "Extracción Documental",
    before: "8 h/semana volcando datos de facturas y PDFs en hojas de cálculo",
    built: "Pipeline de extracción estructurada con Claude y validación lógica",
    after: "Automatización completa con registro directo en base de datos",
  },
  {
    category: "Atención & Agendamiento",
    before: "Pérdida de consultas fuera de horario de oficina",
    built: "Asistente de calificación de leads y reserva de calendario 24/7",
    after: "Atención inmediata con supervisión de los casos críticos",
  },
];

export default function ResultsSection() {
  return (
    <section id="resultados" className="scroll-mt-24 relative py-20 sm:py-28 bg-slate-50/50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase">
            RESULTADOS
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light mt-3 leading-tight">
            Menos teoría. <br />
            <span className="italic font-normal text-blue-600">Más cosas funcionando.</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            Casos concretos de flujos construidos por profesionales en nuestras formaciones.
          </p>
        </div>

        {/* 1 Principal Testimonial Card */}
        <div className="max-w-4xl mx-auto mb-14">
          <div className="relative rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-xs">
            <Quote className="w-10 h-10 text-blue-100 mb-4" />

            <p className="text-base sm:text-xl text-slate-800 font-light leading-relaxed mb-6 italic">
              &ldquo;Pasaba 15 horas a la semana leyendo correos de clientes y presupuestando. En el taller de 4 horas construí un agente que clasifica leads y redacta respuestas base. Ahora me dedico a cerrar ventas.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
              <div>
                <span className="font-semibold text-slate-900 text-sm block">María G.</span>
                <span className="text-xs text-slate-500 font-light">Consultora de Marketing y Operaciones</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-mono font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>15 h/semana recuperadas</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Quantified Results: Antes -> Construyó -> Después */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CASES.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="rounded-3xl bg-white border border-slate-200/90 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-all duration-200"
            >
              <div>
                <span className="text-[10px] font-mono text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider block w-fit mb-4">
                  {item.category}
                </span>

                {/* Antes */}
                <div className="mb-4">
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                    Antes:
                  </span>
                  <p className="text-xs text-slate-600 font-light">
                    {item.before}
                  </p>
                </div>

                {/* Construyó */}
                <div className="mb-4 p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="text-[10px] font-mono text-blue-600 font-medium uppercase tracking-wider block mb-1">
                    Construyó:
                  </span>
                  <p className="text-xs font-medium text-slate-800">
                    {item.built}
                  </p>
                </div>

                {/* Después */}
                <div>
                  <span className="text-[10px] font-mono text-emerald-600 font-medium uppercase tracking-wider block mb-1">
                    Después:
                  </span>
                  <p className="text-xs text-slate-700 font-light">
                    {item.after}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
