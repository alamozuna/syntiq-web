"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/brand/BrandLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formacionesDropdownOpen, setFormacionesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      name: "Formaciones",
      href: "/formaciones",
      isDropdown: true,
      subLinks: [
        { name: "Ver Todas las Formaciones", href: "/formaciones" },
        { name: "Talleres Intensivos (2-4h)", href: "/formaciones/talleres-intensivos" },
        { name: "Curso Modular (4 Semanas)", href: "/formaciones/curso-modular" },
        { name: "Formación In-Company", href: "/formaciones/in-company" },
      ],
    },
    { name: "Nosotros & Valores", href: "/nosotros" },
    { name: "Metodología", href: isHome ? "#metodologia" : "/#metodologia" },
    { name: "Calculadora ROTI", href: isHome ? "#calculadora" : "/#calculadora" },
    { name: "Testimonios", href: isHome ? "#testimonios" : "/#testimonios" },
    { name: "Contacto", href: "/contacto" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8",
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link
          href="/"
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          aria-label="SyntIQ - Ir a la página principal"
        >
          <BrandLogo size="md" variant="dark" />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegación principal"
          className="hidden lg:flex items-center gap-1 bg-white/85 border border-slate-200/90 rounded-full px-4 py-1.5 backdrop-blur-sm shadow-sm"
        >
          {navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setFormacionesDropdownOpen(true)}
                  onMouseLeave={() => setFormacionesDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "text-xs font-medium tracking-wide text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-full transition-colors duration-200 hover:bg-slate-50 inline-flex items-center gap-1",
                      pathname.startsWith("/formaciones") && "text-blue-600 font-semibold bg-blue-50/60"
                    )}
                  >
                    <span>{link.name}</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </Link>

                  {/* Dropdown Menu */}
                  {formacionesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-slate-200 rounded-2xl p-2 shadow-xl backdrop-blur-lg animate-in fade-in-50 zoom-in-95 duration-150">
                      {link.subLinks?.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setFormacionesDropdownOpen(false)}
                          className={cn(
                            "block px-3 py-2 rounded-xl text-xs text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors font-medium",
                            pathname === sub.href && "text-blue-600 bg-blue-50 font-semibold"
                          )}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-medium tracking-wide text-slate-600 hover:text-blue-600 px-3 py-1.5 rounded-full transition-colors duration-200 hover:bg-slate-50",
                  isActive && "text-blue-600 font-semibold bg-blue-50/60"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Status Pill & CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-mono text-emerald-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="hidden md:inline">Próximo Taller en Vivo</span>
            <span className="md:hidden">En Vivo</span>
          </div>

          <Link
            href="/contacto"
            className="group relative inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Ver Próximos Talleres</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 p-4 bg-white/98 border border-slate-200 rounded-2xl backdrop-blur-xl shadow-xl space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs text-emerald-700 font-mono">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Academia SyntIQ</span>
            </div>
          </div>
          <div className="grid gap-1">
            {navLinks.map((link) => {
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="space-y-1">
                    <div className="text-xs font-mono text-slate-400 px-3 pt-2 uppercase tracking-wider">
                      {link.name}
                    </div>
                    {link.subLinks?.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "block text-sm font-medium text-slate-700 hover:text-blue-600 py-1.5 px-3 rounded-lg hover:bg-slate-50 transition-colors pl-5",
                          pathname === sub.href && "text-blue-600 bg-blue-50 font-semibold"
                        )}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-sm font-medium text-slate-700 hover:text-blue-600 py-2 px-3 rounded-lg hover:bg-slate-50 transition-colors",
                    pathname === link.href && "text-blue-600 bg-blue-50 font-semibold"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-2">
            <Link
              href="/contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 rounded-xl shadow-sm"
            >
              <span>Reservar Plaza en Taller</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
