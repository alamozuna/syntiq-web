ACTÚA COMO:
Senior Product Designer + UX/UI Designer + Frontend Architect especializado en:
- EdTech
- productos de Inteligencia Artificial
- plataformas de aprendizaje
- herramientas agentizadas
- interfaces SaaS premium
- motion design web
- CRO y optimización de landing pages

PROYECTO:
Rediseñar la página web existente de SyntIQ.

La marca se posicionará principalmente como una academia/formación práctica en Inteligencia Artificial enfocada en:

APRENDER → CONSTRUIR → AUTOMATIZAR

La web debe dejar de sentirse como una página que intenta explicar toda la tecnología de SyntIQ y empezar a sentirse como una plataforma moderna donde un profesional entiende inmediatamente:

1. Qué aprenderá.
2. Qué será capaz de construir.
3. Qué formato de formación le conviene.
4. Por qué debería confiar en SyntIQ.
5. Cuál es el siguiente paso.

======================================================================
0. ANTES DE MODIFICAR CÓDIGO
======================================================================

Primero inspecciona completamente el repositorio existente.

Identifica:

- Framework utilizado.
- Arquitectura de componentes.
- Sistema actual de estilos.
- Tailwind/CSS Modules/styled-components/etc.
- Variables y tokens de color existentes.
- Tipografías.
- Componentes reutilizables.
- Dependencias de animación ya instaladas.
- Routing.
- Formularios existentes.
- Calculadora ROTI.
- Assets del equipo.
- Sistema responsive.
- Componentes client/server si se utiliza Next.js.

NO rehagas el proyecto desde cero salvo que sea estrictamente necesario.

Preserva las funcionalidades existentes que tengan valor.

Refactoriza progresivamente.

Antes de instalar una nueva dependencia, verifica si ya existe una alternativa en el proyecto.

======================================================================
1. OBJETIVO PRINCIPAL DEL REDISEÑO
======================================================================

Reducir aproximadamente entre 55% y 70% del texto actualmente visible en homepage.

La nueva página debe comunicar más utilizando:

- jerarquía tipográfica;
- interfaces;
- diagramas;
- tarjetas;
- iconografía;
- motion;
- cifras;
- visualizaciones;
- espacios en blanco;
- microcopy.

Regla:

NO explicar en un párrafo lo que pueda explicarse visualmente en una tarjeta, diagrama, cifra o interacción.

NO convertir la web en una documentación técnica.

NO llenar cada sección de texto.

La sensación deseada es:

PREMIUM
INTELIGENTE
PRÁCTICA
MODERNA
CONFIABLE
AGENTIC
EDUCATIVA

Evitar:

- apariencia excesivamente “hacker”;
- terminales sin propósito;
- exceso de código decorativo;
- exceso de glow;
- demasiados gradientes;
- partículas por toda la pantalla;
- animaciones continuas innecesarias;
- claims tecnológicos grandilocuentes;
- párrafos de más de 3 líneas;
- bloques gigantes de texto centrado.

======================================================================
2. CAMBIO DE NARRATIVA
======================================================================

Actualmente la web comunica simultáneamente:

- academia;
- consultoría;
- infraestructura de agentes;
- cumplimiento;
- arquitectura técnica;
- automatización;
- educación;
- servicios enterprise.

Esto genera ruido.

La HOMEPAGE debe responder principalmente:

“¿QUÉ PUEDO APRENDER Y CONSTRUIR CON SYNTIQ?”

Los detalles corporativos, legales y filosóficos deben quedar como información secundaria.

PRINCIPIO:

SyntIQ no enseña IA para que el usuario “sepa más de IA”.

SyntIQ enseña IA para que el usuario pueda CONSTRUIR cosas útiles.

La transformación narrativa debe ser:

ANTES:
“Mira nuestra arquitectura, metodología y capacidades.”

DESPUÉS:
“Mira lo que tú podrás hacer después de aprender con nosotros.”

======================================================================
3. NUEVO COPY DEL HERO
======================================================================

EYEBROW:

APRENDE · CONSTRUYE · AUTOMATIZA

H1 PRINCIPAL:

“Aprende IA construyendo sistemas que trabajan por ti.”

No utilizar un H1 excesivamente largo.

Crear saltos de línea intencionales en desktop para que ocupe aproximadamente 2-3 líneas.

SUBHEADLINE:

“Talleres prácticos para convertir tareas repetitivas en automatizaciones, aplicaciones y agentes útiles. Sales con algo funcionando.”

