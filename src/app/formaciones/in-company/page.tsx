import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Sparkles, ArrowRight, Building2, CheckCircle2, ShieldCheck, Users, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Formación In-Company | SyntIQ",
  description: "Enseñamos a tu equipo a construir y utilizar sistemas de Inteligencia Artificial aplicados a procesos reales de tu empresa.",
};

const AREAS = [
  "IA para productividad y ofimática",
  "Automatización de procesos y flujos",
  "Análisis documental masivo",
  "Vibe Coding: Desarrollo asistido",
  "Estrategia de adopción de IA",
  "Creación de Agentes internos"
];

export default function InCompanyPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-600/10 blur-[120px] rounded-full" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 shadow-xs mb-6">
            <Building2 className="w-3.5 h-3.5" />
            <span className="text-[10px] tracking-widest uppercase font-semibold font-mono">
              PARA EQUIPOS Y EMPRESAS
            </span>
          </div>

          <h1 className="font-brand-display text-4xl sm:text-5xl lg:text-7xl font-light text-slate-900 tracking-tight leading-tight mb-6">
            Formación aplicada a <span className="font-normal text-emerald-600">procesos reales.</span>
          </h1>

          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-3xl mx-auto mb-10">
            No te construimos la infraestructura. Enseñamos a tu equipo a construir y 
            utilizar sistemas de IA adaptados a vuestras herramientas, políticas y cuellos de botella.
          </p>

          <Link
            href="/contacto?modalidad=in-company"
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/20"
          >
            Hablemos de tu equipo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Como Trabajamos */}
      <section className="py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-brand-display text-slate-900 mb-4">
              ¿Por qué In-Company?
            </h2>
            <p className="text-slate-600 font-light max-w-2xl mx-auto">
              La IA genérica produce resultados mediocres. Para que sea verdaderamente útil, 
              debe estar anclada en el contexto específico de tu organización.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
              <ShieldCheck className="w-8 h-8 text-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Seguridad y Políticas</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Utilizamos los entornos y herramientas aprobadas por tu departamento de IT. Sin exponer datos sensibles.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
              <Briefcase className="w-8 h-8 text-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Casos de Uso Reales</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Las sesiones prácticas resuelven tareas que tu equipo hace todos los días, no ejemplos abstractos.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-xs">
              <Users className="w-8 h-8 text-emerald-600 mb-6" />
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Alineación de Equipo</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Todos adquieren el mismo vocabulario, frameworks y metodologías para escalar la adopción.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="text-[10px] tracking-widest uppercase font-semibold font-mono">
                  ÁREAS DE FORMACIÓN
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-brand-display mb-6">
                Diseñamos el programa a la medida de tus objetivos.
              </h2>
              <p className="text-slate-400 font-light mb-8 leading-relaxed">
                Podemos combinar módulos de nuestro catálogo y adaptarlos a los procesos 
                operativos de tus departamentos: Marketing, Operaciones, Ventas o Dirección.
              </p>
              
              <ul className="space-y-4">
                {AREAS.map((area, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-slate-200">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-tr from-emerald-600/20 to-blue-600/20 rounded-3xl blur-2xl transform -rotate-3" />
              <div className="relative bg-slate-800 p-8 sm:p-10 rounded-3xl border border-slate-700 shadow-2xl">
                <h3 className="text-xl font-semibold mb-6">Ejemplo de Sesión: Equipo Comercial</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-emerald-400 font-mono text-sm uppercase mb-2">Problema</h4>
                    <p className="text-slate-300 text-sm">El equipo pierde 10 horas semanales investigando prospectos y redactando emails manuales.</p>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-mono text-sm uppercase mb-2">La Sesión</h4>
                    <p className="text-slate-300 text-sm">Taller de 3 horas conectando CRM, LinkedIn y LLM para crear un extractor de contexto y redactor de primeros contactos.</p>
                  </div>
                  <div>
                    <h4 className="text-emerald-400 font-mono text-sm uppercase mb-2">Entregable (Construyen)</h4>
                    <p className="text-slate-300 text-sm">Un workflow de n8n que recibe un perfil, investiga la empresa y redacta un borrador de email en el CRM listo para revisión humana.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-brand-display text-3xl sm:text-4xl text-slate-900 mb-4">
            ¿Listo para formar a tu equipo?
          </h2>
          <p className="text-slate-600 font-light mb-8 max-w-xl mx-auto">
            Cuéntanos sobre tu equipo y diseñaremos una propuesta de formación adaptada a vuestros objetivos.
          </p>
          <Link
            href="/contacto?modalidad=in-company"
            className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white rounded-full font-semibold hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-900/20"
          >
            Hablar sobre mi equipo
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
