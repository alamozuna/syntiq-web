"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  Database, 
  BrainCircuit, 
  Network, 
  LineChart, 
  ChevronRight, 
  TerminalSquare,
  Play
} from "lucide-react";
import { cn } from "@/lib/utils";

// Los 4 pasos del método de aprendizaje
const LEARNING_STAGES = [
  {
    id: "stage-1",
    label: "Diagnóstico",
    title: "1. Auditoría Operativa",
    description: "Evaluamos tu nivel actual y mapeamos las tareas manuales que debes delegar a la IA.",
    icon: Database,
    color: "blue",
    codeSnippet: `// Paso 1: Mapeo de Tareas
const auditTask = {
  task: "Lectura de facturas PDF",
  frequency: "Diaria",
  timeSpent: "2h/día",
  aiViability: "Alta (100% delegable)",
  recommendedTool: "Claude 3.5 + n8n"
};`,
  },
  {
    id: "stage-2",
    label: "Prompting",
    title: "2. Estructuración Lógica",
    description: "Aprendes a diseñar prompts como código. Pasas de instrucciones vagas a system prompts deterministas.",
    icon: BrainCircuit,
    color: "indigo",
    codeSnippet: `// Paso 2: Prompt Estructurado (Extracto)
<rol>Eres un parser de facturas experto.</rol>
<contexto>El usuario adjuntará un PDF.</contexto>
<tarea>
  1. Extraer NIF y Base Imponible.
  2. Validar que los montos cuadren.
  3. Retornar SÓLO un JSON válido.
</tarea>
<restriccion>Cero alucinaciones.</restriccion>`,
  },
  {
    id: "stage-3",
    label: "Construcción",
    title: "3. Vibe Coding & n8n",
    description: "Construyes tu primera automatización real uniendo LLMs con tus herramientas diarias mediante APIs.",
    icon: Network,
    color: "purple",
    codeSnippet: `// Paso 3: Flujo n8n (Pseudocódigo)
On(EmailReceived)
  -> CheckIf(HasInvoicePDF)
  -> DownloadAttachment()
  -> CallLLM(PromptExtractor, File)
  -> Parse(JSON)
  -> GoogleSheets.addRow(Data)
  -> Slack.notify("Factura Procesada");`,
  },
  {
    id: "stage-4",
    label: "Despliegue",
    title: "4. Autopiloto Seguro",
    description: "Despliegas el agente con reglas de gobernanza para que requiera tu aprobación en casos dudosos.",
    icon: LineChart,
    color: "emerald",
    codeSnippet: `// Paso 4: Gobernanza (Human-in-the-Loop)
if (Invoice.confidence < 0.95) {
  // Pausar ejecución
  Slack.sendActionBlock(
    "Revisión humana requerida",
    Invoice.data,
    ["Aprobar", "Rechazar"]
  );
  waitForHuman();
} else {
  proceedAutomatically();
}`,
  },
];