Máximo aproximado:
20-28 palabras.

CTA PRINCIPAL:

“Ver próximos talleres”

CTA SECUNDARIO:

“Descargar Blueprint”

Debajo del hero mostrar únicamente 3 indicadores de confianza:

+500
Profesionales formados

98%
Satisfacción

<20 min
Para crear tu primer flujo

IMPORTANTE:
Mantener estas cifras únicamente si están respaldadas por información real.
No inventar cifras.
No generar métricas automáticamente.
Si alguna cifra no puede demostrarse, marcar internamente para revisión y no sustituirla por una cifra inventada.

======================================================================
4. VISUAL PRINCIPAL DEL HERO
======================================================================

Eliminar o reducir drásticamente la actual representación excesivamente técnica del pipeline.

En su lugar crear un:

“LIVE AGENT WORKFLOW”

Debe explicar visualmente lo que significa construir con IA.

Ejemplo visual:

[ EMAIL / WHATSAPP / PDF ]
              ↓
       [ AGENTE DE IA ]
              ↓
     ┌────────┼────────┐
     ↓        ↓        ↓
 [CLASIFICA] [DECIDE] [EJECUTA]
                        ↓
                  [RESULTADO ✓]

Debe parecer una interfaz real de producto.

NO una ilustración genérica.

NO un chatbot.

NO una terminal ocupando media pantalla.

Diseñar mediante:
- HTML/CSS;
- SVG;
- componentes React si corresponde.

Los nodos deben tener pequeños estados:

INPUT
THINKING
ACTION
DONE

Durante la animación se ilumina secuencialmente el recorrido:

Input → IA → Acción → Resultado.

Loop aproximado:
5-7 segundos.

Movimiento muy sutil.

======================================================================
5. NUEVA ARQUITECTURA DE LA HOMEPAGE
======================================================================

Reorganizar la página en este orden:

01. NAVBAR
02. HERO
03. SOCIAL PROOF
04. QUÉ APRENDERÁS A CONSTRUIR
05. FORMATOS DE FORMACIÓN
06. MÉTODO SYNTIQ
07. RESULTADOS / TESTIMONIO
08. CALCULADORA ROTI
09. EQUIPO
10. FAQ REDUCIDO
11. CTA FINAL
12. FOOTER

Evitar añadir más secciones salvo que exista una razón UX clara.

======================================================================
6. NAVBAR
======================================================================

Simplificar navegación.

Desktop:

LOGO

Formaciones
Método
Resultados
Nosotros

CTA:
“Ver talleres”

No colocar 7-8 enlaces de igual importancia.

El CTA debe tener mayor jerarquía.

En scroll:

Navbar sticky.

Aplicar:
backdrop blur moderado;
fondo semitransparente;
borde inferior muy tenue.

No convertirlo en un glassmorphism exagerado.

======================================================================
7. SECCIÓN “QUÉ VAS A APRENDER A CONSTRUIR”
======================================================================

TITLE:

“De usar IA a construir con IA.”

SUBCOPY:

“Aprende las habilidades que convierten un chatbot en una herramienta de trabajo.”

Crear cuatro tarjetas.

CARD 01

PROMPTING

“Instrucciones precisas para obtener resultados consistentes.”

CARD 02

VIBE CODING

“Convierte una idea en una herramienta funcional sin empezar desde cero.”

CARD 03

AUTOMATIZACIÓN

“Conecta IA con las aplicaciones y procesos que ya utilizas.”

CARD 04

AGENTES

“Diseña flujos capaces de razonar, ejecutar y pedir supervisión cuando sea necesario.”

Cada tarjeta debe contener:

- icono;
- título;
- frase breve;
- ejemplo visual mínimo.

No incluir párrafos.

======================================================================
8. HERRAMIENTAS
======================================================================

No crear una sección gigantesca explicando cada herramienta.

Crear una banda visual / marquee discreto:

ChatGPT
Claude
Gemini
n8n
Antigravity
Cursor
NotebookLM
Google Workspace
etc.

Eyebrow:

“HERRAMIENTAS REALES. CASOS REALES.”

Los logos o nombres se desplazan horizontalmente muy lentamente.

Animation duration:
25-35 segundos.

Pause on hover.

Usar máscaras/gradientes en los extremos.

Respetar prefers-reduced-motion.

======================================================================
9. FORMATOS DE FORMACIÓN
======================================================================

TITLE:

“Elige cómo quieres aprender.”

Crear 3 tarjetas grandes.

