# SYNTIQ — REFINAMIENTO VISUAL BASADO EN GUÍA DE IMPLEMENTACIÓN

Actúa como un **Senior UI Designer, Design Systems Engineer y Frontend Developer**.

Trabaja sobre el proyecto ACTUAL de SyntIQ:

https://syntiq-web-seven.vercel.app/

Tienes como referencia el documento:

`SyntIQ_Guia_Implementacion_Visual.docx`

## OBJETIVO

Aplicar una actualización VISUAL moderada al sitio actual de SyntIQ siguiendo la guía de implementación suministrada.

El problema principal a resolver es:

**La página actualmente utiliza demasiado fondo blanco y el scroll se percibe como un lienzo continuo, generando sensación de vacío.**

La solución debe introducir:

- mayor contraste entre secciones;
- alternancia clara de fondos;
- mejor uso de la paleta existente;
- mayor profundidad visual;
- mejor jerarquía tipográfica;
- cards más definidas;
- secciones oscuras que funcionen como “anclas” visuales.

## MUY IMPORTANTE

ESTA TAREA ES SOLO DE DISEÑO.

NO modificar:

- copy;
- títulos;
- textos;
- orden conceptual de las secciones;
- rutas;
- navegación;
- formularios;
- funcionalidad;
- catálogo de formaciones;
- datos;
- lógica de React;
- lógica de animaciones;
- calculadora ROTI;
- comportamiento del Hero;
- links;
- SEO;
- contenido de Contacto;
- contenido de Formaciones.

Se permite modificar únicamente lo necesario para:

- backgrounds;
- colores;
- borders;
- spacing;
- typography;
- contrast;
- cards;
- shadows;
- badges;
- visual hierarchy;
- estilos responsive.

NO reconstruir la página desde cero.

---

# 1. PALETA OFICIAL

Utilizar exclusivamente como base:

## Azul Noche
`#0F172A`

Uso:
- fondos oscuros;
- texto principal sobre fondos claros;
- cards oscuras;
- zonas de alto contraste.

## Azul Brillante
`#3B82F6`

Uso:
- CTA;
- highlights;
- números;
- bordes;
- líneas activas;
- badges;
- estados importantes;
- pequeños detalles visuales.

NO convertir toda la página en azul brillante. Debe funcionar como ACENTO.

## Azul Hielo
`#EFF6FF`

Uso:
- fondos alternos;
- interior suave de cards;
- bloques secundarios;
- transiciones entre secciones oscuras y blancas.

## Blanco Puro
`#FFFFFF`

Uso:
- secciones limpias;
- cards;
- texto sobre Azul Noche cuando corresponda.

---

# 2. PRINCIPIO CENTRAL: ALTERNANCIA DE FONDOS

El scroll NO debe sentirse como:

BLANCO → BLANCO → BLANCO → BLANCO

Debe sentirse como una secuencia de bloques:

HERO — Azul Noche  
HERRAMIENTAS — Azul Hielo  
QUÉ VAS A APRENDER / CONSTRUIR — Blanco  
MÉTODO SYNTIQ — Azul Hielo  
FORMATOS DE FORMACIÓN — Blanco  
RESULTADOS — Azul Noche  
CALCULADORA ROTI — Azul Hielo  
EQUIPO — Blanco  
BLUEPRINT — Azul Noche  
FAQ — Azul Hielo  
CTA FINAL — Azul Noche  
FOOTER — Azul Noche

Evitar que dos grandes secciones consecutivas utilicen exactamente el mismo fondo si puede romperse visualmente sin alterar la estructura.

---

# 3. HERO — CAMBIO VISUAL PRINCIPAL

Cambiar el fondo del Hero a:

`#0F172A`

El Hero debe convertirse en una de las grandes anclas visuales de la página.

NO cambiar:
- layout;
- animación;
- H1;
- botones;
- contenido;
- composición.

Solo adaptar su sistema visual al fondo oscuro.

Texto principal:
- Blanco o Azul Hielo.
- La parte itálica destacada del H1 debe utilizar `#3B82F6`.

