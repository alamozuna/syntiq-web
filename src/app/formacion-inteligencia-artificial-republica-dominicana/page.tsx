import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import {
  Sparkles,
  ArrowRight,
  GraduationCap,
  Building2,
  Cpu,
  Wrench,
  Users,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  MapPin,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Formación en Inteligencia Artificial en República Dominicana",
  description:
    "Talleres prácticos y formación profesional de IA en República Dominicana. Aprende a construir automatizaciones, agentes y aplicaciones reales con SyntIQ Group.",
  alternates: {
    canonical: "/formacion-inteligencia-artificial-republica-dominicana",
  },
  openGraph: {
    title:
      "Formación en Inteligencia Artificial en República Dominicana | SyntIQ Group",
    description:
      "Talleres prácticos y formación profesional de IA en República Dominicana. Aprende IA construyendo soluciones reales.",
    url: "https://www.syntiqgroup.com/formacion-inteligencia-artificial-republica-dominicana",
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Formación en Inteligencia Artificial en República Dominicana",
  description:
    "Programa de formación práctica en IA para profesionales y empresas dominicanas. Talleres presenciales y virtuales, formación in-company y programa modular.",
  provider: {
    "@type": "Organization",
    name: "SyntIQ Group",
    url: "https://www.syntiqgroup.com/",
  },
  availableLanguage: "es",
  areaServed: {
    "@type": "Country",
    name: "República Dominicana",
  },
  hasCourseInstance: [
    {
      "@type": "CourseInstance",
      courseMode: ["onsite", "online"],
      courseWorkload: "PT2H-PT4H",
      name: "Talleres Intensivos de IA",
    },
    {
      "@type": "CourseInstance",
      courseMode: ["onsite", "online"],
      name: "Programa Modular de IA",
    },
    {
      "@type": "CourseInstance",
      courseMode: "onsite",
      name: "Formación In-Company",
    },
  ],
};

const TOOLS = [
  "ChatGPT",
  "Claude",
  "n8n",
  "Make",
  "Cursor",
  "Bolt",
  "Supabase",
  "Notion AI",
  "Google Gemini",
  "GitHub Copilot",
];

const FAQS = [
  {
    q: "¿Las formaciones son presenciales o virtuales?",
    a: "Ofrecemos ambas modalidades. Los talleres intensivos pueden ser presenciales en República Dominicana o virtuales en tiempo real. La formación in-company se adapta a la preferencia de cada organización.",
  },
  {
    q: "¿Necesito conocimientos técnicos previos?",
    a: "No para nuestros talleres iniciales e intermedios. Están diseñados para profesionales de cualquier área que quieran aplicar IA en su trabajo diario. Cada formación indica el nivel recomendado.",
  },
  {
    q: "¿Qué diferencia a SyntIQ de otros cursos de IA?",
    a: "Nuestra metodología se basa en construir soluciones reales desde la primera sesión. No enseñamos teoría abstracta: sales de cada taller con un sistema funcionando que puedes aplicar inmediatamente.",
  },
  {
    q: "¿Ofrecen formación para empresas dominicanas?",
    a: "Sí. Nuestro formato In-Company se adapta a las herramientas, procesos y políticas de tu organización. Diseñamos el programa directamente sobre los cuellos de botella reales de tu equipo.",
  },
  {
    q: "¿Cuál es la inversión?",
    a: "Cada formación tiene su propio formato y condiciones. Contacta con nosotros y te enviaremos toda la información detallada incluyendo precios según la modalidad que te interese.",
  },
  {
    q: "¿Entregan certificado?",
    a: "Sí. Al completar cada formación recibes un certificado de SyntIQ Group que acredita las competencias adquiridas y las herramientas dominadas durante el programa.",
  },
];

export default function FormacionIARDPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-blue-600/20 selection:text-slate-900">
      <JsonLd data={courseSchema} />
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white border-b border-slate-200">
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[400px] bg-blue-100/40 blur-[130px] rounded-full" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 shadow-xs mb-5">
            <MapPin className="w-3.5 h-3.5" />
            <span className="text-[10px] tracking-widest uppercase font-semibold font-mono">
              REPÚBLICA DOMINICANA
            </span>
          </div>

          <h1 className="font-brand-display text-4xl sm:text-5xl lg:text-6xl font-light text-[#0F172A] tracking-tight leading-[1.08] mb-6">
            Formación en Inteligencia Artificial{" "}
            <span className="italic font-normal text-blue-600">
              en República Dominicana
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto mb-8">
            Talleres prácticos, programas modulares y formación para empresas.
            Aprende IA construyendo automatizaciones, aplicaciones y agentes
            reales que puedes aplicar desde el primer día.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Link
              href="/formaciones"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm sm:text-base px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <span>Ver formaciones disponibles</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacto?modalidad=in-company"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-slate-100 text-slate-700 font-medium text-sm sm:text-base px-6 py-3.5 rounded-full border border-slate-300 hover:border-slate-400 transition-all duration-200"
            >
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>Formación para mi empresa</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Qué ofrece SyntIQ Group ── */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase block mb-3">
              QUÉ OFRECEMOS
            </span>
            <h2 className="font-brand-display text-3xl sm:text-4xl text-slate-900 font-light mb-4">
              Formación de IA diseñada para construir, no solo entender.
            </h2>
            <p className="text-base text-slate-600 font-light leading-relaxed">
              En{" "}
              <Link
                href="/nosotros"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                SyntIQ Group
              </Link>{" "}
              creemos que la mejor forma de aprender Inteligencia Artificial es
              construyendo soluciones funcionales desde la primera sesión.
              Nuestras formaciones están pensadas para profesionales y empresas
              en República Dominicana que quieren resultados reales, no teoría
              abstracta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/formaciones/talleres-intensivos"
              className="group p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-5">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                Talleres Presenciales y Virtuales
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Sesiones de 2 a 4 horas enfocadas en resolver un flujo
                específico. Sales con una solución operativa lista para usar en
                tu trabajo diario.
              </p>
            </Link>

            <Link
              href="/formaciones/in-company"
              className="group p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mb-5">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                Formación para Empresas
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Programas a medida para equipos corporativos. Adaptamos la
                formación a las herramientas, políticas y procesos reales de tu
                organización.
              </p>
            </Link>

            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center text-indigo-600 mb-5">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Formación para Profesionales
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed">
                Programa modular que te lleva de los fundamentos de prompting a
                construir tu propio sistema inteligente y automatizado, con
                proyecto personal validado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── IA Aplicada & Automatización ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase block mb-3">
                AUTOMATIZACIÓN E IA APLICADA
              </span>
              <h2 className="font-brand-display text-3xl sm:text-4xl text-slate-900 font-light mb-4">
                Convierte tareas repetitivas en sistemas que trabajan por ti.
              </h2>
              <p className="text-base text-slate-600 font-light leading-relaxed mb-6">
                Nuestras formaciones te enseñan a crear automatizaciones reales
                con herramientas profesionales. Desde flujos simples con n8n
                hasta agentes autónomos que analizan, deciden y ejecutan.
              </p>

              <ul className="space-y-3 mb-8">
                {[
                  "Automatización de procesos con n8n, Make y APIs",
                  "Agentes de IA que investigan, redactan y operan",
                  "Vibe coding: construye aplicaciones sin ser programador",
                  "Prompting estructurado para resultados consistentes",
                  "Análisis de documentos y datos con LLMs",
                  "Integración de IA en flujos empresariales existentes",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-sm text-slate-700 font-light"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/formaciones"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
              >
                <span>Explorar todas las formaciones</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs">
              <div className="flex items-center gap-2 mb-6">
                <Cpu className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-wider">
                  Metodología: Aprender construyendo
                </span>
              </div>

              <div className="space-y-5">
                {[
                  {
                    step: "01",
                    title: "Entiende el problema",
                    desc: "Identificamos un proceso real de tu trabajo que puede mejorarse con IA.",
                  },
                  {
                    step: "02",
                    title: "Construye la solución",
                    desc: "Creas el flujo, la app o el agente durante la sesión, con guía experta.",
                  },
                  {
                    step: "03",
                    title: "Despliega y opera",
                    desc: "Sales de la formación con un sistema funcional listo para usar.",
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4">
                    <span className="text-2xl font-brand-display font-light text-blue-600/40">
                      {s.step}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-slate-900 mb-1">
                        {s.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Herramientas ── */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase block mb-2">
              HERRAMIENTAS QUE APRENDERÁS A UTILIZAR
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-mono text-slate-600"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── República Dominicana ── */}
      <section className="py-16 sm:py-20 bg-[#0F172A] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-[10px] tracking-widest uppercase font-semibold font-mono">
                  PRESENCIA LOCAL
                </span>
              </div>

              <h2 className="font-brand-display text-3xl sm:text-4xl font-light mb-4">
                IA práctica para República Dominicana
              </h2>
              <p className="text-slate-300 font-light leading-relaxed mb-6">
                SyntIQ Group nace con vocación de servir al mercado dominicano.
                Entendemos el contexto empresarial local, las necesidades de
                formación del país y las oportunidades que la Inteligencia
                Artificial abre para profesionales y organizaciones
                dominicanas.
              </p>
              <p className="text-slate-300 font-light leading-relaxed mb-8">
                Ya sea que dirijas una empresa en Santo Domingo, trabajes en
                Santiago, gestiones operaciones en cualquier ciudad del país o
                prefieras formarte virtualmente, nuestros programas se adaptan
                a tu realidad.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <Users className="w-5 h-5 text-blue-400 mb-2" />
                  <span className="text-xs font-medium text-white block">
                    Presencial y virtual
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Formación flexible para toda la isla
                  </span>
                </div>
                <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60">
                  <Wrench className="w-5 h-5 text-emerald-400 mb-2" />
                  <span className="text-xs font-medium text-white block">
                    Contexto local
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Casos adaptados al mercado dominicano
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-800/40 p-8 sm:p-10 rounded-3xl border border-slate-700">
              <h3 className="text-xl font-semibold mb-6">
                ¿Para quién es esta formación?
              </h3>
              <ul className="space-y-4">
                {[
                  "Profesionales que quieren integrar IA en su trabajo diario",
                  "Emprendedores que buscan automatizar procesos de su negocio",
                  "Equipos corporativos que necesitan adoptar IA de forma alineada",
                  "Departamentos de Marketing, Ventas, Operaciones y Dirección",
                  "Freelancers y consultores que quieren ofrecer servicios de IA",
                  "Perfiles no técnicos que quieren entender y usar la IA sin programar",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-slate-200 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="brand-label text-blue-600 font-semibold tracking-wider text-[10px] sm:text-[11px] uppercase block mb-3">
              PREGUNTAS FRECUENTES
            </span>
            <h2 className="font-brand-display text-3xl sm:text-4xl text-slate-900 font-light">
              Lo que más nos preguntan
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 text-sm font-semibold text-slate-900 hover:bg-slate-100 transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <span>{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 group-open:rotate-180 shrink-0 ml-4" />
                </summary>
                <div className="px-5 pb-5 text-sm text-slate-600 font-light leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="py-20 bg-gradient-to-b from-blue-50/60 to-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-brand-display text-3xl sm:text-5xl text-[#0F172A] font-light leading-tight">
            Empieza a construir con IA hoy.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Explora nuestras formaciones, elige el formato que mejor se adapte a
            ti o a tu equipo, y da el primer paso hacia la automatización
            inteligente.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/formaciones"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-semibold px-8 py-4 rounded-full transition-all shadow-sm hover:shadow-md"
            >
              <span>Ver formaciones</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-slate-100 text-slate-700 font-medium text-sm sm:text-base px-6 py-4 rounded-full border border-slate-300 hover:border-slate-400 transition-all duration-200"
            >
              <span>Contactar con SyntIQ</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
