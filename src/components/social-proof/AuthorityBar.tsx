"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Clock,
  Zap,
  Users,
} from "lucide-react";

const STATS = [
  {
    value: "+120h",
    label: "Ahorradas por Alumno/Mes",
    detail: "Aplicando las automatizaciones construidas en el taller",
    icon: Clock,
  },
  {
    value: "98%",
    label: "Satisfacción Post-Taller",
    detail: "Valoración media de nuestros alumnos al finalizar",
    icon: Zap,
  },
  {
    value: "< 20 min",
    label: "Tu Primer Flujo Automatizado",
    detail: "Tiempo hasta construir tu primer agente funcional en el taller",
    icon: GraduationCap,
  },
  {
    value: "+500",
    label: "Profesionales Formados",
    detail: "Freelancers, directivos, traders y equipos corporativos",
    icon: Users,
  },
];

const TOOLS_TAUGHT = [
  { name: "ChatGPT / Claude", role: "Prompting Avanzado", category: "LLMs" },
  { name: "Gemini 2.5 Pro", role: "Razonamiento Multimodal", category: "LLMs" },
  { name: "n8n", role: "Orquestación de Agentes", category: "Automatización" },
  { name: "Google Workspace", role: "Productividad con IA", category: "Productividad" },
  { name: "Cursor / Vibe Coding", role: "Desarrollo Asistido por IA", category: "Código" },
  { name: "Raycast", role: "Flujos de Trabajo con IA", category: "Productividad" },
  { name: "NotebookLM", role: "Investigación con IA", category: "Investigación" },
  { name: "AntiGravity", role: "Coding Agéntico", category: "Código" },
];

export default function AuthorityBar() {
  return (
    <section className="relative py-16 sm:py-24 border-y border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Overline */}
        <div className="text-center mb-12">
          <span className="brand-label text-blue-600 font-semibold">
            RESULTADOS REALES DE NUESTROS ALUMNOS Y TALLERES
          </span>
          <h2 className="font-brand-display text-3xl sm:text-4xl text-[#0F172A] font-light mt-2">
            Formación práctica con impacto medible
          </h2>
        </div>

        {/* 4 Quantitative Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-subtle-card hover:shadow-elevation-hover hover:border-blue-300 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl sm:text-4xl font-light font-brand-display text-[#0F172A] tracking-tight group-hover:text-blue-600 transition-colors">
                    {stat.value}
                  </span>
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-sm font-semibold text-slate-800 mb-1">{stat.label}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-light">{stat.detail}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Tech Ecosystem Banner */}
        <div className="pt-10 border-t border-slate-200">
          <div className="text-center mb-8">
            <span className="brand-label text-slate-500">
              HERRAMIENTAS QUE APRENDERÁS A DOMINAR
            </span>
            <p className="text-xs text-slate-600 mt-1 font-light">
              En nuestros talleres y cursos trabajamos con las herramientas que realmente usan los profesionales de élite.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {TOOLS_TAUGHT.map((tool) => (
              <div
                key={tool.name}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-300 flex flex-col items-center justify-center text-center transition-all hover:bg-white hover:shadow-sm group"
              >
                <span className="text-[11px] font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                  {tool.name}
                </span>
                <span className="text-[9px] font-mono text-slate-400 mt-1">
                  {tool.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