Eyebrow / label superior:
- Azul Brillante o un azul grisáceo claro.
- Mantener tracking amplio.
- No usar blanco puro como primera opción.

CTA principal:
- Fondo `#3B82F6`
- Texto blanco.

CTA secundario:
- Fondo transparente.
- Border blanco / Azul Hielo con opacidad adecuada.
- Texto blanco o Azul Hielo.
- Hover muy sutil.

---

# 4. ADAPTAR LA ANIMACIÓN DEL HERO AL FONDO OSCURO

NO cambiar:
- comportamiento;
- timings;
- elementos;
- secuencia.

Únicamente adaptar contraste.

Si es necesario:
- aclarar ligeramente paneles;
- aumentar borders;
- usar Azul Brillante en estados activos;
- líneas azules con baja opacidad;
- mantener la grid muy sutil.

No convertir el Hero en cyberpunk.

Debe seguir siendo:
- limpio;
- premium;
- educativo;
- tecnológico.

---

# 5. LOGO SOBRE HERO OSCURO

El logo actual utiliza wordmark en Azul Noche y puede perder contraste sobre `#0F172A`.

Primero buscar si el proyecto ya dispone de una variante clara del logotipo.

Si existe:
- utilizarla en el header cuando el fondo sea oscuro.

Preferencia:
- isotipo + wordmark blanco;
- nodos/acento en Azul Brillante.

Si NO existe un asset alternativo:
- NO inventar un nuevo logo;
- usar la solución menos invasiva posible;
- no alterar geometría;
- no rediseñar el logotipo.

---

# 6. NAVBAR

Con el Hero oscuro, adaptar el navbar para integrarse correctamente.

Puede utilizar:
- fondo semitransparente oscuro;
- backdrop blur moderado;
- borde claro con muy baja opacidad.

Links:
- Azul Hielo / gris azulado claro.

Active / hover:
- Azul Brillante.

CTA:
- Azul Brillante.

Mantener navegación actual:
Inicio, Formaciones, Método, Resultados, Nosotros.

NO modificar destinos ni lógica.

---

# 7. HERRAMIENTAS REALES

Fondo:
`#EFF6FF`

Texto:
`#0F172A`

Funciona como transición entre Hero oscuro y contenido.

Evitar contenedores pesados.

Puede existir una línea separadora sutil.

---

# 8. QUÉ VAS A APRENDER A CONSTRUIR

Fondo:
`#FFFFFF`

Texto:
`#0F172A`

Las cuatro cards deben ganar presencia.

Aplicar:
- fondo interior `#EFF6FF` o muy próximo;
- border superior `3px solid #3B82F6`;
- borders laterales muy sutiles;
- shadows moderadas o inexistentes;
- radius consistente con el sistema actual.

No convertirlas en cards SaaS genéricas.

---

# 9. MÉTODO SYNTIQ

Fondo:
`#EFF6FF`

Texto:
`#0F172A`

Números 01–04:
- font-weight 400;
- Azul Noche;
- pequeño círculo/aro/acento en Azul Brillante.

La línea de conexión puede usar Azul Brillante con baja opacidad.

NO cambiar interacción ni contenido.
NO duplicar contenido.
Solo styling.

---

# 10. FORMATOS DE FORMACIÓN

Fondo:
Blanco.

Texto:
Azul Noche.

Mantener las tres cards actuales.

Tarjeta “Más elegido”:
- border `1.5px solid #3B82F6`;
- box-shadow aproximado `0 8px 24px rgba(59,130,246,0.12)`;
- badge con fondo `#3B82F6` y texto blanco.

No hacerla mucho más grande que las otras.

---

# 11. RESULTADOS / TESTIMONIOS

Fondo:
`#0F172A`

Texto:
Blanco / Azul Hielo.

Cifras grandes:
`#3B82F6`

Debe ser una de las secciones de mayor contraste visual.

No sobrecargar con glow.

---

# 12. CALCULADORA ROTI

Fondo:
`#EFF6FF`

Texto:
`#0F172A`

NO modificar:
- cálculos;
- sliders;
- inputs;
- lógica.

Caja de resultados:
- fondo `#0F172A`;
- texto blanco;
- cifra principal `#3B82F6`;
- labels gris azulado claro.

