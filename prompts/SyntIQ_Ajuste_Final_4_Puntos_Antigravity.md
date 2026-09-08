# SYNTIQ — AJUSTE FINAL DE 4 PUNTOS

Actúa como un Senior UX/UI Designer y Senior Frontend Engineer.

Trabaja sobre el proyecto ACTUAL de SyntIQ:

https://syntiq-web-seven.vercel.app/

## IMPORTANTE

Esta NO es una tarea de rediseño.

NO cambies:

- Hero
- animación del Hero
- H1
- CTA principales
- colorimetría
- tipografías
- calculadora ROTI
- página de Contacto
- arquitectura del catálogo
- páginas individuales de formaciones
- Programa Modular
- In-Company
- página Nosotros

Todo eso debe conservarse.

Tu tarea consiste EXCLUSIVAMENTE en corregir los siguientes cuatro puntos.

---

# 1. RECUPERAR UNA SOLA SECCIÓN “MÉTODO SYNTIQ”

En una iteración anterior existían dos versiones duplicadas de la metodología:

AUDITA  
→  
DISEÑA  
→  
CONSTRUYE  
→  
DESPLIEGA

Se solicitó eliminar la duplicación, pero aparentemente se eliminó la sección completa.

Quiero recuperar UNA SOLA sección de metodología.

## Título

**No estudias el sistema. Lo construyes.**

## Subcopy

**El método SyntIQ convierte un problema real en una solución funcional.**

## Etapas

### 01 — AUDITA

**Encuentra tareas repetitivas, fricciones y oportunidades reales.**

### 02 — DISEÑA

**Define contexto, reglas, herramientas y el resultado esperado.**

### 03 — CONSTRUYE

**Conecta la IA con las herramientas y datos necesarios.**

### 04 — DESPLIEGA

**Prueba, mide y añade supervisión antes de llevarlo al trabajo real.**

---

## Diseño

NO crear una sección totalmente nueva desde cero si todavía existe algún componente anterior reutilizable.

Busca primero la antigua implementación del Método SyntIQ y reutiliza la versión visual más lograda.

Puede funcionar como:

- stepper;
- línea de progreso;
- cuatro etapas conectadas;
- scroll reveal sutil.

NO utilizar cuatro enormes bloques de texto.

Debe ser visual, escaneable y relativamente compacta.

### Desktop

Preferencia:

`AUDITA → DISEÑA → CONSTRUYE → DESPLIEGA`

Puede existir una línea o path que conecte las cuatro etapas.

### Mobile

Convertirlo en stepper vertical.

---

## Ubicación

Colocar esta sección en un punto lógico dentro de la homepage.

Preferencia:

después de explicar qué se puede aprender/construir y antes de entrar en resultados o secciones comerciales posteriores.

Mantener la narrativa:

QUÉ PUEDES CONSTRUIR  
↓  
CÓMO APRENDES A HACERLO  
↓  
FORMATOS / RESULTADOS

Analiza el orden actual antes de insertarla para evitar una nueva duplicación.

---

## Anchor

Asignar:

`id="metodo"`

o conservar el identificador actual si ya existe uno equivalente.

El enlace:

**Método**

de la navbar debe llevar correctamente a esta sección.

Desde homepage:

scroll suave hacia la sección.

Desde páginas internas:

debe navegar correctamente a:

`/#metodo`

No usar solamente:

`#metodo`

desde páginas internas si eso produce un anchor en la página equivocada.

---

# 2. SEPARAR FORMACIONES PRINCIPALES DE “PRÓXIMAMENTE EN SYNTIQ”

Actualmente `/formaciones` tiene muchas formaciones visibles dentro del mismo flujo.

NO elimines ninguna formación del modelo de datos.

NO borres rutas.

NO borres páginas individuales.

Únicamente mejora la jerarquía pública.

---

## SECCIÓN 1

Título:

# Formaciones destacadas

Subcopy opcional y corto:

**Empieza por una habilidad y termina construyendo algo real.**

Mostrar como principales aproximadamente estas seis:

1. De Prompt a Blueprint
2. De Idea a App con IA
3. Arquitecto de Workflows con IA
4. Tu Segundo Cerebro con IA
5. IA en Google Workspace
6. Agentes que revisan su propio trabajo

Conservar:

- cards actuales;
- estilos;
- filtros;
- badges;
- herramientas;
- nivel;
- estado;
- CTA.

NO rediseñar las cards.

---

## SECCIÓN 2

Después crear una separación visual clara:

# Próximamente en SyntIQ

