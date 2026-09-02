"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";

export default function FinalCtaSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-slate-900 text-white overflow-hidden border-t border-slate-800">
      {/* Subtle Environmental Atmosphere */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[250px] bg-indigo-600/10 blur-[100px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headings */}
        <h2 className="font-brand-display text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.1] mb-2">
          Deja de aprender IA en abstracto.
        </h2>
        <p className="font-brand-display text-3xl sm:text-5xl lg:text-6xl font-normal italic text-blue-400 tracking-tight leading-[1.1] mb-6">
          Construye algo útil.
        </p>

        {/* Copy */}
        <p className="text-base sm:text-lg text-slate-300 font-light max-w-md mx-auto mb-10 leading-relaxed">
          Empieza con un taller práctico de SyntIQ.
        </p>

        {/* Dual CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            href="#formaciones"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm py-3.5 px-7 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98]"
          >
            <span>Ver próximos talleres</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contacto?modalidad=in-company"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs sm:text-sm font-medium py-3.5 px-6 rounded-full transition-colors"
          >
            <Users className="w-4 h-4 text-slate-400" />
            <span>Formar a mi equipo</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
