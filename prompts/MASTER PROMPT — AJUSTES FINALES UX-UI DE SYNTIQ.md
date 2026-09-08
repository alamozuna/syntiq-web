# MASTER PROMPT — AJUSTES FINALES UX/UI DE SYNTIQ

Actúa como un **Senior UX/UI Designer, CRO Specialist y Frontend Architect especializado en productos de Inteligencia Artificial, EdTech y herramientas agentizadas**.

Tu tarea es realizar una ronda final de mejoras sobre el sitio web actual de **SyntIQ**.

Sitio de referencia actual:

https://syntiq-web-seven.vercel.app/

## OBJETIVO

NO quiero rehacer el sitio desde cero.

La base visual actual me gusta y debe conservarse.

Quiero realizar una **optimización quirúrgica** enfocada en:

- reducir contenido innecesario;
- mejorar jerarquía;
- eliminar duplicaciones;
- mejorar conversión;
- simplificar elementos excesivamente técnicos;
- reforzar que SyntIQ es una plataforma de formación práctica en Inteligencia Artificial;
- hacer que el visitante entienda rápidamente qué puede aprender y construir;
- conservar el aspecto tecnológico y premium actual.

La nueva percepción de SyntIQ debe ser:

**“Aquí aprendo IA construyendo cosas útiles.”**

En lugar de:

**“Esta empresa sabe muchas cosas técnicas sobre IA.”**

---

# 1. PRIMERO: AUDITA EL PROYECTO

Antes de modificar código:

1. Inspecciona completamente el repositorio.
2. Detecta el framework.
3. Identifica los componentes actuales.
4. Detecta sistema de estilos.
5. Detecta dependencias de animación.
6. Revisa routing.
7. Revisa componentes reutilizables.
8. Revisa la calculadora ROTI.
9. Revisa responsive.
10. Revisa navbar y enlaces actuales.

NO instales nuevas librerías si no son necesarias.

NO cambies arbitrariamente la identidad visual.

NO reemplaces componentes que ya funcionan simplemente por preferencia.

---

# 2. PRIORIDAD CRÍTICA — ARREGLAR /FORMACIONES

Actualmente existe navegación hacia:

/formaciones

Asegúrate de que esta ruta NO devuelva 404.

Si la página todavía no existe:

crear una página funcional de Formaciones reutilizando el diseño actual.

Debe mostrar inicialmente tres categorías:

- Talleres Intensivos
- Programa Modular
- Formación In-Company

No hace falta construir todavía un marketplace complejo.

La página debe ser suficientemente funcional para que cualquier CTA de:

“Ver formaciones”
“Ver talleres”
“Próximas formaciones”

tenga un destino válido.

Además:

revisar todos los links internos de navbar, botones y footer.

Eliminar cualquier 404 interno.

---

# 3. HERO — CONSERVAR PERO SIMPLIFICAR

Mantener la dirección visual actual del hero.

Debe quedar absolutamente claro en menos de 5 segundos que:

SYNTIQ = FORMACIÓN PRÁCTICA EN INTELIGENCIA ARTIFICIAL.

Mantener una estructura similar a:

EYEBROW:

APRENDE · CONSTRUYE · AUTOMATIZA

H1:

“Aprende IA construyendo sistemas que trabajan por ti.”

SUBHEADLINE:

“Talleres prácticos para convertir tareas repetitivas en automatizaciones, aplicaciones y agentes útiles.”

CTA PRINCIPAL:

“Ver próximos talleres”

CTA SECUNDARIO:

“Descargar Blueprint”

NO añadir más texto.

NO añadir más badges innecesarios.

---

# 4. SIMPLIFICAR RADICALMENTE EL ORQUESTADOR / PIPELINE TÉCNICO

Esta es una de las mejoras principales.

Actualmente la web muestra una visualización demasiado técnica con elementos como:

- múltiples nodos;
- LangChain;
- RAG;
- PostgreSQL;
- payload JSON;
- logs;
- compliance;
- métricas técnicas;
- arquitectura interna;
- error rate;
- auditoría.

Quiero conservar la idea del sistema agentizado porque forma parte de la personalidad visual de SyntIQ.

PERO:

reducir aproximadamente 60-70% de su complejidad visual y textual.

