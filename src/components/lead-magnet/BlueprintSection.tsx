"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Download,
  CheckCircle2,
  Sparkles,
  ArrowRight,
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
    <section className="relative py-20 sm:py-28 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-8 sm:p-12 lg:p-16 overflow-hidden shadow-elevation-3">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 blur-[130px] rounded-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Info Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900/60 border border-blue-400/40 text-blue-300 text-xs font-mono">
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

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-light">
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
            <div className="lg:col-span-5 bg-white text-slate-900 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-5 text-center shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mx-auto">
                <FileText className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[#0F172A]">
                  Acceso Inmediato al Blueprint
                </h3>
                <p className="text-xs text-slate-500 mt-1 font-light">
                  100% Gratuito para directores, operaciones y líderes tecnológicos.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-3.5 rounded-2xl transition-all shadow-sm hover:shadow-md cursor-pointer"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5"
            >
              <button
                type="button"
                onClick={() => {
                  setModalOpen(false);
                  setSubmitted(false);
                }}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100"
                aria-label="Cerrar modal"
              >
                <X className="w-5 h-5" />
              </button>

              {!submitted ? (
                <>
                  <div className="text-left space-y-2">
                    <span className="brand-label text-blue-600 text-[10px] font-semibold">
                      DESCARGA DIRECTA DE MATERIAL TÉCNICO
                    </span>
                    <h3 className="font-brand-display text-2xl text-[#0F172A] font-normal">
                      Blueprint de Automatización Agéntica
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed font-light">
                      Introduce tu correo corporativo para recibir los esquemas de n8n, la librería
                      de prompts técnicos y el framework de gobernanza de SyntIQ.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs text-slate-700 block mb-1.5 font-medium">
                        Correo Electrónico Corporativo
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tu.nombre@empresa.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-3.5 rounded-xl transition-all shadow-sm cursor-pointer disabled:opacity-50"
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
                  <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-brand-display text-2xl text-[#0F172A]">
                    ¡Blueprint Despachado con Éxito!
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">
                    Hemos enviado los archivos JSON de n8n y la documentación de arquitectura a{" "}
                    <strong className="text-blue-600">{email}</strong>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setModalOpen(false);
                      setSubmitted(false);
                      setEmail("");
                    }}
                    className="mt-2 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-mono border border-slate-300"
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