Subcopy:

**Nuevas formaciones que estamos preparando.**

Mover visualmente aquí aquellas formaciones futuras o secundarias como:

- IA Invisible
- De 100 páginas a 10 decisiones
- APIs, OAuth y Webhooks sin miedo
- Automatizaciones resistentes a errores
- La Cabina de Mando

Utilizar los datos y estados YA existentes.

Si alguna tiene:

COMING_SOON

mostrar:

**Próximamente**

Si tiene:

WAITLIST

mostrar:

**Lista de interés**

Si está:

DRAFT

no mostrar públicamente.

---

## Importante

No crear sensación de que existen 11 talleres abiertos simultáneamente.

La primera sección debe transmitir:

**ESTO ES LO QUE RECOMENDAMOS PARA EMPEZAR.**

La segunda:

**ESTO ES LO QUE VIENE DESPUÉS.**

No añadir precios, fechas, plazas ni disponibilidad inventada.

---

# 3. UNIFICAR TODOS LOS FOOTERS

Audita todo el proyecto buscando diferentes implementaciones, configuraciones o variantes del footer.

Especialmente comprobar:

- `/`
- `/formaciones`
- `/formaciones/talleres-intensivos`
- páginas individuales
- `/formaciones/curso-modular`
- `/formaciones/in-company`
- `/nosotros`
- `/contacto`
- `/contacto?formacion=...`
- `/contacto?modalidad=in-company`

Actualmente no debe existir una página que siga mostrando:

**Mayordomía Radical**

mientras otras utilizan:

**Excelencia en la ejecución**

---

## Resultado requerido

Utilizar UNA sola versión consistente.

Preferencia:

**Excelencia en la ejecución**

Si existe una breve descripción asociada, mantenerla clara y breve.

Eliminar definitivamente:

**Mayordomía Radical**

de cualquier footer público.

---

## Arquitectura

Si actualmente existen múltiples componentes Footer:

analiza si pueden consolidarse en un único componente compartido.

Preferencia conceptual:

`<Footer />`

utilizado por todos los layouts.

NO hacer una refactorización masiva si implica riesgo innecesario.

Pero evita mantener dos footers visualmente iguales con contenido diferente.

---

## Revisar también

Todos los enlaces del footer deben funcionar:

- Formaciones
- Talleres Intensivos
- Programa Modular
- In-Company
- Nosotros
- Contacto

No debe existir ningún 404.

No mostrar:

**Plazas disponibles**

si no existe una cohorte real abierta.

---

# 4. CONFIRMAR Y CORREGIR EL ENLACE “INICIO” DE LA NAVEGACIÓN

Quiero que exista explícitamente:

**Inicio**

en la navbar.

La única forma visible de volver al Hero NO debe ser hacer clic en el logo.

---

## Desktop

La navegación debe quedar conceptualmente similar a:

`Inicio | Formaciones | Método | Resultados | Nosotros`

más el CTA principal actual.

No modificar radicalmente el diseño actual.

Simplemente integrar **Inicio** respetando spacing y jerarquía.

---

## Mobile

Agregar también:

**Inicio**

al menú móvil.

Debe ser claramente clicable y accesible.

---

## Comportamiento

### Desde homepage

Al hacer clic en:

**Inicio**

debe llevar al inicio / Hero.

Puede utilizar:

`/#inicio`

si el Hero tiene:

`id="inicio"`

o puede navegar a `/` si esa solución es más robusta.

Preferencia:

scroll suave al Hero cuando ya estamos en la homepage.

---

### Desde páginas internas

Desde:

- `/formaciones`
- páginas de talleres
- Programa Modular
- In-Company
- Nosotros
- Contacto

hacer clic en:

**Inicio**

debe navegar a:

`/`

o:

`/#inicio`

y mostrar el Hero.

---

## Logo

El logo debe CONTINUAR enlazando a `/`.

No eliminar ese comportamiento.

Ahora deben existir dos formas:

LOGO  
→ Home

INICIO  
→ Home

---

# 5. REVISAR LOS ANCHORS DE LA NAVBAR

Como estamos restaurando Método, revisar también los enlaces internos.

Desde homepage:

**Método**  
→ `#metodo`

**Resultados**  
→ la sección real de resultados.

Desde páginas internas:

deben apuntar a la homepage + anchor.

Ejemplo:

`/#metodo`

y:

`/#resultados`

No dejar enlaces internos que intenten encontrar `#metodo` dentro de `/contacto` o `/formaciones`.

---

# 6. NAVBAR STICKY + ANCHORS

