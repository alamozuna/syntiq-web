"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import BrandLogo from "@/components/brand/BrandLogo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    { name: "Formaciones", href: isHome ? "#formaciones" : "/#formaciones" },
    { name: "Método", href: isHome ? "#metodo" : "/#metodo" },
    { name: "Resultados", href: isHome ? "#resultados" : "/#resultados" },
    { name: "Nosotros", href: "/nosotros" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-4 sm:px-6 lg:px-8",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200/70 shadow-[0_1px_3px_0_rgba(15,23,42,0.03)] py-3"
          : "bg-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Official Brand Logo */}
        <Link
          href="/"
          className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg"
          aria-label="SyntIQ - Inicio"
        >
          <BrandLogo size="md" variant="dark" />
        </Link>

        {/* Desktop Navigation - 4 Clean Links */}
        <nav
          aria-label="Navegación principal"
          className="hidden md:flex items-center gap-1 bg-slate-50/80 border border-slate-200/80 rounded-full px-4 py-1.5 backdrop-blur-sm"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-xs font-medium text-slate-600 hover:text-blue-600 px-3.5 py-1.5 rounded-full transition-colors duration-150 hover:bg-white/70",
                  isActive && "text-blue-600 font-semibold bg-white shadow-xs"
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Priority CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href={isHome ? "#formaciones" : "/#formaciones"}
            className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.98]"
          >
            <span>Ver talleres</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden min-h-[44px] min-w-[44px] p-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-xs focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 flex items-center justify-center"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 p-4 bg-white/95 border border-slate-200/90 rounded-2xl backdrop-blur-lg shadow-lg space-y-3">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="min-h-[44px] flex items-center text-sm font-medium text-slate-700 hover:text-blue-600 px-3 rounded-lg hover:bg-slate-50 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-100">
            <Link
              href={isHome ? "#formaciones" : "/#formaciones"}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2.5 px-4 rounded-xl shadow-xs"
            >
              <span>Ver talleres</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