Transformarlo en una demostración visual sencilla.

Nueva estructura:

ENTRADA

↓

AGENTE IA

↓

DECIDE

↓

EJECUTA

↓

RESULTADO

Ejemplo:

[ EMAIL / WHATSAPP / DOCUMENTO ]

↓

[ AGENTE IA ]

↓

[ ANALIZA ]

↓

[ EJECUTA ACCIÓN ]

↓

[ RESULTADO ✓ ]

El visitante debe entender el flujo sin conocimientos técnicos.

---

# 5. ANIMACIÓN DEL ORQUESTADOR

Mantener una animación fluida.

Secuencia:

1. Aparece Input.
2. Viaja un pulso visual al agente.
3. Agente cambia a estado “Procesando”.
4. Se ilumina “Decide”.
5. Se activa “Ejecuta”.
6. Resultado muestra check.
7. Pausa.
8. Reinicia.

Duración total:

5-7 segundos.

Utilizar principalmente:

transform
opacity
SVG stroke animation

Evitar efectos pesados.

No utilizar WebGL.

No utilizar Three.js para esto.

Respetar:

prefers-reduced-motion.

---

# 6. ELIMINAR DETALLE TÉCNICO INNECESARIO

Eliminar del componente principal elementos como:

- payload JSON visible;
- logs gigantes;
- arquitectura completa;
- nombres de bases de datos;
- tecnicismos internos innecesarios;
- porcentajes absolutos de error;
- certificaciones utilizadas como decoración.

Si existe contenido técnico valioso:

moverlo a una interacción secundaria.

Por ejemplo:

“Ver arquitectura →”

que abra un modal, accordion o enlace futuro.

La arquitectura técnica debe funcionar como:

EVIDENCIA.

No como:

MENSAJE PRINCIPAL.

---

# 7. ELIMINAR CLAIMS ABSOLUTOS

Buscar en toda la web claims como:

“0% Error Rate”

“100% Auditado”

“Cero alucinaciones”

“La inversión más rentable que puedes hacer”

“El aprendizaje se amortiza en el primer mes”

o afirmaciones equivalentes.

Eliminar o reformular cualquier claim absoluto que no pueda demostrarse.

Usar lenguaje riguroso.

Por ejemplo:

EN VEZ DE:

“Cero alucinaciones”

UTILIZAR:

“Flujos diseñados con contexto, controles y supervisión humana para reducir errores.”

EN VEZ DE:

“0% Error Rate”

UTILIZAR:

“Controles y validaciones antes de ejecutar acciones críticas.”

EN VEZ DE:

“Se amortiza el primer mes”

UTILIZAR:

“Estima el impacto potencial del tiempo recuperado.”

La credibilidad debe tener prioridad sobre el marketing agresivo.

---

# 8. ELIMINAR MISIÓN Y VISIÓN DE HOMEPAGE

Actualmente existe información institucional sobre:

- misión;
- visión;
- filosofía;
- valores.

Esta información NO debe ocupar una gran sección dentro de homepage.

Moverla exclusivamente a:

/nosotros

En homepage mantener únicamente una frase corta si resulta necesaria:

“Tecnología útil. Aprendizaje práctico. IA con supervisión humana.”

No más.

---

# 9. UNIFICAR LAS DOS METODOLOGÍAS

Actualmente existen dos explicaciones diferentes del método SyntIQ.

Esto genera duplicación.

Eliminar una.

Mantener UNA SOLA metodología.

Preferencia:

utilizar una progresión de cuatro etapas como:

01 — AUDITA

Encuentra tareas repetitivas y oportunidades.

02 — DISEÑA

Define contexto, reglas y resultados.

03 — CONSTRUYE

Conecta IA con las herramientas necesarias.

04 — DESPLIEGA

Prueba, mide y añade supervisión.

Título:

“No estudias el sistema.
Lo construyes.”

Subcopy:

“El método SyntIQ convierte un problema real en una solución funcional.”

Nada más.

---

# 10. VISUAL DE LA METODOLOGÍA

Mantenerlo visual.

Desktop:

stepper horizontal o vertical elegante.

Puede existir una línea de progreso que se active mientras se hace scroll.

NO utilizar scroll hijacking.

