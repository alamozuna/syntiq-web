# MASTER PROMPT — CERRAR EL FUNNEL DE FORMACIONES DE SYNTIQ

Actúa como un equipo senior compuesto por:

- Product Designer
- UX/UI Designer especializado en EdTech
- CRO Specialist
- Information Architect
- Senior Frontend Engineer
- Product Manager de plataformas educativas

Vas a trabajar sobre el proyecto EXISTENTE de SyntIQ.

Sitio actual:

https://syntiq-web-seven.vercel.app/

IMPORTANTE:

La homepage y especialmente el HERO ya están suficientemente maduros.

## NO REDISEÑES EL HERO.

## NO CAMBIES LA ANIMACIÓN DEL HERO.

## NO CAMBIES EL COPY PRINCIPAL DEL HERO.

## NO REHAGAS LA HOMEPAGE.

El objetivo de esta iteración es cerrar correctamente el funnel que empieza después de que el usuario pulsa un CTA.

El flujo final debe ser:

HOME
↓
FORMACIONES
↓
FORMACIÓN ESPECÍFICA
↓
INTERÉS / INSCRIPCIÓN
↓
CONTACTO & ADMISIÓN

---

# 1. OBJETIVO PRINCIPAL

Actualmente SyntIQ ya comunica correctamente su propuesta de valor:

“Aprende IA construyendo sistemas que trabajan por ti.”

Ahora necesitamos que el usuario pueda pasar de esa promesa a una formación concreta.

La prioridad ya NO es mejorar la estética general.

La prioridad es:

- catálogo;
- navegación;
- producto educativo;
- páginas individuales;
- admisión;
- conversión;
- eliminar 404;
- eliminar mensajes comerciales contradictorios.

---

# 2. AUDITAR ANTES DE MODIFICAR

Antes de cambiar código:

1. Identifica framework.
2. Identifica routing.
3. Identifica estructura `/app` o `/src/app`.
4. Revisa `/formaciones`.
5. Revisa `/contacto`.
6. Revisa footer.
7. Revisa navbar.
8. Revisa todos los CTA que llevan a formaciones.
9. Detecta rutas 404.
10. Detecta componentes reutilizables.
11. Detecta modelo de datos actual.
12. Revisa formularios existentes.
13. Revisa cómo se procesan query parameters.
14. Revisa responsive.
15. Ejecuta inicialmente el proyecto para establecer baseline.

No crear una arquitectura paralela.

Extender la existente.

---

# 3. NO MODIFICAR LA HOMEPAGE EXCEPTO LINKS ROTOS

No tocar:

- Hero.
- Animación del Hero.
- Secciones visuales.
- Copy.
- Colores.
- Tipografía.
- Calculadora.
- Equipo.
- Método.

Únicamente modificar la homepage si:

- un CTA apunta a una ruta incorrecta;
- existe un 404;
- hace falta conectar una card con una página real.

Nada más.

---

# 4. ARREGLAR TODAS LAS RUTAS DE FORMACIONES

Actualmente deben existir correctamente:

/formaciones

/formaciones/talleres-intensivos

/formaciones/curso-modular

/formaciones/in-company

Ninguna puede devolver 404.

Si quieres utilizar como ruta preferida:

/formaciones/programa-modular

puedes hacerlo.

Pero:

/formaciones/curso-modular

debe mantener un redirect válido para no romper enlaces existentes.

---

# 5. NUEVA ARQUITECTURA

Implementar:

/formaciones

Catálogo principal.

--------------------------------------------------

/formaciones/talleres-intensivos

Catálogo específico de talleres.

--------------------------------------------------

/formaciones/talleres/[slug]

Página individual reutilizable para cada taller.

--------------------------------------------------

/formaciones/curso-modular

Programa completo de aprendizaje.

--------------------------------------------------

/formaciones/in-company

Oferta para equipos y empresas.

--------------------------------------------------

/contacto

Contacto & Admisión.

---

# 6. MODELO DE DATOS DE FORMACIONES

NO crear una página completamente hardcodeada para cada curso.

Crear una fuente de datos central.

Ejemplo conceptual:

data/formaciones.ts

Cada formación debe poder tener:

id
slug
title
shortTitle
category
format
level
duration
summary
description
outcome
audience
deliverable
tools
learningObjectives
agenda
instructors
status
date
schedule
price
currency
seats
featured
seoTitle
seoDescription

