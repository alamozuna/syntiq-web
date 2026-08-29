import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Servicio",
  description:
    "Términos generales de contratación, alcance de los servicios de arquitectura de IA, acuerdos de nivel de servicio (SLA) y propiedad intelectual en SyntIQ.",
  alternates: {
    canonical: "/terminos",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-slate-900">
      <Navbar />

      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: "Términos y Condiciones", href: "/terminos" }]} />

          <div className="mt-6">
            <span className="brand-label text-blue-600 font-semibold block mb-2">
              MARCO DE CONTRATACIÓN & CONDICIONES GENERALES
            </span>
            <h1 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light leading-tight">
              Términos y Condiciones de Servicio
            </h1>
            <p className="mt-3 text-xs sm:text-sm font-mono text-slate-500">
              Última actualización: Agosto {new Date().getFullYear()} · Versión 1.2
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Article */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-xs sm:text-sm text-slate-700 font-light leading-relaxed">
          {/* Legal Notice Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs flex items-start gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 text-amber-700 mt-0.5" />
            <div>
              <strong className="block font-semibold mb-0.5">Nota de Validación Jurídica:</strong>
              Estos términos constituyen el marco general de uso de la web y servicios informativos de SyntIQ. Las condiciones específicas de entrega, pagos, hitos y SLAs se determinan en la propuesta técnico-comercial y contrato firmado con cada entidad.
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              1. Objeto y Alcance de los Servicios
            </h2>
            <p>
              SyntIQ Enterprise AI proporciona servicios profesionales de consultoría, diseño de arquitectura de datos, desarrollo de flujos automatizados (n8n), implementación de agentes autónomos basados en Inteligencia Artificial y auditoría de gobernanza operativa.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              2. Propiedad Intelectual y Titularidad de los Desarrollos
            </h2>
            <p>
              Salvo pacto en contrario expresado en el contrato de prestación de servicios, todo el código personalizado, los esquemas de bases de datos, los prompts estructurados y las integraciones desarrolladas específicamente para el cliente final serán transferidos en titularidad al cliente una vez completada la liquidación de honorarios correspondiente.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              3. Garantía &quot;Human-in-the-Loop&quot; y Mitigación de Riesgos
            </h2>
            <p>
              SyntIQ implementa rigurosos protocolos de validación para mitigar sesgos y prevenir alucinaciones de modelos LLM. Sin embargo, el cliente acepta que los sistemas de IA son herramientas de asistencia y automatización que deben complementarse con la supervisión de los responsables designados por la empresa.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              4. Acuerdos de Nivel de Servicio (SLAs) y Disponibilidad
            </h2>
            <p>
              Para los clientes con planes de mantenimiento y soporte de ingeniería activo, SyntIQ establece compromisos de disponibilidad de cluster de hasta 99.98% y tiempos de respuesta prioritarios para incidencias críticas, especificados en su anexo contractual.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              5. Confidencialidad Comercial y No Divulgación
            </h2>
            <p>
              Ambas partes se comprometen a tratar con estricta confidencialidad toda la información técnica, financiera y comercial a la que tengan acceso durante la ejecución de los servicios de auditoría e integración.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
