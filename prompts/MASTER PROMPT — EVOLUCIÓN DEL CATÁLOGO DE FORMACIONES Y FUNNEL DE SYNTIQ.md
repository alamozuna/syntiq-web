# MASTER PROMPT — EVOLUCIÓN DEL CATÁLOGO DE FORMACIONES Y FUNNEL DE SYNTIQ

Actúa como un equipo compuesto por:

- Senior Product Designer
- UX/UI Designer especializado en EdTech
- CRO Specialist
- Information Architect
- Senior Frontend Engineer
- Product Manager de plataformas educativas de Inteligencia Artificial

Vas a trabajar sobre el proyecto EXISTENTE de SyntIQ.

Sitio actual:

https://syntiq-web-seven.vercel.app/

Página principal de formaciones:

https://syntiq-web-seven.vercel.app/formaciones

## MISIÓN

NO rehagas el sitio desde cero.

La página `/formaciones` actual ya tiene una buena base visual.

Esta iteración debe transformar el sistema actual en un funnel educativo completo:

HOME
↓
FORMACIONES
↓
FORMACIÓN ESPECÍFICA
↓
INSCRIPCIÓN / INTERÉS
↓
CONTACTO / ADMISIÓN

Además debes solucionar las rutas incompletas y convertir el catálogo de SyntIQ en algo escalable.

La percepción final debe ser:

“SyntIQ tiene formaciones concretas donde construyo algo útil con IA.”

NO:

“SyntIQ tiene una página genérica diciendo que ofrece talleres.”

---

# 1. AUDITA ANTES DE MODIFICAR

Antes de escribir código:

1. Inspecciona routing.
2. Identifica framework.
3. Identifica si usa App Router / Pages Router / React Router u otro.
4. Localiza `/formaciones`.
5. Localiza `/contacto`.
6. Localiza navbar y footer.
7. Detecta componentes de cards.
8. Detecta sistema de diseño.
9. Detecta datos hardcodeados.
10. Detecta forms existentes.
11. Revisa query parameters actuales.
12. Revisa responsive.
13. Revisa animaciones.
14. Revisa SEO metadata.

NO crees una arquitectura paralela.

Extiende la arquitectura existente.

---

# 2. RUTAS QUE DEBEN FUNCIONAR

Actualmente existe una arquitectura conceptual con:

/formaciones

/formaciones/talleres-intensivos

/formaciones/curso-modular

/formaciones/in-company

Asegúrate de que TODAS sean rutas reales o redirects válidos.

No puede quedar ningún 404 interno.

La arquitectura recomendada es:

/formaciones

Página general del catálogo.

--------------------------------------------------

/formaciones/talleres-intensivos

Listado de talleres cortos.

--------------------------------------------------

/formaciones/curso-modular

Información del programa modular.

Si se decide utilizar como canonical:

/formaciones/programa-modular

mantener un redirect desde:

/formaciones/curso-modular

para no romper enlaces existentes.

--------------------------------------------------

/formaciones/in-company

Formación empresarial.

--------------------------------------------------

Para talleres individuales utilizar:

/formaciones/talleres/[slug]

Ejemplos:

/formaciones/talleres/prompting-blueprints

/formaciones/talleres/segundo-cerebro-ia

/formaciones/talleres/vibe-coding

---

# 3. NO HARDCODEAR CADA CURSO EN UN COMPONENTE DIFERENTE

Crear un sistema escalable de datos.

Por ejemplo:

data/formaciones.ts

o equivalente apropiado para la arquitectura existente.

Cada formación debería aceptar como mínimo:

id
slug
title
shortTitle
eyebrow
format
category
level
duration
summary
outcome
audience
deliverable
tools
prerequisites
learningObjectives
agenda
instructor
status
date
schedule
price
currency
seats
featured
seoTitle
seoDescription

No es obligatorio mostrar todos los campos.

El objetivo es poder añadir futuras formaciones editando datos en vez de crear páginas manualmente.

---

# 4. MUY IMPORTANTE — NO INVENTAR DATOS COMERCIALES

Actualmente no debes inventar:

- precios;
- fechas;
- horarios;
- instructores;
- plazas disponibles;
- número de estudiantes;
- ratings;
- testimonios;
- resultados porcentuales;
- ROI;
- certificaciones.

Si un dato no existe:

utilizar null.

La UI debe manejar correctamente estos casos.

