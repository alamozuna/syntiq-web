import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import DiagnosticForm from "@/components/contact/DiagnosticForm";
import FaqSection from "@/components/faq/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { Sparkles, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto & Diagnóstico Operativo de IA",
  description:
    "Solicita una evaluación técnica personalizada con el equipo de ingenieros de SyntIQ. Respuesta y mapa de automatización en menos de 24 horas.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto & Diagnóstico Operativo de IA | SyntIQ",
    description:
      "Descubre dónde se fuga tu rentabilidad y cómo desplegar agentes autónomos en tu empresa en menos de 24h.",
    url: "https://syntiq.ai/contacto",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto y Diagnóstico de IA SyntIQ",
  description:
    "Página de contacto y solicitud de diagnóstico operativo para empresas de SyntIQ Enterprise AI.",
  mainEntity: {
    "@type": "Organization",
    name: "SyntIQ Enterprise AI",
    url: "https://syntiq.ai",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Support & Strategy",
      availableLanguage: ["es", "en"],
    },
  },
};

const CONTACT_FAQS = [
  {
    question: "¿Qué ocurre después de enviar el formulario de diagnóstico?",
    answer:
      "Nuestro equipo de ingeniería de operaciones analiza los cuellos de botella y herramientas reportadas. En menos de 24 horas laborables te enviamos un mapa preliminar de arquitectura de agentes y te proponemos una breve llamada técnica de 20 minutos para revisar el alcance.",
    category: "Proceso",
  },
  {
    question: "¿El diagnóstico operativo tiene algún coste o compromiso?",
    answer:
      "No. El diagnóstico inicial y la propuesta de arquitectura preliminar son 100% gratuitos y sin compromiso de contratación. Nuestro objetivo es validar matemáticamente la viabilidad antes de proponer cualquier solución.",
    category: "Comercial",
  },
  {
    question: "¿Quién atiende y evalúa mi solicitud técnica?",
    answer:
      "Las evaluaciones son realizadas directamente por el equipo fundador y de ingeniería de SyntIQ (con formación de posgrado en Ciencia de Datos e IA en CESTE y experiencia en normativas ISO/FDA), garantizando criterio técnico real.",
    category: "Equipo",
  },
];

export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-slate-900">
      <JsonLd data={contactSchema} />
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-32 pb-12 sm:pt-40 sm:pb-16 bg-gradient-to-b from-blue-50/60 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Contacto & Diagnóstico", href: "/contacto" }]} />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>SESIÓN TÉCNICA & EVALUACIÓN SIN COMPROMISO</span>
            </div>

            <h1 className="font-brand-display text-4xl sm:text-6xl text-[#0F172A] font-light leading-tight">
              Inicia tu diagnóstico operativo con los{" "}
              <span className="italic text-blue-600 font-normal">ingenieros de SyntIQ</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Completa el formulario en 2 minutos para mapear los cuellos de botella de tu empresa y recibir una propuesta de arquitectura agéntica adaptada a tu infraestructura.
            </p>
          </div>
        </div>
      </section>

      {/* SLA Badges */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <Clock className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-slate-900 block">SLA de Respuesta</span>
                <span className="text-[11px] font-mono text-slate-500">Contacto en &lt; 24 horas</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <ShieldCheck className="w-5 h-5 text-blue-600 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-slate-900 block">Confidencialidad Total</span>
                <span className="text-[11px] font-mono text-slate-500">Protección estricta de datos (RGPD)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
              <div>
                <span className="text-xs font-semibold text-slate-900 block">Cero Humo / Cero Vaporware</span>
                <span className="text-[11px] font-mono text-slate-500">Viabilidad matemática real</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Diagnostic Form Section */}
      <DiagnosticForm />

      {/* Contact FAQ */}
      <FaqSection
        faqs={CONTACT_FAQS}
        title="Preguntas sobre el Proceso de Diagnóstico"
        subtitle="Claridad total sobre cómo evaluamos la viabilidad y rentabilidad de cada proyecto."
        badge="08 — PROCESO DE EVALUACIÓN"
      />

      <Footer />
    </main>
  );
}