TALLER INTENSIVO

2–4 horas

“Construye una solución funcional en una sola sesión.”

Ideal para:
Profesionales y equipos que quieren empezar rápido.

CTA:
“Ver talleres”

--------------------------------------------------

PROGRAMA MODULAR

4 semanas

“Pasa de los fundamentos a construir tu propio sistema con IA.”

CTA:
“Ver programa”

--------------------------------------------------

FORMACIÓN IN-COMPANY

Para equipos

“Aplicamos la formación directamente sobre procesos reales de tu empresa.”

CTA:
“Formar a mi equipo”

--------------------------------------------------

La información debe entenderse sin abrir ninguna tarjeta.

Inspirarse conceptualmente en la simplicidad de las cards de Maven:
título + resultado + duración + profesor/formato + CTA.

No copiar sus diseños literalmente.

======================================================================
10. UNIFICAR LA METODOLOGÍA
======================================================================

Actualmente existen varias explicaciones similares del método.

Unificarlas.

Eliminar duplicación.

Nueva sección:

TITLE:

“No estudias el sistema.
Lo construyes.”

SUBTITLE:

“El método SyntIQ convierte un problema real en una solución funcional.”

Crear un stepper de cuatro pasos.

01
DETECTA

“Encuentra una tarea que consume tiempo.”

02
DISEÑA

“Define contexto, reglas y resultado.”

03
CONSTRUYE

“Conecta IA con tus herramientas.”

04
DESPLIEGA

“Prueba, mide y añade supervisión.”

Nada más.

La explicación profunda puede vivir en la página de metodología/formación.

======================================================================
11. MOTION PARA EL MÉTODO
======================================================================

En desktop:

Utilizar scroll-driven storytelling.

Mientras el usuario hace scroll:

Paso 01 se activa.
La línea de progreso avanza.
Paso 02 se activa.
Paso 03.
Paso 04.

Los pasos anteriores permanecen visibles con menor contraste.

Evitar hacer scroll-jacking.

El scroll del navegador debe seguir comportándose normalmente.

En mobile:

Stepper vertical simple.

Sin sticky complejo.

======================================================================
12. RESULTADOS
======================================================================

TITLE:

“Menos teoría.
Más cosas funcionando.”

No colocar cuatro testimonios largos.

Usar:

1 testimonio principal

+

máximo 3 resultados cuantificados verificables.

Ejemplo de estructura:

“Antes”
15 h/semana en tareas manuales

“Construyó”
Agente de clasificación + respuestas

“Después”
Tiempo recuperado para trabajo comercial

IMPORTANTE:

NO INVENTAR TESTIMONIOS.

NO INVENTAR CASOS.

NO inventar logos de clientes.

Si los datos actuales son placeholders, mantenerlos identificados internamente para sustitución.

======================================================================
13. CALCULADORA ROTI
======================================================================

MANTENER la calculadora porque genera interacción y diferencia a SyntIQ.

Pero simplificar el copy.

TITLE:

“¿Cuánto tiempo podrías recuperar?”

SUBTITLE:

“Estima el impacto potencial de automatizar tareas repetitivas.”

Inputs:

Personas
Horas repetitivas / semana
Costo medio / hora

Outputs principales:

HORAS RECUPERABLES / AÑO

IMPACTO ECONÓMICO ESTIMADO

ROTI POTENCIAL

No utilizar textos como:

“esta será la inversión más rentable que harás”

Evitar promesas absolutas.

Añadir microcopy:

“Estimación orientativa. El resultado real depende del proceso y nivel de automatización.”

======================================================================
14. ANIMACIÓN DE LA CALCULADORA
======================================================================

Cuando cambie un slider:

Interpolar suavemente los resultados.

Duración:
200-350 ms.

No hacer count-up desde cero cada vez.

Los números simplemente deben transicionar al nuevo resultado.

Highlight temporal discreto alrededor del KPI actualizado.

======================================================================
15. EQUIPO
======================================================================

Reducir drásticamente los actuales perfiles largos.

TITLE:

“IA desde negocio, datos, operaciones y gobernanza.”

Mostrar cuatro tarjetas.

Cada tarjeta:

Foto
Nombre
Rol
Una línea de expertise
3 tags como máximo

Ejemplo:

Alam Ozuna
Estrategia & Data
“Convierte tecnología en resultados de negocio.”
Data · Strategy · AI

No poner biografías completas en homepage.

Añadir:

“Conocer al equipo →”

Las biografías completas deben moverse a /nosotros.

