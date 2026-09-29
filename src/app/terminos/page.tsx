import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import { AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Servicio",
  description:
    "Términos generales de inscripción y participación en las formaciones, talleres y programas de SyntIQ Group, y propiedad intelectual sobre los materiales.",
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
              <strong className="block font-semibold mb-0.5">Nota de Validación Jurídica:</strong>
              Estos términos constituyen el marco general de uso de la web y de las formaciones de SyntIQ Group. Las condiciones específicas de fecha, precio, cupo y modalidad de cada formación se confirman al momento de la inscripción.
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              1. Objeto y Alcance de las Formaciones
            </h2>
            <p>
              SyntIQ Group ofrece formación práctica en Inteligencia Artificial mediante talleres intensivos, programas modulares y formaciones in-company, dirigidos a profesionales, estudiantes, emprendedores y equipos de empresa que buscan aprender a construir automatizaciones, agentes y aplicaciones reales con herramientas de IA.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              2. Propiedad Intelectual sobre los Materiales de Formación
            </h2>
            <p>
              El material didáctico, las plantillas, los blueprints, las diapositivas y la metodología de enseñanza de SyntIQ Group son propiedad intelectual de SyntIQ Group y se entregan al participante para su uso personal o interno de su empresa, no para reventa o redistribución. Los flujos, prototipos o aplicaciones que el participante construya durante la formación, con sus propios datos y cuentas, son de su titularidad.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              3. Garantía &quot;Human-in-the-Loop&quot; y Mitigación de Riesgos
            </h2>
            <p>
              Durante las formaciones, SyntIQ enseña buenas prácticas de validación y supervisión humana para mitigar sesgos y prevenir alucinaciones de modelos LLM. El participante entiende que cualquier sistema, flujo o agente de IA que construya o implemente, durante o después de la formación, es de su responsabilidad operativa, y que las herramientas de IA son asistentes que requieren supervisión humana.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              4. Inscripción, Reprogramación y Acceso a Materiales
            </h2>
            <p>
              El cupo de cada formación se confirma con el pago de la inscripción. Las condiciones de cancelación, reprogramación o reembolso para cada edición se comunican al participante al momento de inscribirse. El acceso a las grabaciones y materiales de la formación, cuando aplique, se otorga por el período indicado en la confirmación de inscripción.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="font-brand-display text-2xl text-[#0F172A] font-normal">
              5. Confidencialidad Comercial y No Divulgación
            </h2>
            <p>
              Ambas partes se comprometen a tratar con confidencialidad la información técnica, financiera y de procesos internos que el participante o su empresa compartan durante formaciones in-company o talleres personalizados.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
