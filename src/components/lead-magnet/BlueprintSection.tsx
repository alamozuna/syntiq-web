"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Download,
  BookOpen,
  X,
  FileCode,
  FileText,
  Workflow,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function BlueprintSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="blueprint" className="relative py-20 sm:py-28 bg-slate-900 text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500 rounded-full blur-[140px]" />
        <div className="absolute -bottom-20 right-0 w-96 h-96 bg-indigo-500 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Copy & Microbenefits */}
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 border border-blue-700/60 text-blue-300 text-[10px] font-mono uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>RECURSO EDUCATIVO GRATUITO</span>
            </div>

            <h2 className="font-brand-display text-3xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight mb-4">
              Construye tu <br />
              <span className="italic font-normal text-blue-400">primer agente.</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-lg">
              Descarga el Blueprint gratuito y crea un flujo básico en menos de 20 minutos.
            </p>

            {/* 3 Microbeneficios */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-blue-950/80 border border-blue-800 text-blue-400 flex items-center justify-center shrink-0">
                  <FileCode className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Prompt estructurado</h4>
                  <p className="text-xs text-slate-400 font-light">
                    Plantilla de instrucciones deterministas para clasificar y extraer datos sin alucinaciones.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-indigo-950/80 border border-indigo-800 text-indigo-400 flex items-center justify-center shrink-0">
                  <Workflow className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Flujo n8n</h4>
                  <p className="text-xs text-slate-400 font-light">
                    Archivo JSON listo para importar y conectar tu correo con tu primer modelo de IA.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-950/80 border border-emerald-800 text-emerald-400 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-white">Guía paso a paso</h4>
                  <p className="text-xs text-slate-400 font-light">
                    Documento visual para configurar claves API y barandillas de supervisión.
                  </p>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setIsModalOpen(true);
              }}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm py-3.5 px-7 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Descargar Blueprint</span>
            </button>
          </div>

          {/* Right Column: Educational Product Mockup */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-md rounded-3xl bg-slate-800/80 border border-slate-700 p-6 sm:p-8 backdrop-blur-sm shadow-2xl relative">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-700">
                <span className="text-xs font-mono text-blue-400 font-medium">
                  SyntIQ Blueprint Series · v2.1
                </span>
                <span className="text-[10px] font-mono text-slate-400 bg-slate-900/60 px-2 py-0.5 rounded">
                  Descarga Gratuita
                </span>
              </div>

              {/* Visual Card Cover */}
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-[#0F172A] border border-slate-700/80 p-6 mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mb-6">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-brand-display text-2xl text-white font-light mb-1">
                  Blueprint del Agente Autónomo
                </h3>
                <p className="text-xs text-slate-400 font-light mb-4">
                  De tarea manual a flujo automatizado en 20 minutos.
                </p>
                <div className="flex flex-wrap gap-2 text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">Prompt</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">n8n JSON</span>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300">Guía PDF</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                <span>Tiempo de lectura: ~15 min</span>
                <span className="text-emerald-400">100% Práctico</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Accessible Download Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-slate-950/80 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="blueprint-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 text-slate-900 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="absolute top-5 right-5 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!isSubmitted ? (
                <>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                    <Download className="w-5 h-5" />
                  </div>

                  <h3 id="blueprint-title" className="font-brand-display text-2xl text-slate-900 font-normal mb-2">
                    Descargar Blueprint Gratuito
                  </h3>
                  <p className="text-xs text-slate-600 font-light mb-6">
                    Introduce tu email y te enviaremos el enlace directo con los prompts, el archivo n8n y la guía paso a paso.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="modal-email" className="text-xs font-semibold text-slate-700 block mb-1">
                        Email profesional
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@empresa.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full min-h-[44px] bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-xl transition-colors shadow-xs"
                    >
                      Enviar recursos a mi correo
                    </button>

                    <p className="text-[10px] text-slate-400 text-center font-light">
                      Respetamos tu privacidad. Cero spam, solo contenido formativo.
                    </p>
                  </form>
                </>
              ) : (
                <div className="py-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-3">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="font-brand-display text-2xl text-slate-900 font-normal mb-2">
                    ¡Listo para descargar!
                  </h3>
                  <p className="text-xs text-slate-600 font-light mb-6">
                    Hemos enviado el Blueprint a <strong>{email}</strong>. Revisa tu bandeja de entrada o la carpeta de promociones.
                  </p>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full min-h-[44px] bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs sm:text-sm font-medium py-2.5 px-4 rounded-xl transition-colors"
                  >
                    Entendido
                  </button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
