import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FaqSection from "@/components/faq/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import {
  Sparkles,
  Lock,
  FileCheck2,
  Eye,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Gobernanza, Ciberseguridad & Blindaje Legal de IA",
  description:
    "Capa de gobernanza para Inteligencia Artificial: supervisión Human-in-the-Loop, protección de propiedad intelectual y cumplimiento ISO 13485 / FDA / RGPD.",
  alternates: {
    canonical: "/servicios/gobernanza-compliance",
  },
  openGraph: {
    title: "Gobernanza & Blindaje Legal de IA | SyntIQ",
    description:
      "Garantizamos que la IA opere de forma ética, segura, sin alucinaciones y con estricta conformidad regulatoria.",
    url: "https://syntiq.ai/servicios/gobernanza-compliance",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Capa de Gobernanza, Ciberseguridad & Blindaje de IA",
  serviceType: "AI Governance, Compliance & Security Shield",
  provider: {
    "@type": "Organization",
    name: "SyntIQ Enterprise AI",
    url: "https://syntiq.ai",
  },
  description:
    "Auditoría continua de logs, anonimización PII, protección de propiedad intelectual y cumplimiento regulatorio internacional para sistemas de Inteligencia Artificial.",
  termsOfService: "https://syntiq.ai/terminos",
};

export default function GobernanzaCompliancePage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-slate-900">
      <JsonLd data={serviceSchema} />
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-blue-50/60 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Servicios", href: "/servicios" },
              { name: "Gobernanza & Compliance", href: "/servicios/gobernanza-compliance" },
            ]}
          />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>BLINDAJE LEGAL, ÉTICO & CIBERSEGURIDAD</span>
            </div>

            <h1 className="font-brand-display text-4xl sm:text-6xl text-[#0F172A] font-light leading-tight">
              Gobernanza, Ciberseguridad y{" "}
              <span className="italic text-blue-600 font-normal">Blindaje de IA Enterprise</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Garantiza que la adopción de Inteligencia Artificial en tu empresa sea segura, ética, libre de alucinaciones y legalmente inexpugnable ante normativas internacionales (RGPD, LOPD, ISO 13485, FDA y OMA).
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md"
              >
                <span>Consultar Blindaje Legal</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Governance */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="brand-label text-blue-600 font-semibold">
              LOS 4 EJES DE PROTECCIÓN
            </span>
            <h2 className="font-brand-display text-3xl sm:text-4xl text-[#0F172A] font-light mt-2">
              Seguridad técnica avalada por rigor legal
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-4">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-blue-600 font-semibold uppercase">EJE 01</span>
              <h3 className="text-xl font-semibold text-[#0F172A]">Supervisión Human-in-the-Loop</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Ningún agente autónomo entra en producción sin validación estricta y auditoría humana periódica de logs. Eliminamos el riesgo de alucinaciones en respuestas críticas o transacciones financieras.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-emerald-600 font-semibold uppercase">EJE 02</span>
              <h3 className="text-xl font-semibold text-[#0F172A]">Protección de Datos & Anonimización PII</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Filtros automáticos que eliminan información sensible o confidencial antes de que cualquier consulta sea procesada por modelos LLM. Cumplimiento estricto de RGPD y confidencialidad médica/financiera.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-4">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-indigo-600 font-semibold uppercase">EJE 03</span>
              <h3 className="text-xl font-semibold text-[#0F172A]">Auditoría de Propiedad Intelectual</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Liderada por Laura Espino (especialista en litigios tecnológicos y formadora OMA), garantizamos que todo el código, prompts y activos desarrollados sean de propiedad exclusiva de tu empresa.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-11 h-11 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 mb-4">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-amber-600 font-semibold uppercase">EJE 04</span>
              <h3 className="text-xl font-semibold text-[#0F172A]">Prevención de Token Bleeding & Costes</h3>
              <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                Políticas de control de presupuesto en APIs, límites de tokens por contexto y balanceo dinámico de carga para evitar sobrecostes imprevistos de computación en la nube.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection
        title="Preguntas sobre Gobernanza & Seguridad"
        subtitle="Cómo blindamos cada línea de código y dato corporativo contra riesgos legales y técnicos."
      />

      <Footer />
    </main>
  );
}