NO bloquear el scroll.

En mobile:

stepper vertical simple.

Las explicaciones deben ser extremadamente cortas.

---

# 11. SIMPLIFICAR EQUIPO

Actualmente los perfiles tienen demasiado texto para homepage.

Reducir cada tarjeta del equipo a:

FOTO

NOMBRE

ROL

UNA FRASE

3 TAGS COMO MÁXIMO

Ejemplo:

Alam Ozuna

Estrategia & Data

“Convierte tecnología en resultados de negocio.”

Data · Strategy · AI

Agregar:

“Conocer al equipo →”

que enlace a:

/nosotros

Las biografías completas deben vivir únicamente allí.

---

# 12. NO REPETIR CONTENIDO ENTRE HOME Y /NOSOTROS

Auditar:

/

y

/nosotros

Evitar que ambas páginas tengan prácticamente los mismos textos.

HOME:

debe vender y explicar la propuesta.

NOSOTROS:

debe explicar:

- equipo;
- trayectoria;
- filosofía;
- misión;
- visión;
- valores;
- principios.

---

# 13. FAQ — CAMBIARLO COMPLETAMENTE

El FAQ actual tiene un enfoque excesivamente enterprise y técnico.

Homepage debe responder dudas de alguien interesado en aprender.

Mantener máximo:

4-5 preguntas.

Utilizar:

“¿Necesito saber programar?”

“¿Qué voy a construir?”

“¿Qué herramientas utilizaremos?”

“¿Puedo llevar un proceso real de mi empresa?”

“¿Ofrecen formación para equipos?”

Respuesta a programación:

dejar claro que no es necesario ser desarrollador para empezar, pero que la profundidad depende de la formación.

Eliminar de homepage FAQs sobre:

- ERP;
- arquitectura RAG;
- bases de datos;
- compliance avanzado;
- integraciones enterprise;
- propiedad intelectual técnica;
- infraestructura.

Ese contenido puede vivir en:

/empresas

o futuras páginas de servicios.

---

# 14. CALCULADORA ROTI — CONSERVAR

NO eliminar la calculadora.

Es uno de los elementos diferenciadores de la web.

Simplificar el mensaje.

Título:

“¿Cuánto tiempo podrías recuperar?”

Descripción:

“Estima el impacto potencial de automatizar tareas repetitivas.”

Inputs:

Personas

Horas repetitivas por semana

Costo medio por hora

Resultados:

HORAS RECUPERABLES / AÑO

IMPACTO ECONÓMICO ESTIMADO

ROTI POTENCIAL

Agregar:

“Estimación orientativa. El resultado real depende del proceso y del nivel de automatización.”

Eliminar cualquier promesa garantizada.

---

# 15. MEJORAR ANIMACIÓN ROTI

Cuando cambien los sliders:

actualizar los resultados suavemente.

Duración:

200-350ms.

No reiniciar números desde cero.

Utilizar interpolación entre valor anterior y nuevo valor.

Aplicar un highlight muy discreto al KPI actualizado.

---

# 16. QUÉ APRENDERÁS

Revisar la sección de habilidades.

Debe ser extremadamente fácil de escanear.

Mantener aproximadamente cuatro áreas:

PROMPTING

“Obtén resultados más consistentes con mejores instrucciones.”

VIBE CODING

“Convierte ideas en aplicaciones funcionales.”

AUTOMATIZACIÓN

“Conecta IA con procesos y herramientas.”

AGENTES

“Construye sistemas capaces de analizar y ejecutar tareas.”

No añadir largos párrafos.

---

# 17. HERRAMIENTAS

No explicar una por una herramientas como:

ChatGPT
Claude
Gemini
n8n
Antigravity
Cursor
NotebookLM
etc.

Mostrar principalmente:

logos;
nombres;
microinteracciones.

Eyebrow:

“HERRAMIENTAS REALES. CASOS REALES.”

Puede mantenerse un marquee horizontal lento.

Duración:

25-35 segundos.

Pause on hover.

Aplicar gradiente/mask en extremos.

No convertir esta sección en documentación de software.

---

# 18. FORMATOS DE FORMACIÓN

Esta sección debe tener mucha importancia.

Título:

“Elige cómo quieres aprender.”

