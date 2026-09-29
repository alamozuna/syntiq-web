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

  // Only the home hero is dark. On every other page (and once scrolled anywhere) the bar sits
  // on a light surface, so the logo and links must be dark or they disappear.
  const onDark = isHome && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the drawer when navigating
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Inicio", href: isHome ? "#inicio" : "/", match: "/" },
    { name: "Formaciones", href: "/formaciones", match: "/formaciones" },
    { name: "Método", href: isHome ? "#metodo" : "/#metodo", match: null },
    { name: "Resultados", href: isHome ? "#resultados" : "/#resultados", match: null },
    { name: "Nosotros", href: "/nosotros", match: "/nosotros" },
  ];

  const isLinkActive = (match: string | null) => {
    if (!match) return false;
    if (match === "/") return pathname === "/";
    return pathname === match || pathname.startsWith(`${match}/`);
  };

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
          <BrandLogo size="md" variant={onDark ? "light" : "dark"} />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Navegación principal"
          className={cn(
            "hidden md:flex items-center gap-1 rounded-full px-3 py-1 backdrop-blur-sm",
            onDark
              ? "bg-white/10 border border-white/15"
              : "bg-slate-50/80 border border-slate-200/80"
          )}
        >
          {navLinks.map((link) => {
            const isActive = isLinkActive(link.match);

            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-medium px-3.5 py-2 rounded-full transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                  onDark
                    ? cn(
                        "text-slate-200 hover:text-white hover:bg-white/10",
                        isActive && "text-white font-semibold bg-white/15"
                      )
                    : cn(
                        "text-slate-700 hover:text-blue-700 hover:bg-white",
                        isActive && "text-blue-700 font-semibold bg-white shadow-sm"
                      )
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
            href="/formaciones"
            className="group inline-flex items-center gap-2 min-h-[40px] bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200 shadow-sm hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <span>Ver formaciones</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={cn(
            "md:hidden min-h-[44px] min-w-[44px] p-2.5 rounded-xl shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 flex items-center justify-center transition-colors",
            onDark
              ? "bg-white/10 border border-white/20 text-white hover:bg-white/20"
              : "bg-white border border-slate-200 text-slate-800 hover:bg-slate-50"
          )}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden mt-2 p-4 bg-white/95 border border-slate-200/90 rounded-2xl backdrop-blur-lg shadow-lg space-y-3"
        >
          <nav aria-label="Navegación móvil" className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                aria-current={isLinkActive(link.match) ? "page" : undefined}
                className="min-h-[44px] flex items-center text-base font-medium text-slate-800 hover:text-blue-700 px-3 rounded-lg hover:bg-slate-50 aria-[current=page]:text-blue-700 aria-[current=page]:bg-blue-50 aria-[current=page]:font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <Link
              href="/formaciones"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white text-base font-medium py-2.5 px-4 rounded-xl shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            >
              <span>Ver formaciones</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