---

# 13. EQUIPO FUNDADOR

Fondo:
Blanco.

Texto:
Azul Noche.

Mantener estructura y fotografías.

Agregar bajo cada foto un detalle sencillo:
`2px solid #3B82F6`

Puede ser:
- borde inferior;
- pequeña línea de acento.

No enmarcar toda la foto con borde azul grueso.

---

# 14. BLUEPRINT / RECURSO GRATUITO

Fondo:
`#0F172A`

Texto:
Blanco.

Crear efecto spotlight con una card blanca flotante:
- background `#FFFFFF`;
- texto `#0F172A`;
- shadow sutil.

CTA:
Azul Brillante.

NO cambiar contenido ni funcionamiento.

---

# 15. FAQ

Fondo:
`#EFF6FF`

Texto:
`#0F172A`

Utilizar divisores sutiles:
`rgba(15,23,42,0.10)`

Estados activos:
Azul Brillante moderado.

No añadir nuevas animaciones.

---

# 16. CTA FINAL

Fondo:
`#0F172A`

Texto:
Blanco.

CTA principal:
- fondo `#3B82F6`;
- texto blanco.

No añadir nuevas ilustraciones ni animaciones complejas.

---

# 17. FOOTER

Mantener fondo:
`#0F172A`

Texto:
Blanco / gris claro.

No modificar:
- contenido;
- links;
- estructura.

Solo asegurar continuidad visual con CTA final.

---

# 18. TIPOGRAFÍA — BODY

Sobre fondos blancos:
- mantener el peso existente si ronda 300;
- aumentar line-height a aproximadamente `1.6–1.7` cuando beneficie la lectura.

No engrosar toda la tipografía.

---

# 19. TIPOGRAFÍA — FONDOS OSCUROS

Mantener pesos relativamente ligeros.

No convertir todos los textos en bold.

---

# 20. NÚMEROS Y CIFRAS

Para:
- ROTI;
- resultados;
- pasos;
- métricas;

usar aproximadamente:
`font-weight: 400`

---

# 21. LABELS

Mantener tracking amplio:
`0.25em–0.30em`

En fondos claros:
- Azul Brillante o Azul Noche.

En fondos oscuros:
- preferir `#3B82F6` o gris/azul claro;
- evitar blanco puro como primera opción.

---

# 22. VARIABLES DE COLOR

Si el proyecto todavía no tiene tokens equivalentes, centralizar:

```css
:root {
  --color-dark: #0F172A;
  --color-accent: #3B82F6;
  --color-light: #EFF6FF;
  --color-white: #FFFFFF;
}
```

Si YA existe un sistema de tokens:
NO crear uno paralelo.

---

# 23. UTILIDADES VISUALES

Usar como referencia conceptual:

```css
.section-dark {
  background: #0F172A;
  color: #FFFFFF;
}

.section-light {
  background: #EFF6FF;
  color: #0F172A;
}

.card-accent {
  background: #FFFFFF;
  border-top: 3px solid #3B82F6;
}

.card-featured {
  border: 1.5px solid #3B82F6;
  box-shadow: 0 8px 24px rgba(59,130,246,0.12);
}

.badge-accent {
  background: #3B82F6;
  color: #FFFFFF;
}

.divider-soft {
  border-bottom: 1px solid rgba(15,23,42,0.10);
}
```

Adaptar al sistema CSS/Tailwind/SCSS existente.

---

# 24. TRANSICIONES ENTRE SECCIONES

Evitar cortes accidentales.

NO usar:
- ondas gigantes;
- SVG decorativos excesivos;
- gradientes enormes;
- diagonales;
- curvas complejas.

La alternancia de color debe hacer la mayor parte del trabajo.

---

# 25. ESPACIADO

Revisar spacing vertical después del cambio de fondos.

Las secciones oscuras pueden tener un poco más de respiración.

No agregar espacios enormes.

---

# 26. CARDS

Evitar que todo se convierta en card.

Cards prioritarias:
- Qué vas a construir;
- Formatos;
- Resultado ROTI;
- Blueprint;
- componentes que ya son cards.

---

