import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center pt-32 pb-24 sm:pt-40 sm:pb-32 bg-gradient-to-b from-blue-50/60 via-white to-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="brand-label text-blue-700 font-semibold block mb-4">Error 404</span>

          <h1 className="font-brand-display text-4xl sm:text-6xl font-light text-[#0F172A] tracking-tight leading-tight mb-5">
            Esta página <span className="italic font-normal text-blue-600">no existe.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-10">
            Puede que el enlace esté mal escrito o que la formación ya no esté disponible.
            Desde aquí puedes volver a lo importante.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/formaciones"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-7 py-3 rounded-full transition-colors shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <span>Ver formaciones</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/"
              className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-medium text-base px-6 py-3 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Home className="w-4 h-4" />
              <span>Ir al inicio</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