Por ejemplo:

SI HAY FECHA:

“24 OCT · 6:00 PM”

SI NO HAY FECHA:

“Próxima edición por anunciar”

SI HAY PRECIO:

mostrar precio.

SI NO HAY PRECIO:

NO escribir “Gratis” ni inventar precio.

Mostrar:

“Solicitar información”

o no mostrar ningún precio.

---

# 5. NO UTILIZAR CLAIMS ABSOLUTOS

Las ideas originales que inspiran estas formaciones contienen ocasionalmente expresiones como:

- cero alucinaciones;
- precisión absoluta;
- 90% de reducción;
- 99.9% uptime;
- reducción de costos garantizada.

NO utilizar esos claims en la web.

Sustituir por lenguaje riguroso.

Ejemplo:

NO:

“Construye agentes con cero alucinaciones.”

SÍ:

“Construye agentes capaces de revisar y mejorar sus propias respuestas.”

NO:

“Reduce tus costes un 80%.”

SÍ:

“Aprende a identificar y reducir consumo innecesario de contexto.”

NO:

“Infraestructura 100% segura.”

SÍ:

“Implementa controles básicos para credenciales, errores y permisos.”

---

# 6. REDISEÑAR /FORMACIONES COMO CATÁLOGO

Mantener el hero actual:

“Elige cómo quieres aprender.”

Debajo conservar los tres grandes formatos:

TALLER INTENSIVO

PROGRAMA MODULAR

FORMACIÓN IN-COMPANY

Pero después añadir:

“Próximas formaciones”

o:

“Explora los talleres”

La página debe empezar a mostrar productos educativos concretos.

---

# 7. FILTROS DEL CATÁLOGO

Crear filtros simples.

NO crear un marketplace complejo.

Filtros sugeridos:

TODOS

PRODUCTIVIDAD

AUTOMATIZACIÓN

AGENTES

VIBE CODING

DATOS & CONOCIMIENTO

ADVANCED

En mobile:

scroll horizontal.

No utilizar dropdown complejo salvo que sea necesario.

---

# 8. TARJETA DE FORMACIÓN

Cada card debe comunicar suficiente información en aproximadamente 5 segundos.

Estructura recomendada:

[CATEGORÍA]

TÍTULO

Descripción de máximo 2 líneas.

[ NIVEL ] [ DURACIÓN ]

Construyes:

“Un workflow que clasifica y procesa correos automáticamente.”

Herramientas:

n8n · Gmail · Gemini

CTA:

“Ver formación”

Si tiene próxima fecha:

mostrarla.

Si no:

NO inventarla.

---

# 9. DESTACAR EL ENTREGABLE

Este es uno de los principales diferenciadores de SyntIQ.

Cada formación debe responder:

“¿CON QUÉ SALGO?”

Crear dentro de las cards o páginas individuales un bloque llamado:

CONSTRUYES

o:

TE LLEVAS

Ejemplos:

“Una aplicación funcional desplegada.”

“Un agente conectado a tus documentos.”

“Un workflow operativo en n8n.”

“Una biblioteca reutilizable de prompts.”

No vender simplemente conocimiento.

Vender capacidad + entregable.

---

# 10. CATÁLOGO INICIAL PROPUESTO

Utiliza las siguientes formaciones como CONTENIDO INICIAL DE EJEMPLO.

Deben quedar creadas en el modelo de datos para demostrar cómo funcionará el catálogo.

No inventar fechas ni precios.

---

# FORMACIÓN 01

## DE PROMPT A BLUEPRINT

Eyebrow:

PROMPTING AVANZADO

Título:

“De Prompt a Blueprint”

Subtítulo:

“Deja de improvisar instrucciones y aprende a diseñar sistemas de prompts reutilizables.”

Formato sugerido:

Taller Intensivo

Nivel:

Inicial / Intermedio

Duración sugerida para diseño:

2–3 horas

No presentar esa duración como dato confirmado si no está validada internamente.

Público:

- profesionales;
- líderes de equipo;
- analistas;
- creadores;
- personas que utilizan IA diariamente.

Problema:

La interacción de ida y vuelta con ChatGPT, Claude o Gemini produce resultados inconsistentes.

Aprenderás:

- contexto;
- restricciones;
- formato de salida;
- ejemplos;
- criterios de calidad;
- Prompt Reversal;
- Blueprint Scaffolding;
- creación de instrucciones reutilizables.

