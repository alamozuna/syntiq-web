import React from "react";
import { Metadata } from "next";
import { formaciones } from "@/data/formaciones";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CourseCard from "@/components/solutions/CourseCard";
import { Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Talleres Intensivos | SyntIQ",
  description: "Construye una solución funcional en una sola sesión de 2 a 4 horas. Talleres prácticos de IA.",
};

export default function TalleresIntensivosPage() {
  const talleres = formaciones.filter(f => f.format === "Taller Intensivo" && f.status !== "DRAFT");

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600/20 selection:text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-white border-b border-slate-200">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-100/40 blur-[100px] rounded-full" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 shadow-xs mb-5">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[10px] tracking-widest uppercase font-semibold font-mono">
              2 A 4 HORAS
            </span>
          </div>

          <h1 className="font-brand-display text-4xl sm:text-5xl font-light text-[#0F172A] tracking-tight leading-tight mb-5">
            Talleres <span className="font-normal text-blue-600">Intensivos</span>
          </h1>

          <p className="text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Sesiones altamente prácticas enfocadas en resolver un flujo específico de principio a fin.
            Sales de la sesión con una solución operativa.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {talleres.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
