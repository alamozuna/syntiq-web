"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  User,
  Building2,
  CheckCircle2,
  Mail,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { formaciones } from "@/data/formaciones";

const AI_LEVELS = [
  { id: "none", label: "Nunca la he usado profesionalmente" },
  { id: "basic", label: "Uso ChatGPT para tareas básicas" },
  { id: "intermediate", label: "Ya automatizo tareas y uso custom prompts" },
  { id: "advanced", label: "Construyo workflows y agentes con IA" },
];

const TEAM_SIZES = [
  { id: "2-5", label: "2-5 personas" },
  { id: "6-15", label: "6-15 personas" },
  { id: "16-50", label: "16-50 personas" },
  { id: "50+", label: "Más de 50 personas" },
];

const INTEREST_AREAS = [
  { id: "productividad", label: "IA para productividad" },
  { id: "prompting", label: "Prompting avanzado" },
  { id: "vibecoding", label: "Vibe Coding" },
  { id: "automatizacion", label: "Automatización" },
  { id: "conocimiento", label: "Análisis documental" },
  { id: "agentes", label: "Agentes" },
  { id: "workspace", label: "Google Workspace" },
];

function ContactFormContent() {
  const searchParams = useSearchParams();
  const formacionParam = searchParams.get("formacion");
  const modalidadParam = searchParams.get("modalidad");

  const selectedCourse = formacionParam
    ? formaciones.find((f) => f.slug === formacionParam)
    : null;

  const [mode, setMode] = useState<"individual" | "empresa" | null>(
    modalidadParam === "in-company" ? "empresa" : selectedCourse ? "individual" : null
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Individual form data
  const [individualData, setIndividualData] = useState({
    name: "",
    email: "",
    phone: "",
    formacion: selectedCourse?.slug || "",
    level: "",
    message: "",
  });

  // Empresa form data
  const [empresaData, setEmpresaData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    area: "",
    objective: "",
  });

  const availableFormaciones = formaciones.filter(
    (f) => f.status !== "DRAFT"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const payload =
      mode === "individual"
        ? {
            type: "individual",
            name: individualData.name,
            email: individualData.email,
            phone: individualData.phone || null,
            formacion:
              individualData.formacion ||
              (selectedCourse ? selectedCourse.slug : null),
            formacionTitle: selectedCourse
              ? selectedCourse.title
              : availableFormaciones.find(
                  (f) => f.slug === individualData.formacion
                )?.title || null,
            level:
              AI_LEVELS.find((l) => l.id === individualData.level)?.label ||
              null,
            message: individualData.message || null,
            origin: window.location.href,
          }
        : {
            type: "empresa",
            name: empresaData.name,
            email: empresaData.email,
            company: empresaData.company,
            teamSize:
              TEAM_SIZES.find((t) => t.id === empresaData.teamSize)?.label ||
              null,
            area:
              INTEREST_AREAS.find((a) => a.id === empresaData.area)?.label ||
              null,
            objective: empresaData.objective || null,
            origin: window.location.href,
          };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setIsSuccess(true);
    } catch {
      setSubmitError(
        "Hubo un problema al enviar tu solicitud. Inténtalo nuevamente o escríbenos a syntiqgroup@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Pre-selected course banner */}
        {selectedCourse && !isSuccess && (
          <div className="mb-8 p-4 rounded-2xl bg-blue-50 border border-blue-200/80">
            <p className="text-sm text-blue-700 font-medium">
              Estás interesado en:{" "}
              <span className="font-semibold">{selectedCourse.title}</span>
            </p>
          </div>
        )}

        <AnimatePresence mode="wait">
          {/* Mode Selector */}
          {!mode && !isSuccess && (
            <motion.div
              key="mode-select"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-6"
            >
              <div className="text-center mb-10">
                <h2 className="font-brand-display text-3xl sm:text-4xl text-[#0F172A] font-light mb-3">
                  ¿Cómo podemos ayudarte?
                </h2>
                <p className="text-slate-600 font-light">
                  Selecciona una opción para personalizar tu formulario.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button
                  onClick={() => setMode("individual")}
                  className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-slate-100 hover:border-blue-300 hover:bg-blue-50/30 transition-all duration-200 group"
                >
                  <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <User className="w-7 h-7" />
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-slate-900 block mb-1">
                      Para mí
                    </span>
                    <span className="text-xs text-slate-500 font-light">
                      Quiero aprender a construir con IA
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setMode("empresa")}
                  className="flex flex-col items-center gap-4 p-8 rounded-2xl border-2 border-slate-100 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all duration-200 group"
                >
                  <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Building2 className="w-7 h-7" />
                  </div>
                  <div className="text-center">
                    <span className="text-lg font-semibold text-slate-900 block mb-1">
                      Para mi equipo
                    </span>
                    <span className="text-xs text-slate-500 font-light">
                      Necesito formar a varias personas
                    </span>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {/* Individual Form */}
          {mode === "individual" && !isSuccess && (
            <motion.div
              key="individual"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-elevation-2 border border-slate-200 relative overflow-hidden">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">
                    Cuéntanos sobre ti
                  </h3>
                  <p className="text-slate-500 font-light text-sm">
                    Completa los datos para que podamos orientarte hacia la formación adecuada.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="ind-name" className="text-sm font-medium text-slate-700">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="ind-name"
                        required
                        value={individualData.name}
                        onChange={(e) =>
                          setIndividualData({ ...individualData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="ind-email" className="text-sm font-medium text-slate-700">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="ind-email"
                        required
                        value={individualData.email}
                        onChange={(e) =>
                          setIndividualData({ ...individualData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="ind-phone" className="text-sm font-medium text-slate-700">
                      WhatsApp / Teléfono{" "}
                      <span className="text-slate-400 font-light">(Opcional)</span>
                    </label>
                    <input
                      type="tel"
                      id="ind-phone"
                      value={individualData.phone}
                      onChange={(e) =>
                        setIndividualData({ ...individualData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      placeholder="+34 600 000 000"
                    />
                  </div>

                  {/* Formación selector */}
                  {!selectedCourse && (
                    <div className="space-y-1.5">
                      <label htmlFor="ind-formacion" className="text-sm font-medium text-slate-700">
                        Formación de interés
                      </label>
                      <select
                        id="ind-formacion"
                        value={individualData.formacion}
                        onChange={(e) =>
                          setIndividualData({ ...individualData, formacion: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none"
                      >
                        <option value="">Selecciona una formación (opcional)</option>
                        {availableFormaciones.map((f) => (
                          <option key={f.id} value={f.slug}>
                            {f.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* AI Level */}
                  <div className="space-y-1.5">
                    <label htmlFor="ind-level" className="text-sm font-medium text-slate-700">
                      Nivel actual con IA
                    </label>
                    <select
                      id="ind-level"
                      value={individualData.level}
                      onChange={(e) =>
                        setIndividualData({ ...individualData, level: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none"
                    >
                      <option value="">Selecciona tu nivel (opcional)</option>
                      {AI_LEVELS.map((l) => (
                        <option key={l.id} value={l.id}>
                          {l.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="ind-message" className="text-sm font-medium text-slate-700">
                      ¿Qué te gustaría construir?{" "}
                      <span className="text-slate-400 font-light">(Opcional)</span>
                    </label>
                    <textarea
                      id="ind-message"
                      rows={3}
                      value={individualData.message}
                      onChange={(e) =>
                        setIndividualData({ ...individualData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="Cuéntanos tu objetivo o proyecto..."
                    />
                  </div>

                  {/* Error */}
                  {submitError && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <p>{submitError}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3.5 px-8 rounded-full transition-all shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Enviar interés</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setMode(null)}
                      disabled={isSubmitting}
                      className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      ← Cambiar tipo
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 font-light mt-2">
                    Tus datos están seguros. No compartimos tu email con terceros.
                  </p>
                </form>
              </div>
            </motion.div>
          )}

          {/* Empresa Form */}
          {mode === "empresa" && !isSuccess && (
            <motion.div
              key="empresa"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-elevation-2 border border-slate-200 relative overflow-hidden">
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-[#0F172A] mb-2">
                    Formación para tu equipo
                  </h3>
                  <p className="text-slate-500 font-light text-sm">
                    Cuéntanos sobre tu empresa y diseñaremos una propuesta a medida.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="emp-name" className="text-sm font-medium text-slate-700">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="emp-name"
                        required
                        value={empresaData.name}
                        onChange={(e) =>
                          setEmpresaData({ ...empresaData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="emp-email" className="text-sm font-medium text-slate-700">
                        Email corporativo *
                      </label>
                      <input
                        type="email"
                        id="emp-email"
                        required
                        value={empresaData.email}
                        onChange={(e) =>
                          setEmpresaData({ ...empresaData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="nombre@empresa.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="emp-company" className="text-sm font-medium text-slate-700">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      id="emp-company"
                      required
                      value={empresaData.company}
                      onChange={(e) =>
                        setEmpresaData({ ...empresaData, company: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      placeholder="Nombre de la empresa"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="emp-team" className="text-sm font-medium text-slate-700">
                        Tamaño del equipo
                      </label>
                      <select
                        id="emp-team"
                        value={empresaData.teamSize}
                        onChange={(e) =>
                          setEmpresaData({ ...empresaData, teamSize: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none"
                      >
                        <option value="">Seleccionar</option>
                        {TEAM_SIZES.map((t) => (
                          <option key={t.id} value={t.id}>
                            {t.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="emp-area" className="text-sm font-medium text-slate-700">
                        Área de interés
                      </label>
                      <select
                        id="emp-area"
                        value={empresaData.area}
                        onChange={(e) =>
                          setEmpresaData({ ...empresaData, area: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all appearance-none"
                      >
                        <option value="">Seleccionar</option>
                        {INTEREST_AREAS.map((a) => (
                          <option key={a.id} value={a.id}>
                            {a.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="emp-objective" className="text-sm font-medium text-slate-700">
                      Objetivo{" "}
                      <span className="text-slate-400 font-light">(Opcional)</span>
                    </label>
                    <textarea
                      id="emp-objective"
                      rows={3}
                      value={empresaData.objective}
                      onChange={(e) =>
                        setEmpresaData({ ...empresaData, objective: e.target.value })
                      }
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="¿Qué problema quieres resolver o qué capacidades quieres desarrollar?"
                    />
                  </div>

                  {/* Error */}
                  {submitError && (
                    <div className="flex items-start gap-3 p-4 rounded-xl bg-red-50 border border-red-200 text-sm text-red-700">
                      <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      <p>{submitError}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto min-h-[44px] inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3.5 px-8 rounded-full transition-all shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Enviando...</span>
                        </>
                      ) : (
                        <>
                          <span>Hablar sobre formación para mi equipo</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => setMode(null)}
                      disabled={isSubmitting}
                      className="text-sm text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      ← Cambiar tipo
                    </button>
                  </div>

                  <p className="text-[10px] text-slate-400 font-light mt-2">
                    Tus datos están seguros. No compartimos información con terceros.
                  </p>
                </form>
              </div>
            </motion.div>
          )}

          {/* Success State */}
          {isSuccess && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-emerald-500" />
              </div>
              <h3 className="font-brand-display text-3xl text-slate-900 mb-4">
                Recibimos tu solicitud.
              </h3>
              <p className="text-slate-600 font-light max-w-md mx-auto mb-8">
                Nos pondremos en contacto contigo usando los datos que proporcionaste.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-500">
                <Mail className="w-4 h-4" />
                <span>Revisa tu bandeja de entrada</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default function DiagnosticForm() {
  return (
    <Suspense fallback={<div className="py-24 text-center">Cargando...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
