"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  User,
  Building2,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Mail,
  GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";

// Formularios adaptados a la cualificación de alumnos y prospectos B2B
const STUDENT_PROFILES = [
  { id: "freelance", label: "Profesional Independiente", icon: User },
  { id: "team", label: "Equipo Empresarial", icon: Building2 },
  { id: "university", label: "Universidad / Institución", icon: GraduationCap },
  { id: "company", label: "Empresa (In-Company)", icon: Building2 },
];

const LEARNING_NEEDS = [
  { id: "prompting", label: "Prompting avanzado y comunicación con LLMs" },
  { id: "automation", label: "Automatización con n8n y herramientas No-Code" },
  { id: "vibecoding", label: "Vibe Coding (Programar sin saber código)" },
  { id: "full_team", label: "Formación completa para mi equipo/empresa" },
];

const AI_LEVEL = [
  { id: "none", label: "Nunca la he usado profesionalmente" },
  { id: "basic", label: "Uso ChatGPT para tareas básicas (textos, correos)" },
  { id: "intermediate", label: "Ya automatizo tareas y uso custom prompts" },
  { id: "teacher", label: "Quiero enseñar/liderar IA en mi empresa" },
];

export default function DiagnosticForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    profile: "",
    need: "",
    aiLevel: "",
    name: "",
    email: "",
    company: "",
  });

  const handleSelection = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Auto-advance for multiple choice steps
    if (step < 4) {
      setTimeout(() => setStep(step + 1), 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <section className="relative py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <span className="brand-label text-blue-600 mb-4 block">
            CONTACTO & ADMISIÓN
          </span>
          <h2 className="font-brand-display text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] font-light tracking-tight leading-tight mb-4">
            Reserva tu plaza o solicita una propuesta formativa
          </h2>
          <p className="text-slate-600 font-light text-lg">
            Completa este breve cuestionario para entender tu nivel actual y enviarte la opción que mejor se adapte a ti.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] p-6 sm:p-10 shadow-elevation-2 border border-slate-200 relative overflow-hidden">
          
          {/* Progress Bar */}
          {!isSuccess && (
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-slate-100">
              <div 
                className="h-full bg-blue-600 transition-all duration-500 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              />
            </div>
          )}

          <AnimatePresence mode="wait">
            {/* STEP 1: PERFIL */}
            {step === 1 && !isSuccess && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="mb-8">
                  <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">Paso 1 de 4</span>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#0F172A] mt-2">¿Cuál es tu perfil?</h3>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {STUDENT_PROFILES.map((profile) => {
                    const Icon = profile.icon;
                    const isSelected = formData.profile === profile.id;
                    return (
                      <button
                        key={profile.id}
                        onClick={() => handleSelection("profile", profile.id)}
                        className={cn(
                          "flex items-center gap-4 p-4 sm:p-6 rounded-2xl border-2 transition-all duration-200 text-left group",
                          isSelected 
                            ? "border-blue-600 bg-blue-50/50" 
                            : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"
                        )}
                      >
                        <div className={cn(
                          "p-3 rounded-xl transition-colors",
                          isSelected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600"
                        )}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className={cn(
                          "font-medium",
                          isSelected ? "text-blue-900" : "text-slate-700"
                        )}>
                          {profile.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* STEP 2: NECESIDAD FORMATIVA */}
            {step === 2 && !isSuccess && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="mb-8">
                  <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">Paso 2 de 4</span>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#0F172A] mt-2">¿Qué necesitas aprender principalmente?</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {LEARNING_NEEDS.map((need) => {
                    const isSelected = formData.need === need.id;
                    return (
                      <button
                        key={need.id}
                        onClick={() => handleSelection("need", need.id)}
                        className={cn(
                          "flex items-center justify-between p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 text-left",
                          isSelected 
                            ? "border-blue-600 bg-blue-50/50" 
                            : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"
                        )}
                      >
                        <span className={cn(
                          "font-medium",
                          isSelected ? "text-blue-900" : "text-slate-700"
                        )}>
                          {need.label}
                        </span>
                        <div className={cn(
                          "w-5 h-5 rounded-full border flex items-center justify-center shrink-0",
                          isSelected ? "border-blue-600 bg-blue-600" : "border-slate-300"
                        )}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="pt-4">
                  <button onClick={() => setStep(1)} className="text-sm text-slate-500 hover:text-slate-800 transition-colors">
                    &larr; Volver
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: NIVEL ACTUAL IA */}
            {step === 3 && !isSuccess && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="mb-8">
                  <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">Paso 3 de 4</span>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#0F172A] mt-2">¿Cuál es tu nivel actual con Inteligencia Artificial?</h3>
                </div>
                
                <div className="grid grid-cols-1 gap-3">
                  {AI_LEVEL.map((level) => {
                    const isSelected = formData.aiLevel === level.id;
                    return (
                      <button
                        key={level.id}
                        onClick={() => handleSelection("aiLevel", level.id)}
                        className={cn(
                          "flex items-center justify-between p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 text-left",
                          isSelected 
                            ? "border-blue-600 bg-blue-50/50" 
                            : "border-slate-100 hover:border-blue-200 hover:bg-slate-50"
                        )}
                      >
                        <span className={cn(
                          "font-medium",
                          isSelected ? "text-blue-900" : "text-slate-700"
                        )}>
                          {level.label}
                        </span>
                        <div className={cn(
                          "w-5 h-5 rounded-full border flex items-center justify-center shrink-0",
                          isSelected ? "border-blue-600 bg-blue-600" : "border-slate-300"
                        )}>
                          {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <div className="pt-4">
                  <button onClick={() => setStep(2)} className="text-sm text-slate-500 hover:text-slate-800 transition-colors">
                    &larr; Volver
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: DATOS DE CONTACTO */}
            {step === 4 && !isSuccess && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="mb-8">
                  <span className="text-xs font-mono text-slate-400 font-semibold tracking-wider uppercase">Paso 4 de 4</span>
                  <h3 className="text-xl sm:text-2xl font-medium text-[#0F172A] mt-2">Último paso. ¿Dónde te enviamos la propuesta formativa?</h3>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-medium text-slate-700">Nombre completo</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="Ej: Laura Gómez"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-medium text-slate-700">Email (Preferible profesional)</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                        placeholder="laura@empresa.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700">
                      Empresa / Proyecto <span className="text-slate-400 font-light">(Opcional si eres particular)</span>
                    </label>
                    <input 
                      type="text" 
                      id="company"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all"
                      placeholder="Tu empresa o marca personal"
                    />
                  </div>

                  <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3.5 px-8 rounded-xl transition-all shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Procesando...</span>
                        </>
                      ) : (
                        <>
                          <span>Solicitar Propuesta</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                    
                    <button 
                      type="button" 
                      onClick={() => setStep(3)} 
                      disabled={isSubmitting}
                      className="w-full sm:w-auto text-sm text-slate-500 hover:text-slate-800 transition-colors py-2"
                    >
                      Volver atrás
                    </button>
                  </div>
                  <p className="text-[10px] text-slate-400 font-light mt-2 text-center sm:text-left">
                    Tus datos están seguros. No compartimos tu email con terceros.
                  </p>
                </form>
              </motion.div>
            )}

            {/* SUCCESS STATE */}
            {isSuccess && (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 sm:py-16"
              >
                <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                </div>
                <h3 className="font-brand-display text-3xl text-slate-900 mb-4">
                  ¡Solicitud recibida con éxito!
                </h3>
                <p className="text-slate-600 font-light max-w-md mx-auto mb-8">
                  Hemos analizado tu perfil (<b>{formData.profile === 'freelance' ? 'Profesional Independiente' : formData.profile === 'team' ? 'Equipo Empresarial' : formData.profile === 'university' ? 'Universidad' : 'Empresa'}</b>). En las próximas 24 horas te enviaremos una propuesta formativa personalizada a <b>{formData.email}</b>.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-500">
                  <Mail className="w-4 h-4" />
                  <span>Revisa tu bandeja de entrada o spam</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
