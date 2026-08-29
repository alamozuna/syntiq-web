"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Award, GraduationCap, CheckCircle2 } from "lucide-react";

const TEAM = [
  {
    name: "Bryan Villar Sánchez",
    role: "Ingeniero de Operaciones e IA",
    image: "/assets/team-bryan.jpg",
    credentials: "Ops & AI Engineer · Experto ISO 13485 & FDA",
    bio: "Perfil técnico de alto impacto especializado en maximizar la rentabilidad mediante la ciencia de datos y la optimización algorítmica de procesos (Python/Minitab). Avalado por su experiencia supervisando operaciones bajo estrictas normativas internacionales ISO 13485 y de la FDA, garantiza arquitecturas de IA robustas, escalables y adoptables.",
    tags: ["Control Estadístico", "Ingeniería de Prompts", "ISO 13485 / FDA", "Python"],
  },
  {
    name: "Alam Antonio Ozuna Silva",
    role: "Estrategia de Negocios & Análisis de Datos",
    image: "/assets/team-alam.jpg",
    credentials: "MBA Ciencia de Datos & IA (CESTE) · Estratega B2B",
    bio: "Especialista en fusionar el rigor del análisis de datos con la estrategia de negocios internacionales y la gestión del cambio. Actúa como el puente vital entre la alta tecnología y el retorno financiero de la empresa, asegurando que cada agente inteligente responda a retos comerciales concretos y altamente rentables.",
    tags: ["Estrategia Comercial", "Retorno de Inversión", "Análisis Financiero", "Transformación Digital"],
  },
  {
    name: "Laura Nicole Espino Andújar",
    role: "Legal, Cumplimiento & Propiedad Intelectual",
    image: "/assets/team-laura.jpg",
    credentials: "Máster Ciencia de Datos & IA · Formadora OMA",
    bio: "Pilar jurídico y de gobernanza estratégica. Especialista en propiedad intelectual y litigios tecnológicos, ha actuado como instructora experta ante la Organización Mundial de Aduanas (OMA). Su formación en Ciencia de Datos e IA le permite auditar el código desde su origen, blindando la innovación contra riesgos regulatorios y ciberseguridad.",
    tags: ["Gobernanza de IA", "Propiedad Intelectual", "Ciberseguridad", "Cumplimiento OMA"],
  },
  {
    name: "Karyleydi Ortiz Segura",
    role: "Comercio Internacional & Experiencia de Cliente",
    image: "/assets/team-karyleydi.jpg",
    credentials: "MBA Ciencia de Datos & IA (CESTE) · Operaciones",
    bio: "Especialista en comercio internacional y optimización operativa con experiencia en multinacionales de primer nivel gestionando cuentas corporativas e incidencias críticas. En SyntIQ lidera la adopción exitosa y la excelencia en la experiencia del cliente, garantizando resultados tangibles en cada implementación.",
    tags: ["Gestión Operativa", "Experiencia de Cliente", "Comercio Global", "Adopción de IA"],
  },
];

export default function TeamSection() {
  return (
    <section id="equipo" className="relative py-24 sm:py-32 bg-[#060a14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="brand-label text-blue-400">
            06 — AUTORIDAD PROFESIONAL & EQUIPO FUNDADOR
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-white font-light mt-3 leading-tight">
            Ingeniería de datos, rigor legal y{" "}
            <span className="italic text-blue-500 font-normal">estrategia corporativa</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Nuestro equipo combina formación de posgrado en Ciencia de Datos e IA (CESTE Centro
            Universitario), experiencia operativa en normativas internacionales y un compromiso
            inquebrantable con la verdad y la excelencia técnica.
          </p>
        </div>

        {/* 4 Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TEAM.map((member, idx) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-3xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 hover:border-blue-500/40 transition-all duration-300 group hover:shadow-glow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-6">
                  {/* Photo with frame */}
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-blue-500/30 shrink-0 bg-slate-800 shadow-md group-hover:border-blue-400 transition-colors">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>

                  {/* Name & Role */}
                  <div>
                    <h3 className="font-brand-display text-2xl sm:text-3xl text-white font-normal group-hover:text-blue-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-sm font-medium text-blue-400 mt-0.5">{member.role}</p>
                    <span className="text-[11px] font-mono text-slate-400 block mt-1">
                      {member.credentials}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6">
                  {member.bio}
                </p>
              </div>

              {/* Skill Tags */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap gap-2">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-slate-950 text-slate-300 border border-slate-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand Ethos & Gold Rules Bar */}
        <div id="gobernanza" className="mt-16 p-6 sm:p-8 rounded-3xl bg-slate-950/80 border border-slate-800/90 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
            <div className="space-y-1">
              <span className="brand-label text-blue-400 text-[10px]">
                REGLA HUMAN-IN-THE-LOOP
              </span>
              <h4 className="text-sm font-semibold text-white">Supervisión Sistemática</h4>
              <p className="text-xs text-slate-400">
                Ningún agente sale a producción sin auditoría humana de logs para evitar
                alucinaciones o sesgos.
              </p>
            </div>
            <div className="space-y-1">
              <span className="brand-label text-emerald-400 text-[10px]">
                PROHIBIDO EL &quot;VAPORWARE&quot;
              </span>
              <h4 className="text-sm font-semibold text-white">Soluciones Reales Hoy</h4>
              <p className="text-xs text-slate-400">
                No vendemos maquetas teóricas. Construimos sistemas operativos que resuelven dolores
                financieros desde el primer mes.
              </p>
            </div>
            <div className="space-y-1">
              <span className="brand-label text-indigo-400 text-[10px]">
                INTEGRIDAD INNEGOCIABLE
              </span>
              <h4 className="text-sm font-semibold text-white">Obsesión por el Dato Real</h4>
              <p className="text-xs text-slate-400">
                Preferimos perder una propuesta comercial antes que inflar expectativas de IA no
                validadas matemáticamente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
