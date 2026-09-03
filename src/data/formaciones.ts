export type FormacionStatus = "AVAILABLE" | "COMING_SOON" | "WAITLIST" | "DRAFT";

export type NivelFormacion = "Inicial" | "Intermedio" | "Avanzado" | "Inicial / Intermedio" | "Intermedio / Avanzado";

export interface Formacion {
  id: string;
  slug: string;
  title: string;
  shortTitle?: string;
  eyebrow: string;
  format: string; // "Taller Intensivo", "Programa Modular", "Formación In-Company"
  category: string;
  level: NivelFormacion;
  duration: string | null;
  summary: string; // Max 2 lines for the card
  outcome: string; // What they will build (CONSTRUYES / TE LLEVAS)
  audience: string[]; // For who
  deliverables: string[]; // What they get
  tools: string[]; // e.g. "n8n", "Gmail", "Gemini"
  prerequisites?: string[];
  learningObjectives: string[];
  agenda: { title: string; items?: string[] }[];
  instructor: string | null;
  status: FormacionStatus;
  date: string | null; // e.g. "24 OCT · 6:00 PM"
  schedule: string | null;
  price: number | null;
  currency: string | null;
  seats: number | null;
  featured: boolean;
  seoTitle: string;
  seoDescription: string;
}

export const formaciones: Formacion[] = [
  {
    id: "f-01",
    slug: "prompting-blueprints",
    title: "De Prompt a Blueprint",
    eyebrow: "PROMPTING AVANZADO",
    format: "Taller Intensivo",
    category: "PROMPTING",
    level: "Inicial / Intermedio",
    duration: "2-3 horas",
    summary: "Deja de improvisar instrucciones y aprende a diseñar sistemas de prompts reutilizables.",
    outcome: "Tu propia biblioteca profesional de prompts y blueprints reutilizables.",
    audience: [
      "Profesionales",
      "Líderes de equipo",
      "Analistas",
      "Creadores",
      "Personas que utilizan IA diariamente"
    ],
    deliverables: [
      "Biblioteca de prompts funcionales",
      "Plantilla de blueprint scaffolding",
      "Material de apoyo"
    ],
    tools: ["ChatGPT", "Claude", "Gemini"],
    learningObjectives: [
      "Diseñar instrucciones con contexto y restricciones",
      "Manejar el formato de salida y criterios de calidad",
      "Aplicar Prompt Reversal",
      "Crear Blueprint Scaffolding"
    ],
    agenda: [
      { title: "01 — FUNDAMENTOS" },
      { title: "02 — BUILD" },
      { title: "03 — CONEXIONES" },
      { title: "04 — PRUEBAS" },
      { title: "05 — DEPLOY" }
    ],
    instructor: null,
    status: "AVAILABLE",
    date: null,
    schedule: null,
    price: null,
    currency: null,
    seats: null,
    featured: true,
    seoTitle: "De Prompt a Blueprint | Taller SyntIQ",
    seoDescription: "Aprende a diseñar sistemas de prompts reutilizables."
  },
  {
    id: "f-02",
    slug: "ia-invisible-productividad",
    title: "IA Invisible: trabaja con IA sin romper tu flujo",
    eyebrow: "PRODUCTIVIDAD",
    format: "Taller Intensivo",
    category: "PRODUCTIVIDAD",
    level: "Inicial",
    duration: null,
    summary: "Convierte prompts frecuentes en acciones disponibles desde cualquier aplicación.",
    outcome: "Un sistema personal de shortcuts que invoca tus prompts frecuentes en segundos.",
    audience: [
      "Profesionales con alta carga administrativa"
    ],
    deliverables: [
      "Setup completo de IA Invisible",
      "Colección de snippets",
      "Flujo automatizado básico"
    ],
    tools: ["Raycast", "Integraciones nativas"],
    learningObjectives: [
      "Reducir el context switching",
      "Configurar text expanders y shortcuts",
      "Lanzar instrucciones rápidamente",
      "Automatizar pequeñas tareas frecuentes"
    ],
    agenda: [
      { title: "01 — FUNDAMENTOS" },
      { title: "02 — BUILD" },
      { title: "03 — CONEXIONES" },
      { title: "04 — PRUEBAS" },
      { title: "05 — DEPLOY" }
    ],
    instructor: null,
    status: "DRAFT",
    date: null,
    schedule: null,
    price: null,
    currency: null,
    seats: null,
    featured: false,
    seoTitle: "IA Invisible | Taller SyntIQ",
    seoDescription: "Trabaja con IA sin romper tu flujo usando automatizaciones rápidas."
  },
  {
    id: "f-03",
    slug: "segundo-cerebro-ia",
    title: "Tu Segundo Cerebro con IA",
    eyebrow: "CONOCIMIENTO",
    format: "Taller Intensivo",
    category: "CONOCIMIENTO",
    level: "Inicial / Intermedio",
    duration: null,
    summary: "Convierte documentos, reuniones y fuentes dispersas en conocimiento consultable.",
    outcome: "Un espacio de conocimiento basado en tus propias fuentes, listo para investigar y consultar.",
    audience: [
      "Estudiantes",
      "Investigadores",
      "Analistas",
      "Consultores",
      "Managers"
    ],
    deliverables: [
      "Espacio funcional en NotebookLM/Gemini",
      "Guía de organización de fuentes"
    ],
    tools: ["NotebookLM", "Gemini"],
    learningObjectives: [
      "Organización de fuentes y grounding",
      "Síntesis y comparación de documentos",
      "Extracción de insights",
      "Reducción de infoxicación"
    ],
    agenda: [
      { title: "01 — FUNDAMENTOS" },
      { title: "02 — BUILD" },
      { title: "03 — CONEXIONES" },
      { title: "04 — PRUEBAS" },
      { title: "05 — DEPLOY" }
    ],
    instructor: null,
    status: "AVAILABLE",
    date: null,
    schedule: null,
    price: null,
    currency: null,
    seats: null,
    featured: true,
    seoTitle: "Tu Segundo Cerebro con IA | Taller SyntIQ",
    seoDescription: "Convierte documentos dispersos en conocimiento consultable con IA."
  },
  {
    id: "f-04",
    slug: "documentos-a-decisiones",
    title: "De 100 páginas a 10 decisiones",
    eyebrow: "ANÁLISIS",
    format: "Taller Intensivo",
    category: "CONOCIMIENTO",
    level: "Intermedio",
    duration: null,
    summary: "Aprende a convertir documentos extensos en información accionable.",
    outcome: "Un workflow para transformar documentos extensos en un briefing ejecutivo estructurado.",
    audience: [
      "Analistas",
      "Consultores",
      "Managers",
      "Estudiantes",
      "Investigadores"
    ],
    deliverables: [
      "Workflow de análisis documental",
      "Plantilla de briefing ejecutivo"
    ],
    tools: ["NotebookLM", "Gemini", "Claude"],
    learningObjectives: [
      "Formular buenas preguntas",
      "Identificar información relevante",
      "Extracción estructurada y comparación",
      "Establecer criterios de decisión con revisión humana"
    ],
    agenda: [
      { title: "01 — FUNDAMENTOS" },
      { title: "02 — BUILD" },
      { title: "03 — CONEXIONES" },
      { title: "04 — PRUEBAS" },
      { title: "05 — DEPLOY" }
    ],
    instructor: null,
    status: "DRAFT",
    date: null,
    schedule: null,
    price: null,
    currency: null,
    seats: null,
    featured: false,
    seoTitle: "De 100 páginas a 10 decisiones | Taller SyntIQ",
    seoDescription: "Convierte documentos extensos en información accionable."
  },
  {
    id: "f-05",
    slug: "vibe-coding-idea-app",
    title: "De Idea a App con IA",
    eyebrow: "VIBE CODING",
    format: "Taller Intensivo",
    category: "VIBE CODING",
    level: "Inicial / Intermedio",
    duration: null,
    summary: "Convierte una idea en una aplicación funcional utilizando desarrollo asistido por agentes.",
    outcome: "Una aplicación o herramienta web funcional y desplegada.",
    audience: [
      "Emprendedores",
      "Analistas",
      "Equipos de producto",
      "Profesionales no técnicos",
      "Personas con ideas que quieren prototipar rápidamente"
    ],
    deliverables: [
      "Proyecto funcional desplegado",
      "Código fuente",
      "Guía de prompting para código"
    ],
    tools: ["Claude Code", "Gemini", "GitHub", "Vercel"],
    learningObjectives: [
      "Estructurar requerimientos y prototipado",
      "Dominar el prompting para código y agentic coding",
      "Iteración visual y debugging",
      "Despliegue y validación del producto"
    ],
    agenda: [
      { title: "01 — FUNDAMENTOS" },
      { title: "02 — BUILD" },
      { title: "03 — CONEXIONES" },
      { title: "04 — PRUEBAS" },
      { title: "05 — DEPLOY" }
    ],
    instructor: null,
    status: "AVAILABLE",
    date: null,
    schedule: null,
    price: null,
    currency: null,
    seats: null,
    featured: true,
    seoTitle: "De Idea a App con IA | Taller SyntIQ",
    seoDescription: "Convierte una idea en una aplicación funcional utilizando Vibe Coding."
  },
  {
    id: "f-06",
    slug: "arquitecto-workflows",
    title: "Arquitecto de Workflows con IA",
    eyebrow: "AUTOMATIZACIÓN",
    format: "Taller Intensivo",
    category: "AUTOMATIZACIÓN",
    level: "Intermedio / Avanzado",
    duration: null,
    summary: "Conecta aplicaciones, datos e inteligencia artificial en un flujo de trabajo real.",
    outcome: "Una automatización multietapa que recibe información, toma una decisión y ejecuta una acción.",
    audience: [
      "Operaciones",
      "Administración",
      "Founders",
      "Analistas",
      "Automadores"
    ],
    deliverables: [
      "Workflow funcional multietapa en n8n",
      "Documentación del flujo"
    ],
    tools: ["n8n"],
    learningObjectives: [
      "Configurar triggers, actions, APIs y webhooks",
      "Utilizar routers y condicionales",
      "Procesar datos estructurados y manejar errores",
      "Conectar modelos de IA"
    ],
    agenda: [
      { title: "01 — FUNDAMENTOS" },
      { title: "02 — BUILD" },
      { title: "03 — CONEXIONES" },
      { title: "04 — PRUEBAS" },
      { title: "05 — DEPLOY" }
    ],
    instructor: null,
    status: "AVAILABLE",
    date: null,
    schedule: null,
    price: null,
    currency: null,
    seats: null,
    featured: true,
    seoTitle: "Arquitecto de Workflows con IA | Taller SyntIQ",
    seoDescription: "Conecta aplicaciones e IA en un flujo de trabajo real."
  },
  {
    id: "f-07",
    slug: "ia-google-workspace",
    title: "IA en Google Workspace",
    eyebrow: "PRODUCTIVIDAD",
    format: "Taller Intensivo",
    category: "PRODUCTIVIDAD",
    level: "Inicial",
    duration: null,
    summary: "Convierte Gmail, Docs y Sheets en un entorno de trabajo asistido por IA.",
    outcome: "Un flujo de productividad conectado a las herramientas que ya utilizas.",
    audience: [
      "Administración",
      "Ventas",
      "Operaciones",
      "Marketing",
      "Managers"
    ],
    deliverables: [
      "Automatizaciones configuradas en tu cuenta",
      "Plantillas de automatización sencillas"
    ],
    tools: ["Gmail", "Docs", "Sheets", "Drive", "Gemini"],
    learningObjectives: [
      "Implementar automatizaciones sencillas",
      "Generar y transformar información",
      "Crear respuestas automáticas",
      "Extraer tareas de correos"
    ],
    agenda: [
      { title: "01 — FUNDAMENTOS" },
      { title: "02 — BUILD" },
      { title: "03 — CONEXIONES" },
      { title: "04 — PRUEBAS" },
      { title: "05 — DEPLOY" }
    ],
    instructor: null,
    status: "AVAILABLE",
    date: null,
    schedule: null,
    price: null,
    currency: null,
    seats: null,
    featured: true,
    seoTitle: "IA en Google Workspace | Taller SyntIQ",
    seoDescription: "Convierte Gmail, Docs y Sheets en un entorno de trabajo asistido por IA."
  },
  {
    id: "f-08",
    slug: "apis-oauth-webhooks",
    title: "APIs, OAuth y Webhooks sin miedo",
    eyebrow: "AUTOMATIZACIÓN",
    format: "Taller Intensivo",
    category: "AUTOMATIZACIÓN",
    level: "Inicial / Intermedio",
    duration: null,
    summary: "Entiende cómo conectar herramientas sin perderte entre credenciales y permisos.",
    outcome: "Una integración real entre una aplicación y un workflow de automatización.",
    audience: [
      "Principiantes en automatización",
      "Founders",
      "Operaciones",
      "Analistas"
    ],
    deliverables: [
      "Integración funcional conectada vía API",
      "Guía de buenas prácticas y seguridad"
    ],
    tools: ["n8n", "REST APIs"],
    learningObjectives: [
      "Entender requests, responses y JSON básico",
      "Configurar API keys y OAuth",
      "Utilizar webhooks de forma segura",
      "Manejar scopes, permisos y credenciales"
    ],
    agenda: [
      { title: "01 — FUNDAMENTOS" },
      { title: "02 — BUILD" },
      { title: "03 — CONEXIONES" },
      { title: "04 — PRUEBAS" },
      { title: "05 — DEPLOY" }
    ],
    instructor: null,
    status: "DRAFT",
    date: null,
    schedule: null,
    price: null,
    currency: null,
    seats: null,
    featured: false,
    seoTitle: "APIs, OAuth y Webhooks sin miedo | Taller SyntIQ",
    seoDescription: "Entiende cómo conectar herramientas sin perderte entre credenciales."
  },
  {
    id: "f-09",
    slug: "agentes-evaluador-optimizador",
    title: "Agentes que revisan su propio trabajo",
    eyebrow: "AGENTES",
    format: "Taller Intensivo",
    category: "AGENTES",
    level: "Intermedio / Avanzado",
    duration: null,
    summary: "Pasa de un prompt lineal a workflows que evalúan resultados antes de continuar.",
    outcome: "Un workflow donde una segunda etapa evalúa el resultado antes de aprobarlo.",
    audience: [
      "Analistas",
      "Automadores",
      "Builders",
      "Equipos que necesitan mayor consistencia"
    ],
    deliverables: [
      "Workflow funcional con agente evaluador",
      "Plantilla de criterios de scoring"
    ],
    tools: ["n8n", "Modelos de IA"],
    learningObjectives: [
      "Diseñar el binomio agente generador y evaluador",
      "Establecer criterios de calidad y feedback",
      "Implementar reintentos y routing basado en scoring",
      "Diseñar el loop human-in-the-loop y definir límites de autonomía"
    ],
    agenda: [
      { title: "01 — FUNDAMENTOS" },
      { title: "02 — BUILD" },
      { title: "03 — CONEXIONES" },
      { title: "04 — PRUEBAS" },
      { title: "05 — DEPLOY" }
    ],
    instructor: null,
    status: "AVAILABLE",
    date: null,
    schedule: null,
    price: null,
    currency: null,
    seats: null,
    featured: true,
    seoTitle: "Agentes que revisan su propio trabajo | Taller SyntIQ",
    seoDescription: "Pasa de un prompt lineal a workflows que evalúan resultados antes de continuar."
  },
  {
    id: "f-10",
    slug: "automatizaciones-resilientes",
    title: "Automatizaciones resistentes a errores",
    eyebrow: "AUTOMATIZACIÓN",
    format: "Taller Intensivo",
    category: "AUTOMATIZACIÓN",
    level: "Intermedio / Avanzado",
    duration: null,
    summary: "Aprende a diseñar workflows que detecten fallos, protejan credenciales y avisen cuando algo sale mal.",
    outcome: "Un sistema centralizado de manejo de errores y alertas para automatizaciones.",
    audience: [
      "Operaciones",
      "Automadores",
      "Desarrolladores"
    ],
    deliverables: [
      "Workflow de control de errores",
      "Módulo de alertas funcional"
    ],
    tools: ["n8n"],
    learningObjectives: [
      "Diseñar error workflows y retries",
      "Implementar logs y alertas",
      "Aplicar secret management básico y control de permisos",
      "Diseñar fallbacks y supervisión humana"
    ],
    agenda: [
      { title: "01 — FUNDAMENTOS" },
      { title: "02 — BUILD" },
      { title: "03 — CONEXIONES" },
      { title: "04 — PRUEBAS" },
      { title: "05 — DEPLOY" }
    ],
    instructor: null,
    status: "DRAFT",
    date: null,
    schedule: null,
    price: null,
    currency: null,
    seats: null,
    featured: false,
    seoTitle: "Automatizaciones resistentes a errores | Taller SyntIQ",
    seoDescription: "Diseña workflows que detecten fallos y avisen cuando algo sale mal."
  },
  {
    id: "f-11",
    slug: "cabina-de-mando-ia",
    title: "¿Qué debe hacer la IA y qué debes seguir haciendo tú?",
    eyebrow: "PRODUCTIVIDAD",
    format: "Taller Intensivo",
    category: "PRODUCTIVIDAD",
    level: "Inicial / Intermedio",
    duration: null,
    summary: "Aprende a decidir cuándo automatizar, cuándo colaborar y cuándo mantener control humano.",
    outcome: "Un mapa de automatización para un proceso real de tu trabajo o empresa.",
    audience: [
      "Managers",
      "Founders",
      "Operaciones",
      "Líderes de equipo"
    ],
    deliverables: [
      "Mapa estratégico de automatización",
      "Plantilla de evaluación de riesgo"
    ],
    tools: ["Diagramación estratégica"],
    learningObjectives: [
      "Identificar riesgo y coste del error",
      "Evaluar repetitividad vs reversibilidad",
      "Determinar autonomía adecuada",
      "Diseñar procesos human-in-the-loop"
    ],
    agenda: [
      { title: "01 — FUNDAMENTOS" },
      { title: "02 — BUILD" },
      { title: "03 — CONEXIONES" },
      { title: "04 — PRUEBAS" },
      { title: "05 — DEPLOY" }
    ],
    instructor: null,
    status: "DRAFT",
    date: null,
    schedule: null,
    price: null,
    currency: null,
    seats: null,
    featured: false,
    seoTitle: "La Cabina de Mando IA | Taller SyntIQ",
    seoDescription: "Aprende a decidir cuándo automatizar, colaborar y mantener control."
  }
];
