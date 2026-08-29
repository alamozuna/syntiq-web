"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Cpu,
  Database,
  ShieldCheck,
  Zap,
  Play,
  CheckCircle2,
  Terminal,
  MessageSquare,
  FileCheck,
  RefreshCw,
  GitBranch,
  Layers,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface AgentNode {
  id: string;
  name: string;
  category: string;
  status: "idle" | "processing" | "success";
  icon: React.ElementType;
  description: string;
  tech: string;
  outputPreview: string;
  metrics: { label: string; val: string };
}

const NODES_DATA: AgentNode[] = [
  {
    id: "ingestion",
    name: "01. Ingestión Multi-Canal",
    category: "Data Ingestion Layer",
    status: "success",
    icon: MessageSquare,
    description: "Captura de leads, emails, mensajes de WhatsApp y webhooks en tiempo real 24/7.",
    tech: "WhatsApp Cloud API · Webhooks · IMAP",
    outputPreview: '{"source":"whatsapp_lead","payload":{"msg":"Requiero auditoría de procesos IA urgente","urgency":"high"}}',
    metrics: { label: "Latencia Ingesta", val: "18ms" },
  },
  {
    id: "reasoning",
    name: "02. Motor Cognitivo SyntIQ",
    category: "Reasoning & Agent Architecture",
    status: "processing",
    icon: Cpu,
    description: "Razonamiento contextual profundo, clasificación semántica y asignación de flujo de trabajo.",
    tech: "Claude 3.5 Sonnet · LangChain · RAG",
    outputPreview: '{"classification":"B2B_Enterprise_Audit","intent":"Schedule_Diagnostic","score":0.98,"suggested_route":"Agent_Consultant_Alam"}',
    metrics: { label: "Precisión Semántica", val: "99.4%" },
  },
  {
    id: "governance",
    name: "03. Capa de Gobernanza Legal",
    category: "Compliance & Security Shield",
    status: "success",
    icon: ShieldCheck,
    description: "Validación estricta 'Human-in-the-Loop', anonimización de datos y cumplimiento regulatorio.",
    tech: "Audit Logs · ISO 13485 · OMA Standards",
    outputPreview: '{"compliance_check":"PASSED","pii_redacted":true,"hallucination_index":0.00,"governance_officer":"Laura_Espino"}',
    metrics: { label: "Índice Alucinación", val: "0.00%" },
  },
  {
    id: "orchestration",
    name: "04. Orquestador Transaccional",
    category: "Workflow Engine",
    status: "idle",
    icon: Layers,
    description: "Sincronización bidireccional inmediata con CRM, ERP y bases de datos corporativas.",
    tech: "n8n Self-Hosted · PostgreSQL · REST APIs",
    outputPreview: '{"db_sync":"COMPLETED","crm_deal_id":"DEAL-84920","erp_updated":true,"node_executions":14}',
    metrics: { label: "Uptime de Nodos", val: "99.98%" },
  },
  {
    id: "execution",
    name: "05. Despacho & Ejecución 24/7",
    category: "Autonomous Delivery",
    status: "idle",
    icon: Zap,
    description: "Ejecución final sin intervención manual: respuesta instantánea, cita agendada y reporte generado.",
    tech: "Auto-Dispatch · Calendar Sync · Webhooks",
    outputPreview: '{"status":"RESOLVED","action":"Calendar_Invite_Sent","lead_nurtured":true,"revenue_leakage_prevented":"$4,200 USD"}',
    metrics: { label: "Tiempo Ciclo Total", val: "280ms" },
  },
];