======================================================================
16. MISIÓN, VISIÓN Y VALORES
======================================================================

QUITARLOS como gran sección de homepage.

Mover a:

/nosotros

En homepage puede permanecer únicamente una frase de marca:

“Tecnología útil. Aprendizaje práctico. IA con supervisión humana.”

No utilizar varias tarjetas explicando misión, visión, valores y reglas de oro.

Es información institucional, no información necesaria para convertir al visitante.

======================================================================
17. BLUEPRINT GRATUITO
======================================================================

Mantenerlo, pero convertirlo en un bloque de adquisición más visual.

TITLE:

“Construye tu primer agente.”

COPY:

“Descarga el Blueprint gratuito y crea un flujo básico en menos de 20 minutos.”

Mostrar una mockup visual del recurso.

3 microbeneficios:

Prompt estructurado
Flujo n8n
Guía paso a paso

CTA:

“Descargar Blueprint”

No mostrar una lista simulando demasiado el filesystem.

Debe parecer un producto educativo, no una descarga técnica perdida dentro de una landing.

======================================================================
18. FAQ
======================================================================

Reducir a máximo 4 preguntas en homepage.

Cambiar el enfoque de preguntas enterprise hacia preguntas educativas.

Utilizar aproximadamente:

“¿Necesito saber programar?”

“¿Qué construiré durante la formación?”

“¿Qué herramientas utilizaremos?”

“¿Hay formación para empresas?”

Las preguntas técnicas avanzadas sobre:

RAG
ERP
arquitectura
compliance
seguridad
integraciones

deben trasladarse a páginas de servicios empresariales si continúan siendo parte del negocio.

Eliminar cualquier promesa de “cero alucinaciones”.

En su lugar utilizar lenguaje como:

“Diseñamos los flujos con controles, fuentes verificadas y supervisión humana para reducir errores y evitar que acciones críticas se ejecuten sin revisión.”

======================================================================
19. CTA FINAL
======================================================================

Crear un final muy simple y potente.

HEADLINE:

“Deja de aprender IA en abstracto.”

SECOND LINE:

“Construye algo útil.”

COPY:

“Empieza con un taller práctico de SyntIQ.”

CTA PRINCIPAL:

“Ver próximos talleres”

CTA SECUNDARIO:

“Formar a mi equipo”

Añadir una animación ambiental muy discreta detrás del CTA.

======================================================================
20. SISTEMA VISUAL
======================================================================

NO sustituir arbitrariamente la identidad actual de SyntIQ.

Primero detectar:
- colores;
- tokens;
- tipografía;
- logo.

Mantener el ADN visual pero hacerlo más limpio.

Dirección:

“AI PRODUCT + PREMIUM EDUCATION”

Combinar:

- espacios amplios;
- bordes finos;
- grandes titulares;
- elementos UI;
- pequeñas visualizaciones técnicas;
- contraste fuerte;
- acentos de color controlados.

El contenido debe respirar.

MAX WIDTH aproximado:

1200-1280 px.

Texto editorial:

600-720 px de ancho máximo.

Cards:

border radius consistente.

Evitar múltiples radios diferentes sin sistema.

Spacing system:

preferiblemente escala de 4 u 8 px.

======================================================================
21. TIPOGRAFÍA
======================================================================

Crear jerarquía muy marcada.

Desktop hero:
clamp aproximado equivalente a 56-76 px dependiendo de viewport.

H2:
40-52 px.

Body:
16-18 px.

Microcopy:
13-14 px.

No utilizar uppercase en párrafos.

Uppercase únicamente para:

eyebrows
labels
badges
metadata

Controlar line-height cuidadosamente.

El usuario debe poder escanear la página antes de leerla.

======================================================================
22. ANIMACIONES GENERALES
======================================================================

El movimiento debe comunicar:

FLUJO
AUTOMATIZACIÓN
PROGRESO
INTELIGENCIA

No movimiento decorativo aleatorio.

Implementar:

A. SCROLL REVEALS

opacity:
0 → 1

translateY:
16px → 0

duration:
400-500ms

easing:
cubic-bezier(0.22, 1, 0.36, 1)

stagger cards:
50-80ms

Ejecutar una sola vez.

--------------------------------------------------

B. CARD HOVER

translateY:
0 → -4px

scale máximo:
1.01

Border/accent light:
muy sutil.

Duration:
180-220 ms.

--------------------------------------------------

C. BUTTONS

Al hover:

flecha se mueve 3-4 px hacia la derecha.

Botón no debe crecer exageradamente.

--------------------------------------------------

D. METRICS

Count-up solamente la primera vez que aparecen.

Duración:
700-1000 ms.

No repetir cuando se hace scroll arriba/abajo.

--------------------------------------------------

E. HERO WORKFLOW

Animar el recorrido de información.

Las líneas SVG se iluminan progresivamente.

Los nodos reciben estados.

Mantener transforms y opacity siempre que sea posible para aprovechar GPU.

======================================================================
23. NO UTILIZAR
======================================================================

Evitar:

- Three.js solamente por decoración.
- WebGL si no aporta información.
- fondos de partículas pesados.
- vídeos autoplay grandes.
- Lottie gigantes.
- 3 librerías distintas para motion.
- scroll hijacking.
- custom cursor.
- blur gigantes animados continuamente.
- animar box-shadow permanentemente.
- componentes enteros moviéndose todo el tiempo.

La web debe sentirse rápida.

No demostrar IA haciendo que el navegador trabaje innecesariamente.

======================================================================
24. LIBRERÍA DE ANIMACIÓN
======================================================================

Si el proyecto YA utiliza Framer Motion/Motion:

reutilizarlo.

Si no:

preferir CSS + IntersectionObserver para interacciones simples.

Añadir una dependencia nueva solamente cuando la complejidad lo justifique.

Las animaciones decorativas deben detenerse o simplificarse cuando:

prefers-reduced-motion: reduce.

======================================================================
25. REFERENCIAS DE DISEÑO
======================================================================

Analiza las versiones públicas actuales de estas plataformas antes de terminar el diseño:

1. DeepLearning.AI
2. Section AI
3. Maven — catálogo de cursos
4. DataCamp — formación de AI/data

NO copiar componentes literalmente.

NO copiar assets.

NO copiar textos.

NO copiar identidad visual.

Extraer PATRONES.

DE DEEPLEARNING.AI:

Tomar:
- claridad inmediata del hero;
- fuerte jerarquía;
- cursos visibles rápidamente;
- social proof;
- recursos gratuitos como entrada;
- comunicación accesible incluso en temas técnicos.

Aplicación SyntIQ:
la formación debe sentirse accesible pero seria.

--------------------------------------------------

DE SECTION AI:

Tomar:
- copy de alto impacto y pocas palabras;
- layouts tipo producto SaaS;
- interfaces de aprendizaje utilizadas como recursos visuales;
- business outcomes;
- cards premium;
- combinación de educación + transformación profesional.

Esta debe ser la referencia conceptual principal.

Aplicación SyntIQ:
hacer que la formación parezca una experiencia/producto moderno,
no una academia tradicional.

--------------------------------------------------

DE MAVEN:

Tomar:
- metadata visible;
- duración;
- instructores;
- fechas;
- objetivo del curso;
- cards extremadamente escaneables;
- urgencia de próximas cohortes.

Aplicación SyntIQ:
cada formación debe poder entenderse en aproximadamente 5 segundos.

--------------------------------------------------

DE DATACAMP:

Tomar:
- “learning by doing”;
- rutas de aprendizaje;
- diferenciación por skill;
- resultados concretos;
- progress mindset;
- interacción.

Aplicación SyntIQ:
presentar la experiencia como una progresión de habilidad,
no simplemente una colección de clases.

======================================================================
26. ARQUITECTURA DE INFORMACIÓN FUTURA
======================================================================

Preparar la navegación para crecer hacia:

/
Homepage

/formaciones
Catálogo

/formaciones/[slug]
Landing individual por formación

/empresas
Formación In-Company

/metodo
Método SyntIQ

/nosotros
Equipo + misión + visión + valores

/recursos
Blueprint + contenido gratuito

/contacto
Contacto/admisión

No es obligatorio crear todas estas páginas inmediatamente si no existen.

Pero la homepage debe dejar de cargar con todo el contenido institucional.

======================================================================
27. RESPONSIVE
======================================================================

Diseñar específicamente para:

360px
390px
768px
1024px
1280px
1440px+

No limitarse a “hacer desktop y apilarlo”.

En mobile:

- eliminar animaciones complejas;
- cards en una columna;
- botones hero full-width o cómodamente accesibles;
- H1 reducido;
- stepper vertical;
- nada de contenido cortado horizontalmente;
- navbar compacta;
- evitar marquees difíciles de leer;
- targets táctiles >=44px.

======================================================================
28. ACCESIBILIDAD
======================================================================