CONSTRUYES:

“Tu propia biblioteca profesional de prompts y blueprints reutilizables.”

Herramientas posibles:

ChatGPT
Claude
Gemini

CTA:

“Ver formación”

Slug:

prompting-blueprints

---

# FORMACIÓN 02

## IA INVISIBLE

Eyebrow:

PRODUCTIVIDAD

Título:

“IA Invisible: trabaja con IA sin romper tu flujo”

Subtítulo:

“Convierte prompts frecuentes en acciones disponibles desde cualquier aplicación.”

Concepto:

Reducir context switching.

Aprenderás:

- text expanders;
- shortcuts;
- snippets;
- prompts reutilizables;
- consultas rápidas;
- lanzamiento de instrucciones;
- automatización de pequeñas tareas frecuentes.

Herramientas posibles:

Raycast en macOS.

Para Windows utilizar alternativas compatibles con el entorno disponible.

No presentar Raycast como solución universal para Windows.

CONSTRUYES:

“Un sistema personal de shortcuts que invoca tus prompts frecuentes en segundos.”

Público:

Profesionales con alta carga administrativa.

Slug:

ia-invisible-productividad

---

# FORMACIÓN 03

## SEGUNDO CEREBRO CON IA

Eyebrow:

CONOCIMIENTO

Título:

“Tu Segundo Cerebro con IA”

Subtítulo:

“Convierte documentos, reuniones y fuentes dispersas en conocimiento consultable.”

Público:

- estudiantes;
- investigadores;
- analistas;
- consultores;
- managers.

Aprenderás:

- organización de fuentes;
- grounding;
- síntesis;
- comparación de documentos;
- extracción de insights;
- creación de guías;
- preguntas sobre fuentes;
- reducción de infoxicación.

Herramientas:

NotebookLM

Gemini

otras herramientas pertinentes ya existentes en el stack.

CONSTRUYES:

“Un espacio de conocimiento basado en tus propias fuentes, listo para investigar y consultar.”

Slug:

segundo-cerebro-ia

---

# FORMACIÓN 04

## DE 100 PÁGINAS A 10 DECISIONES

Eyebrow:

ANÁLISIS

Título:

“De 100 páginas a 10 decisiones”

Subtítulo:

“Aprende a convertir documentos extensos en información accionable.”

No posicionarlo como simple:

“resumir PDFs”.

Debe enseñar:

- formular buenas preguntas;
- identificar información relevante;
- extracción estructurada;
- comparación;
- tablas;
- insights;
- criterios de decisión;
- revisión humana.

CONSTRUYES:

“Un workflow para transformar documentos extensos en un briefing ejecutivo estructurado.”

Público:

Analistas
Consultores
Managers
Estudiantes
Investigadores

Herramientas:

NotebookLM
Gemini
ChatGPT o Claude cuando corresponda

Slug:

documentos-a-decisiones

---

# FORMACIÓN 05

## VIBE CODING — DE IDEA A APP

Eyebrow:

VIBE CODING

Título:

“De Idea a App con IA”

Subtítulo:

“Convierte una idea en una aplicación funcional utilizando desarrollo asistido por agentes.”

Esta debe ser una de las formaciones visualmente más importantes de SyntIQ.

Aprenderás:

- estructurar requerimientos;
- prototipado;
- prompting para código;
- agentic coding;
- iteración visual;
- debugging;
- uso de contexto;
- Git básico si corresponde;
- deployment;
- validación.

Herramientas posibles:

Google Antigravity

Claude Code

Gemini

GitHub

Vercel

Utilizar únicamente herramientas realmente enseñadas por SyntIQ.

CONSTRUYES:

“Una aplicación o herramienta web funcional y desplegada.”

Público:

- emprendedores;
- analistas;
- equipos de producto;
- profesionales no técnicos;
- personas con ideas que quieren prototipar rápidamente.

Slug:

vibe-coding-idea-app

---

# FORMACIÓN 06

## ARQUITECTO DE WORKFLOWS

Eyebrow:

AUTOMATIZACIÓN

Título:

“Arquitecto de Workflows con IA”

Subtítulo:

“Conecta aplicaciones, datos e inteligencia artificial en un flujo de trabajo real.”

Aprenderás:

- triggers;
- actions;
- APIs;
- webhooks;
- routers;
- condiciones;
- datos estructurados;
- manejo de errores;
- conexión de modelos de IA;
- integración de herramientas.

