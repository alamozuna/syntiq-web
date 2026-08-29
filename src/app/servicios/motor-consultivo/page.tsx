import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FaqSection from "@/components/faq/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Auditoría & Consultoría de IA Enterprise para Gran Empresa",
  description:
    "Desarrollo estratégico de Inteligencia Artificial para industria y corporaciones: integración ERP (SAP/Salesforce), control estadístico de procesos y orquestación de datos.",
  alternates: {
    canonical: "/servicios/motor-consultivo",
  },
  openGraph: {
    title: "Auditoría & Consultoría de IA Enterprise | SyntIQ",
    description:
      "Modernización profunda de la cadena de valor operativa mediante pipelines de datos seguros y agentes autónomos conectados a ERP.",
    url: "https://syntiq.ai/servicios/motor-consultivo",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Motor Consultivo de IA Enterprise",
  serviceType: "Enterprise Consulting & AI Systems Integration",
  provider: {
    "@type": "Organization",
    name: "SyntIQ Enterprise AI",
    url: "https://syntiq.ai",
  },
  description:
    "Consultoría técnica, auditoría en planta, control estadístico algorítmico y despliegue de agentes conectados a ERPs corporativos para grandes organizaciones.",
  termsOfService: "https://syntiq.ai/terminos",
};

export default function MotorConsultivoPage() {
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
              { name: "Motor Consultivo Enterprise", href: "/servicios/motor-consultivo" },
            ]}
          />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>TRANSFORMACIÓN ESTRATÉGICA A MEDIDA (4 - 12 SEMANAS)</span>
            </div>

            <h1 className="font-brand-display text-4xl sm:text-6xl text-[#0F172A] font-light leading-tight">
              Auditoría y Desarrollo Estratégico de IA para{" "}
              <span className="italic text-blue-600 font-normal">Gran Empresa e Industria</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Modernización profunda de la cadena de valor operativa: orquestación de datos corporativos, agentes autónomos conectados a sistemas ERP (SAP/Salesforce) y control estadístico de procesos.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md"
              >
                <span>Agendar Auditoría Enterprise</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology & Phases */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="brand-label text-blue-600 font-semibold">METODOLOGÍA POR FASES</span>
            <h2 className="font-brand-display text-3xl sm:text-4xl text-[#0F172A] font-light mt-2">
              Ingeniería aplicada al balance financiero
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light mt-3">
              Estructura rigurosa inspirada en control estadístico y estándares internacionales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-mono font-bold">
                  01
                </div>
                <span className="text-[10px] font-mono text-slate-400">SEMANAS 1 - 2</span>
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A]">Auditoría Operativa & Cuellos de Botella</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Levantamiento de procesos en planta y departamentos administrativos. Mapeo de flujos de datos y detección matemática de fuentes de fuga de rentabilidad.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 font-mono font-bold">
                  02
                </div>
                <span className="text-[10px] font-mono text-slate-400">SEMANAS 3 - 8</span>
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A]">Arquitectura de Datos & Conexión ERP</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Despliegue de pipelines seguros en n8n, bases vectoriales (RAG) y orquestación con SAP, Salesforce o bases de datos relacionales con cifrado estricto.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 font-mono font-bold">
                  03
                </div>
                <span className="text-[10px] font-mono text-slate-400">SEMANAS 9 - 12</span>
              </div>
              <h3 className="text-lg font-semibold text-[#0F172A]">Validación Estadística & Despliegue</h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Supervisión con 'Human-in-the-Loop', pruebas de no-alucinación, capacitación del equipo y entrega de documentación técnica homologada.
              </p>
            </div>
          </div>

          {/* Key Deliverables */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800">
            <h3 className="font-brand-display text-2xl sm:text-3xl text-white mb-6">
              Entregables y Garantías del Motor Enterprise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-light text-slate-300">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Auditoría integral de procesos con reporte de impacto cuantitativo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Control estadístico de variabilidad y modelos algorítmicos Python</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Integración segura con ERP corporativo y bases de datos transaccionales</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Acuerdos de Nivel de Servicio (SLAs) y soporte de ingeniería dedicado</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection
        title="Preguntas sobre el Motor Consultivo Enterprise"
        subtitle="Respuestas sobre confidencialidad, compatibilidad de ERP y soporte de ingeniería."
      />

      <Footer />
    </main>
  );
}
