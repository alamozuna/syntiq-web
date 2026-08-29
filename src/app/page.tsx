import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/hero/HeroSection";
import AuthorityBar from "@/components/social-proof/AuthorityBar";
import MissionVisionValues from "@/components/brand/MissionVisionValues";
import PillarsSection from "@/components/pillars/PillarsSection";
import SolutionsMatrix from "@/components/solutions/SolutionsMatrix";
import ProcessFlowEngine from "@/components/interactive/ProcessFlowEngine";
import RoiCalculator from "@/components/calculator/RoiCalculator";
import UseCasesSection from "@/components/use-cases/UseCasesSection";
import TeamSection from "@/components/team/TeamSection";
import BlueprintSection from "@/components/lead-magnet/BlueprintSection";
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

      {/* 07. Interactive Operative Diagnostic & Strategic Contact */}
      <DiagnosticForm />

      {/* Corporate Enterprise Footer */}
      <Footer />
    </main>
  );
}