Herramienta principal recomendada para SyntIQ:

n8n

Puede mencionarse Make únicamente cuando realmente forme parte del contenido.

CONSTRUYES:

“Una automatización multietapa que recibe información, toma una decisión y ejecuta una acción.”

Público:

Operaciones
Administración
Founders
Analistas
Automadores

Slug:

arquitecto-workflows

---

# FORMACIÓN 07

## IA NATIVA EN GOOGLE WORKSPACE

Eyebrow:

PRODUCTIVIDAD

Título:

“IA en Google Workspace”

Subtítulo:

“Convierte Gmail, Docs y Sheets en un entorno de trabajo asistido por IA.”

Aprenderás mediante casos reales:

- Gmail;
- Docs;
- Sheets;
- Drive;
- Gemini;
- automatizaciones sencillas;
- generación y transformación de información;
- organización;
- análisis;
- creación de respuestas;
- extracción de tareas.

CONSTRUYES:

“Un flujo de productividad conectado a las herramientas que ya utilizas.”

Público:

Administración
Ventas
Operaciones
Marketing
Managers

Slug:

ia-google-workspace

---

# FORMACIÓN 08

## CONECTA TU PRIMERA API

Eyebrow:

AUTOMATIZACIÓN

Título:

“APIs, OAuth y Webhooks sin miedo”

Subtítulo:

“Entiende cómo conectar herramientas sin perderte entre credenciales y permisos.”

Esta formación debe romper la percepción de que APIs y OAuth son exclusivamente para developers.

Aprenderás:

- qué es una API;
- requests y responses;
- JSON básico;
- API keys;
- OAuth;
- scopes;
- webhooks;
- credenciales;
- permisos;
- Google Cloud cuando corresponda;
- cómo conectar estos conceptos con n8n.

CONSTRUYES:

“Una integración real entre una aplicación y un workflow de automatización.”

Público:

Principiantes en automatización
Founders
Operaciones
Analistas

Slug:

apis-oauth-webhooks

---

# FORMACIÓN 09

## AGENTES QUE SE REVISAN

Eyebrow:

AGENTES

Título:

“Agentes que revisan su propio trabajo”

Subtítulo:

“Pasa de un prompt lineal a workflows que evalúan resultados antes de continuar.”

NO hablar de “cero alucinaciones”.

Aprenderás:

- agente generador;
- evaluador;
- criterios de calidad;
- feedback;
- reintentos;
- routing;
- scoring;
- human-in-the-loop;
- límites de autonomía.

CONSTRUYES:

“Un workflow donde una segunda etapa evalúa el resultado antes de aprobarlo.”

Nivel:

Intermedio / Avanzado

Público:

Analistas
Automadores
Builders
Equipos que necesitan mayor consistencia

Slug:

agentes-evaluador-optimizador

---

# FORMACIÓN 10

## BLINDA TUS AUTOMATIZACIONES

Eyebrow:

ADVANCED

Título:

“Automatizaciones resistentes a errores”

Subtítulo:

“Aprende a diseñar workflows que detecten fallos, protejan credenciales y avisen cuando algo sale mal.”

Aprenderás:

- error workflows;
- retries;
- logs;
- alertas;
- secret management básico;
- permisos;
- fallbacks;
- supervisión humana;
- manejo seguro de credenciales.

NO utilizar claims como:

“99.9% uptime”

“seguridad garantizada”

“infraestructura invulnerable”.

CONSTRUYES:

“Un sistema centralizado de manejo de errores y alertas para automatizaciones.”

Nivel:

Intermedio / Avanzado

Slug:

automatizaciones-resilientes

---

# FORMACIÓN 11

## LA CABINA DE MANDO

Eyebrow:

ESTRATEGIA

Título:

“¿Qué debe hacer la IA y qué debes seguir haciendo tú?”

Subtítulo:

“Aprende a decidir cuándo automatizar, cuándo colaborar y cuándo mantener control humano.”

Concepto visual:

AUTOPILOTO
↔
COLABORACIÓN
↔
CONTROL HUMANO

Aprenderás:

- identificar riesgo;
- coste del error;
- repetitividad;
- reversibilidad;
- supervisión;
- aprobación;
- autonomía adecuada;
- human-in-the-loop.

CONSTRUYES:

