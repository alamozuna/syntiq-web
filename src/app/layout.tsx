import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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
  title: "SyntIQ | Transformamos el caos operativo en un sistema inteligente",
  description:
    "Infraestructura tecnológica y soluciones avanzadas de Inteligencia Artificial, Agentes Autónomos y Data Engineering para empresas. Conecta · Ordena · Impulsa.",
  keywords: [
    "SyntIQ",
    "Inteligencia Artificial para Empresas",
    "Automatización de Procesos",
    "Agentes Autónomos",
    "Data Engineering",
    "n8n AI Workflows",
    "Auditoría Operativa IA",
    "Gobernanza de IA",
  ],
  authors: [{ name: "SyntIQ Enterprise AI" }],
  creator: "SyntIQ",
  publisher: "SyntIQ",
  icons: {
    icon: "/assets/icon-syntiq.png",
    apple: "/assets/icon-syntiq.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://syntiq.ai",
    title: "SyntIQ | Enterprise AI & Autonomous Operations",
    description:
      "Erradicamos los cuellos de botella y transformamos la ineficiencia en rentabilidad neta mediante sistemas inteligentes.",
    siteName: "SyntIQ",
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
    title: "SyntIQ | Enterprise AI & Autonomous Operations",
    description:
      "Transformamos el caos operativo en un sistema inteligente que piensa por ti.",
    images: ["/assets/logo-syntiq.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
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
      <body className="antialiased selection:bg-blue-600/20 selection:text-slate-900 bg-white text-slate-900 min-h-screen">
        {children}
      </body>
    </html>
  );
}
