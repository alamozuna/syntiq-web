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
  CheckCircle2,
  ArrowRight,
  Sparkles,
  MessageSquare,
  CalendarCheck,
  RefreshCcw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Motor de IA Productizado para PyMEs y Despachos",
  description:
    "Infraestructura de agentes autónomos plug-and-play para PyMEs: triaje en WhatsApp 24/7, sincronización CRM y sistema anti-no-show en 7 a 14 días.",
  alternates: {
    canonical: "/servicios/motor-productizado",
  },
  openGraph: {
    title: "Motor de IA Productizado para PyMEs | SyntIQ",
    description:
      "Despliegue rápido de agentes inteligentes que rescatan el lucro cesante nocturno y de fin de semana.",
    url: "https://syntiq.ai/servicios/motor-productizado",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Motor de IA Productizado para PyMEs",
  serviceType: "Automation & Autonomous Agents",
  provider: {
    "@type": "Organization",
    name: "SyntIQ Enterprise AI",
    url: "https://syntiq.ai",
  },
  description:
    "Infraestructura de agentes de IA para PyMEs, despachos y clínicas. Despliegue en 7 a 14 días con conexión a WhatsApp Cloud, CRM y calendarios.",
  termsOfService: "https://syntiq.ai/terminos",
};

export default function MotorProductizadoPage() {
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
              { name: "Motor Productizado", href: "/servicios/motor-productizado" },
            ]}
          />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>PLUG & PLAY DE ALTA VELOCIDAD (7 - 14 DÍAS)</span>
            </div>

            <h1 className="font-brand-display text-4xl sm:text-6xl text-[#0F172A] font-light leading-tight">
              Infraestructura de IA Plug-and-Play para{" "}
              <span className="italic text-blue-600 font-normal">PyMEs y Despachos</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Erradica las tareas repetitivas y rescata el lucro cesante nocturno con un sistema de agentes autónomos estandarizado que opera 24/7 sin aumentar tu nómina.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md"
              >
                <span>Solicitar Diagnóstico para PyME</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Matrix */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 rounded-3xl bg-red-50/60 border border-red-200/80 space-y-3">
              <span className="text-xs font-mono text-red-700 font-semibold block">
                EL CUELLO DE BOTELLA TÍPICO
              </span>
              <h2 className="font-brand-display text-2xl sm:text-3xl text-[#0F172A]">
                Fuga de leads y saturación administrativa
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
                Prospectos que escriben a las 9:00 PM o fines de semana y se enfrían antes de que el equipo comercial responda al día siguiente; pacientes o clientes que cancelan a última hora (no-show); y personal cualificado perdiendo horas copiando datos entre WhatsApp, correo y hojas de cálculo.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-emerald-50/60 border border-emerald-200/80 space-y-3">
              <span className="text-xs font-mono text-emerald-700 font-semibold block">
                EL SISTEMA SYNTIQ
              </span>
              <h2 className="font-brand-display text-2xl sm:text-3xl text-[#0F172A]">
                Respuesta instantánea y agenda automatizada
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
                Orquestador n8n conectado a Claude 3.5 Sonnet y WhatsApp Cloud API con memoria contextual. Califica el presupuesto del cliente, responde dudas sobre servicios en &lt; 30 segundos, sincroniza citas en Google Calendar / CRM y envía recordatorios automáticos anti-cancelación.
              </p>
            </div>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto">
              <span className="brand-label text-blue-600 font-semibold">
                CARACTERÍSTICAS TÉCNICAS
              </span>
              <h2 className="font-brand-display text-3xl sm:text-4xl text-[#0F172A] font-light mt-2">
                Todo lo que incluye el Motor Productizado
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#0F172A]">Copiloto en WhatsApp 24/7</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Atención continua en lenguaje natural con tono corporativo personalizado y memoria del historial del cliente.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#0F172A]">Sistema Anti-No-Show</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Agendamiento directo y confirmación en tiempo real con pasarela para seña o cobro anticipado opcional.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600">
                  <RefreshCcw className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#0F172A]">Sincronización CRM & Email</h3>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Creación automática de contactos y oportunidades en HubSpot, Salesforce, Zoho o bases de datos sin intervención manual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <FaqSection
        title="Preguntas sobre el Motor Productizado"
        subtitle="Todo lo que necesitas saber antes de iniciar la integración rápida en tu empresa."
      />

      <Footer />
    </main>
  );
}