Crear tres tarjetas claras:

TALLER INTENSIVO

2-4 horas

“Construye una solución funcional en una sola sesión.”

CTA:

“Ver talleres”

---

PROGRAMA MODULAR

4 semanas

“Pasa de los fundamentos a construir tu propio sistema con IA.”

CTA:

“Ver programa”

---

FORMACIÓN IN-COMPANY

Para equipos

“Aplicamos la formación directamente sobre procesos reales de tu empresa.”

CTA:

“Formar a mi equipo”

Las tarjetas deben poder entenderse en aproximadamente 5 segundos.

---

# 19. RESULTADOS / TESTIMONIOS

Reducir ruido.

No mostrar demasiados testimonios largos.

Preferir:

1 testimonio destacado

+

máximo 3 datos verificables.

Si no existen métricas reales:

NO inventarlas.

Si actualmente existen placeholders:

marcarlos en código como TODO o pendiente de validación.

---

# 20. BLUEPRINT GRATUITO

Mantener el recurso gratuito.

Pero convertirlo en un producto educativo visual.

Título:

“Construye tu primer agente.”

Texto:

“Descarga el Blueprint gratuito y crea un flujo básico paso a paso.”

Mostrar visualmente:

- mockup del recurso;
- prompt estructurado;
- flujo;
- guía.

CTA:

“Descargar Blueprint”

No utilizar un filesystem gigante ni una terminal excesivamente técnica.

---

# 21. CTA FINAL

Simplificar la parte final de homepage.

Utilizar:

“Deja de aprender IA en abstracto.”

“Construye algo útil.”

Texto:

“Empieza con un taller práctico de SyntIQ.”

CTA principal:

“Ver próximos talleres”

CTA secundario:

“Formar a mi equipo”

Nada más.

---

# 22. NAVBAR

Revisar la navegación.

Recomendada:

Formaciones

Método

Resultados

Nosotros

CTA:

“Ver talleres”

Navbar sticky.

Background con blur ligero.

Evitar glassmorphism exagerado.

Verificar que TODOS los enlaces funcionen.

---

# 23. COPYWRITING GLOBAL

Reducir entre:

30%-50%

del texto que todavía resulte innecesario.

Principio:

UNA IDEA POR BLOQUE.

Una persona debe poder entender la página haciendo solamente scroll sin leer todos los párrafos.

Preferir:

títulos;

microcopy;

UI;

diagramas;

números;

cards;

iconos.

Evitar:

párrafos largos.

---

# 24. PRINCIPIO FUNDAMENTAL DE COPY

Cambiar:

“MIRA LO QUE SYNTIQ SABE HACER”

por:

“MIRA LO QUE TÚ VAS A PODER HACER”

Ejemplo:

NO:

“Nuestra arquitectura agentizada utiliza múltiples capas de orquestación…”

SÍ:

“Construye agentes que analizan información y ejecutan tareas.”

NO:

“Aplicamos RAG para reducir alucinaciones…”

SÍ:

“Aprende a conectar tus agentes con información confiable.”

NO:

“Integraciones con APIs empresariales…”

SÍ:

“Conecta la IA con las herramientas que ya utilizas.”

---

# 25. ANIMACIONES

NO aumentar la cantidad de animaciones.

Mejorar solamente las existentes.

Principio:

EL MOVIMIENTO DEBE EXPLICAR ALGO.

Usar:

scroll reveals;

stagger de cards;

workflow animado;

transiciones de KPI;

hover states;

líneas SVG;

microinteracciones.

Evitar:

partículas aleatorias;

elementos flotando sin propósito;

custom cursor;

scroll hijacking;

WebGL decorativo;

blur animado continuamente;

glows enormes;

animaciones permanentes.

---

# 26. SCROLL REVEALS

Usar aproximadamente:

opacity:

0 → 1

translateY:

16px → 0

duration:

400-500ms

easing:

cubic-bezier(0.22, 1, 0.36, 1)

stagger:

50-80ms

Animar una sola vez.

---

# 27. HOVER DE CARDS

Hover:

translateY(-4px)

scale máximo:

1.01

Border highlight sutil.

Duration:

180-220ms.

Nada exagerado.

---