“Un mapa de automatización para un proceso real de tu trabajo o empresa.”

Público:

Managers
Founders
Operaciones
Líderes de equipo

Slug:

cabina-de-mando-ia

---

# 11. NO PUBLICAR 11 TALLERES COMO SI TODOS ESTUVIERAN DISPONIBLES

IMPORTANTE.

Los ejemplos anteriores constituyen un CATÁLOGO POTENCIAL.

No presentar automáticamente once talleres como abiertos.

Implementar estados:

AVAILABLE
COMING_SOON
WAITLIST
DRAFT

En UI traducir:

AVAILABLE
“Inscripciones abiertas”

COMING_SOON
“Próximamente”

WAITLIST
“Lista de interés”

DRAFT
No mostrar públicamente.

Para el lanzamiento inicial:

seleccionar visualmente aproximadamente 4–6 formaciones públicas.

El resto puede quedar preparado en datos.

---

# 12. PRIORIDAD COMERCIAL RECOMENDADA

En la primera vista de `/formaciones`, destacar:

1. De Idea a App con IA
2. Arquitecto de Workflows con IA
3. De Prompt a Blueprint
4. Tu Segundo Cerebro con IA
5. IA en Google Workspace
6. Agentes que revisan su propio trabajo

Esto comunica una progresión excelente:

PROMPT
↓
CONOCIMIENTO
↓
APP
↓
AUTOMATIZACIÓN
↓
AGENTE
↓
SISTEMA

---

# 13. CREAR PÁGINA INDIVIDUAL DE FORMACIÓN

Construir un template reutilizable.

Ruta:

/formaciones/talleres/[slug]

La estructura debe ser:

01 HERO

Categoría

Título

Resultado principal

Duración

Nivel

Formato

Fecha si existe

Precio si existe

CTA

--------------------------------------------------

02 QUÉ VAS A CONSTRUIR

Este debe ser uno de los bloques visuales más importantes.

Mostrar un pequeño mockup, workflow o diagrama relacionado con el entregable.

--------------------------------------------------

03 PARA QUIÉN ES

Máximo 3–5 perfiles.

--------------------------------------------------

04 QUÉ APRENDERÁS

4–6 resultados de aprendizaje.

--------------------------------------------------

05 AGENDA

Por módulos.

NO poner párrafos.

Ejemplo:

01 — FUNDAMENTOS

02 — BUILD

03 — CONEXIONES

04 — PRUEBAS

05 — DEPLOY

--------------------------------------------------

06 HERRAMIENTAS

Iconos + nombres.

--------------------------------------------------

07 QUÉ TE LLEVAS

Ejemplo:

✓ Proyecto funcional

✓ Plantilla

✓ Prompts

✓ Workflow

✓ Material de apoyo

Mostrar únicamente lo que realmente vaya a entregarse.

--------------------------------------------------

08 INSTRUCTOR

Breve.

No biografía gigante.

--------------------------------------------------

09 FAQ DEL CURSO

3–5 preguntas.

--------------------------------------------------

10 CTA

“Quiero participar”

o:

“Unirme a la lista de interés”

dependiendo del status.

---

# 14. CTA SEGÚN ESTADO

Si existe:

fecha + proceso real de inscripción

usar:

“Reservar plaza”

Si todavía NO existe una fecha concreta:

NO usar “Reservar plaza”.

Utilizar:

“Quiero participar”

o:

“Avisarme de la próxima edición”

Si es In-Company:

“Hablemos de tu equipo”

---

# 15. REHACER /CONTACTO

La página `/contacto` actualmente no debe sentirse como un diagnóstico de arquitectura enterprise cuando el usuario viene desde una formación.

Transformarla en:

CONTACTO & ADMISIÓN

Debe adaptarse según query parameters.

Ejemplo:

/contacto?formacion=vibe-coding-idea-app

Debe reconocer la formación.

Hero:

“Estás interesado en:
De Idea a App con IA”

Subcopy:

“Déjanos tus datos y te avisaremos de la próxima edición.”

---

# 16. DOS MODOS DE CONTACTO

Crear dos intents:

INDIVIDUAL

EMPRESA

Para individual:

Nombre
Email
WhatsApp/teléfono si ya se utiliza
Formación
Experiencia actual
Objetivo opcional

CTA:

“Enviar interés”

Para empresa:

Nombre
Email corporativo
Empresa
Tamaño del equipo
Formación/interés
Objetivo

