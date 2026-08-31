"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileJson, FileText, CheckCircle2, ChevronRight, BookOpen, X } from "lucide-react";

export default function BlueprintSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="blueprint" className="relative py-24 bg-[#0F172A] overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-mesh-dark opacity-30 mix-blend-screen" />
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-900/20 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-900/40 border border-blue-800/60 text-blue-300 text-[10px] font-mono tracking-widest uppercase mb-6">
              <BookOpen className="w-3.5 h-3.5" />
              <span>RECURSO EDUCATIVO GRATUITO</span>
            </div>
            
            <h2 className="font-brand-display text-4xl sm:text-5xl lg:text-6xl text-white font-light tracking-tight leading-[1.1] mb-6">
              El Blueprint del <br />
              <span className="font-normal italic text-blue-400">Empleado de IA</span>
            </h2>
            
            <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
              Tu primer agente autónomo en 15 minutos. Descarga nuestro kit de inicio práctico y comienza a aprender a automatizar sin tocar código complejo.
            </p>
            
            <ul className="space-y-4 mb-10">
              {[
                "Kit de Prompts Estructurados (Copy/Paste)",
                "Plantilla de Flujo n8n (Importable)",
                "Guía Paso a Paso en PDF (15 min de lectura)",
                "Plantilla de Matriz de Tareas (Notion)"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="font-light">{item}</span>
                </li>
              ))}
            </ul>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm sm:text-base px-7 py-4 rounded-full transition-all duration-300 shadow-[0_0_20px_-5px_rgba(59,130,246,0.5)] hover:shadow-[0_0_25px_-5px_rgba(59,130,246,0.7)]"
            >
              <Download className="w-5 h-5" />
              <span>Descargar Kit de Inicio Gratuito</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Visualizer */}
          <div className="relative">
            {/* Ambient glow behind card */}
            <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
            
            <div className="relative bg-[#1E293B]/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-6 sm:p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                  </div>
                  <span className="text-xs text-slate-400 font-mono">Kit_Inicio_SyntIQ.zip</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono uppercase">2.4 MB</span>
              </div>
              
              <div className="space-y-4">
                {/* File Item 1 */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="p-2.5 rounded-lg bg-blue-500/20 text-blue-400 shrink-0">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-200 mb-1">01_Guia_Paso_a_Paso.pdf</h4>
                    <p className="text-xs text-slate-500 font-light">Tutorial ilustrado para montar tu primer flujo en n8n.</p>
                  </div>
                </div>
                
                {/* File Item 2 */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="p-2.5 rounded-lg bg-indigo-500/20 text-indigo-400 shrink-0">
                    <FileJson className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-200 mb-1">02_Prompts_Maestros.md</h4>
                    <p className="text-xs text-slate-500 font-light">Librería de system prompts para copiar y pegar.</p>
                  </div>
                </div>
                
                {/* File Item 3 */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:bg-slate-800 transition-colors">
                  <div className="p-2.5 rounded-lg bg-emerald-500/20 text-emerald-400 shrink-0">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-slate-200 mb-1">03_Flujo_n8n_Importable.json</h4>
                    <p className="text-xs text-slate-500 font-light">El código fuente visual de tu primer asistente (drag & drop).</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Basic Download Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-8 shadow-2xl z-10"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute right-6 top-6 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              
              <h3 className="text-2xl font-brand-display text-slate-900 mb-2">
                Descarga el Kit de Inicio
              </h3>
              <p className="text-sm text-slate-600 mb-6 font-light">
                Te enviaremos los archivos y el acceso a la masterclass gratuita en vídeo directamente a tu correo.
              </p>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="sr-only" htmlFor="blueprint-name">Nombre</label>
                  <input 
                    type="text" 
                    id="blueprint-name"
                    placeholder="Tu nombre completo"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm"
                    required
                  />
                </div>
                <div>
                  <label className="sr-only" htmlFor="blueprint-email">Email Profesional</label>
                  <input 
                    type="email" 
                    id="blueprint-email"
                    placeholder="Tu mejor correo"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all text-sm"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 rounded-xl transition-colors shadow-sm"
                >
                  Enviar a mi correo
                </button>
                
                <p className="text-[10px] text-center text-slate-400 pt-2 font-light">
                  Al descargar aceptas nuestra política de privacidad. Cero spam, 100% valor.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Quick fallback for Database icon missing in import
function Database(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}
