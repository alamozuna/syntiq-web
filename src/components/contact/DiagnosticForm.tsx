"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Building2,
  Users,
  AlertTriangle,
  Send,
  Shield,
  Calendar,
  MessageSquare,
} from "lucide-react";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";

export default function DiagnosticForm() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    companyType: "PyME / Despacho Profesional",
    teamSize: "5 - 20 personas",
    primaryBottleneck: "Fuga de leads fuera de horario y citas no atendidas",
    currentTools: "WhatsApp + Correo electrónico + Hojas de cálculo",
    fullName: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
        });
      } catch (err) {
        // Confetti fallback
      }
    }, 700);
  };

  return (
    <section id="diagnostico" className="relative py-24 sm:py-32 bg-[#02050e] border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="brand-label text-blue-400">
            07 — DIAGNÓSTICO OPERATIVO & CONTACTO
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl lg:text-6xl text-white font-light mt-3 leading-tight">
            Descubre en 2 minutos dónde se fuga tu{" "}
            <span className="italic text-blue-500 font-normal">rentabilidad operativa</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light mt-4 leading-relaxed">
            Completa la evaluación técnica para recibir un mapa personalizado de automatización
            agéntica y agendar una sesión estratégica con nuestros ingenieros.
          </p>
        </div>

        {/* Multi-Step Card Form */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl p-6 sm:p-10 lg:p-12 shadow-2xl relative">
          {!isSubmitted ? (
            <div>
              {/* Progress Steps Header */}
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-blue-600/30 border border-blue-500/50 flex items-center justify-center font-mono text-xs text-blue-400 font-bold">
                    0{step}
                  </span>
                  <div>
                    <span className="text-xs font-mono text-slate-400 block">
                      PASO {step} DE 4
                    </span>
                    <span className="text-xs font-semibold text-slate-200">
                      {step === 1 && "Perfil de tu Empresa"}
                      {step === 2 && "Principal Cuello de Botella"}
                      {step === 3 && "Ecosistema Actual"}
                      {step === 4 && "Información de Contacto"}
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5">
                  {[1, 2, 3, 4].map((s) => (
                    <div
                      key={s}
                      className={cn(
                        "h-1.5 rounded-full transition-all duration-300",
                        s === step
                          ? "w-8 bg-blue-500"
                          : s < step
                          ? "w-4 bg-emerald-500"
                          : "w-4 bg-slate-800"
                      )}
                    />
                  ))}
                </div>
              </div>

              {/* Form Steps */}
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="text-sm font-semibold text-white block mb-3">
                        ¿Qué tipo de organización o negocio operas?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "PyME / Despacho Profesional",
                          "Clínica Médica / Dental / Estética",
                          "Planta de Manufactura / Industria",
                          "Empresa Tecnológica / B2B SaaS",
                          "Servicios Financieros / Legal",
                          "Otra actividad corporativa",
                        ].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, companyType: opt })}
                            className={cn(
                              "p-3.5 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer",
                              formData.companyType === opt
                                ? "bg-blue-600/20 border-blue-500 text-white shadow-glow-sm"
                                : "bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700"
                            )}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="text-sm font-semibold text-white block mb-3">
                        Tamaño aproximado del equipo operativo
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {["1 - 5 personas", "6 - 20 personas", "21 - 80 personas", "+80 personas"].map(
                          (opt) => (
                            <button
                              key={opt}
                              type="button"
                              onClick={() => setFormData({ ...formData, teamSize: opt })}
                              className={cn(
                                "p-3 rounded-xl border text-center text-xs font-mono transition-all cursor-pointer",
                                formData.teamSize === opt
                                  ? "bg-blue-600/20 border-blue-500 text-blue-300"
                                  : "bg-slate-950/70 border-slate-800 text-slate-400 hover:border-slate-700"
                              )}
                            >
                              {opt}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="text-sm font-semibold text-white block mb-3">
                        ¿Cuál es el cuello de botella que más limita tu crecimiento actualmente?
                      </label>
                      <div className="grid grid-cols-1 gap-3">
                        {[
                          "Fuga de leads fuera de horario y citas no atendidas (No-Show)",
                          "Personal saturado copiando datos entre hojas de cálculo y emails",
                          "Procesos lentos de validación documental o cumplimiento normativo",
                          "Deuda tecnológica y falta de automatización entre nuestro ERP y CRM",
                          "Alto costo de contratación para poder atender a más clientes",
                        ].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, primaryBottleneck: opt })}
                            className={cn(
                              "p-4 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-between",
                              formData.primaryBottleneck === opt
                                ? "bg-blue-600/20 border-blue-500 text-white shadow-glow-sm"
                                : "bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700"
                            )}
                          >
                            <span>{opt}</span>
                            {formData.primaryBottleneck === opt && (
                              <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 ml-2" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-6"
                  >
                    <div>
                      <label className="text-sm font-semibold text-white block mb-3">
                        ¿Qué herramientas forman el núcleo de tu operativa hoy?
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {[
                          "WhatsApp + Correo electrónico + Hojas de cálculo",
                          "CRM estructurado (HubSpot / Salesforce / Zoho)",
                          "ERP corporativo (SAP / Sage / Odoo / Software a medida)",
                          "Herramientas no-code previas (Make / Zapier / n8n básico)",
                        ].map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, currentTools: opt })}
                            className={cn(
                              "p-4 rounded-xl border text-left text-xs sm:text-sm transition-all cursor-pointer",
                              formData.currentTools === opt
                                ? "bg-blue-600/20 border-blue-500 text-white shadow-glow-sm"
                                : "bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700"
                            )}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-300 block mb-1.5 font-medium">
                          Nombre y Apellidos *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Ej. Carlos Mendoza"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-slate-300 block mb-1.5 font-medium">
                          Correo Corporativo *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="carlos@tuempresa.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-slate-300 block mb-1.5 font-medium">
                          Teléfono / WhatsApp de Contacto
                        </label>
                        <input
                          type="tel"
                          placeholder="+34 600 000 000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>

                      <div>
                        <label className="text-xs text-slate-300 block mb-1.5 font-medium">
                          Detalle o reto específico (opcional)
                        </label>
                        <input
                          type="text"
                          placeholder="Ej. Queremos automatizar la confirmación de citas"
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between pt-8 mt-6 border-t border-slate-800">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Atrás</span>
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-glow-sm cursor-pointer"
                  >
                    <span>Siguiente Paso</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting || !formData.fullName || !formData.email}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-glow-md disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Analizando diagnóstico...</span>
                    ) : (
                      <>
                        <span>Enviar y Solicitar Diagnóstico</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          ) : (
            /* Submission Success State */
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div className="max-w-md mx-auto space-y-2">
                <span className="brand-label text-blue-400 text-xs">
                  DIAGNÓSTICO REGISTRADO CON ÉXITO
                </span>
                <h3 className="font-brand-display text-3xl text-white">
                  ¡Gracias, {formData.fullName}!
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Nuestro equipo de ingeniería y estrategia ha recibido los detalles de tu empresa (
                  <strong className="text-blue-400">{formData.companyType}</strong>). En menos de 24
                  horas te contactaremos con una propuesta preliminar de arquitectura de agentes.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 max-w-sm mx-auto text-left font-mono text-[11px] space-y-1 text-slate-300">
                <div>
                  <span className="text-slate-400">Cuello de Botella:</span> {formData.primaryBottleneck}
                </div>
                <div>
                  <span className="text-slate-400">Equipo:</span> {formData.teamSize}
                </div>
                <div>
                  <span className="text-slate-400">Canal de Contacto:</span> {formData.email}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                }}
                className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-mono border border-slate-800"
              >
                Realizar otra consulta
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
