"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  Target,
  Eye,
  ShieldCheck,
  HeartHandshake,
  Database,
  CheckCircle2,
  Lock,
  Clock,
  Sparkles,
} from "lucide-react";

const VALUES_DATA = [
  {
    id: "mayordomia",
    title: "Mayordomía Radical",
    icon: Compass,
    tagline: "Excelencia con propósito superior",
    description:
      "Operamos bajo la premisa de que el negocio es un encargo de Dios. Buscamos la excelencia técnica y operativa no para vanagloria propia, sino para honrar el propósito y la confianza depositada en nosotros.",
    badge: "Brújula Ética",
  },
  {
    id: "integridad",
    title: "Integridad Innegociable",
    icon: ShieldCheck,
    tagline: "La verdad es nuestro activo más caro",
    description:
      "Preferimos perder un cliente antes que inflar métricas o prometer IA que no ha sido auditada y validada en producción. Cero humo, cero falsas expectativas.",
    badge: "Transparencia Total",
  },
  {
    id: "aprendizaje",
    title: "Aprendizaje Validado",
    icon: Database,
    tagline: "Los datos mandan, no las opiniones",
    description:
      "No nos interesa tener la razón de forma dogmática; nos importa lo que demuestran los datos y los resultados de negocio. 'Construir-Medir-Aprender' es nuestra disciplina inamovible.",
    badge: "Data-Driven",
  },
  {
    id: "empatia",
    title: "Empatía con el Operador",
    icon: HeartHandshake,
    tagline: "IA para liberar potencial humano",
    description:
      "No diseñamos agentes de IA para desplazar a las personas, sino para erradicar las tareas mecánicas repetitivas y liberar al profesional de la mediocridad administrativa.",
    badge: "Human-Centric",
  },
];

const GOLDEN_RULES = [
  {
    title: "Regla del 'Human-in-the-Loop'",
    description: "Ninguna IA sale a producción sin auditoría humana previa de logs para blindar cero alucinaciones.",
    icon: CheckCircle2,
  },
  {
    title: "Prohibido el 'Vaporware'",
    description: "No vendemos maquetas ni promesas teóricas. Desplegamos sistemas operativos que resuelven dolores reales hoy.",
    icon: Lock,
  },
  {
    title: "Puntualidad en el Sync & SLAs",
    description: "El respeto absoluto al tiempo de nuestros socios y clientes es el pilar de nuestra cultura operativa.",
    icon: Clock,
  },
];

export default function MissionVisionValues() {
  const [activeTab, setActiveTab] = useState<"manifiesto" | "valores" | "reglas">("manifiesto");

  return (
    <section id="filosofia" className="py-24 sm:py-32 bg-[#EFF6FF]/60 border-y border-blue-100 relative overflow-hidden">
      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blue-200 text-blue-700 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="brand-label text-[10px] tracking-widest uppercase">
              FILOSOFÍA & IDENTIDAD CORPORATIVA
            </span>
          </div>

          <h2 className="font-brand-display text-4xl sm:text-5xl md:text-6xl text-[#0F172A] font-light tracking-tight leading-tight">
            Nuestra brújula:{" "}
            <span className="italic text-blue-600 font-normal">
              Misión, Visión y Valores
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
            Construimos tecnología de vanguardia sobre cimientos éticos inquebrantables.
            Conoce el código que guía cada línea de software y decisión en SyntIQ.
          </p>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 bg-white border border-slate-200/80 rounded-full w-fit mx-auto shadow-sm">
            <button
              onClick={() => setActiveTab("manifiesto")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === "manifiesto"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Misión & Visión
            </button>
            <button
              onClick={() => setActiveTab("valores")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === "valores"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Valores Core (4)
            </button>
            <button
              onClick={() => setActiveTab("reglas")}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeTab === "reglas"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Reglas de Oro
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          {activeTab === "manifiesto" && (
            <motion.div
              key="manifiesto"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Misión Card */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-subtle-card hover:shadow-elevation-hover transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/15 transition-colors" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                    <Target className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="brand-label text-blue-600 text-[10px] block">PROPÓSITO CENTRAL</span>
                    <h3 className="font-brand-display text-3xl text-[#0F172A] font-light">Nuestra Misión</h3>
                  </div>
                </div>

                <p className="text-lg text-slate-700 font-light leading-relaxed mb-6">
                  <span className="font-medium text-[#0F172A]">Erradicar los cuellos de botella</span> corporativos y transformar la ineficiencia en rentabilidad neta mediante soluciones avanzadas de Inteligencia Artificial.
                </p>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>CONECTA · ORDENA · IMPULSA</span>
                  <span className="text-blue-600 font-semibold">Impacto Cuantificable</span>
                </div>
              </div>

              {/* Visión Card */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-subtle-card hover:shadow-elevation-hover transition-all duration-300 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/15 transition-colors" />
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="brand-label text-indigo-600 text-[10px] block">HORIZONTE ESTRATÉGICO</span>
                    <h3 className="font-brand-display text-3xl text-[#0F172A] font-light">Nuestra Visión</h3>
                  </div>
                </div>

                <p className="text-lg text-slate-700 font-light leading-relaxed mb-6">
                  Ser la <span className="font-medium text-[#0F172A]">infraestructura tecnológica definitiva</span> donde agentes autónomos ejecutan, optimizan y escalan empresas completas, transformando la IA en el sistema operativo fundacional de los negocios del futuro.
                </p>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>ENTERPRISE AI ARCHITECTURE</span>
                  <span className="text-indigo-600 font-semibold">Futuro Autónomo</span>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "valores" && (
            <motion.div
              key="valores"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {VALUES_DATA.map((v) => {
                const IconComponent = v.icon;
                return (
                  <div
                    key={v.id}
                    className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-subtle-card hover:shadow-elevation-hover transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono uppercase bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md">
                          {v.badge}
                        </span>
                      </div>

                      <h3 className="font-brand-display text-2xl text-[#0F172A] font-normal mb-1">
                        {v.title}
                      </h3>
                      <p className="text-xs font-medium text-blue-600 mb-3">
                        {v.tagline}
                      </p>
                      <p className="text-xs text-slate-600 font-light leading-relaxed">
                        {v.description}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      <span>Principio Innegociable</span>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          )}

          {activeTab === "reglas" && (
            <motion.div
              key="reglas"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {GOLDEN_RULES.map((rule, idx) => {
                const RuleIcon = rule.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/90 rounded-2xl p-7 shadow-subtle-card hover:shadow-elevation-hover transition-all duration-300"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5">
                      <RuleIcon className="w-5 h-5" />
                    </div>
                    <span className="brand-label text-emerald-600 text-[10px] block mb-1">
                      REGLA OPERATIVA #0{idx + 1}
                    </span>
                    <h3 className="font-brand-display text-2xl text-[#0F172A] font-normal mb-3">
                      {rule.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                      {rule.description}
                    </p>
                  </div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
