import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import FaqSection from "@/components/faq/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import {
  Boxes,
  Building2,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Soluciones & Arquitectura de IA para Empresas",
  description:
    "Descubre los modelos de implementación de SyntIQ: Motor Productizado para PyMEs, Motor Consultivo Enterprise y Capa de Gobernanza Legal e ISO 13485 / FDA.",
  alternates: {
    canonical: "/servicios",
  },
  openGraph: {
    title: "Soluciones & Arquitectura de IA para Empresas | SyntIQ",
    description:
      "Modelos de implementación rápida y consultoría técnica de alta ingeniería para erradicar cuellos de botella operativos.",
    url: "https://syntiq.ai/servicios",
  },
};

const SERVICES = [
  {
    id: "motor-productizado",
    title: "Motor Productizado (PyMEs & Despachos)",
    tag: "PLUG & PLAY DE ALTA VELOCIDAD",
    timeframe: "Despliegue en 7 a 14 días",
    audience: "PyMEs, clínicas, despachos profesionales, inmobiliarias y agencias",
    icon: Boxes,
    href: "/servicios/motor-productizado",
    description:
      "Sistema estandarizado de agentes autónomos que califica prospectos, agenda citas y atiende consultas 24/7 en WhatsApp, eliminando la fuga de clientes fuera de horario laboral.",
    highlights: [
      "Calificación de prospectos y triaje en < 30 segundos",
      "Asistente conversacional de WhatsApp 24/7 con memoria contextual",
      "Sistema anti-no-show con confirmación y recordatorios",
      "Sincronización bidireccional con CRM, correo y bases de datos",
    ],
  },
  {
    id: "motor-consultivo",
    title: "Motor Consultivo (Enterprise & Industria)",
    tag: "TRANSFORMACIÓN ESTRATÉGICA A MEDIDA",
    timeframe: "Proyectos por fases de 4 a 12 semanas",
    audience: "Empresas medianas, plantas industriales, manufactura y corporaciones",
    icon: Building2,
    href: "/servicios/motor-consultivo",
    description:
      "Modernización profunda de la cadena de valor operativa: orquestación de datos, conexión de agentes con ERP corporativo (SAP/Salesforce) y control estadístico de procesos (Python/Minitab).",
    highlights: [
      "Auditoría técnica en planta para detección de cuellos de botella",
      "Agentes autónomos integrados con ERPs (SAP, Salesforce, Odoo)",
      "Control estadístico de variabilidad y optimización algorítmica",
      "Documentación técnica homologada para subvenciones y SLAs",
    ],
  },
  {
    id: "gobernanza-compliance",
    title: "Gobernanza, Ciberseguridad & Blindaje de IA",
    tag: "BLINDAJE LEGAL Y ÉTICO",
    timeframe: "Auditoría continua & monitoreo 24/7",
    audience: "Direcciones legales, directores de IT, CFOs y comités de riesgo",
    icon: ShieldCheck,
    href: "/servicios/gobernanza-compliance",
    description:
      "Garantizamos que la adopción de IA en tu empresa sea segura, ética, libre de alucinaciones y con estricto cumplimiento normativo (RGPD, LOPD, ISO 13485, FDA y OMA).",
    highlights: [
      "Protocolo 'Human-in-the-Loop' con supervisión sistemática de logs",
      "Protección estricta de propiedad intelectual y secretos comerciales",
      "Anonimización previa de PII y cifrado integral",
      "Políticas de contención de costes de tokens y prevención de riesgos",
    ],
  },
];

const serviceHubSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Enterprise Artificial Intelligence & Automation",
  provider: {
    "@type": "Organization",
    name: "SyntIQ Enterprise AI",
    url: "https://syntiq.ai",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Catálogo de Soluciones SyntIQ",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.description,
      },
    })),
  },
};

export default function ServiciosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-slate-900">
      <JsonLd data={serviceHubSchema} />
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-blue-50/50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Servicios & Soluciones", href: "/servicios" }]} />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>ARQUITECTURA DE VALOR & SOLUCIONES</span>
            </div>

            <h1 className="font-brand-display text-4xl sm:text-6xl text-[#0F172A] font-light leading-tight">
              Soluciones de Inteligencia Artificial adaptadas a tu{" "}
              <span className="italic text-blue-600 font-normal">etapa operativa</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Diseñamos e implementamos arquitecturas agénticas para empresas que buscan rentabilidad neta,
              trazabilidad total y cero alucinaciones en producción.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="rounded-3xl bg-white border border-slate-200 p-7 sm:p-8 flex flex-col justify-between hover:border-blue-300 transition-all duration-300 shadow-subtle-card hover:shadow-elevation-hover group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-105 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
                        {service.timeframe}
                      </span>
                    </div>

                    <span className="text-[10px] font-mono text-blue-600 uppercase tracking-wider block mb-1">
                      {service.tag}
                    </span>

                    <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100 mb-6">
                      <span className="text-[11px] font-mono text-slate-400 block">
                        CAPACIDADES CLAVE:
                      </span>
                      {service.highlights.map((h) => (
                        <div key={h} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                          <span className="font-light">{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center gap-2 w-full bg-slate-50 hover:bg-blue-600 text-slate-800 hover:text-white font-medium text-xs sm:text-sm py-3 rounded-xl border border-slate-200 hover:border-blue-600 transition-all duration-200"
                  >
                    <span>Explorar Solución Detallada</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Quick CTA Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0F172A] text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-elevation-3">
            <div className="space-y-2 text-center md:text-left">
              <span className="brand-label text-blue-400 text-xs flex items-center justify-center md:justify-start gap-1.5">
                <Zap className="w-3.5 h-3.5" /> DIAGNÓSTICO PREVIO PERSONALIZADO
              </span>
              <h3 className="font-brand-display text-2xl sm:text-3xl text-white">
                ¿No estás seguro de qué motor se adapta a tu negocio?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-xl">
                Nuestros ingenieros analizan tu flujo de datos y cuellos de botella en una sesión técnica de 30 minutos sin compromiso.
              </p>
            </div>

            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md shrink-0"
            >
              <span>Solicitar Diagnóstico</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection
        title="Preguntas Frecuentes sobre Nuestros Servicios"
        subtitle="Respuestas claras basadas en nuestra metodología y estándares de ingeniería."
      />

      <Footer />
    </main>
  );
}
