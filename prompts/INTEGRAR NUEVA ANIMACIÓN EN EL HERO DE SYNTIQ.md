# INTEGRAR NUEVA ANIMACIÓN EN EL HERO DE SYNTIQ

He añadido al proyecto tres archivos generados específicamente para crear una nueva animación visual para el Hero de SyntIQ:

- `SyntIQHeroVisual.tsx`
- `SyntIQHeroVisual.css`
- `SyntIQ Hero Visual.md`

Quiero que analices estos archivos y los integres correctamente dentro del proyecto ACTUAL de SyntIQ.

IMPORTANTE:

NO quiero que reconstruyas el Hero desde cero.

NO quiero que cambies el copy principal.

NO quiero que cambies la navbar.

NO quiero que elimines los CTA existentes.

NO quiero un rebranding.

El objetivo es únicamente utilizar esta nueva animación como el elemento visual principal del Hero, adaptándola correctamente al diseño actual de SyntIQ.

---

## 1. PRIMERO ANALIZA EL PROYECTO

Antes de modificar nada:

1. Identifica el componente actual del Hero.
2. Identifica el framework y arquitectura.
3. Identifica si el proyecto usa Next.js App Router.
4. Identifica el sistema actual de CSS/Tailwind.
5. Identifica los tokens reales de color de SyntIQ.
6. Identifica tipografías.
7. Identifica breakpoints.
8. Identifica las animaciones actuales del Hero.
9. Identifica qué elemento visual se encuentra actualmente a la derecha del copy.

Después analiza:

`SyntIQHeroVisual.tsx`

y

`SyntIQHeroVisual.css`

para entender exactamente cómo funciona la animación.

---

# 2. OBJETIVO

Quiero que el Hero quede conceptualmente:

--------------------------------------------------

COPY DE SYNTIQ           ANIMACIÓN

Aprende IA              PROMPT
construyendo...            ↓
                       SYNTIQ AI
[Ver talleres]              ↓
[Blueprint]           ANALYZE
                          ↓
                       CLASSIFY
                          ↓
                       PREPARE
                          ↓
                      RESULTADO

--------------------------------------------------

En desktop:

copy aproximadamente 45-50%.

visual aproximadamente 50-55%.

La animación debe tener suficiente espacio para respirar.

---

# 3. SUSTITUIR EL VISUAL ACTUAL

Si actualmente existe otro:

- workflow;
- orquestador;
- terminal;
- visual agentizado;
- diagrama;
- ilustración técnica;

dentro del Hero:

reemplazarlo por:

`SyntIQHeroVisual`

NO mostrar ambos simultáneamente.

No duplicar mensajes visuales.

---

# 4. NO COPIAR LOS COLORES A CIEGAS

El componente generado actualmente define sus propios tokens como:

--syntiq-accent
--syntiq-accent-strong
--syntiq-ink
--syntiq-muted
--syntiq-line
--syntiq-panel

NO asumas que esos valores son necesariamente los colores definitivos de la web.

Analiza primero el sistema visual ACTUAL de SyntIQ.

Después conecta el componente a los tokens reales del proyecto.

Preferiblemente:

utilizar variables existentes.

Evitar crear un segundo design system solo para esta animación.

La animación debe parecer nativa de SyntIQ.

No debe parecer un widget pegado encima de la web.

---

# 5. TIPOGRAFÍA

Actualmente el componente utiliza una combinación de:

monospace

e

Inter/system-ui.

Adapta las tipografías al sistema actual del sitio cuando tenga sentido.

Conservar monospace únicamente en:

- estados;
- metadata;
- labels;
- elementos técnicos.

El resto debe utilizar la tipografía normal de SyntIQ.

---

# 6. CONTENIDO

Mantener conceptualmente esta secuencia:

PROMPT
↓
PLAN
↓
WORKFLOW
↓
RESULT

Prompt:

“Organiza los leads y prepara respuestas.”

Nodo:

SYNTIQ AI

Estados:

Understanding…
Planning…
Building…

Puedes traducirlos al español si mejora la coherencia con el resto de la web:

ENTENDIENDO…
PLANIFICANDO…
CONSTRUYENDO…

Preferencia:

utilizar español si el resto de la homepage está completamente en español.

Workflow:

ANALIZA

CLASIFICA

PREPARA

Resultado:

WORKFLOW COMPLETADO

18 leads clasificados
6 respuestas preparadas

✓ Listo para revisión humana

IMPORTANTE:

Estas cantidades son únicamente una demostración visual del workflow.

No deben parecer métricas reales de SyntIQ.

Si existe riesgo de confusión, sustituir por datos genéricos como:

18 entradas procesadas
6 acciones preparadas

o añadir una presentación claramente demostrativa.

---

# 7. NO PRESENTAR “SYNTIQ AI” COMO PRODUCTO SI NO EXISTE

Revisar el posicionamiento actual.

Si “SyntIQ AI” pudiera interpretarse como un producto o modelo propietario que realmente no existe, cambiar el nodo central.

Alternativas:

AI AGENT

AGENTE IA

SYSTEM AGENT

o simplemente:

IA

La animación debe enseñar lo que el alumno podrá construir.

No debe insinuar que SyntIQ ha desarrollado un modelo de IA propietario si eso no es cierto.

---

# 8. INTERPRETACIÓN CORRECTA

La animación debe representar:

“Esto es lo que puedes aprender a construir con SyntIQ.”

NO:

“Esto es una plataforma SaaS de SyntIQ procesando leads.”

Añadir si es visualmente apropiado un pequeño label discreto como:

LIVE BUILD

o:

WHAT YOU CAN BUILD

En español:

LO QUE PUEDES CONSTRUIR

No añadirlo si aumenta demasiado el ruido.

---

# 9. ANIMACIÓN

Preservar la lógica general generada:

Prompt aparece.

↓

Pulso viaja hacia IA.

↓

IA cambia de estado.

↓

Workflow se construye.

↓

Los nodos se activan secuencialmente.

↓

Los datos atraviesan el sistema.

↓

Aparece resultado.

↓

Pausa.

↓

Loop.

Duración aproximada:

7-8 segundos.

Mantener movimiento sutil.

---

# 10. REVISAR LA IMPLEMENTACIÓN CSS

No copies el CSS sin comprobarlo.

Revisa cuidadosamente:

- keyframes;
- absolute positioning;
- SVG coordinates;
- animation delays;
- stacking contexts;
- overflow;
- transforms;
- responsive;
- accessibility.

Si alguna técnica CSS utilizada por el componente puede producir inconsistencias entre navegadores, refactorízala.

En particular, revisa los cambios de estado del nodo AI y asegúrate de que funcionan de manera consistente.

No sacrifiques estabilidad por respetar literalmente el código generado.

---

# 11. RESPONSIVE

El componente original está pensado aproximadamente para:

600 × 500px

en desktop.

Adáptalo al Hero real.

Desktop grande:

conservar composición completa.

Laptop:

reducir proporcionalmente.

Tablet:

decidir si mantener dos columnas o pasar a layout vertical según el sistema actual.

Mobile:

Hero:

COPY

↓

CTA

↓

ANIMACIÓN

En pantallas pequeñas simplificar el visual.

Evitar:

- nodos cortados;
- SVG desalineado;
- overflow horizontal;
- textos minúsculos;
- visual de 600px de alto innecesariamente.

Si hace falta, crear una variante mobile simplificada.

---

# 12. MUY IMPORTANTE — SVG Y COORDENADAS

El componente utiliza un SVG con:

viewBox="0 0 600 500"

y conexiones posicionadas para esa composición.

Comprueba visualmente que los paths siguen conectando correctamente los nodos después de integrarlo en el layout real.

No asumir que responsive CSS garantiza que todos los conectores permanezcan perfectamente alineados.

Verificar específicamente:

1440px
1280px
1024px
768px
390px
360px

Si se desalinean:

ajustar la geometría o crear una composición específica para mobile.

---

# 13. PERFORMANCE

La animación debe ser muy ligera.

Mantener preferentemente:

transform
opacity
SVG stroke-dashoffset

Evitar añadir:

Three.js
WebGL
Canvas
GSAP

si no son necesarios.

NO instalar una nueva librería de animación para este componente.

El componente actual no necesita dependencias externas.

Preservar esa ventaja.

---

# 14. PREFERS REDUCED MOTION

Mantener la implementación existente.

Cuando:

prefers-reduced-motion: reduce

la animación debe quedar en un estado estático y comprensible.

No simplemente ocultarla.

---

# 15. ACCESIBILIDAD

El visual no debe interferir con lectores de pantalla.

Si el Hero ya explica claramente el concepto mediante texto:

considerar marcar el componente como:

aria-hidden="true"

para evitar contenido redundante.

Si se mantiene como:

role="img"

utilizar un aria-label breve y correcto en español.

No crear ruido semántico.

---

# 16. NO DUPLICAR COPY

No colocar dentro de la animación frases largas que ya aparecen en el Hero.

La animación comunica mediante movimiento.

El Hero comunica mediante copy.

Ambos deben complementarse.

---

# 17. AJUSTAR VISUALMENTE A SYNTIQ

Después de integrarlo:

revisar:

- border radius;
- border colors;
- panel backgrounds;
- glow;
- spacing;
- typography;
- label sizes;
- accent colors;
- opacity.

Debe parecer diseñado al mismo tiempo que el resto de la web.

No “un componente externo”.

---

# 18. NO SOBRECARGAR

Si la animación parece demasiado compleja dentro del Hero actual:

SIMPLIFICARLA.

Prioridad visual:

1. Prompt
2. Agente
3. Workflow
4. Resultado

Elementos secundarios como:

orbits
grid
technical labels
footer labels

pueden reducirse o eliminarse.

No sacrificar claridad por decoración.

---

# 19. HERO FINAL

El visitante debe entender:

TEXTO:

“Aprende IA construyendo sistemas que trabajan por ti.”

VISUAL:

“Una instrucción humana se convierte en un workflow funcional.”

La combinación de ambos debe explicar SyntIQ en aproximadamente 5 segundos.

---

# 20. QA

Después de implementar:

1. Ejecuta development build.
2. Ejecuta production build.
3. Revisa consola.
4. Revisa hydration errors.
5. Revisa TypeScript.
6. Revisa imports.
7. Revisa CSS conflicts.
8. Revisa responsive.
9. Revisa animación completa.
10. Revisa reduced motion.
11. Revisa performance.
12. Revisa Hero en viewport real.

No des la tarea por terminada simplemente porque compile.

Comprueba visualmente el resultado.

---

# 21. ENTREGA

Al terminar dime:

- qué archivo del Hero modificaste;
- dónde colocaste SyntIQHeroVisual;
- si modificaste el TSX original;
- si modificaste el CSS;
- qué colores adaptaste;
- qué elementos eliminaste del visual anterior;
- si encontraste problemas responsive;
- resultado del production build.

No rehagas otras secciones de la web durante esta tarea.

Esta tarea se limita al HERO.