CTA:

“Hablar sobre formación para mi equipo”

Mantener el backend/form actual si ya funciona.

No romper el sistema de envío.

---

# 17. ELIMINAR DEL CONTACTO EDUCATIVO

Cuando el usuario venga de una formación NO mostrar lenguaje como:

“diagnóstico operativo”

“arquitectura agéntica adaptada a tu infraestructura”

“viabilidad matemática”

“cero humo”

“cero vaporware”

“ingenieros de SyntIQ”

Ese lenguaje puede pertenecer a una oferta futura de consultoría.

No al funnel educativo.

---

# 18. IN-COMPANY SÍ PUEDE SER MÁS EMPRESARIAL

La página:

/formaciones/in-company

debe explicar:

“Formación aplicada a procesos reales de tu equipo.”

Estructura:

01 Problema

02 Cómo trabajamos

03 Áreas de formación

04 Ejemplo de sesión

05 Para qué equipos

06 CTA

Ejemplos de áreas:

IA para productividad

Automatización

Vibe Coding

Análisis documental

Agentes

IA en Google Workspace

No vender:

“te construimos la infraestructura”.

Vender:

“enseñamos a tu equipo a construir y utilizar estos sistemas.”

---

# 19. PROGRAMA MODULAR

La página:

/formaciones/curso-modular

debe convertir varios talleres en una ruta progresiva.

Propuesta conceptual:

## SYNTIQ AI BUILDER

MÓDULO 01

PROMPT

De Prompt a Blueprint

↓

MÓDULO 02

CONOCIMIENTO

Segundo Cerebro con IA

↓

MÓDULO 03

BUILD

De Idea a App

↓

MÓDULO 04

AUTOMATIZA

Arquitecto de Workflows

↓

MÓDULO 05

AGENTES

Agentes que se Revisan

↓

MÓDULO 06

PROYECTO FINAL

Construcción de un sistema aplicado a un problema real.

No inventar número de semanas ni precio hasta que sea validado.

---

# 20. VISUAL DEL PROGRAMA MODULAR

Representarlo como una progresión.

No como 6 cards aisladas.

Crear una línea visual:

PROMPT
→
CONTEXT
→
BUILD
→
AUTOMATE
→
AGENT
→
SHIP

Esta progresión puede convertirse en un elemento distintivo de SyntIQ.

---

# 21. NIVELES

Introducir como sistema consistente:

INICIAL

INTERMEDIO

AVANZADO

No utilizar:

Beginner
Junior
Expert
Master

mezclados.

Utilizar español en toda la experiencia.

---

# 22. DIFERENCIADOR PEDAGÓGICO

Añadir cerca del catálogo:

“NO SOLO MIRAS.
CONSTRUYES.”

Subcopy:

“Cada formación termina con un entregable que puedes seguir usando después del taller.”

Esto debe ser un principio visual del catálogo.

---

# 23. QUÉ NO HACER

NO convertir `/formaciones` en Udemy.

NO mostrar 40 cards.

NO crear ratings falsos.

NO crear descuentos ficticios.

NO crear countdown timers.

NO utilizar “Solo quedan 2 plazas” sin dato real.

NO inventar alumnos.

NO inventar testimonios.

NO crear certificaciones inexistentes.

NO saturar cada curso con copy.

NO explicar cada herramienta.

NO utilizar demasiadas animaciones.

---

# 24. COPY

Utilizar beneficios concretos.

NO:

“Domina el futuro de la Inteligencia Artificial.”

SÍ:

“Construye un workflow que procesa información y ejecuta acciones.”

NO:

“Transforma radicalmente tu productividad.”

SÍ:

“Reduce pasos manuales conectando las herramientas que ya utilizas.”

NO:

“Conviértete en experto.”

SÍ:

“Sal del taller con una aplicación funcional.”

---

# 25. DISEÑO DE CARDS

Mantener lenguaje visual actual de SyntIQ.

Card:

border sutil;

background coherente;

radius existente;

hover pequeño;

iconografía mínima;

tags;

suficiente espacio en blanco.

Hover máximo:

translateY(-4px)

Nada de rotaciones.

Nada de glow agresivo.

---

# 26. MICROINTERACCIONES

Card:

al hover:

border ligeramente más visible;

flecha CTA se desplaza 3px;

preview interno puede activarse suavemente.

Duration:

180–220 ms.