# 28. RESPONSIVE

Revisar específicamente:

360px

390px

768px

1024px

1280px

1440px+

En mobile:

simplificar animations;

stepper vertical;

evitar marquee complicado;

CTA cómodos;

no overflow horizontal;

cards una debajo de otra;

targets táctiles >=44px.

---

# 29. PERFORMANCE

Mantener el sitio ligero.

Objetivos:

LCP < 2.5s

CLS < 0.1

INP < 200ms

Evitar:

dependencias innecesarias;

client-side JS excesivo;

imágenes sin optimizar;

grandes elementos decorativos.

Si es Next.js:

no convertir toda la homepage en `use client`.

Mantener únicamente componentes interactivos como Client Components.

---

# 30. ACCESSIBILITY

Revisar:

keyboard navigation;

focus-visible;

contraste;

labels;

alt text;

headings;

accordion;

buttons vs links;

prefers-reduced-motion.

No depender solo del color.

---

# 31. SEO

Revisar metadata.

Title recomendado:

“SyntIQ | Formación práctica en Inteligencia Artificial”

Description:

“Aprende IA construyendo automatizaciones, aplicaciones y agentes reales. Talleres prácticos para profesionales, equipos y empresas.”

Mantener Open Graph.

---

# 32. NO CAMBIAR ESTAS COSAS SIN RAZÓN

Mantener:

- logo SyntIQ;
- colorimetría;
- ADN tecnológico;
- estilo premium;
- calculadora ROTI;
- recursos gratuitos;
- fotos reales del equipo;
- enfoque agentizado;
- lenguaje visual actual;
- componentes buenos ya existentes.

NO realizar un rebranding.

NO convertir la página en una plantilla SaaS genérica.

SyntIQ debe seguir teniendo personalidad propia.

---

# 33. RESULTADO ESPERADO

La homepage debe poder responder estas preguntas en menos de 10 segundos:

¿QUÉ ES SYNTIQ?

Formación práctica en Inteligencia Artificial.

¿QUÉ APRENDO?

A construir automatizaciones, aplicaciones y agentes.

¿ES SOLO TEORÍA?

No. Aprendo construyendo.

¿QUÉ FORMATOS EXISTEN?

Talleres, programa modular y formación para empresas.

¿QUÉ HAGO AHORA?

Ver los próximos talleres.

Si alguna respuesta no queda clara:

seguir simplificando.

---

# 34. IMPORTANTE — NO SOBRE-DISEÑAR

Después de implementar todos estos cambios:

NO añadir una nueva sección para rellenar espacios.

NO añadir más texto para explicar las decisiones.

NO crear nuevas métricas.

NO añadir nuevos componentes tecnológicos simplemente porque se ven bien.

Si eliminar algo mejora el resultado:

elimínalo.

Prefiero una homepage más corta y fuerte que una homepage larga demostrando cada capacidad de SyntIQ.

---

# 35. TEST FINAL

Después de implementar:

ejecuta el proyecto.

Revisa:

- errores de compilación;
- consola;
- routing;
- /formaciones;
- /nosotros;
- todos los CTA;
- responsive;
- mobile;
- calculadora;
- navbar;
- formularios;
- accordions;
- animations;
- reduced motion;
- SEO metadata;
- performance;
- accessibility básica.

Eliminar:

dead code;

imports no utilizados;

componentes antiguos que hayan quedado duplicados;

CSS no utilizado cuando sea seguro hacerlo.

---

# 36. ENTREGA FINAL

Implementa todos los cambios directamente.

NO quiero solamente recomendaciones.

Al finalizar, dame un pequeño informe indicando:

1. Archivos modificados.
2. Componentes eliminados.
3. Componentes creados.
4. Componentes simplificados.
5. Rutas corregidas.
6. Claims modificados.
7. Dependencias añadidas o eliminadas.
8. Problemas encontrados.
9. Elementos que todavía requieran datos reales por parte del equipo.

CRITERIO FINAL:

SyntIQ debe seguir sintiéndose tecnológica.

Pero el visitante no debería tener que entender la tecnología para entender el valor.

La tecnología demuestra la capacidad.

La formación es el producto.

Y el protagonista de la homepage debe ser lo que el usuario puede llegar a construir.