La UI debe funcionar aunque algunos valores sean null.

---

# 7. ESTADOS

Utilizar:

AVAILABLE

COMING_SOON

WAITLIST

DRAFT

Representación pública:

AVAILABLE
“Inscripciones abiertas”

COMING_SOON
“Próxima edición por anunciar”

WAITLIST
“Lista de interés”

DRAFT
No mostrar.

IMPORTANTE:

No utilizar:

“Plazas limitadas”

“Últimas plazas”

“Solo quedan X”

si no existe ese dato real.

---

# 8. NO INVENTAR DATOS

No inventar:

- precios;
- fechas;
- horarios;
- plazas;
- ratings;
- alumnos;
- porcentajes;
- testimonios;
- descuentos;
- certificados;
- instructores.

Si no existe:

no mostrarlo.

Ejemplo:

SIN FECHA:

“Próxima edición por anunciar”

SIN PRECIO:

no mostrar precio.

CTA:

“Quiero participar”

o:

“Avisarme de la próxima edición”

---

# 9. CATÁLOGO INICIAL

Crear inicialmente estas formaciones públicas.

Prioridad visual:

## 1. DE PROMPT A BLUEPRINT

Categoría:

PROMPTING

Descripción:

“Deja de improvisar instrucciones y aprende a crear prompts y blueprints reutilizables.”

Resultado:

“Construyes una biblioteca profesional de instrucciones reutilizables.”

Herramientas posibles:

ChatGPT
Claude
Gemini

Nivel:

Inicial / Intermedio

Slug:

prompting-blueprints

---

## 2. DE IDEA A APP CON IA

Categoría:

VIBE CODING

Descripción:

“Convierte una idea en una aplicación funcional utilizando desarrollo asistido por agentes.”

Resultado:

“Construyes y despliegas una aplicación o herramienta web funcional.”

Herramientas posibles:

Google Antigravity
Claude Code
Gemini
GitHub
Vercel

No mostrar herramientas que SyntIQ realmente no vaya a utilizar.

Nivel:

Inicial / Intermedio

Slug:

vibe-coding-idea-app

Marcar como:

featured

---

## 3. ARQUITECTO DE WORKFLOWS CON IA

Categoría:

AUTOMATIZACIÓN

Descripción:

“Conecta aplicaciones, datos e inteligencia artificial en un workflow operativo.”

Resultado:

“Construyes una automatización que recibe información, toma una decisión y ejecuta una acción.”

Herramientas:

n8n

y únicamente las integraciones realmente utilizadas.

Nivel:

Intermedio

Slug:

arquitecto-workflows

Marcar como:

featured

---

## 4. TU SEGUNDO CEREBRO CON IA

Categoría:

CONOCIMIENTO

Descripción:

“Convierte documentos, reuniones y fuentes dispersas en conocimiento consultable.”

Resultado:

“Construyes un sistema basado en tus propias fuentes para consultar, comparar y extraer insights.”

Herramientas posibles:

NotebookLM
Gemini

Nivel:

Inicial

Slug:

segundo-cerebro-ia

---

## 5. IA EN GOOGLE WORKSPACE

Categoría:

PRODUCTIVIDAD

Descripción:

“Integra IA en Gmail, Docs, Sheets y Drive para reducir tareas repetitivas.”

Resultado:

“Construyes un flujo de productividad conectado a herramientas de trabajo reales.”

Nivel:

Inicial

Slug:

ia-google-workspace

---

## 6. AGENTES QUE REVISAN SU PROPIO TRABAJO

Categoría:

AGENTES

Descripción:

“Construye workflows donde una etapa evalúa el resultado antes de aprobarlo o continuar.”

Resultado:

“Construyes un flujo Generate → Evaluate → Improve → Approve.”

Nivel:

Intermedio / Avanzado

Slug:

agentes-evaluador-optimizador

---

# 10. FORMACIONES FUTURAS

Dejar preparadas en datos, pero inicialmente como:

DRAFT

o:

COMING_SOON

las siguientes:

- APIs, OAuth y Webhooks sin miedo.
- IA Invisible: productividad sin fricción.
- De 100 páginas a 10 decisiones.
- Automatizaciones resistentes a errores.
- La Cabina de Mando: qué automatizar y qué no.

No llenar `/formaciones` con demasiadas cards.

Primero mostrar aproximadamente 6 formaciones.

---