Si la navbar es sticky:

asegurar que al navegar mediante anchor el encabezado de la sección no quede escondido debajo del navbar.

Utilizar preferiblemente:

`scroll-margin-top`

en las secciones correspondientes.

No implementar cálculos JS complejos si CSS resuelve el problema.

---

# 7. ESTADO ACTIVO DE NAVEGACIÓN

Si la navbar ya tiene sistema de estado activo:

- `/` → Inicio
- `/formaciones...` → Formaciones
- `/nosotros` → Nosotros

Para anchors de homepage:

Método / Resultados pueden utilizar el comportamiento ya existente.

No es necesario construir un sistema avanzado de scroll spy si todavía no existe.

No ampliar el scope.

---

# 8. NO TOCAR NADA MÁS

Después de completar estos cuatro puntos:

DETENTE.

NO:

- modificar Contacto;
- cambiar Hero;
- crear nuevas animaciones;
- cambiar Formaciones individuales;
- cambiar Programa Modular;
- modificar ROTI;
- añadir métricas;
- crear nuevas páginas;
- añadir nuevas formaciones;
- rediseñar footer;
- cambiar design system;
- instalar nuevas librerías.

Esta es una intervención puntual.

---

# 9. QA OBLIGATORIO

## Homepage

Confirmar:

- Hero intacto.
- `Inicio` visible.
- `Método` visible.
- existe exactamente UNA sección Método.
- `Método` navega correctamente.
- `Resultados` navega correctamente.
- no existe metodología duplicada.

---

## Formaciones

Confirmar:

- existe sección Formaciones destacadas.
- existen aproximadamente seis destacadas.
- existe sección Próximamente en SyntIQ.
- ningún curso fue eliminado del modelo de datos.
- ningún link se rompió.

---

## Footer

Comprobar:

- Homepage
- Formaciones
- Taller individual
- Programa Modular
- In-Company
- Nosotros
- Contacto
- Contacto con query parameter

Todos deben utilizar la misma versión/copy.

`Mayordomía Radical` no debe aparecer en ninguna ruta pública.

---

## Navegación

Probar `Inicio` desde:

- `/`
- `/formaciones`
- `/formaciones/talleres-intensivos`
- una formación individual
- `/formaciones/curso-modular`
- `/formaciones/in-company`
- `/nosotros`
- `/contacto`

Probar también en mobile.

---

# 10. RESPONSIVE

Revisar:

- 360px
- 390px
- 768px
- 1024px
- 1280px
- 1440px

Especial atención a:

navbar desktop;  
navbar mobile;  
nuevo enlace Inicio;  
sección Método;  
separación del catálogo.

No introducir overflow horizontal.

---

# 11. BUILD FINAL

Ejecutar production build.

Corregir:

- TypeScript errors
- broken imports
- hydration errors
- console errors
- 404
- anchors incorrectos
- warnings críticos

No dar la tarea por terminada solamente porque compile.

Probar la navegación real.

---

# 12. REPORTE FINAL

Al terminar, indicar exclusivamente:

## MÉTODO

- componente utilizado;
- ubicación;
- confirmar que solo existe una versión;
- anchor utilizado.

## FORMACIONES

- cuáles quedaron destacadas;
- cuáles quedaron en Próximamente;
- confirmar que ninguna fue eliminada de datos.

## FOOTER

- cuántos componentes/variantes encontraste;
- cuál quedó activa;
- confirmar que `Mayordomía Radical` fue eliminado.

## NAVEGACIÓN

- confirmar `Inicio` desktop;
- confirmar `Inicio` mobile;
- comportamiento desde homepage;
- comportamiento desde páginas internas;
- funcionamiento de Método;
- funcionamiento de Resultados.

## BUILD

- resultado del production build;
- errores encontrados;
- errores corregidos.

---

# CRITERIO FINAL

La intervención está completa cuando:

1. Existe exactamente UNA sección Método SyntIQ.
2. `Método` en navbar lleva correctamente a ella.
3. Las formaciones están claramente divididas entre principales y próximas.
4. Todo el sitio utiliza un footer consistente.
5. `Mayordomía Radical` desapareció de los footers públicos.
6. Existe un enlace visible `Inicio` en desktop y mobile.
7. El logo continúa enlazando a Home.
8. Inicio funciona desde cualquier página.
9. No se modificó el Hero.
10. No se expandió el scope.
11. Production build funciona correctamente.

NO REALICES CAMBIOS ADICIONALES DESPUÉS DE CUMPLIR ESTOS PUNTOS.