export default function AgentOrchestratorVisual() {
  const [activeNodeId, setActiveNodeId] = useState<string>("reasoning");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simulationStep, setSimulationStep] = useState<number>(1);
  const [logs, setLogs] = useState<string[]>([
    "00:00:01 [INIT] SyntIQ Multi-Agent Orchestrator Engine v2.4 initialized.",
    "00:00:02 [READY] 5 autonomous agent pipelines listening on cluster.",
  ]);

  const activeNode = NODES_DATA.find((n) => n.id === activeNodeId) || NODES_DATA[1];

  const runSimulation = () => {
    if (isSimulating) return;
    setIsSimulating(true);
    setSimulationStep(0);
    setLogs((prev) => [
      ...prev,
      `[SIM] Iniciando simulación de ciclo operativo completo...`,
    ]);

    const nodeIds = ["ingestion", "reasoning", "governance", "orchestration", "execution"];
    nodeIds.forEach((id, idx) => {
      setTimeout(() => {
        setActiveNodeId(id);
        setSimulationStep(idx);
        setLogs((prev) => [
          ...prev.slice(-4),
          `[STEP 0${idx + 1}] Nódulo '${id}' procesado con éxito en ${20 + idx * 15}ms.`,
        ]);
        if (idx === nodeIds.length - 1) {
          setTimeout(() => {
            setIsSimulating(false);
            setLogs((prev) => [
              ...prev.slice(-4),
              `[SUCCESS] Ciclo completado. 0% fricción humana, 100% trazabilidad.`,
            ]);
          }, 600);
        }
      }, (idx + 1) * 700);
    });
  };

  return (
    <div className="relative w-full rounded-2xl bg-[#090d16]/90 border border-slate-800/80 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* Top Console Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-950/80 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
          </div>
          <span className="ml-2 font-mono text-[11px] text-slate-400">
            syntiq-orchestrator://cluster-prod-01
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={runSimulation}
            disabled={isSimulating}
            className={cn(
              "flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-medium transition-all",
              isSimulating
                ? "bg-blue-900/50 text-blue-300 border border-blue-700/50 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-500 text-white shadow-glow-sm cursor-pointer"
            )}
          >
            {isSimulating ? (
              <>
                <RefreshCw className="w-3 h-3 animate-spin" />
                <span>Ejecutando Pipeline...</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-white" />
                <span>Simular Ciclo Operativo</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Orchestrator Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: Interactive Nodes Visual Flow (7 cols) */}
        <div className="lg:col-span-7 p-4 sm:p-6 border-b lg:border-b-0 lg:border-r border-slate-800/80 bg-grid-pattern relative">
          <div className="flex items-center justify-between mb-4">
            <span className="brand-label text-blue-400 flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5" /> Pipeline de Agentes Autónomos
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              {simulationStep + 1}/5 Nódulos Activos
            </span>
          </div>

          {/* Connected Flow List */}
          <div className="space-y-3">
            {NODES_DATA.map((node, index) => {
              const Icon = node.icon;
              const isCurrent = node.id === activeNodeId;
              const isPast = isSimulating && simulationStep >= index;

              return (
                <div key={node.id} className="relative">
                  {/* Vertical Connection Line */}
                  {index < NODES_DATA.length - 1 && (
                    <div className="absolute left-5 top-10 bottom-[-14px] w-[2px] bg-slate-800 z-0">
                      {(isCurrent || isPast) && (
                        <div className="w-full h-full bg-gradient-to-b from-blue-500 to-transparent animate-pulse" />
                      )}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setActiveNodeId(node.id)}
                    className={cn(
                      "relative z-10 w-full flex items-center justify-between p-3 rounded-xl transition-all duration-300 text-left cursor-pointer",
                      isCurrent
                        ? "bg-slate-800/90 border border-blue-500/50 shadow-glow-sm"
                        : "bg-slate-900/60 border border-slate-800/60 hover:bg-slate-800/50 hover:border-slate-700"
                    )}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "w-9 h-9 rounded-lg flex items-center justify-center transition-colors",
                          isCurrent
                            ? "bg-blue-600 text-white shadow-glow-sm"
                            : "bg-slate-800 text-slate-400"
                        )}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs sm:text-sm font-semibold text-slate-100">
                            {node.name}
                          </h4>
                          {isCurrent && (
                            <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-blue-500/20 text-blue-300 border border-blue-500/30">
                              INSPECCIONANDO
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 line-clamp-1">
                          {node.category} · {node.tech}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-end">
                      <span className="text-[10px] text-slate-400 font-mono">
                        {node.metrics.label}
                      </span>
                      <span className="text-xs font-mono font-semibold text-emerald-400">
                        {node.metrics.val}
                      </span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Real-time Node Inspector & Execution Terminal (5 cols) */}
        <div className="lg:col-span-5 p-4 sm:p-6 bg-slate-950/60 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800">
              <span className="brand-label text-slate-300 flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-blue-400" /> Inspector de Nódulo
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 border border-emerald-500/40">
                0% Error Rate
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeNode.id}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="space-y-3"
              >
                <div>
                  <h5 className="text-sm font-semibold text-white">{activeNode.name}</h5>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {activeNode.description}
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono text-slate-400">
                      STACK TECNOLÓGICO:
                    </span>
                  </div>
                  <p className="text-xs font-mono text-blue-300">{activeNode.tech}</p>
                </div>

                {/* Live JSON Payload output */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-slate-400 flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-slate-500" /> DATA PAYLOAD EMITIDO:
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400">valid JSON</span>
                  </div>
                  <pre className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-emerald-300/90 overflow-x-auto whitespace-pre-wrap leading-tight max-h-28">
                    {activeNode.outputPreview}
                  </pre>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Live System Log Box */}
          <div className="pt-2 border-t border-slate-800/80">
            <span className="text-[10px] font-mono text-slate-500 block mb-1">
              REGISTRO DE EJECUCIÓN CONTINUA:
            </span>
            <div className="bg-black/60 rounded-md p-2 font-mono text-[10px] text-slate-400 space-y-0.5 border border-slate-900">
              {logs.map((l, i) => (
                <div key={i} className="leading-tight text-slate-300">
                  {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 px-4 py-3 bg-slate-950/90 border-t border-slate-800 text-center font-mono">
        <div>
          <span className="text-[10px] text-slate-400 block">TIEMPO RESPUESTA</span>
          <span className="text-xs font-bold text-white">&lt; 300 ms</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block">CONFORMIDAD LEGAL</span>
          <span className="text-xs font-bold text-emerald-400">100% Auditado</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block">DISPONIBILIDAD</span>
          <span className="text-xs font-bold text-blue-400">24/7/365</span>
        </div>
        <div>
          <span className="text-[10px] text-slate-400 block">HUMAN IN THE LOOP</span>
          <span className="text-xs font-bold text-indigo-300">Supervisado</span>
        </div>
      </div>
    </div>
  );
}