# 11. REDISEÑAR /FORMACIONES COMO CATÁLOGO REAL

Mantener el Hero actual de esa página si funciona.

Título:

“Elige cómo quieres aprender.”

Mantener los tres formatos:

Taller Intensivo

Programa Modular

Formación In-Company

Pero después añadir una sección importante:

# EXPLORA LAS FORMACIONES

Mostrar las 6 formaciones reales.

---

# 12. FILTROS

Agregar filtros simples:

TODOS

PROMPTING

PRODUCTIVIDAD

VIBE CODING

AUTOMATIZACIÓN

CONOCIMIENTO

AGENTES

No crear un buscador complejo todavía.

Desktop:

chips horizontales.

Mobile:

scroll horizontal.

---

# 13. CARD DE FORMACIÓN

Cada tarjeta debe poder entenderse en 5 segundos.

Estructura:

[CATEGORÍA]

TÍTULO

Descripción máxima de 2 líneas.

[NIVEL]

[FORMATO]

Si existe duración real:

[DURACIÓN]

Luego:

CONSTRUYES

“Una app funcional desplegada.”

o equivalente.

Herramientas:

máximo 3-4 logos/nombres visibles.

CTA:

“Ver formación”

---

# 14. DIFERENCIADOR DE SYNTIQ

Añadir cerca del catálogo:

# NO SOLO MIRAS.
# CONSTRUYES.

Texto:

“Cada formación de SyntIQ está diseñada alrededor de un build práctico que puedes seguir utilizando después de la sesión.”

No prometer entregables específicos que todavía no estén confirmados.

---

# 15. TEMPLATE INDIVIDUAL DE FORMACIÓN

Crear:

/formaciones/talleres/[slug]

Debe ser completamente reutilizable.

La estructura ideal:

01 HERO

02 QUÉ VAS A CONSTRUIR

03 PARA QUIÉN ES

04 QUÉ APRENDERÁS

05 AGENDA

06 HERRAMIENTAS

07 QUÉ TE LLEVAS

08 INSTRUCTOR

09 FAQ

10 CTA FINAL

---

# 16. HERO DE FORMACIÓN

Mostrar:

Categoría.

Título.

Descripción.

Nivel.

Formato.

Duración si existe.

Fecha si existe.

Precio si existe.

CTA.

Ejemplo conceptual:

PROMPTING

De Prompt a Blueprint

“Diseña instrucciones reutilizables que produzcan resultados más consistentes.”

Nivel:
Inicial / Intermedio

Formato:
Taller Intensivo

[ QUIERO PARTICIPAR ]

No rellenar metadata que todavía no exista.

---

# 17. SECCIÓN MÁS IMPORTANTE — QUÉ VAS A CONSTRUIR

Esto debe diferenciar visualmente las páginas de SyntIQ.

Título:

“Lo construyes durante la formación.”

Crear una representación visual relacionada con el curso.

Ejemplos:

PROMPTING:

Brief
↓
Blueprint
↓
Prompt
↓
Output

VIBE CODING:

Idea
↓
Plan
↓
Build
↓
Deploy

WORKFLOW:

Trigger
↓
AI
↓
Decision
↓
Action

AGENTES:

Generate
↓
Evaluate
↓
Improve
↓
Approve

No utilizar fotos genéricas de robots.

Preferir:

HTML
CSS
SVG

Mantener la estética actual de SyntIQ.

---

# 18. PARA QUIÉN ES

Máximo 4 perfiles.

Ejemplo Vibe Coding:

Emprendedores.

Analistas.

Profesionales no técnicos.

Product Managers.

No escribir largos párrafos.

---

# 19. QUÉ APRENDERÁS

Entre 4 y 6 bullets.

Orientados a capacidad.

NO:

“Introducción a Claude.”

SÍ:

“Convierte requisitos ambiguos en instrucciones claras para un agente de código.”

NO:

“Introducción a n8n.”

SÍ:

“Construye un flujo con triggers, condiciones y acciones.”

---

# 20. AGENDA

Crear módulos escaneables.

Ejemplo:

01
PROBLEMA

02
BLUEPRINT

03
BUILD

04
TEST

05
SHIP

Cada uno:

título + una línea.

No meter clases completas dentro de la landing.

---

# 21. QUÉ TE LLEVAS

Crear sección visual.

Solo mostrar entregables confirmados.

Ejemplos posibles:

✓ Proyecto construido durante la sesión.

✓ Templates.