export default function ProcessFlowEngine() {
  const [activeStage, setActiveStage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStage((prev) => (prev + 1) % LEARNING_STAGES.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section 
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#030712] overflow-hidden"
    >
      {/* Dark Atmosphere */}
      <div className="absolute inset-0 bg-mesh-dark opacity-40 mix-blend-screen" />
      <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-[0.03] mix-blend-overlay" />
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1E293B_1px,transparent_1px),linear-gradient(to_bottom,#1E293B_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/50 border border-blue-900/50 text-blue-400 mb-6"
          >
            <TerminalSquare className="w-3.5 h-3.5" />
            <span className="brand-label text-[10px] tracking-widest uppercase font-semibold">
              EL MÉTODO DE APRENDIZAJE SYNTIQ
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-brand-display text-3xl sm:text-4xl lg:text-5xl text-white font-light tracking-tight leading-tight mb-6"
          >
            Cómo construimos <span className="font-normal italic text-blue-400">empleados digitales</span> en clase.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 font-light leading-relaxed"
          >
            Este es el framework exacto que aplicarás durante el taller. Aprendes haciendo,
            programando lógica de negocio sin tocar una sola línea de código tradicional.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Interactive Steps */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center justify-between mb-6 px-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                Fases del Taller
              </span>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-1.5 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
              >
                <Play className={cn("w-3.5 h-3.5", isPlaying && "animate-pulse")} />
                <span>{isPlaying ? "PAUSAR" : "AUTO-PLAY"}</span>
              </button>
            </div>

            {LEARNING_STAGES.map((stage, idx) => {
              const isActive = activeStage === idx;
              const Icon = stage.icon;
              
              return (
                <button
                  key={stage.id}
                  onClick={() => {
                    setActiveStage(idx);
                    setIsPlaying(false);
                  }}
                  className={cn(
                    "w-full text-left p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group",
                    isActive 
                      ? "bg-slate-800/80 border-slate-700 shadow-lg" 
                      : "bg-transparent border-slate-800/50 hover:bg-slate-800/40 hover:border-slate-700"
                  )}
                >
                  {/* Active Indicator Line */}
                  <div 
                    className={cn(
                      "absolute left-0 top-0 bottom-0 w-1 transition-all duration-300",
                      isActive ? `bg-${stage.color}-500` : "bg-transparent group-hover:bg-slate-700"
                    )}
                  />
                  
                  <div className="flex items-start gap-4">
                    <div 
                      className={cn(
                        "p-2.5 rounded-xl transition-all duration-300 shrink-0",
                        isActive 
                          ? `bg-${stage.color}-500/20 text-${stage.color}-400` 
                          : "bg-slate-800 text-slate-500"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    
                    <div>
                      <h3 className={cn(
                        "text-base font-semibold mb-1.5 transition-colors",
                        isActive ? "text-white" : "text-slate-300"
                      )}>
                        {stage.title}
                      </h3>
                      
                      {/* Collapse description when not active for cleaner UI on mobile */}
                      <div className={cn(
                        "grid transition-all duration-300 ease-in-out",
                        isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                      )}>
                        <p className="overflow-hidden text-sm text-slate-400 font-light leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Code/Terminal Visualizer */}
          <div className="lg:col-span-7">
            <div className="sticky top-24 rounded-2xl bg-[#090D16] border border-slate-800 shadow-2xl overflow-hidden h-[450px] flex flex-col">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0D1322] border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="text-[10px] font-mono text-slate-500 tracking-wider">
                  taller-practico.ts — {LEARNING_STAGES[activeStage].label}
                </div>
                <div className="w-12" /> {/* Spacer for balance */}
              </div>

              {/* Terminal Body with Code */}
              <div className="flex-1 p-6 overflow-auto custom-scrollbar relative">
                {/* Line numbers */}
                <div className="absolute left-0 top-0 bottom-0 w-10 bg-[#0D1322]/50 border-r border-slate-800/50 flex flex-col items-end py-6 pr-2 font-mono text-[10px] text-slate-700 select-none">
                  {[...Array(20)].map((_, i) => (
                    <span key={i} className="leading-relaxed mb-0.5">{i + 1}</span>
                  ))}
                </div>

                <div className="pl-8 relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeStage}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <pre className="font-mono text-[13px] sm:text-sm leading-relaxed whitespace-pre-wrap break-words">
                        <code dangerouslySetInnerHTML={{ 
                          __html: LEARNING_STAGES[activeStage].codeSnippet
                            // Simple syntax highlighting via regex replaces
                            .replace(/\/\/.*/g, match => `<span class="text-slate-500 italic">${match}</span>`)
                            .replace(/const|let|var|if|else|return|function/g, match => `<span class="text-blue-400">${match}</span>`)
                            .replace(/".*?"/g, match => `<span class="text-emerald-400">${match}</span>`)
                            .replace(/<rol>|<contexto>|<tarea>|<restriccion>|<\/rol>|<\/contexto>|<\/tarea>|<\/restriccion>/g, match => `<span class="text-indigo-400">${match}</span>`)
                            .replace(/\{|\}|\(|\)/g, match => `<span class="text-slate-400">${match}</span>`)
                        }} />
                      </pre>
                      
                      {/* Blinking cursor */}
                      <motion.div 
                        animate={{ opacity: [1, 0] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                        className="inline-block w-2 h-4 bg-blue-500 ml-1 mt-1 align-middle"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              
              {/* Terminal Footer */}
              <div className="px-4 py-2 bg-[#0D1322] border-t border-slate-800 flex items-center justify-between text-[10px] font-mono text-slate-500">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Entorno Listo
                  </span>
                  <span>UTF-8</span>
                </div>
                <span>SyntIQ Academy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
