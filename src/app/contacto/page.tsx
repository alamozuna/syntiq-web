import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/DiagnosticForm";
import FaqSection from "@/components/faq/FaqSection";
import JsonLd from "@/components/seo/JsonLd";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto & Admisión | SyntIQ",
  description:
    "Cuéntanos qué quieres aprender o qué necesita tu equipo. Te orientamos hacia la formación de IA adecuada para ti.",
  alternates: {
    canonical: "/contacto",
  },
  openGraph: {
    title: "Contacto & Admisión | SyntIQ",
    description:
      "Cuéntanos qué quieres aprender o qué necesita tu equipo y te orientaremos hacia la formación adecuada.",
    url: "https://syntiq.ai/contacto",
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contacto y Admisión SyntIQ",
  description:
    "Página de contacto y solicitud de admisión para formaciones de Inteligencia Artificial de SyntIQ Academy.",
  mainEntity: {
    "@type": "Organization",
    name: "SyntIQ Academy",
    url: "https://syntiq.ai",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Admisiones",
      email: "syntiqgroup@gmail.com",
      availableLanguage: ["es", "en"],
    },
  },
};

const CONTACT_FAQS = [
  {
    question: "¿Qué ocurre después de enviar el formulario?",
    answer:
      "Nuestro equipo revisa tu solicitud y te contacta para orientarte hacia la formación más adecuada según tu perfil y objetivos.",
    category: "Proceso",
  },
  {
    question: "¿Las formaciones tienen algún coste?",
    answer:
      "Cada formación tiene su propio formato y condiciones. Una vez expreses tu interés, te enviaremos toda la información detallada incluyendo precios cuando estén disponibles.",
    category: "Comercial",
  },
  {
    question: "¿Necesito conocimientos técnicos previos?",
    answer:
      "Depende de la formación. Nuestros talleres iniciales e intermedios están diseñados para perfiles no técnicos. Cada ficha de formación indica el nivel recomendado.",
    category: "Requisitos",
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
          <div className="max-w-3xl mt-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono mb-4">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>CONTACTO & ADMISIÓN</span>
            </div>

            <h1 className="font-brand-display text-4xl sm:text-6xl text-[#0F172A] font-light leading-tight">
              Hablemos de lo que quieres{" "}
              <span className="italic text-blue-600 font-normal">construir.</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Cuéntanos qué quieres aprender o qué necesita tu equipo y te orientaremos hacia la formación adecuada.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <ContactForm />

      {/* Alternative Contact */}
      <section className="py-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-500 font-light">
            ¿Prefieres escribirnos directamente?{" "}
            <a
              href="mailto:syntiqgroup@gmail.com"
              className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              syntiqgroup@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Contact FAQ */}
      <FaqSection
        faqs={CONTACT_FAQS}
        title="Preguntas sobre el proceso"
        subtitle="Claridad total sobre cómo funciona."
        badge="PREGUNTAS FRECUENTES"
      />

      <Footer />
    </main>
  );
}
