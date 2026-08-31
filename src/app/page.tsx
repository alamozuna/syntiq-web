import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
// 2. Social Proof / Resultados
import AuthorityBar from "@/components/social-proof/AuthorityBar";

// 3. Filosofía & Identidad Académica
import MissionVisionValues from "@/components/brand/MissionVisionValues";

// 4. Scaffolding Educativo
import PillarsSection from "@/components/pillars/PillarsSection";

// 5. Catálogo de Formaciones
import SolutionsMatrix from "@/components/solutions/SolutionsMatrix";

// 6. Metodología de Aprendizaje (Interactive Flow)
import ProcessFlowEngine from "@/components/interactive/ProcessFlowEngine";

// 7. Calculadora ROTI (Return on Time Invested)
import RoiCalculator from "@/components/calculator/RoiCalculator";

// 8. Testimonios por Audiencia
import UseCasesSection from "@/components/use-cases/UseCasesSection";
import TeamSection from "@/components/team/TeamSection";
// 9. Lead Magnet (Kit de Inicio)
import BlueprintSection from "@/components/lead-magnet/BlueprintSection";
import FaqSection from "@/components/faq/FaqSection";
// 10. Formulario de Admisión / Contacto
import DiagnosticForm from "@/components/contact/DiagnosticForm";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 relative selection:bg-blue-600/20 selection:text-slate-900">
      {/* Navigation Header */}
      <Navbar />

      {/* Hero Section with Interactive Agent Orchestrator Simulator */}
      <HeroSection />

      {/* Quantitative Social Proof & Technology Ecosystem */}
      <AuthorityBar />

      {/* Brand Identity & Core Ethos: Misión, Visión, Valores & Reglas de Oro */}
      <MissionVisionValues />

      {/* 01. Four Pillars of Operative Transformation */}
      <PillarsSection />

      {/* 02. Solutions Matrix (Productized vs Consultative vs Governance) */}
      <SolutionsMatrix />

      {/* 03. Interactive Engine (Data -> Intelligence -> Automation -> Results) */}
      <ProcessFlowEngine />

      {/* 04. Capital Leakage & ROI Calculator */}
      <RoiCalculator />

      {/* 05. Use Cases by Industry */}
      <UseCasesSection />

      {/* 06. Founding Team & Professional Leadership Authority */}
      <TeamSection />

      {/* Lead Magnet: The Autonomous Agent Architecture Blueprint */}
      <BlueprintSection />

      {/* 07. Frequently Asked Questions (WAI-ARIA Accordion & Schema.org FAQPage) */}
      <FaqSection />

      {/* 08. Interactive Operative Diagnostic & Strategic Contact */}
      <DiagnosticForm />

      {/* Corporate Enterprise Footer */}
      <Footer />
    </main>
  );
}
