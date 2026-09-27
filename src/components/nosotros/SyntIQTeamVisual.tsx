import React from 'react';

export default function SyntIQTeamVisual() {
  return (
    <div className="syntiqt-visual" role="img" aria-label="Visualización animada de los cuatro pilares del equipo fundador de SyntIQ convergiendo en una misión compartida.">
      <div className="syntiqt-grid"></div>
      <div className="syntiqt-orbit"></div>

      <div className="syntiqt-kicker syntiqt-kicker-top">EQUIPO FUNDADOR</div>
      <div className="syntiqt-footer-label">UNA SOLA MISIÓN</div>

      {/* SVG Connectors: 4 spokes converging on the hub */}
      <svg className="syntiqt-connectors" preserveAspectRatio="none" viewBox="0 0 400 400">
        <path className="syntiqt-path" d="M 200,90 L 200,160" fill="none" />
        <path className="syntiqt-path" d="M 310,200 L 240,200" fill="none" />
        <path className="syntiqt-path" d="M 200,310 L 200,240" fill="none" />
        <path className="syntiqt-path" d="M 90,200 L 160,200" fill="none" />

        <circle className="syntiqt-pulse" cx="0" cy="0" r="2.5">
          <animateMotion dur="8s" begin="0s" repeatCount="indefinite" path="M 200,90 L 200,160" />
        </circle>
        <circle className="syntiqt-pulse" cx="0" cy="0" r="2.5" style={{ animationDelay: '.6s' }}>
          <animateMotion dur="8s" begin="0.6s" repeatCount="indefinite" path="M 310,200 L 240,200" />
        </circle>
        <circle className="syntiqt-pulse" cx="0" cy="0" r="2.5" style={{ animationDelay: '1.2s' }}>
          <animateMotion dur="8s" begin="1.2s" repeatCount="indefinite" path="M 200,310 L 200,240" />
        </circle>
        <circle className="syntiqt-pulse" cx="0" cy="0" r="2.5" style={{ animationDelay: '1.8s' }}>
          <animateMotion dur="8s" begin="1.8s" repeatCount="indefinite" path="M 90,200 L 160,200" />
        </circle>
      </svg>

      {/* 4 pillar nodes */}
      <div className="syntiqt-node syntiqt-node-n">
        <span className="syntiqt-node-label">OPERACIONES</span>
      </div>
      <div className="syntiqt-node syntiqt-node-e">
        <span className="syntiqt-node-label">ESTRATEGIA</span>
      </div>
      <div className="syntiqt-node syntiqt-node-s">
        <span className="syntiqt-node-label">GOBERNANZA</span>
      </div>
      <div className="syntiqt-node syntiqt-node-w">
        <span className="syntiqt-node-label">EXPERIENCIA</span>
      </div>

      {/* Central hub */}
      <div className="syntiqt-hub">
        <div className="syntiqt-hub-ring"></div>
        <div className="syntiqt-hub-label">SYNTIQ</div>
        <div className="syntiqt-hub-sub">GROUP</div>
      </div>

      {/* Result reveal */}
      <div className="syntiqt-result-card">
        <div className="syntiqt-result-heading">
          <span className="syntiqt-check">✓</span>
          <span>EN UNA SOLA VOZ</span>
        </div>
        <p>Aprende · Construye · Automatiza</p>
      </div>
    </div>
  );
}
