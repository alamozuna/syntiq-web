import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Sparkles, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Programa Modular | SyntIQ AI Builder",
  description: "Un recorrido guiado para dominar la IA: desde prompting hasta agentes autónomos, con un proyecto personal validado.",
};

const MODULES = [
  {
    id: "01",
    name: "PROMPT",
    title: "De Prompt a Blueprint",
    description: "Diseño de instrucciones avanzadas y scaffolding.",
  },
  {
    id: "02",
    name: "CONTEXT",
    title: "Segundo Cerebro con IA",
    description: "RAG personal, bases de conocimiento y grounding.",
  },
  {
    id: "03",
    name: "BUILD",
    title: "De Idea a App",
    description: "Vibe coding, prototipado y agentic coding.",
  },
  {
    id: "04",
    name: "AUTOMATE",
    title: "Arquitecto de Workflows",
    description: "Integración de APIs y flujos automatizados.",
  },
  {
    id: "05",
    name: "AGENT",
    title: "Agentes que se revisan",
    description: "Modelos evaluadores, loops y autonomía.",
  },
  {
    id: "06",
    name: "SHIP",
    title: "Proyecto Final",
    description: "Construcción y despliegue de tu sistema real.",
  },
];

export default function CursoModularPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-100 selection:bg-blue-500/30 selection:text-white">
      {/* Navbar requires inverse logic if it's white, but assuming Navbar handles transparency or we use it as is */}
      <div className="bg-white">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0F172A]">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] tracking-widest uppercase font-semibold font-mono">
              SYNTIQ AI BUILDER
            </span>
          </div>

          <h1 className="font-brand-display text-4xl sm:text-5xl lg:text-7xl font-light text-white tracking-tight leading-tight mb-6">
            Programa <span className="font-normal text-blue-500">Modular</span>
          </h1>

          <p className="text-xl text-slate-300 font-light leading-relaxed max-w-2xl mx-auto mb-10">
            Un recorrido de 6 etapas: de los fundamentos de prompting a 
            construir tu propio sistema inteligente y automatizado.
          </p>

          <Link
            href="/contacto?formacion=programa-modular"
            className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
          >
            Avisarme de la próxima edición
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Progression Timeline */}
      <section className="py-24 bg-slate-950 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-brand-display font-light text-white mb-4">
              La ruta de aprendizaje
            </h2>
            <p className="text-slate-400 font-light">
              Pasa de tareas simples a dirigir una fuerza laboral de agentes.
            </p>
          </div>

          <div className="relative">
            {/* Vertical Line for Desktop */}
            <div className="hidden sm:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-slate-800" />
            
            <div className="space-y-8 sm:space-y-0 relative">
              {MODULES.map((mod, idx) => (
                <div key={mod.id} className={`flex flex-col sm:flex-row items-center sm:gap-8 ${idx % 2 === 0 ? "sm:flex-row-reverse" : ""}`}>
                  
                  {/* Content Box */}
                  <div className={`flex-1 w-full sm:w-1/2 ${idx % 2 === 0 ? "sm:text-left" : "sm:text-right"}`}>
                    <div className={`p-6 bg-slate-900/80 border border-slate-800 rounded-2xl sm:mx-8 shadow-xl ${idx % 2 === 0 ? "ml-auto" : "mr-auto"}`}>
                      <span className="text-blue-500 font-mono text-sm tracking-wider block mb-2">
                        {mod.id} — {mod.name}
                      </span>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {mod.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {mod.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node */}
                  <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-slate-950 border-4 border-slate-800 z-10 shrink-0">
                    <span className="text-xs font-bold text-slate-500">{mod.id}</span>
                  </div>
                  
                  {/* Empty Spacer */}
                  <div className="hidden sm:block flex-1 w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Result Section */}
      <section className="py-24 bg-blue-900/10 border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-brand-display text-white mb-8">
            El objetivo: Tu propio sistema
          </h2>
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Proyecto Real</h4>
              <p className="text-sm text-slate-400">Aplicado directamente a tu trabajo o empresa, no ejercicios genéricos.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Acompañamiento</h4>
              <p className="text-sm text-slate-400">Sesiones en vivo y feedback directo sobre tus flujos y prompts.</p>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <CheckCircle2 className="w-6 h-6 text-emerald-400 mb-4" />
              <h4 className="text-lg font-medium text-white mb-2">Networking</h4>
              <p className="text-sm text-slate-400">Conoce a otros profesionales construyendo sistemas de IA avanzados.</p>
            </div>
          </div>
          
          <div className="mt-12">
            <Link
              href="/contacto?formacion=programa-modular"
              className="inline-flex items-center gap-2 text-blue-400 font-medium hover:text-blue-300"
            >
              Consultar detalles de la próxima cohorte
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <div className="bg-white">
        <Footer />
      </div>
    </main>
  );
}
