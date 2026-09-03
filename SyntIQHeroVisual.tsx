'use client';

import { CSSProperties } from 'react';
import './SyntIQHeroVisual.css';

type WorkflowNodeProps = {
  label: string;
  index: number;
  className?: string;
};

function WorkflowNode({ label, index, className = '' }: WorkflowNodeProps) {
  return (
    <div className={`syntiq-workflow-node syntiq-node-${index} ${className}`}>
      <span className="syntiq-node-index">0{index}</span>
      <span className="syntiq-node-label">{label}</span>
      <span className="syntiq-node-activity" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}

export default function SyntIQHeroVisual() {
  return (
    <div
      className="syntiq-hero-visual"
      role="img"
      aria-label="SyntIQ AI transforms a Spanish instruction into a completed lead-processing workflow"
    >
      <div className="syntiq-grid" aria-hidden="true" />
      <div className="syntiq-orbit syntiq-orbit-a" aria-hidden="true" />
      <div className="syntiq-orbit syntiq-orbit-b" aria-hidden="true" />

      <div className="syntiq-kicker syntiq-kicker-prompt">PROMPT</div>
      <div className="syntiq-kicker syntiq-kicker-system">AI SYSTEM / 01</div>

      <section className="syntiq-prompt-card" aria-label="Prompt">
        <span className="syntiq-card-label">INTENTION</span>
        <p>“Organiza los leads y prepara respuestas.”</p>
        <span className="syntiq-card-cursor" aria-hidden="true" />
      </section>

      <svg className="syntiq-connectors" viewBox="0 0 600 500" fill="none" aria-hidden="true">
        <defs>
          <filter id="syntiq-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path className="syntiq-path syntiq-prompt-path" d="M211 120 C260 120 257 183 303 183" />
        <path className="syntiq-path syntiq-workflow-path" d="M351 253 C351 292 173 280 173 322 C173 343 190 349 208 349" />
        <path className="syntiq-path syntiq-workflow-path" d="M351 253 C351 292 351 315 351 349" />
        <path className="syntiq-path syntiq-workflow-path" d="M351 253 C351 292 528 280 528 322 C528 343 511 349 493 349" />
        <path className="syntiq-path syntiq-result-path" d="M351 411 C351 438 351 444 351 458" />
        <circle className="syntiq-pulse" cx="211" cy="120" r="3" filter="url(#syntiq-glow)" />
      </svg>

      <section className="syntiq-ai-node" aria-label="SyntIQ AI status">
        <span className="syntiq-ai-ring" aria-hidden="true" />
        <span className="syntiq-ai-label">SYNTIQ AI</span>
        <span className="syntiq-ai-status">
          <span className="syntiq-status-understanding">Understanding…</span>
          <span className="syntiq-status-planning">Planning…</span>
          <span className="syntiq-status-building">Building…</span>
        </span>
      </section>

      <div className="syntiq-workflow-label">WORKFLOW / LIVE</div>
      <div className="syntiq-workflow-nodes" aria-label="Workflow steps">
        <WorkflowNode label="ANALYZE" index={1} />
        <WorkflowNode label="CLASSIFY" index={2} />
        <WorkflowNode label="PREPARE" index={3} />
      </div>

      <div className="syntiq-data-card" aria-hidden="true">
        <span className="syntiq-data-dot" />
        <span>LEADS.csv</span>
        <span className="syntiq-data-count">18</span>
      </div>

      <section className="syntiq-result-card" aria-label="Workflow complete">
        <div className="syntiq-result-heading">
          <span className="syntiq-check">✓</span>
          <span>WORKFLOW COMPLETE</span>
        </div>
        <div className="syntiq-result-stats">
          <span><strong>18</strong> leads classified</span>
          <span><strong>6</strong> responses prepared</span>
        </div>
        <div className="syntiq-review"><span>✓</span> Ready for human review</div>
      </section>

      <div className="syntiq-footer-label">HUMAN INTENTION → WORKING SYSTEM</div>
    </div>
  );
}

export type { CSSProperties };