✓ Prompts utilizados.

✓ Material de apoyo.

✓ Workflow exportable.

Si alguno no está confirmado:

no mostrarlo.

---

# 22. CTA SEGÚN ESTADO

AVAILABLE:

“Reservar plaza”

COMING_SOON:

“Avisarme de la próxima edición”

WAITLIST:

“Unirme a la lista de interés”

No utilizar “Reservar plaza” si no existe una fecha o proceso de inscripción real.

---

# 23. PROGRAMA MODULAR

Crear página:

/formaciones/curso-modular

Nombre conceptual:

# SYNTIQ AI BUILDER

No asumir que ese será el nombre comercial definitivo si no está confirmado.

Puede utilizarse como working title.

Estructura visual:

PROMPT
↓
CONTEXT
↓
BUILD
↓
AUTOMATE
↓
AGENT
↓
SHIP

Módulos sugeridos:

01
De Prompt a Blueprint

02
Segundo Cerebro con IA

03
De Idea a App

04
Arquitecto de Workflows

05
Agentes

06
Proyecto aplicado

No inventar:

duración total;

número de semanas;

precio.

---

# 24. FORMACIONES IN-COMPANY

Crear:

/formaciones/in-company

Enfoque:

“Formación aplicada a procesos reales de tu equipo.”

NO:

“Implementamos toda tu infraestructura.”

El producto es formación.

Estructura:

HERO

↓

PROBLEMAS QUE PODEMOS TRABAJAR

↓

ÁREAS DE FORMACIÓN

↓

CÓMO FUNCIONA

↓

EJEMPLO DE SESIÓN

↓

CTA

Áreas:

IA para productividad.

Prompting.

Vibe Coding.

Automatización.

Análisis documental.

Agentes.

Google Workspace.

CTA:

“Hablar sobre mi equipo”

---

# 25. REHACER /CONTACTO COMPLETAMENTE

Este es un punto crítico.

Actualmente `/contacto` mezcla dos narrativas incompatibles:

FORMACIÓN

y

CONSULTORÍA / ARQUITECTURA ENTERPRISE.

Transformarla definitivamente en:

# CONTACTO & ADMISIÓN

---

# 26. ELIMINAR DE /CONTACTO

Eliminar lenguaje como:

“diagnóstico operativo”

“ingenieros de SyntIQ”

“arquitectura agéntica adaptada a tu infraestructura”

“viabilidad matemática”

“cero humo”

“cero vaporware”

y cualquier mensaje equivalente.

Ese lenguaje puede existir en una futura oferta de consultoría.

NO en el funnel educativo.

---

# 27. HERO DE CONTACTO

Utilizar:

# Hablemos de lo que quieres construir.

Subcopy:

“Cuéntanos qué quieres aprender o qué necesita tu equipo y te orientaremos hacia la formación adecuada.”

Dos opciones claras:

PARA MÍ

PARA MI EQUIPO

---

# 28. CONTACTO INDIVIDUAL

Campos:

Nombre

Email

WhatsApp/teléfono si ya forma parte del formulario

Formación

Nivel actual

¿Qué te gustaría construir?

No hacer todos los campos obligatorios.

CTA:

“Enviar interés”

Si llega mediante:

/contacto?formacion=vibe-coding-idea-app

preseleccionar:

“De Idea a App con IA”

Mostrar:

“Estás interesado en:
De Idea a App con IA”

---

# 29. CONTACTO EMPRESA

Campos:

Nombre.

Email corporativo.

Empresa.

Tamaño aproximado del equipo.

Área de interés.

Objetivo.

CTA:

“Hablar sobre formación para mi equipo”

---

# 30. NO ROMPER EL FORMULARIO

Si ya existe backend, email, API route o integración:

reutilizarla.

No reemplazar una integración funcional simplemente para cambiar el frontend.

Comprobar:

validación.

errores.

success state.

loading state.

mobile keyboard behavior.

---

# 31. SUCCESS STATE

Después de enviar:

no dejar simplemente el formulario vacío.

Mostrar estado:

“Recibimos tu solicitud.”

Texto:

“Nos pondremos en contacto contigo usando los datos que proporcionaste.”

No prometer tiempo de respuesta si no existe un SLA definido.

---

# 32. FOOTER

Corregir todas las rutas.

Debe funcionar:

Talleres Intensivos

Programa Modular

In-Company

Formaciones

Nosotros

