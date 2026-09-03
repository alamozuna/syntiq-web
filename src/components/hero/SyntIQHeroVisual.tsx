import React from 'react';

export default function SyntIQHeroVisual() {
  return (
    <div className="syntiq-hero-visual" role="img" aria-label="Visualización animada del flujo de trabajo de SyntIQ construyendo automatizaciones.">
      <div className="syntiq-grid"></div>
      
      {/* Background Orbits */}
      <div className="syntiq-orbit syntiq-orbit-a"></div>
      <div className="syntiq-orbit syntiq-orbit-b"></div>
      
      {/* Structural Kicker Labels */}
      <div className="syntiq-kicker syntiq-kicker-prompt">PROMPT</div>
      <div className="syntiq-kicker syntiq-kicker-system">SISTEMA</div>
      <div className="syntiq-workflow-label">PROCESO DE CREACIÓN</div>
      <div className="syntiq-footer-label">ENTORNO DE PRODUCCIÓN</div>

      {/* SVG Connectors */}
      <svg className="syntiq-connectors" preserveAspectRatio="none" viewBox="0 0 600 500">
        <path className="syntiq-path syntiq-prompt-path" d="M 120,154 C 120,215 300,165 300,215" fill="none" />
        
        {/* Core Node to Workflow Steps */}
        <path className="syntiq-path syntiq-workflow-path" d="M 300,253 L 300,285 C 300,305 170,325 170,339" fill="none" />
        <path className="syntiq-path syntiq-workflow-path" d="M 300,253 L 300,339" fill="none" />
        <path className="syntiq-path syntiq-workflow-path" d="M 300,253 L 300,285 C 300,305 430,325 430,339" fill="none" />
        
        {/* Workflow Steps to Result */}
        <path className="syntiq-path syntiq-result-path" d="M 170,384 C 170,410 300,400 300,430" fill="none" />
        <path className="syntiq-path syntiq-result-path" d="M 300,384 L 300,430" fill="none" />
        <path className="syntiq-path syntiq-result-path" d="M 430,384 C 430,410 300,400 300,430" fill="none" />
        
        {/* Active Pulses traveling along paths */}
        <circle className="syntiq-pulse" cx="0" cy="0" r="2">
          <animateMotion dur="8s" repeatCount="indefinite" path="M 120,154 C 120,215 300,165 300,215" />
        </circle>
        
        <circle className="syntiq-pulse" cx="0" cy="0" r="2" style={{ animationDelay: '0.4s' }}>
          <animateMotion dur="8s" repeatCount="indefinite" path="M 300,253 L 300,285 C 300,305 170,325 170,339" />
        </circle>
        <circle className="syntiq-pulse" cx="0" cy="0" r="2" style={{ animationDelay: '0.45s' }}>
          <animateMotion dur="8s" repeatCount="indefinite" path="M 300,253 L 300,339" />
        </circle>
        <circle className="syntiq-pulse" cx="0" cy="0" r="2" style={{ animationDelay: '0.5s' }}>
          <animateMotion dur="8s" repeatCount="indefinite" path="M 300,253 L 300,285 C 300,305 430,325 430,339" />
        </circle>
      </svg>

      {/* 1. Prompt Input */}
      <div className="syntiq-prompt-card">
        <div className="syntiq-card-label">ENTRADA</div>
        <p>Necesito un flujo para procesar nuevos...<span className="syntiq-card-cursor"></span></p>
      </div>

      {/* 2. Core AI Node */}
      <div className="syntiq-ai-node">
        <div className="syntiq-ai-ring"></div>
        <div className="syntiq-ai-label">SYNTIQ AI</div>
        <div className="syntiq-ai-status">
          <span className="syntiq-status-understanding">Entendiendo...</span>
          <span className="syntiq-status-planning">Planificando...</span>
          <span className="syntiq-status-building">Construyendo...</span>
        </div>
      </div>

      {/* 3. Workflow Assembly */}
      <div className="syntiq-workflow-nodes">
        <div className="syntiq-workflow-node syntiq-node-1">
          <span className="syntiq-node-index">01</span>
          <span className="syntiq-node-label">ANALIZA</span>
          <div className="syntiq-node-activity"><i></i><i></i><i></i></div>
        </div>
        <div className="syntiq-workflow-node syntiq-node-2">
          <span className="syntiq-node-index">02</span>
          <span className="syntiq-node-label">CLASIFICA</span>
          <div className="syntiq-node-activity"><i></i><i></i><i></i></div>
        </div>
        <div className="syntiq-workflow-node syntiq-node-3">
          <span className="syntiq-node-index">03</span>
          <span className="syntiq-node-label">PREPARA</span>
          <div className="syntiq-node-activity"><i></i><i></i><i></i></div>
        </div>
      </div>
      
      {/* Data Flow Element */}
      <div className="syntiq-data-card">
        <div className="syntiq-data-dot"></div>
        <div className="syntiq-data-count">842</div>
        <div>docs procesados</div>
      </div>

      {/* 4. Final Result Validation */}
      <div className="syntiq-result-card">
        <div className="syntiq-result-heading">
          <span className="syntiq-check">✓</span>
          <span>RESULTADO</span>
        </div>
        <div className="syntiq-result-stats">
          <span><strong>Flujo Desplegado</strong></span>
          <span>Automatizaciones Activas: <strong>12</strong></span>
        </div>
        <div className="syntiq-review">
          <span>✓</span> Listo para producción
        </div>
      </div>
    </div>
  );
}
