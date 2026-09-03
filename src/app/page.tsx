import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import ToolsMarquee from "@/components/social-proof/ToolsMarquee";
import BuildSkillsSection from "@/components/skills/BuildSkillsSection";
import MethodStepper from "@/components/method/MethodStepper";
import TrainingFormatsSection from "@/components/solutions/TrainingFormatsSection";
import ResultsSection from "@/components/results/ResultsSection";
import RoiCalculator from "@/components/calculator/RoiCalculator";
import TeamSummarySection from "@/components/team/TeamSummarySection";
import BlueprintSection from "@/components/lead-magnet/BlueprintSection";
import FaqSection from "@/components/faq/FaqSection";
import FinalCtaSection from "@/components/cta/FinalCtaSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 relative selection:bg-blue-600/20 selection:text-slate-900">
      {/* 01. NAVBAR */}
      <Navbar />

      {/* 02. HERO (Copy, 3 Trust Indicators, Live Agent Workflow) */}
      <HeroSection />

      {/* 03. SOCIAL PROOF (Tools Marquee: Herramientas Reales, Casos Reales) */}
      <ToolsMarquee />

      {/* 04. QUÉ APRENDERÁS A CONSTRUIR (4 Cards: Prompting, Vibe Coding, Automatización, Agentes) */}
      <BuildSkillsSection />

      {/* MÉTODO SYNTIQ */}
      <MethodStepper />

      {/* 05. FORMATOS DE FORMACIÓN (3 Tarjetas Grandes estilo Maven) */}
      <TrainingFormatsSection />

      {/* 06. RESULTADOS / TESTIMONIOS (1 Testimonio Principal + 3 Casos Antes/Construyó/Después) */}
      <ResultsSection />

      {/* 08. CALCULADORA ROTI (Copy Sobrio + Interpolación Numérica) */}
      <RoiCalculator />

      {/* 09. EQUIPO (4 Tarjetas Compactas + Frase de Marca + Enlace a /nosotros) */}
      <TeamSummarySection />

      {/* RECURSO GRATUITO: Blueprint del Agente Autónomo */}
      <BlueprintSection />

      {/* 10. FAQ REDUCIDO (4 Preguntas Prácticas de Formación) */}
      <FaqSection />

      {/* 11. CTA FINAL (Deja de aprender IA en abstracto. Construye algo útil.) */}
      <FinalCtaSection />

      {/* 12. FOOTER */}
      <Footer />
    </main>
  );
}