# 27. SHADOWS

Muy moderadas.

Preferir sombras azules extremadamente sutiles.

---

# 28. BORDES

Priorizar:
- Azul Brillante para destacados;
- Azul Noche al 8–15% para separaciones.

---

# 29. ACCESIBILIDAD

Revisar contraste después de cambiar a fondos oscuros.

Azul Brillante sobre Azul Noche:
- adecuado para números grandes;
- labels;
- elementos decorativos.

Para body text pequeño:
- Blanco;
- Azul Hielo.

---

# 30. RESPONSIVE

Revisar específicamente:
- 360px
- 390px
- 768px
- 1024px
- 1280px
- 1440px+

Asegurar:
- contraste correcto;
- navbar legible;
- logo visible;
- cards consistentes;
- Hero legible;
- animación visible;
- sin overflow horizontal.

---

# 31. NO MODIFICAR ANIMACIONES

NO:
- aumentar velocidad;
- crear nuevos efectos;
- cambiar ciclos;
- cambiar lógica;
- instalar GSAP;
- instalar Three.js;
- añadir partículas.

Solo adaptar:
- color;
- contraste;
- background;
- borders.

---

# 32. NO CAMBIAR CONTENIDO

No reescribir textos.

NO cambiar:
“Aprende IA construyendo sistemas que trabajan por ti”

ni ningún otro copy.

No modificar:
- Formaciones;
- Método;
- Resultados;
- ROTI;
- Equipo;
- Blueprint;
- FAQ;
- CTA.

Esta tarea es únicamente VISUAL DESIGN.

---

# 33. ORDEN DE IMPLEMENTACIÓN

## PASO 1
Hero → Azul Noche  
Resultados → Azul Noche  
Blueprint → Azul Noche  
CTA final → Azul Noche

## PASO 2
Método → Azul Hielo  
Calculadora ROTI → Azul Hielo  
FAQ → Azul Hielo

## PASO 3
Qué vas a construir → mejorar cards  
Formatos → mejorar cards

## PASO 4
Aplicar:
- badges;
- borders;
- cifras;
- typography;
- line-height;
- labels.

## PASO 5
Revisar:
- contraste;
- responsive;
- spacing;
- continuidad visual.

---

# 34. CRITERIO VISUAL FINAL

El scroll debe sentirse aproximadamente:

DARK  
↓  
LIGHT BLUE  
↓  
WHITE  
↓  
LIGHT BLUE  
↓  
WHITE  
↓  
DARK  
↓  
LIGHT BLUE  
↓  
WHITE  
↓  
DARK  
↓  
LIGHT BLUE  
↓  
DARK

La página ya NO debe sentirse “demasiado blanca”.

Pero tampoco debe convertirse en una web oscura.

Debe existir equilibrio entre:
- BLANCO
- AZUL HIELO
- AZUL NOCHE

con Azul Brillante utilizado solo como acento.

---

# 35. RESULTADO DESEADO

La web actual de SyntIQ debe seguir siendo reconocible.

No buscamos un redesign.

Buscamos que la misma web gane:
- contraste;
- ritmo;
- profundidad;
- jerarquía;
- personalidad de marca;
- sensación premium.

---

# 36. QA FINAL

Comprobar visualmente:
- Hero;
- Herramientas;
- Qué vas a construir;
- Método;
- Formatos;
- Resultados;
- ROTI;
- Equipo;
- Blueprint;
- FAQ;
- CTA;
- Footer.

Después ejecutar production build.

Corregir únicamente errores relacionados con esta implementación visual.

---

# 37. REPORTE FINAL

Al terminar, indicar:

## COLORES
- secciones que pasaron a Azul Noche;
- secciones que pasaron a Azul Hielo;
- secciones mantenidas en Blanco.

## COMPONENTES
- cards modificadas;
- badges modificados;
- ROTI;
- Blueprint;
- navbar;
- logo.

## TIPOGRAFÍA
- cambios en line-height;
- peso de cifras;
- cambios de labels.

## RESPONSIVE
- ajustes realizados.

## BUILD
- resultado del production build.

NO realizar cambios adicionales después de completar este alcance.