Contacto

Eliminar enlaces muertos.

También revisar cualquier texto de urgencia como:

“Próximo taller: plazas disponibles”

si todavía no existe un taller abierto.

Sustituir por:

“Explora nuestras formaciones”

o eliminar.

---

# 33. COPY COMERCIAL

Regla fundamental:

NO vender herramientas.

Vender cosas que el alumno construirá.

NO:

“Aprende n8n.”

SÍ:

“Construye workflows que conectan tus herramientas.”

NO:

“Curso de Gemini.”

SÍ:

“Convierte tus documentos en un sistema de conocimiento consultable.”

NO:

“Aprende Antigravity.”

SÍ:

“Convierte una idea en una aplicación funcional.”

---

# 34. ELIMINAR CLAIMS DUDOSOS

Buscar en las páginas modificadas términos como:

100%

0% error

sin alucinaciones

garantizado

99.9%

precisión absoluta

multiplica por X

reduce un X%

si no hay evidencia real.

Reformular.

---

# 35. NO REDISEÑAR EL DESIGN SYSTEM

Reutilizar:

colores.

tipografía.

borders.

cards.

spacing.

botones.

badges.

animaciones.

La nueva sección debe sentirse parte del SyntIQ actual.

No crear otra identidad.

---

# 36. ANIMACIONES

Ser conservador.

Cards:

hover sutil.

Página individual:

scroll reveals.

Diagrama del build:

pequeña animación secuencial.

No añadir:

Three.js.

WebGL.

partículas.

custom cursor.

scroll hijacking.

grandes efectos que compitan con el contenido.

---

# 37. MOBILE

Revisar especialmente:

360px

390px

768px

En mobile:

filtros con scroll horizontal.

Cards 1 columna.

Metadata compacta.

CTA grande.

Agenda vertical.

No overflow.

Targets táctiles >=44px.

---

# 38. SEO

Crear metadata para:

/formaciones

/talleres-intensivos

/curso-modular

/in-company

cada `[slug]`

Ejemplo:

TITLE:

“De Idea a App con IA | SyntIQ”

DESCRIPTION:

“Aprende a convertir una idea en una aplicación funcional utilizando desarrollo asistido por Inteligencia Artificial.”

No utilizar Event Schema sin fecha real.

---

# 39. LINKS DEL FUNNEL

Comprobar exactamente:

HOME
→ Formaciones

FORMACIONES
→ Curso

CURSO
→ Contacto

CONTACTO
→ Submit

También:

Footer
→ Talleres

Footer
→ Programa Modular

Footer
→ In-Company

Navbar
→ Formaciones

Ninguna ruta debe devolver 404.

---

# 40. QA FINAL

Antes de terminar:

ejecuta el proyecto.

Luego:

production build.

Revisar:

TypeScript.

console errors.

hydration errors.

imports.

routing.

404.

forms.

query params.

responsive.

SEO.

accessibility básica.

reduced motion.

links.

No dar la tarea por terminada solamente porque compila.

Revisar visualmente las páginas.

---

# 41. CRITERIO DE ÉXITO

Un visitante debe poder:

1. Llegar a SyntIQ.
2. Entender qué ofrece.
3. Entrar en Formaciones.
4. Encontrar un curso concreto.
5. Entender qué construirá.
6. Saber si es para él.
7. Expresar interés.
8. Completar el formulario.

Sin:

404.

mensajes contradictorios.

datos falsos.

urgencia artificial.

copy enterprise fuera de contexto.

---

# 42. REPORTE FINAL

Al terminar indicar:

1. Rutas creadas.
2. Rutas corregidas.
3. Redirects creados.
4. Archivos modificados.
5. Componentes nuevos.
6. Data model.
7. Formaciones públicas.
8. Formaciones draft.
9. Cambios en `/contacto`.
10. Cambios en footer.
11. Links arreglados.
12. Datos todavía pendientes de definición.
13. Resultado del production build.

---

# REGLA FINAL

NO vuelvas a mejorar el Hero.

NO añadas secciones nuevas a la homepage.

NO hagas un rebranding.

NO añadas funcionalidades que no ayuden directamente al funnel.

La prioridad ahora es convertir el sitio de:

“Landing que explica SyntIQ”

a:

“Plataforma donde puedo encontrar una formación concreta y apuntarme.”

La siguiente evolución de SyntIQ debe ocurrir DESPUÉS DEL CLIC.