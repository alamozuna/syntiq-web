"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Sparkles, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#02040a] border-t border-slate-800 text-slate-400 text-xs font-light pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Brand & Ethos */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-lg bg-slate-900 border border-blue-500/30 flex items-center justify-center overflow-hidden">
                <Image
                  src="/assets/icon-syntiq.png"
                  alt="SyntIQ Isotipo"
                  width={32}
                  height={32}
                  className="object-contain p-0.5"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-brand-display text-2xl text-white tracking-wide font-normal">
                  Synt<span className="text-blue-500 font-semibold">IQ</span>
                </span>
                <span className="brand-label text-[8px] text-slate-400 tracking-widest">
                  CONECTA · ORDENA · IMPULSA
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              Infraestructura tecnológica y agentes autónomos de Inteligencia Artificial para
              empresas. Transformamos el caos operativo en un sistema inteligente que piensa por ti.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-3 py-1 rounded-full w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Cluster de Agentes: 99.98% Uptime</span>
            </div>
          </div>

          {/* Col 3: Soluciones */}
          <div className="space-y-3">
            <span className="brand-label text-slate-200 block text-[10px]">
              SOLUCIONES DE IA
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#soluciones" className="hover:text-blue-400 transition-colors">
                  Motor Productizado (PyMEs)
                </a>
              </li>
              <li>
                <a href="#soluciones" className="hover:text-blue-400 transition-colors">
                  Motor Consultivo (Enterprise)
                </a>
              </li>
              <li>
                <a href="#gobernanza" className="hover:text-blue-400 transition-colors">
                  Gobernanza & Blindaje Legal
                </a>
              </li>
              <li>
                <a href="#flujo-ia" className="hover:text-blue-400 transition-colors">
                  Arquitectura Data & Agents
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Recursos & Casos */}
          <div className="space-y-3">
            <span className="brand-label text-slate-200 block text-[10px]">
              RECURSOS & HERRAMIENTAS
            </span>
            <ul className="space-y-2">
              <li>
                <a href="#calculadora" className="hover:text-blue-400 transition-colors">
                  Calculadora de Retorno (ROI)
                </a>
              </li>
              <li>
                <a href="#casos-uso" className="hover:text-blue-400 transition-colors">
                  Casos de Uso por Industria
                </a>
              </li>
              <li>
                <a href="#equipo" className="hover:text-blue-400 transition-colors">
                  Equipo Directivo & Fundadores
                </a>
              </li>
              <li>
                <a href="#diagnostico" className="hover:text-blue-400 transition-colors">
                  Diagnóstico Operativo Gratuito
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Principios Fundacionales */}
          <div className="space-y-3">
            <span className="brand-label text-slate-200 block text-[10px]">
              FILOSOFÍA CORE
            </span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <strong>Mayordomía Radical:</strong> Operamos bajo la premisa de buscar la máxima
              excelencia para honrar el encargo recibido.
            </p>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              <strong>Integridad Innegociable:</strong> La verdad y los datos reales son nuestro
              activo más valioso.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400 font-mono">
          <div>
            © {new Date().getFullYear()} SyntIQ Enterprise AI. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <span>Privacidad & RGPD</span>
            <span>Términos de Servicio</span>
            <span>Seguridad & Compliance</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
