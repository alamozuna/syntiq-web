"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TEAM_MEMBERS = [
  {
    name: "Bryan Villar Sánchez",
    role: "Operaciones & IA",
    expertise: "Optimización de flujos y arquitecturas de automatización con IA.",
    image: "/assets/team-bryan.jpg",
    tags: ["Operaciones", "Python", "n8n"],
  },
  {
    name: "Alam Antonio Ozuna Silva",
    role: "Estrategia & Data",
    expertise: "Convierte tecnología en resultados de negocio medibles.",
    image: "/assets/team-alam.jpg",
    tags: ["Estrategia", "Data", "Negocio"],
  },
  {
    name: "Laura Nicole Espino Andújar",
    role: "Gobernanza & Legal",
    expertise: "Auditoría de flujos, propiedad intelectual y seguridad.",
    image: "/assets/team-laura.jpg",
    tags: ["Gobernanza", "Legal", "Seguridad"],
  },
  {
    name: "Karyleydi Ortiz Segura",
    role: "Experiencia & Adopción",
    expertise: "Acompañamiento en la adopción y soporte operativo continuo.",
    image: "/assets/team-karyleydi.jpg",
    tags: ["Adopción", "Operaciones", "Soporte"],
  },
];

export default function TeamSummarySection() {
  return (
    <section id="equipo" className="relative py-20 sm:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase">
            EQUIPO FUNDADOR
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light mt-3 leading-tight">
            IA desde negocio, datos, <br className="hidden sm:inline" />
            <span className="italic font-normal text-blue-600">operaciones y gobernanza.</span>
          </h2>
        </div>

        {/* 4 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl bg-white border border-slate-200/90 p-5 flex flex-col justify-between shadow-xs hover:border-blue-300 hover:shadow-sm transition-all duration-200 group"
            >
              <div>
                {/* Photo */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-4 bg-slate-100 border border-slate-200/80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="font-brand-display text-xl text-slate-900 font-medium">
                  {member.name}
                </h3>
                <span className="text-xs font-mono font-medium text-blue-600 block mt-0.5 mb-2">
                  {member.role}
                </span>

                {/* Expertise 1 line */}
                <p className="text-xs text-slate-600 font-light leading-relaxed mb-4">
                  &ldquo;{member.expertise}&rdquo;
                </p>
              </div>

              {/* Max 3 Tags */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-50 text-slate-600 border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Link to Full Team in /nosotros */}
        <div className="text-center mb-14">
          <Link
            href="/nosotros"
            className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>Conocer al equipo completo y nuestra historia</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Brand Ethos Phrase (Section 16) */}
        <div className="max-w-2xl mx-auto text-center py-6 px-4 rounded-2xl bg-slate-50/80 border border-slate-200/80">
          <p className="font-brand-display text-base sm:text-lg text-slate-700 italic font-light">
            &ldquo;Tecnología útil. Aprendizaje práctico. IA con supervisión humana.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
