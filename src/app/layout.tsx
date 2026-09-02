import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/seo/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://syntiq.ai"),
  title: {
    default: "SyntIQ | Formación práctica en Inteligencia Artificial",
    template: "%s | SyntIQ",
  },
  description:
    "Aprende IA construyendo automatizaciones, aplicaciones y agentes reales. Talleres prácticos para profesionales, equipos y empresas. Aprende · Construye · Automatiza.",
  keywords: [
    "SyntIQ",
    "Formación IA práctica",
    "Talleres de Inteligencia Artificial",
    "Aprender a construir agentes de IA",
    "Automatización con n8n",
    "Vibe coding",
    "Prompting estructurado",
    "Cursos de IA aplicada",
    "Formación IA para empresas",
  ],
  authors: [{ name: "SyntIQ" }],
  creator: "SyntIQ",
  publisher: "SyntIQ",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/icon-syntiq.png",
    apple: "/assets/icon-syntiq.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://syntiq.ai",
    siteName: "SyntIQ",
    title: "SyntIQ | Formación práctica en Inteligencia Artificial",
    description:
      "Aprende IA construyendo automatizaciones, aplicaciones y agentes reales. Talleres prácticos para profesionales, equipos y empresas.",
    images: [
      {
        url: "/assets/logo-syntiq.png",
        width: 1200,
        height: 630,
        alt: "SyntIQ - Aprende · Construye · Automatiza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyntIQ | Formación práctica en Inteligencia Artificial",
    description:
      "Aprende IA construyendo automatizaciones, aplicaciones y agentes reales. Talleres prácticos para profesionales y empresas.",
    images: ["/assets/logo-syntiq.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://syntiq.ai/#organization",
      name: "SyntIQ Academy",
      url: "https://syntiq.ai",
      logo: "https://syntiq.ai/assets/logo-syntiq.png",
      description:
        "Formaciones prácticas, talleres y cursos de Inteligencia Artificial para profesionales y empresas. Aprende a construir agentes autónomos y automatizar flujos reales.",
      slogan: "Aprende · Construye · Automatiza",
      founder: [
        {
          "@type": "Person",
          name: "Bryan Villar Sánchez",
          jobTitle: "Formador Principal de IA & Operaciones",
        },
        {
          "@type": "Person",
          name: "Alam Antonio Ozuna Silva",
          jobTitle: "Director Académico & Estrategia de Negocios",
        },
        {
          "@type": "Person",
          name: "Laura Nicole Espino Andújar",
          jobTitle: "Formadora de Gobernanza de IA & Propiedad Intelectual",
        },
        {
          "@type": "Person",
          name: "Karyleydi Ortiz Segura",
          jobTitle: "Coordinadora de Experiencia del Alumno & Operaciones",
        },
      ],
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://syntiq.ai/#website",
      url: "https://syntiq.ai",
      name: "SyntIQ",
      publisher: {
        "@id": "https://syntiq.ai/#organization",
      },
      inLanguage: "es",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${cormorant.variable} ${jakarta.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="antialiased selection:bg-blue-600/20 selection:text-slate-900 bg-white text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
