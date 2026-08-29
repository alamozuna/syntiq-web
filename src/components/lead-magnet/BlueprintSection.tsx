"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Download,
  CheckCircle2,
  Sparkles,
  Lock,
  ArrowRight,
  Workflow,
  Cpu,
  Layers,
  X,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function BlueprintSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 600);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-[#030712] border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-950/40 via-slate-900/60 to-slate-950/80 border border-blue-500/30 p-8 sm:p-12 lg:p-16 overflow-hidden shadow-glow-sm">
          {/* Subtle background blur */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Info Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/40 border border-blue-400/30 text-blue-300 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>RECURSO DE ACCIÓN DIRECTA (LEAD MAGNET B2B)</span>
              </div>

              <h2 className="font-brand-display text-3xl sm:text-5xl text-white font-light leading-tight">
                El Blueprint Maestro de{" "}
                <span className="italic text-blue-400 font-normal">
                  Arquitectura de Agentes con n8n
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
                Descarga la guía técnica y los esquemas JSON de importación que utilizamos en
                SyntIQ para construir sistemas de enrutamiento de leads, gestión de inbox y triaje
                automatizado en menos de 20 minutos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Flujos JSON importables para n8n</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Prompts anti-alucinación &quot;Reject Input&quot;</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Matriz de contención de costes de tokens</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Guía de gobernanza Human-in-the-Loop</span>
                </div>
              </div>
            </div>

            {/* Right Card / Modal Trigger (5 cols) */}
            <div className="lg:col-span-5 bg-slate-950/90 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5 text-center shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mx-auto">
                <FileText className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Acceso Inmediato al Blueprint
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  100% Gratuito para directores, operaciones y líderes tecnológicos.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-3.5 rounded-xl transition-all shadow-glow-sm hover:shadow-glow-md cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Descargar Blueprint + Flujos JSON</span>
              </button>

              <span className="text-[11px] font-mono text-slate-400 block">
                Cero spam · Acceso instantáneo a la documentación técnica
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Download Modal Popup */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-slate-950 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5"
            >
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                  setSubmitted(false);
                }}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <>
                  <div className="text-left space-y-2">
                    <span className="brand-label text-blue-400 text-[10px]">
                      DESCARGA DIRECTA DE MATERIAL TÉCNICO
                    </span>
                    <h3 className="font-brand-display text-2xl text-white font-normal">
                      Blueprint de Automatización Agéntica
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Introduce tu correo corporativo para recibir los esquemas de n8n, la librería
                      de prompts técnicos y el framework de gobernanza de SyntIQ.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs text-slate-300 block mb-1.5 font-medium">
                        Correo Electrónico Corporativo
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu.nombre@empresa.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm py-3.5 rounded-xl transition-all shadow-glow-sm cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Generando enlace de descarga...</span>
                      ) : (
                        <>
                          <span>Descargar Material Completo</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-brand-display text-2xl text-white">
                    ¡Blueprint Despachado con Éxito!
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Hemos enviado los archivos JSON de n8n y la documentación de arquitectura a{" "}
                    <strong className="text-blue-400">{email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setModalOpen(false);
                      setSubmitted(false);
                      setEmail("");
                    }}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 text-xs font-mono border border-slate-800"
                  >
                    Cerrar Ventana
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
