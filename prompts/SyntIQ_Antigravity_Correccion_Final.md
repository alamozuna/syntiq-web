# SyntIQ — Prompt quirúrgico de corrección final para Google Antigravity

Actúa como un **Senior Product Designer, UX/CRO Specialist y Senior Frontend Engineer**.

Trabaja sobre el proyecto ACTUAL de SyntIQ:

**Sitio público:**  
https://syntiq-web-seven.vercel.app/

## Objetivo

Esta NO es una tarea de rediseño general.

La arquitectura, identidad visual, hero, animación principal, catálogo y páginas de formaciones ya existen y deben conservarse.

Tu tarea es corregir **exactamente los problemas indicados en este documento** y no expandir el alcance.

### NO hacer

- NO rediseñar el Hero.
- NO cambiar la animación del Hero.
- NO cambiar el H1 principal.
- NO cambiar la colorimetría.
- NO cambiar el logo.
- NO rehacer `/formaciones`.
- NO crear nuevas formaciones.
- NO crear nuevas secciones decorativas.
- NO instalar nuevas librerías salvo que sea estrictamente necesario.
- NO añadir chatbot, newsletter, login, checkout, ratings, reviews, countdowns o nuevas funcionalidades.
- NO sustituir componentes funcionales por otros solo por preferencia.

El objetivo de esta iteración es **limpieza, coherencia, navegación y cierre del funnel**.

---

# 1. Corregir definitivamente `/contacto`

Actualmente la experiencia de contacto no debe conservar ninguna versión antigua enfocada en consultoría enterprise o diagnóstico técnico.

La ruta:

`/contacto`

debe mostrar SIEMPRE una única experiencia:

# Contacto & Admisión

Hero recomendado:

## Hablemos de lo que quieres construir.

Subcopy:

**Cuéntanos qué quieres aprender o qué necesita tu equipo y te orientaremos hacia la formación adecuada.**

Mostrar dos intenciones claras:

- **PARA MÍ**
- **PARA MI EQUIPO**

Eliminar completamente de la experiencia pública de `/contacto` cualquier bloque o copy relacionado con:

- diagnóstico operativo;
- ingenieros de SyntIQ;
- arquitectura agéntica adaptada a infraestructura;
- viabilidad matemática;
- SLA de respuesta;
- Cero Humo;
- Cero Vaporware;
- implementación de infraestructura;
- consultoría enterprise;
- evaluación técnica de sistemas.

No esconder este contenido solo cuando existan query parameters.

**Eliminarlo de la experiencia principal de `/contacto`.**

---

# 2. Mantener correctamente los modos de Contacto

## 2.1 Contacto individual

Cuando el usuario seleccione:

**PARA MÍ**

mostrar un formulario de interés educativo.

Campos sugeridos:

- Nombre
- Email
- WhatsApp / teléfono, si ya forma parte del sistema
- Formación de interés
- Nivel actual, opcional
- ¿Qué te gustaría aprender o construir?, opcional

CTA:

**Enviar interés**

No utilizar:

- Solicitar diagnóstico
- Evaluar infraestructura
- Agendar diagnóstico

---

## 2.2 Formación para empresas

Cuando el usuario:

- seleccione **PARA MI EQUIPO**, o
- llegue mediante `/contacto?modalidad=in-company`

mostrar:

## Formación para tu equipo

Subcopy:

**Cuéntanos qué necesita aprender tu organización y qué procesos os gustaría trabajar durante la formación.**

Campos:

- Nombre
- Email corporativo
- Empresa
- Tamaño aproximado del equipo
- Área de interés
- Objetivo o proceso que quieren trabajar

CTA:

**Hablar sobre formación para mi equipo**

No mostrar ningún contenido de consultoría o implementación técnica.

El producto In-Company es:

**FORMACIÓN APLICADA A PROCESOS REALES DEL EQUIPO.**

---

## 2.3 Contacto desde una formación

Si la URL contiene:

`?formacion=SLUG`

detectar automáticamente la formación correspondiente.

Ejemplo:

`/contacto?formacion=vibe-coding-idea-app`

Mostrar:

**Estás interesado en**

**De Idea a App con IA**

Preseleccionar la formación en el formulario.

No obligar al usuario a seleccionarla de nuevo.

---

# 3. Correo oficial de Contacto

Todo lo relacionado con:

- Contacto
- Admisión
- Talleres
- Formación individual
- Lista de interés
- Programa Modular
- Formación In-Company
- Solicitudes generales