No animar permanentemente todas las tarjetas.

---

# 27. PREVIEW VISUAL DE CADA FORMACIÓN

Cuando sea viable, cada taller debe tener un pequeño visual contextual.

Ejemplos:

PROMPTING

Prompt → Blueprint → Output

SEGUNDO CEREBRO

Sources → Knowledge → Insight

VIBE CODING

Idea → Agent → Code → Deploy

WORKFLOWS

Trigger → AI → Decision → Action

AGENTES

Generate → Evaluate → Improve → Approve

Estos diagramas deben realizarse principalmente con:

HTML
CSS
SVG

No utilizar imágenes genéricas de robots.

---

# 28. SEO

Crear metadata dinámica por formación.

Ejemplo:

TITLE:

“De Idea a App con IA | Taller SyntIQ”

DESCRIPTION:

“Aprende a crear una aplicación funcional utilizando desarrollo asistido por Inteligencia Artificial.”

Generar canonical.

Open Graph.

Structured data únicamente si los datos necesarios son reales.

No enviar `Event` Schema sin fecha real.

---

# 29. RESPONSIVE

Comprobar:

360px
390px
768px
1024px
1280px
1440px

Especial atención:

- filters;
- cards;
- metadata;
- tool chips;
- CTA sticky;
- agenda;
- hero;
- forms.

No generar overflow horizontal.

---

# 30. CTA STICKY EN MOBILE

En páginas individuales considerar:

bottom sticky CTA

solo en mobile.

Ejemplo:

[ Próxima edición por anunciar ]
[ Quiero participar ]

Debe ser discreto.

No cubrir contenido.

---

# 31. ANALYTICS READY

Sin integrar servicios externos si no existen.

Pero estructurar los botones con atributos identificables.

Ejemplo conceptual:

data-cta="course_interest"
data-course="vibe-coding-idea-app"

Esto permitirá instrumentación futura.

No instalar Google Analytics en esta tarea.

---

# 32. TEST DEL FUNNEL

Al terminar probar manualmente:

HOME

→ Formaciones

→ Card de curso

→ Página individual

→ CTA

→ Contacto

→ Envío

Además probar:

Footer → Talleres intensivos

Footer → Curso modular

Footer → In-Company

Navbar → Formaciones

No debe existir ningún 404.

---

# 33. TEST DE CONTENIDO

Para cada formación comprobar:

¿Entiendo qué construiré?

¿Sé para quién es?

¿Sé el nivel?

¿Sé las herramientas?

¿Puedo expresar el resultado en una frase?

¿Existe un CTA lógico?

¿Se muestra solo información real?

Si alguna respuesta es NO:

corregir.

---

# 34. ORDEN RECOMENDADO DE IMPLEMENTACIÓN

FASE 1

Routing.

FASE 2

Data model.

FASE 3

Cards.

FASE 4

Dynamic course template.

FASE 5

Seed initial catalog.

FASE 6

Contact/admissions.

FASE 7

Category pages.

FASE 8

Responsive.

FASE 9

SEO.

FASE 10

Build + QA.

---

# 35. BUILD FINAL

Antes de terminar:

ejecutar build de producción.

Corregir:

errors;

warnings críticos;

links;

imports;

hydration errors;

console errors;

TypeScript errors;

404s;

responsive issues.

No dar la tarea por terminada hasta que el build funcione.

---

# 36. REPORTE FINAL

Al finalizar indicar:

1. Archivos creados.
2. Archivos modificados.
3. Nuevas rutas.
4. Redirects.
5. Data model utilizado.
6. Formaciones cargadas.
7. Formaciones públicas.
8. Formaciones draft.
9. Cambios realizados en `/contacto`.
10. Links corregidos.
11. Cualquier dato todavía pendiente:
   - precio;
   - fecha;
   - instructor;
   - duración;
   - plazas;
   - entregables que requieran validación.
12. Resultado del build.

---

# CRITERIO FINAL

SyntIQ no debe parecer una empresa con una lista de servicios.

Debe parecer una plataforma educativa donde cada formación responde claramente:

QUÉ PROBLEMA RESUELVO

↓

QUÉ APRENDO

↓

QUÉ CONSTRUYO

↓

QUÉ ME LLEVO

↓

CÓMO PARTICIPO

La unidad básica de SyntIQ no debe ser “una clase”.

Debe ser:

UN BUILD.