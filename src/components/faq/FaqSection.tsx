"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import JsonLd from "@/components/seo/JsonLd";

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export const ACADEMY_FAQS: FaqItem[] = [
  {
    question: "¿Necesito saber programar?",
    answer:
      "No. La mayoría de los flujos se construyen con herramientas visuales como n8n y modelos de lenguaje a través de instrucciones en lenguaje natural. Cuando utilizamos código puntual, lo generamos con herramientas asistidas como Cursor o Antigravity, por lo que cualquier profesional puede implementarlo sin conocimientos previos de programación.",
  },
  {
    question: "¿Qué construiré durante la formación?",
    answer:
      "Sales con flujos reales funcionando: agentes que procesan correos, extraen datos estructurados de documentos, responden consultas recurrentes de clientes o conectan tus aplicaciones cotidianas. No enseñamos teoría abstracta; construyes una solución útil desde la primera sesión.",
  },
  {
    question: "¿Qué herramientas utilizaremos?",
    answer:
      "Trabajamos con los modelos de lenguaje más avanzados (ChatGPT, Claude, Gemini), orquestadores visuales como n8n, y entornos asistidos como Cursor y Google Workspace. Todas son herramientas reales que podrás seguir utilizando en tu trabajo diario.",
  },
  {
    question: "¿Hay formación para empresas?",
    answer:
      "Sí. Diseñamos talleres y programas in-company adaptados a los procesos, herramientas y políticas de seguridad específicas de tu organización. Diseñamos los flujos con controles, fuentes verificadas y supervisión humana para reducir errores y evitar que acciones críticas se ejecuten sin revisión.",
  },
  {
    question: "¿Puedo llevar un proceso real de mi empresa?",
    answer:
      "Sí, y de hecho lo recomendamos. En los talleres y programas modulares trabajamos sobre problemas reales que tú eliges: un correo que quieres automatizar, un documento que necesitas procesar o un flujo que quieres conectar. Así el aprendizaje se convierte directamente en valor para tu día a día.",
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
  faqs = ACADEMY_FAQS,
  title = "Dudas frecuentes sobre nuestras formaciones.",
  subtitle = "Todo lo que necesitas saber antes de empezar tu primer taller con SyntIQ.",
  badge = "PREGUNTAS FRECUENTES",
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
    <section className={cn("relative py-20 sm:py-28 bg-white border-t border-slate-200/80", className)}>
      <JsonLd data={faqSchemaData} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 sm:mb-16">
          <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase">
            {badge}
          </span>
          <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light mt-3 leading-tight">
            {title}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light mt-4 max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Accordion Items */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const faqId = `faq-answer-${index}`;
            const buttonId = `faq-question-${index}`;

            return (
              <div
                key={faq.question}
                className={cn(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "bg-slate-50/80 border-slate-300 shadow-xs"
                    : "bg-white border-slate-200/90 hover:border-slate-300"
                )}
              >
                <h3>
                  <button
                    type="button"
                    id={buttonId}
                    aria-expanded={isOpen}
                    aria-controls={faqId}
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-2xl min-h-[44px]"
                  >
                    <span className="flex items-center gap-3 pr-4">
                      <HelpCircle
                        className={cn(
                          "w-4 h-4 shrink-0 transition-colors",
                          isOpen ? "text-blue-600" : "text-slate-400"
                        )}
                      />
                      <span className="text-sm sm:text-base font-medium text-slate-900">
                        {faq.question}
                      </span>
                    </span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200",
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
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 font-light leading-relaxed border-t border-slate-200/60 mt-1">
                        <p className="pt-3">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
