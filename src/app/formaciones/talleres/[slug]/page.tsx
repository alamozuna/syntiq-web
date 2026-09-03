import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formaciones } from "@/data/formaciones";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { 
  ArrowRight, 
  Clock, 
  BarChart, 
  Hammer, 
  Calendar, 
  CheckCircle2, 
  Users, 
  BookOpen, 
  LayoutList, 
  HelpCircle 
} from "lucide-react";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return formaciones.map((f) => ({
    slug: f.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const course = formaciones.find((f) => f.slug === params.slug);
  
  if (!course || course.status === "DRAFT") {
    return {
      title: "No encontrado | SyntIQ",
    };
  }

  return {
    title: course.seoTitle,
    description: course.seoDescription,
    openGraph: {
      title: course.seoTitle,
      description: course.seoDescription,
    },
  };
}

export default function CoursePage({ params }: Props) {
  const course = formaciones.find((f) => f.slug === params.slug);

  if (!course || course.status === "DRAFT") {
    notFound();
  }

  let ctaText = "Reservar plaza";
  let ctaHref = `/contacto?formacion=${course.slug}`;

  if (course.status === "WAITLIST") {
    ctaText = "Unirme a la lista de interés";
  } else if (course.status === "COMING_SOON" || (course.status === "AVAILABLE" && !course.date)) {
    ctaText = "Avisarme de la próxima edición";
  }

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden bg-[#0F172A]">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Content */}
            <div className="lg:col-span-7">
              <span className="inline-block text-blue-400 font-mono text-sm tracking-wider uppercase mb-4">
                {course.category}
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-brand-display text-white mb-6 leading-tight">
                {course.title}
              </h1>
              <p className="text-xl text-slate-300 font-light mb-8 max-w-2xl leading-relaxed">
                {course.summary}
              </p>

              {/* Meta Tags */}
              <div className="flex flex-wrap gap-4 mb-10">
                <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                  <BarChart className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{course.level}</span>
                </div>
                {course.duration && (
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{course.duration}</span>
                  </div>
                )}
                {course.date && (
                  <div className="flex items-center gap-2 text-slate-300 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
                    <Calendar className="w-4 h-4 text-blue-400" />
                    <span className="text-sm">{course.date}</span>
                  </div>
                )}
              </div>

              {/* Main Desktop CTA */}
              <div className="hidden sm:flex items-center gap-6">
                <Link
                  href={ctaHref}
                  data-cta="course_interest"
                  data-course={course.slug}
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                {course.price && (
                  <div className="text-slate-300 font-medium">
                    {course.currency} {course.price}
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Visual Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl bg-slate-900/50 border border-slate-800 p-8 overflow-hidden backdrop-blur-sm">
                <div className="absolute inset-0 bg-linear-to-b from-blue-500/5 to-transparent opacity-50" />
                <h3 className="text-blue-400 font-mono text-sm uppercase tracking-wider mb-4 relative z-10">
                  Resultado del taller
                </h3>
                <p className="text-2xl text-white font-light leading-snug relative z-10 italic">
                  &ldquo;{course.outcome}&rdquo;
                </p>
                <div className="mt-8 grid grid-cols-2 gap-4 relative z-10">
                  {course.deliverables.map((item, idx) => (
                    <div key={idx} className="flex gap-2">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Left Column (Content) */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* Para quién es */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">Para quién es</h2>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                  <ul className="space-y-4">
                    {course.audience.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Qué aprenderás */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">Qué aprenderás</h2>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {course.learningObjectives.map((item, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex gap-4 items-start">
                      <span className="text-blue-200 font-mono text-lg font-bold">0{idx + 1}</span>
                      <p className="text-slate-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Agenda */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <LayoutList className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">Agenda</h2>
                </div>
                <div className="bg-white rounded-2xl border border-slate-200 shadow-xs overflow-hidden">
                  {course.agenda.map((item, idx) => (
                    <div key={idx} className="border-b border-slate-100 last:border-0 p-5">
                      <h4 className="font-mono text-slate-800 font-medium">{item.title}</h4>
                      {item.items && (
                        <ul className="mt-3 space-y-2 pl-4 border-l-2 border-slate-100">
                          {item.items.map((sub, i) => (
                            <li key={i} className="text-slate-600 text-sm">{sub}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <h2 className="text-2xl font-semibold text-slate-900">Preguntas Frecuentes</h2>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                    <h4 className="font-semibold text-slate-900 mb-2">¿Necesito conocimientos previos de programación?</h4>
                    <p className="text-slate-600 text-sm">
                      {course.level.includes("Avanzado") 
                        ? "Sí, este taller asume conocimientos técnicos intermedios y familiaridad con conceptos de APIs." 
                        : "No. Todos nuestros talleres iniciales e intermedios están diseñados para perfiles no técnicos. Usamos herramientas No-Code o asistidas por IA."}
                    </p>
                  </div>
                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs">
                    <h4 className="font-semibold text-slate-900 mb-2">¿Tendré acceso al material después del taller?</h4>
                    <p className="text-slate-600 text-sm">Sí, tendrás acceso al proyecto construido durante la sesión y a los recursos principales del taller.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (Sidebar) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Tools */}
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs sticky top-28">
                <h3 className="text-lg font-semibold text-slate-900 mb-6 flex items-center gap-2">
                  <Hammer className="w-5 h-5 text-blue-600" />
                  Herramientas
                </h3>
                <div className="flex flex-wrap gap-2 mb-8">
                  {course.tools.map((tool, idx) => (
                    <span key={idx} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="border-t border-slate-100 pt-8 mb-8">
                  <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider mb-4">
                    Resumen de entrega
                  </h3>
                  <ul className="space-y-3">
                    {course.deliverables.map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={ctaHref}
                  data-cta="course_interest"
                  data-course={course.slug}
                  className="w-full flex items-center justify-center px-6 py-4 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors"
                >
                  {ctaText}
                </Link>
                {course.price && (
                  <p className="text-center text-slate-500 mt-4 text-sm font-medium">
                    {course.currency} {course.price}
                  </p>
                )}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-10px_20px_-10px_rgba(0,0,0,0.1)] z-50">
        <div className="flex items-center justify-between gap-4">
          <div className="text-xs">
            {course.date ? (
              <span className="font-semibold text-slate-900 block">{course.date}</span>
            ) : (
              <span className="font-semibold text-slate-900 block">Próxima edición</span>
            )}
            <span className="text-slate-500">{course.price ? `${course.currency} ${course.price}` : "Por anunciar"}</span>
          </div>
          <Link
            href={ctaHref}
            data-cta="course_interest_mobile"
            data-course={course.slug}
            className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full font-semibold text-sm hover:bg-blue-500 transition-colors"
          >
            {ctaText}
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  );
}
