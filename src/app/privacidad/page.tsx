import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidad & Protección de Datos",
  description:
    "Conoce cómo SyntIQ Group protege tus datos personales al inscribirte a una formación, contactarnos o participar en un taller, conforme a RGPD / LOPD.",
  alternates: {
    canonical: "/privacidad",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-slate-900">
      <Navbar />

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Política de Privacidad", href: "/privacidad" }]} />

          <div className="mt-6">
            <span className="brand-label text-blue-600 font-semibold block mb-2">
              COMPROMISO DE CONFIDENCIALIDAD & CUMPLIMIENTO
            </span>
            <h1 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light leading-tight">
              Política de Privacidad y Protección de Datos
            </h1>
            <p className="mt-3 text-xs sm:text-sm font-mono text-slate-600">
              Última actualización: Septiembre {new Date().getFullYear()} · Versión 1.3
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-sm text-slate-700 font-light leading-relaxed">
          {/* Legal Notice Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 text-amber-700 mt-0.5" />
            <div>
              <strong className="block font-semibold mb-0.5">Aviso de Validación Legal:</strong>
              Este documento establece los principios de privacidad y protección de datos que rigen el sitio web y las formaciones de SyntIQ Group. Las condiciones específicas de cada formación in-company, incluyendo confidencialidad de la información compartida, se formalizan en el acuerdo firmado con la empresa contratante.
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              1. Responsable del Tratamiento de Datos
            </h2>
            <p>
              El responsable del tratamiento de los datos recabados a través de esta plataforma es <strong>SyntIQ Group</strong>, equipo de formación práctica en Inteligencia Artificial para profesionales, estudiantes, emprendedores y empresas.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              2. Principio de Mayordomía de Datos & Cero Reentrenamiento
            </h2>
            <p>
              En SyntIQ operamos bajo el principio fundacional de que tu información personal y la de tu empresa es un activo confidencial e inalienable. Bajo ninguna circunstancia los datos que nos compartes al inscribirte, contactarnos o participar en una formación in-company se utilizan para reentrenar modelos públicos de terceros ni se comercializan.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              3. Minimización de Información de Identificación Personal (PII)
            </h2>
            <p>
              Solo recabamos los datos necesarios para gestionar tu inscripción, comunicarnos contigo y facturar cuando aplique (nombre, correo, teléfono y, para empresas, datos de facturación). No solicitamos ni almacenamos datos sensibles (números de tarjeta, identificaciones oficiales, información médica) a través de nuestros formularios. El procesamiento de estos datos cumple con <strong>RGPD</strong> y <strong>LOPD</strong>.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              4. Finalidad del Tratamiento de Datos
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Gestionar tu inscripción, confirmación de cupo y comunicación sobre la formación.</li>
              <li>Diseñar y coordinar programas de formación in-company adaptados a tu empresa.</li>
              <li>Enviarte información sobre próximas formaciones, cuando hayas dado tu consentimiento.</li>
              <li>Cumplir con los requerimientos legales, fiscales y regulatorios aplicables.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              5. Derechos del Usuario (Acceso, Rectificación y Supresión)
            </h2>
            <p>
              Cualquier usuario o empresa puede ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento y portabilidad de sus datos en cualquier momento enviando una solicitud formal a través de nuestros canales de contacto corporativos.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              6. Seguridad y Cifrado
            </h2>
            <p>
              Implementamos protocolos de cifrado de datos en tránsito (TLS/SSL) y en reposo, y control de acceso basado en roles para el equipo interno que administra estos datos.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
