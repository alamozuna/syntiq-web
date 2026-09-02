"use client";

import React from "react";
import { cn } from "@/lib/utils";

const TOOLS = [
  { name: "ChatGPT", role: "Modelos de Lenguaje", badge: "OpenAI" },
  { name: "Claude", role: "Razonamiento Profundo", badge: "Anthropic" },
  { name: "Gemini", role: "Análisis Multimodal", badge: "Google" },
  { name: "n8n", role: "Orquestación de Agentes", badge: "No-Code" },
  { name: "Antigravity", role: "Entorno Agéntico", badge: "DeepMind" },
  { name: "Cursor", role: "Vibe Coding & Asistencia", badge: "Dev" },
  { name: "NotebookLM", role: "Investigación con Fuentes", badge: "RAG" },
  { name: "Google Workspace", role: "Integración Operativa", badge: "Productividad" },
  { name: "Make", role: "Conexión de APIs", badge: "Automatización" },
  { name: "Supabase", role: "Base de Datos & Vectores", badge: "Data" },
];

export default function ToolsMarquee() {
  return (
    <section className="relative py-10 sm:py-14 border-y border-slate-200/80 bg-slate-50/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <span className="brand-label text-slate-500 font-semibold tracking-wider text-[10px] sm:text-[11px]">
          HERRAMIENTAS REALES. CASOS REALES.
        </span>
      </div>

      {/* Marquee Wrapper with side fade gradients */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="group flex w-max gap-4 sm:gap-6 animate-[marquee_30s_linear_infinite] motion-reduce:animate-none hover:[animation-play-state:paused]">
          {/* First set */}
          {TOOLS.map((tool, idx) => (
            <div
              key={`tool-1-${idx}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all shrink-0 cursor-default"
            >
              <span className="text-xs sm:text-sm font-medium text-slate-900">
                {tool.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">
                {tool.badge}
              </span>
            </div>
          ))}

          {/* Duplicated set for infinite loop */}
          {TOOLS.map((tool, idx) => (
            <div
              key={`tool-2-${idx}`}
              className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-blue-300 hover:shadow-sm transition-all shrink-0 cursor-default"
            >
              <span className="text-xs sm:text-sm font-medium text-slate-900">
                {tool.name}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 text-slate-500">
                {tool.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
