"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import JsonLd from "@/components/seo/JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const DEFAULT_FAQS: FaqItem[] = [
  {
    question: "¿Cómo garantiza SyntIQ cero alucinaciones en los agentes de producción?",
    answer:
      "Aplicamos una estricta política de 'Human-in-the-Loop' (HITL) combinada con arquitecturas RAG (Retrieval-Augmented Generation) sobre bases vectoriales y prompts de rechazo estricto ('Reject Input'). Ningún agente toma decisiones de alto riesgo sin reglas de gobernanza validadas y supervisión humana de logs.",
    category: "Seguridad & Gobernanza",
  },
  {
    question: "¿Cuánto tiempo toma el despliegue e integración de un sistema?",
    answer:
      "El Motor Productizado para PyMEs y despachos se despliega entre 7 y 14 días (incluyendo calificación de leads en WhatsApp, sincronización CRM y calendario). Para proyectos del Motor Consultivo Enterprise con integración ERP y control estadístico en planta, los proyectos se estructuran por fases de 4 a 12 semanas.",
    category: "Tiempos & Metodología",
  },
  {
    question: "¿Necesitamos cambiar nuestro software de gestión o ERP actual?",
    answer:
      "No. La infraestructura de SyntIQ se conecta como una capa inteligente sobre tu stack existente: orquestamos mediante n8n conectado a tus herramientas cotidianas (WhatsApp Cloud API, Gmail/Outlook, CRMs como Salesforce/HubSpot, ERPs como SAP u Odoo, y bases de datos PostgreSQL/pgvector).",
    category: "Integraciones",
  },
  {
    question: "¿Cómo protegen la propiedad intelectual y los datos sensibles de nuestros clientes?",
    answer:
      "Cumplimos con normativas internacionales de protección de datos (RGPD / LOPD) y estándares de calidad (ISO 13485 / FDA). Todo el flujo incluye anonimización previa de Información de Identificación Personal (PII), cifrado de extremo a extremo y acuerdos de confidencialidad inexpugnables. Tus datos nunca se utilizan para reentrenar modelos públicos.",
    category: "Seguridad & Gobernanza",
  },
  {
    question: "¿Qué diferencia a los agentes de SyntIQ de un chatbot convencional?",
    answer:
      "Un chatbot simple se limita a responder árboles de decisión fijos o texto predefinido. Los agentes autónomos de SyntIQ razonan con modelos de frontera (Claude 3.5 Sonnet, GPT-4o), disponen de memoria contextual a largo plazo y ejecutan acciones transaccionales en tiempo real: verificar disponibilidad de inventario, cobrar señas, actualizar tratos en CRM y agendar citas automáticamente 24/7.",
    category: "Tecnología",
  },
  {
    question: "¿Cómo se mide el retorno de inversión (ROI) tras la implementación?",
    answer:
      "Auditamos el impacto mediante métricas financieras concretas: reducción del porcentaje de no-shows (-82%), tiempo de respuesta a prospectos (<30 segundos), horas recuperadas en tareas administrativas repetitivas (promedio de 180+ horas al mes por equipo) y rescate del lucro cesante nocturno y de fin de semana.",
    category: "Rentabilidad",
  },
];

interface FaqSectionProps {
  faqs?: FaqItem[];
  title?: string;
  subtitle?: string;
  badge?: string;
  className?: string;
}

export default function FaqSection({
  faqs = DEFAULT_FAQS,
  title = "Preguntas Frecuentes sobre la Implementación de IA",
  subtitle = "Resolvemos las dudas técnicas, operativas y de seguridad más comunes de directores y líderes de tecnología.",
  badge = "08 — PREGUNTAS FRECUENTES & RESPUESTAS TÉCNICAS",
  className = "",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className={cn("relative py-20 sm:py-28 bg-white border-t border-slate-200", className)}>
      <JsonLd data={faqSchemaData} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="brand-label text-[10px] tracking-widest uppercase">
              {badge}
            </span>
          </div>

          <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light mt-2 leading-tight">
            {title}
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-light mt-4 leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-answer-${index}`;
            const buttonId = `faq-question-${index}`;

            return (
              <div
                key={faq.question}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "bg-blue-50/40 border-blue-300 shadow-sm"
                    : "bg-white border-slate-200 hover:border-slate-300"
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl"
                  >
                    <span className="flex items-center gap-3 pr-4">
                      <HelpCircle className={cn(
                        "w-5 h-5 shrink-0 transition-colors",
                        isOpen ? "text-blue-600" : "text-slate-400"
                      )} />
                      <span className="text-sm sm:text-base font-medium text-[#0F172A]">
                        {faq.question}
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-slate-500 shrink-0 transition-transform duration-300",
                        isOpen ? "transform rotate-180 text-blue-600" : ""
                      )}
                    />
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={faqId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-600 font-light leading-relaxed border-t border-blue-100/60 mt-1">
                        <p className="pt-3">{faq.answer}</p>
                        {faq.category && (
                          <span className="inline-block mt-3 text-[10px] font-mono text-blue-600 bg-white border border-blue-200 px-2.5 py-0.5 rounded-full">
                            {faq.category}
                          </span>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom Contact Help Note */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <p className="text-xs sm:text-sm text-slate-700">
            ¿Tienes una consulta específica sobre la arquitectura de tu empresa?{" "}
            <a
              href="#diagnostico"
              className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-1"
            >
              Solicita un diagnóstico operativo directo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
