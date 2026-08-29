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
    default: "SyntIQ | Infraestructura de IA & Agentes Autónomos para Empresas",
    template: "%s | SyntIQ Enterprise AI",
  },
  description:
    "Infraestructura tecnológica y soluciones avanzadas de Inteligencia Artificial, Agentes Autónomos y Data Engineering para empresas. Conecta · Ordena · Impulsa.",
  keywords: [
    "SyntIQ",
    "Inteligencia Artificial para Empresas",
    "Agentes Autónomos",
    "Automatización de Procesos",
    "Data Engineering",
    "n8n Workflows",
    "Gobernanza de IA",
    "Human in the Loop",
    "Auditoría Operativa IA",
    "ISO 13485 IA",
  ],
  authors: [{ name: "SyntIQ Enterprise AI" }],
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
    siteName: "SyntIQ Enterprise AI",
    title: "SyntIQ | Infraestructura de IA & Agentes Autónomos para Empresas",
    description:
      "Erradicamos los cuellos de botella y transformamos la ineficiencia en rentabilidad neta mediante sistemas inteligentes y agentes autónomos 24/7.",
    images: [
      {
        url: "/assets/logo-syntiq.png",
        width: 1200,
        height: 630,
        alt: "SyntIQ - Conecta · Ordena · Impulsa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SyntIQ | Infraestructura de IA & Agentes Autónomos para Empresas",
    description:
      "Transformamos el caos operativo en un sistema inteligente que piensa por ti.",
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
      name: "SyntIQ Enterprise AI",
      url: "https://syntiq.ai",
      logo: "https://syntiq.ai/assets/logo-syntiq.png",
      description:
        "Infraestructura tecnológica y soluciones avanzadas de Inteligencia Artificial, Agentes Autónomos y Data Engineering para empresas.",
      slogan: "Conecta · Ordena · Impulsa",
      founder: [
        {
          "@type": "Person",
          name: "Bryan Villar Sánchez",
          jobTitle: "Ingeniero de Operaciones e IA",
        },
        {
          "@type": "Person",
          name: "Alam Antonio Ozuna Silva",
          jobTitle: "Estrategia de Negocios & Análisis de Datos",
        },
        {
          "@type": "Person",
          name: "Laura Nicole Espino Andújar",
          jobTitle: "Legal, Cumplimiento & Propiedad Intelectual",
        },
        {
          "@type": "Person",
          name: "Karyleydi Ortiz Segura",
          jobTitle: "Comercio Internacional & Experiencia de Cliente",
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
