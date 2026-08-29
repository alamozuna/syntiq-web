"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/brand/BrandLogo";

const NAV_LINKS = [
  { name: "Soluciones", href: "#soluciones" },
  { name: "Misión & Valores", href: "#filosofia" },
  { name: "Flujo IA", href: "#flujo-ia" },
  { name: "Calculadora ROI", href: "#calculadora" },
  { name: "Casos de Uso", href: "#casos-uso" },
  { name: "Equipo Directivo", href: "#equipo" },
  { name: "Gobernanza", href: "#gobernanza" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link
          href="/"
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
        >
          <BrandLogo size="md" variant="dark" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/80 border border-slate-200/90 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium tracking-wide text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-full transition-colors duration-200 hover:bg-slate-50"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Status Pill & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="hidden md:inline">Agentes 100% Online</span>
            <span className="md:hidden">Online</span>
          </div>

          <a
            href="#diagnostico"
            className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Diagnóstico Gratis</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm"
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menú de navegación"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 bg-white/95 border border-slate-200 rounded-2xl backdrop-blur-xl shadow-xl space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs text-emerald-700 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Sistemas Agénticos Activos</span>
            </div>
          </div>
          <div className="grid gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2">
            <a
              href="#diagnostico"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-xl shadow-sm"
            >
              <span>Solicitar Diagnóstico Operativo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
