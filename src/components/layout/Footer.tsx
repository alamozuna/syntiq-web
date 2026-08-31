"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp } from "lucide-react";
import BrandLogo from "@/components/brand/BrandLogo";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#0F172A] text-slate-300 text-xs font-light pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Brand & Ethos */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block" aria-label="SyntIQ - Inicio">
              <BrandLogo size="md" variant="light" />
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Formación práctica y talleres de Inteligencia Artificial para profesionales y empresas.
              Aprende a construir agentes autónomos y automatiza tu operativa real.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Próximo Taller: Plazas Disponibles</span>
            </div>
          </div>

          {/* Col 3: Formaciones */}
          <div className="space-y-3">
            <span className="brand-label text-slate-200 block text-[10px]">
              FORMACIONES
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/formaciones" className="hover:text-blue-400 transition-colors">
                  Todas las Formaciones
                </Link>
              </li>
              <li>
                <Link href="/formaciones/talleres-intensivos" className="hover:text-blue-400 transition-colors">
                  Talleres Intensivos (2-4h)
                </Link>
              </li>
              <li>
                <Link href="/formaciones/curso-modular" className="hover:text-blue-400 transition-colors">
                  Curso Modular (4 Semanas)
                </Link>
              </li>
              <li>
                <Link href="/formaciones/in-company" className="hover:text-blue-400 transition-colors">
                  Formación In-Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Recursos & Casos */}
          <div className="space-y-3">
            <span className="brand-label text-slate-200 block text-[10px]">
              ACADEMIA & RECURSOS
            </span>
            <ul className="space-y-2 text-slate-300">
              <li>
                <Link href="/nosotros" className="hover:text-blue-400 transition-colors">
                  Sobre Nosotros & Equipo
                </Link>
              </li>
              <li>
                <Link href="/#testimonios" className="hover:text-blue-400 transition-colors">
                  Testimonios de Alumnos
                </Link>
              </li>
              <li>
                <Link href="/#calculadora" className="hover:text-blue-400 transition-colors">
                  Calculadora ROTI
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-blue-400 transition-colors">
                  Reservar Plaza o Asesoría
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Principios Fundacionales */}
          <div className="space-y-3">
            <span className="brand-label text-slate-200 block text-[10px]">
              FILOSOFÍA ACADÉMICA
            </span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-slate-200">Mayordomía Radical:</strong> Operamos bajo la premisa de buscar la máxima excelencia para honrar el encargo recibido.
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <strong className="text-slate-200">Integridad Innegociable:</strong> La verdad y los resultados aplicables son nuestro activo más valioso.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} SyntIQ Academy. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacidad" className="hover:text-slate-200 transition-colors">
              Privacidad & RGPD
            </Link>
            <Link href="/terminos" className="hover:text-slate-200 transition-colors">
              Términos de Servicio
            </Link>
            <Link href="/campus" className="hover:text-slate-200 transition-colors">
              Campus Virtual
            </Link>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-blue-400 rounded px-1"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
