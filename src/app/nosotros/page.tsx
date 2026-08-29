import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import MissionVisionValues from "@/components/brand/MissionVisionValues";
import TeamSection from "@/components/team/TeamSection";
import JsonLd from "@/components/seo/JsonLd";
import { Sparkles, ArrowRight, ShieldCheck, Award, GraduationCap } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre Nosotros & Equipo Directivo",
  description:
    "Conoce la historia, misión, valores y al equipo directivo de SyntIQ Enterprise AI: ingeniería de operaciones, rigor legal, estrategia comercial y comercio internacional.",
  alternates: {
    canonical: "/nosotros",
  },
  openGraph: {
    title: "Sobre Nosotros & Equipo Directivo | SyntIQ",
    description:
      "Conoce la visión y al equipo detrás de la infraestructura tecnológica de agentes autónomos y gobernanza de IA en SyntIQ.",
    url: "https://syntiq.ai/nosotros",
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Sobre SyntIQ Enterprise AI",
  description:
    "Empresa de infraestructura tecnológica, ciencia de datos y agentes autónomos de Inteligencia Artificial.",
  mainEntity: {
    "@type": "Organization",
    name: "SyntIQ Enterprise AI",
    slogan: "Conecta · Ordena · Impulsa",
    founder: [
      {
        "@type": "Person",
        name: "Bryan Villar Sánchez",
        jobTitle: "Ingeniero de Operaciones e IA",
      },
      {
        "@type": "Person",
        name: "Alam Antonio Ozuna Silva",
        jobTitle: "Estrategia de Negocios & Análisis de Datos",
      },
      {
        "@type": "Person",
        name: "Laura Nicole Espino Andújar",
        jobTitle: "Legal, Cumplimiento & Propiedad Intelectual",
      },
      {
        "@type": "Person",
        name: "Karyleydi Ortiz Segura",
        jobTitle: "Comercio Internacional & Experiencia de Cliente",
      },
    ],
  },
};

export default function NosotrosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-slate-900">
      <JsonLd data={aboutSchema} />
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 bg-gradient-to-b from-blue-50/60 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Sobre Nosotros", href: "/nosotros" }]} />

          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>FILOSOFÍA, RIGOR & EQUIPO FUNDADOR</span>
            </div>

            <h1 className="font-brand-display text-4xl sm:text-6xl text-[#0F172A] font-light leading-tight">
              Tecnología de vanguardia sobre{" "}
              <span className="italic text-blue-600 font-normal">principios inquebrantables</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              En SyntIQ transformamos el caos operativo de las empresas mediante agentes autónomos, gobernanza estricta y modelos de datos de alta precisión. Existimos para liberar al ser humano de la mediocridad de las tareas mecánicas.
            </p>
          </div>
        </div>
      </section>

      {/* Trust & Academic Credentials */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-900 block">CESTE Centro Universitario</span>
                <span className="text-[11px] font-mono text-slate-500">Máster & MBA Ciencia de Datos e IA</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-900 block">Estándares Internacionales</span>
                <span className="text-[11px] font-mono text-slate-500">ISO 13485 · FDA · RGPD Compliance</span>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-900 block">Formación OMA</span>
                <span className="text-[11px] font-mono text-slate-500">Organización Mundial de Aduanas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity & Mission, Vision, Values */}
      <MissionVisionValues />

      {/* Founding Team Section */}
      <TeamSection />

      {/* Final CTA Banner */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light leading-tight">
            ¿Listo para construir un sistema inteligente para tu empresa?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Hablemos sobre tus procesos actuales y analicemos cómo la arquitectura de SyntIQ puede erradicar tus cuellos de botella.
          </p>
          <div className="pt-2">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold px-8 py-4 rounded-full transition-all shadow-sm hover:shadow-md"
            >
              <span>Solicitar Diagnóstico Operativo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