Garantizar:

- navegación completa por teclado;
- focus-visible;
- contraste suficiente;
- labels de formularios reales;
- alt text;
- semántica HTML;
- headings jerárquicos;
- buttons vs anchors correctamente utilizados;
- accordion accesible;
- prefers-reduced-motion.

No depender solamente del color para indicar estado.

======================================================================
29. PERFORMANCE
======================================================================

Objetivo:

LCP < 2.5s
CLS < 0.1
INP < 200ms

Buenas prácticas:

- lazy loading bajo el fold;
- optimización de imágenes;
- formatos modernos;
- evitar JS innecesario;
- mantener estáticas las secciones que no requieren client-side JS;
- code splitting;
- no cargar recursos de animación antes de necesitarlos.

Si es Next.js:

usar los primitives nativos adecuados para imágenes, fuentes y routing.

Evitar convertir toda la homepage en “use client”.

Los componentes interactivos deben estar aislados.

======================================================================
30. SEO
======================================================================

Actualizar metadata para reflejar el nuevo posicionamiento.

TITLE recomendado:

“SyntIQ | Formación práctica en Inteligencia Artificial”

DESCRIPTION:

“Aprende IA construyendo automatizaciones, aplicaciones y agentes reales. Talleres prácticos para profesionales, equipos y empresas.”

Mantener Open Graph correctamente configurado.

Crear títulos descriptivos para cada formación.

======================================================================
31. REGLAS DE COPY
======================================================================

TODO el copy debe seguir estas reglas:

1. Frases cortas.
2. Verbos de acción.
3. Beneficio antes que tecnología.
4. Resultado antes que arquitectura.
5. Evitar jargon cuando no sea necesario.
6. Máximo 2 frases de body copy por bloque visual.
7. Evitar repetir “IA”, “automatización” y “agentes” en todas las frases.
8. Evitar superlativos no demostrables.
9. No inventar estadísticas.
10. No prometer resultados garantizados.

Priorizar verbos:

Construye
Conecta
Automatiza
Diseña
Aprende
Despliega
Recupera
Transforma

En lugar de:

Potenciamos
Revolucionamos
Disruptivo
Innovador
De clase mundial
Sin límites

======================================================================
32. CONTENIDO QUE DEBE DESAPARECER O MOVERSE
======================================================================

Mover fuera de homepage:

- biografías extensas;
- misión completa;
- visión completa;
- reglas de oro completas;
- textos jurídicos extensos;
- explicación completa de RAG;
- arquitecturas enterprise;
- ejemplos de payload JSON grandes;
- largas simulaciones de terminal;
- duplicación de metodología;
- explicaciones de herramientas individualmente.

Mantener solamente pequeñas señales visuales de capacidad técnica.

======================================================================
33. CRITERIO FINAL
======================================================================

Al terminar, hacer este test mental:

Un visitante que nunca ha oído hablar de SyntIQ debe ser capaz de responder en 10 segundos:

¿Qué es SyntIQ?

→ Formación práctica de Inteligencia Artificial.

¿Qué aprenderé?

→ A construir automatizaciones, aplicaciones y agentes.

¿Es teoría?

→ No. Se aprende construyendo.

¿Hay algo para mí?

→ Sí: talleres, programa modular o formación empresarial.

¿Qué hago ahora?

→ Ver los próximos talleres.

Si cualquiera de estas respuestas no queda clara,
seguir simplificando.

======================================================================
34. EJECUCIÓN
======================================================================

Implementa los cambios directamente en el código.

No te limites a describirlos.

Refactoriza los componentes necesarios.

Preserva funcionalidades importantes.

Después:

1. Ejecuta el proyecto.
2. Corrige errores de compilación.
3. Revisa consola.
4. Revisa responsive.
5. Revisa navegación.
6. Revisa formularios.
7. Revisa calculadora ROTI.
8. Comprueba prefers-reduced-motion.
9. Revisa contraste.
10. Elimina código/componentes muertos que hayan quedado tras el rediseño.

Finalmente proporciona un pequeño resumen técnico indicando:

- archivos modificados;
- componentes creados;
- componentes eliminados;
- dependencias añadidas, si las hubo;
- principales decisiones UX;
- cualquier dato/claim que requiera validación humana.

OBJETIVO FINAL:

Que SyntIQ parezca menos una presentación técnica sobre Inteligencia Artificial y más una plataforma de aprendizaje moderna donde aprender IA significa construir sistemas reales.