debe utilizar como correo receptor oficial:

**syntiqgroup@gmail.com**

Primero inspecciona cómo está implementado actualmente el formulario.

Si existe una integración funcional mediante:

- Server Action
- API Route
- SMTP
- Resend
- EmailJS
- Formspree
- u otro proveedor

conservarla y configurar correctamente el destinatario.

Cuando sea apropiado, utilizar una variable server-side equivalente a:

`CONTACT_EMAIL=syntiqgroup@gmail.com`

No exponer claves o credenciales en frontend.

Mostrar además en `/contacto`, de forma secundaria:

**¿Prefieres escribirnos directamente?**  
`syntiqgroup@gmail.com`

como enlace:

`mailto:syntiqgroup@gmail.com`

### Verificación

No considerar el formulario funcional únicamente porque el frontend muestre un mensaje de éxito.

Comprobar:

`Frontend → Backend → Servicio de correo → Destinatario`

Si no es posible verificar la llegada real al inbox desde el entorno actual, indicarlo explícitamente en el reporte final.

---

# 4. Eliminar claims absolutos o difíciles de demostrar en la homepage

Esta tarea SÍ puede modificar copy puntual de la homepage.

NO cambiar diseño, layout ni estructura general.

Buscar y corregir expresiones como:

- `100% Determinista`
- `0% Error`
- `Cero alucinaciones`
- `Sin alucinaciones`
- `Componente funcional generado en 2 min`
- `Sincronización continua 24/7`
- `Garantizado`
- `Precisión absoluta`

o claims equivalentes que no estén respaldados por datos verificables.

### Reformulaciones recomendadas

**NO:**  
`100% Determinista`

**SÍ:**  
`Reglas y validaciones estructuradas`

---

**NO:**  
`Sin alucinaciones`

**SÍ:**  
`Basado en fuentes y validaciones`

---

**NO:**  
`Componente funcional generado en 2 min`

**SÍ:**  
`Prototipado rápido asistido por IA`

---

**NO:**  
`Sincronización continua 24/7`

**SÍ:**  
`Ejecución automatizada`

Mantener el copy corto.

NO convertir estos cambios en nuevos párrafos.

---

# 5. Eliminar la metodología duplicada de la homepage

Auditar la sección del Método SyntIQ.

Actualmente no debe existir más de una explicación completa de:

- AUDITA
- DISEÑA
- CONSTRUYE
- DESPLIEGA

Si existen dos bloques que explican las mismas cuatro fases:

1. conservar únicamente la versión visual/interactiva más completa;
2. eliminar la versión redundante;
3. ajustar el spacing resultante;
4. no crear una metodología nueva;
5. no cambiar los nombres de las fases sin necesidad.

El objetivo es reducir repetición y longitud de la homepage.

---

# 6. Eliminar urgencia artificial en Formaciones y Footer

Auditar todo el proyecto buscando expresiones como:

- Plazas limitadas
- Plazas disponibles
- Últimas plazas
- Solo quedan X
- Reserva ahora

Si NO existe una cohorte real con:

- fecha definida;
- cupo definido;
- inscripción realmente abierta;

eliminar estos mensajes.

### Sustituir por estados honestos

Si todavía no existe fecha:

**Próxima edición por anunciar**

CTA:

**Avisarme de la próxima edición**

Si es una lista de interés:

**Lista de interés**

CTA:

**Unirme a la lista de interés**

Solo utilizar:

**Reservar plaza**

cuando exista un mecanismo real de reserva.

---

# 7. Auditar beneficios no confirmados en páginas de talleres

Revisar todas las páginas individuales.

Buscar afirmaciones como:

- Todas las sesiones se graban
- Acceso de por vida
- Código fuente incluido
- Plantillas incluidas
- Material disponible para siempre
- Certificado
- Soporte posterior
- Comunidad privada
- Grabación incluida

No asumir que estos beneficios están confirmados.

Si no existe una fuente de datos explícita dentro del proyecto que indique que el beneficio fue aprobado:

**eliminarlo temporalmente de la web pública.**

No inventar sustitutos.

Registrar cada elemento eliminado en el reporte final bajo:

**PENDIENTE DE VALIDACIÓN HUMANA**

---

# 8. Organizar mejor el catálogo sin rediseñarlo

NO eliminar formaciones del modelo de datos.

NO rehacer `/formaciones`.

Mantener las cards y filtros actuales.

Pero diferenciar visualmente:

## Formaciones principales

Destacar aproximadamente estas seis:

1. De Prompt a Blueprint
2. De Idea a App con IA
3. Arquitecto de Workflows con IA
4. Tu Segundo Cerebro con IA
5. IA en Google Workspace
6. Agentes que revisan su propio trabajo

Luego crear una separación simple:

## Próximamente en SyntIQ

para las formaciones secundarias o futuras.

Por ejemplo:

- IA Invisible
- De 100 páginas a 10 decisiones
- APIs, OAuth y Webhooks
- Automatizaciones resistentes a errores
- La Cabina de Mando

No crear un nuevo marketplace.

No añadir más cards.

Solo mejorar jerarquía de la oferta.

---

# 9. Limpiar el Footer

Eliminar o reemplazar:

**Próximo Taller: Plazas Disponibles**

si no existe realmente una cohorte abierta.

Sustituir por un mensaje estable como:

**Explora nuestras formaciones**

o:

**Aprende construyendo**

Revisar también la expresión:

**Mayordomía Radical**

Si aparece en el footer sin contexto suficiente, sustituirla por una frase inmediatamente comprensible y coherente con SyntIQ.

Preferencia:

**IA con criterio humano**

o:

**Excelencia en la ejecución**

Elegir la que mejor encaje visualmente y con el copy existente.

No cambiar el diseño general del footer.

---

# 10. Añadir un enlace HOME visible en la navegación

Este cambio es obligatorio.

Actualmente el visitante puede volver al Hero principalmente haciendo clic sobre el logo de SyntIQ.

Quiero una opción explícita en el menú principal para volver al inicio.

Agregar en la navegación un enlace visible:

**Inicio**

Preferencia de orden en desktop:

`Inicio | Formaciones | Método | Resultados | Nosotros`

más el CTA actual.

### Comportamiento

Desde cualquier página interna:

**Inicio**

debe navegar a:

`/`

Desde la homepage:

**Inicio**

debe llevar suavemente al Hero / parte superior de la página.

Puede utilizar:

`/`

o un anchor estable como:

`/#inicio`

si la arquitectura actual lo permite correctamente.

### Hero anchor

Si se utiliza anchor:

añadir un identificador semántico y estable al hero:

`id="inicio"`

No crear hacks con offsets arbitrarios.

Si existe navbar sticky, aplicar una solución correcta mediante CSS como:

`scroll-margin-top`

cuando sea necesario.

### Estado activo

Si el sistema actual de navegación utiliza estados activos:

- `Inicio` debe mostrarse activo en `/`
- `Formaciones` debe mostrarse activo en `/formaciones...`
- etc.

No exagerar visualmente el estado activo.

### Mobile

Agregar también:

**Inicio**

al menú móvil.

Debe ser claramente accesible.

No depender solamente del logo.

### Importante

El logo puede seguir funcionando como enlace a `/`.

No eliminar ese comportamiento.

Simplemente añadir una segunda vía explícita mediante el enlace:

**Inicio**

---

# 11. Revisar todos los enlaces de navegación

Después del cambio, comprobar:

- Logo → `/`
- Inicio → `/`
- Formaciones → ruta correcta
- Método → anchor/ruta correcta
- Resultados → anchor/ruta correcta
- Nosotros → `/nosotros` o ruta vigente
- CTA → destino correcto
- Footer → todas las rutas correctas

Ningún enlace debe devolver 404.

Si `Método` o `Resultados` apuntan a secciones de la homepage desde una ruta interna, deben funcionar correctamente.

Ejemplo esperado:

`/#metodo`

`/#resultados`

No asumir que un anchor local como `#metodo` funcionará correctamente desde `/formaciones`.

---

# 12. No modificar el Hero

Reiteración importante:

NO modificar:

- H1
- subtítulo
- estadísticas
- CTA
- animación principal
- estructura visual
- tamaño
- colores
- layout

Excepto si es necesario añadir:

`id="inicio"`

para navegación.

Nada más.

---

# 13. No añadir nuevas funcionalidades

No crear:

- chatbot;
- popup;
- login;
- checkout;
- pagos;
- dashboard;
- newsletter;
- blog;
- testimonios nuevos;
- ratings;
- reviews;
- nuevas estadísticas;
- countdowns.

Mantener el alcance estrictamente limitado.

---

# 14. QA — Contacto directo

Abrir:

`/contacto`

Debe aparecer:

**Contacto & Admisión**

y las opciones:

- Para mí
- Para mi equipo

No debe aparecer ningún contenido antiguo de diagnóstico técnico.

---

# 15. QA — Funnel individual

Probar:

`Homepage`
→ `Formaciones`
→ `De Idea a App con IA`
→ CTA
→ `Contacto & Admisión`
→ formación preseleccionada
→ submit
→ success/error state

---

# 16. QA — Funnel In-Company

Probar:

`Homepage`
→ `Formaciones`
→ `In-Company`
→ CTA
→ `/contacto?modalidad=in-company`

Debe mostrar exclusivamente:

**Formación para tu equipo**

No debe aparecer ninguna narrativa antigua de consultoría.

---

# 17. QA — Navegación Home

Probar desde:

- `/`
- `/formaciones`
- `/formaciones/talleres-intensivos`
- una página individual de formación
- `/formaciones/curso-modular`
- `/formaciones/in-company`
- `/nosotros`
- `/contacto`

En todas ellas:

**Inicio**

debe llevar correctamente al Hero / homepage.

Comprobar también el menú móvil.

---

# 18. Responsive

Revisar las páginas modificadas en:

- 360px
- 390px
- 768px
- 1024px
- 1280px
- 1440px

Especial atención a:

- navbar;
- nuevo botón/enlace Inicio;
- menú móvil;
- formularios;
- catálogo;
- footer.

No introducir overflow horizontal.

---

# 19. Accesibilidad

Comprobar:

- navegación por teclado;
- focus-visible;
- labels reales;
- estados activos;
- links vs buttons;
- mensajes de error;
- mailto;
- contraste;
- anchor navigation compatible con navbar sticky.

---

# 20. Production build

Al terminar:

1. Ejecutar build de producción.
2. Corregir errores TypeScript.
3. Corregir imports.
4. Revisar consola.
5. Revisar hydration errors.
6. Revisar rutas.
7. Revisar 404.
8. Revisar formularios.
9. Revisar anchors.
10. Revisar menú móvil.

No dar la tarea por finalizada si existen errores de compilación.

---

# 21. Reporte final obligatorio

Al finalizar, entregar un resumen breve y preciso.

## CONTACTO

- contenido antiguo eliminado;
- comportamiento Para mí;
- comportamiento Para mi equipo;
- query parameters utilizados.

## EMAIL

- sistema utilizado;
- destinatario configurado;
- confirmar `syntiqgroup@gmail.com`;
- indicar si fue posible comprobar la recepción real.

## HOMEPAGE

- claims modificados;
- metodología duplicada eliminada;
- confirmar que Hero no fue rediseñado.

## FORMACIONES

- urgencia artificial eliminada;
- beneficios no confirmados eliminados;
- formaciones principales;
- formaciones movidas a Próximamente.

## NAVEGACIÓN

- confirmar nuevo enlace `Inicio`;
- comportamiento desde páginas internas;
- comportamiento desde homepage;
- comportamiento mobile;
- anchors revisados;
- estados activos.

## FOOTER

- textos modificados;
- enlaces verificados.

## PENDIENTE DE VALIDACIÓN HUMANA

Listar cualquier dato que aún necesite confirmación del equipo SyntIQ:

- precios;
- fechas;
- horarios;
- duración;
- instructores;
- cupos;
- grabaciones;
- acceso posterior;
- certificados;
- materiales;
- soporte.

## BUILD

- resultado del production build;
- errores encontrados;
- errores corregidos.

---

# Criterio final

La tarea estará terminada únicamente cuando:

1. `/contacto` sea exclusivamente Contacto & Admisión.
2. No exista la antigua narrativa de diagnóstico enterprise.
3. Los claims absolutos indicados hayan sido corregidos.
4. La metodología no esté duplicada.
5. No exista urgencia ficticia sin cohorte real.
6. No se prometan beneficios de talleres no confirmados.
7. El catálogo diferencie claramente oferta principal y próximas formaciones.
8. El footer esté limpio y coherente.
9. `syntiqgroup@gmail.com` sea el contacto oficial configurado.
10. La navegación tenga un enlace visible **Inicio** en desktop y mobile.
11. El logo continúe enlazando a `/`.
12. No existan 404 internos.
13. El production build termine correctamente.

## REGLA FINAL

**NO EXPANDAS EL SCOPE.**

Corrige exactamente estos elementos y conserva todo lo demás.

Esta es una tarea de **corrección quirúrgica y cierre**, no de rediseño.
