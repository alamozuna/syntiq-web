# SYNTIQ — FINAL UX/CRO CLEANUP & FUNNEL CONSISTENCY PASS

Actúa como un Senior Product Designer, UX/CRO Specialist y Senior Frontend Engineer.

Estás trabajando sobre el proyecto ACTUAL de SyntIQ.

Sitio público:

https://syntiq-web-seven.vercel.app/

IMPORTANTE:

Esta NO es una tarea de rediseño.

La arquitectura general actual ya está aprobada.

NO rehagas la homepage.

NO cambies el Hero.

NO cambies la animación del Hero.

NO cambies la identidad visual.

NO crees nuevas formaciones.

NO crees nuevas secciones salvo que sea estrictamente necesario para corregir una inconsistencia existente.

Esta iteración es una ronda FINAL de limpieza, consistencia y conversión.

==================================================
OBJETIVO
==================================================

Corregir los problemas restantes detectados en producción:

1. Eliminar completamente la antigua narrativa enterprise de /contacto.
2. Corregir el modo In-Company del formulario.
3. Asegurar que todos los formularios envían realmente a syntiqgroup@gmail.com.
4. Eliminar urgencia artificial donde no existen fechas/plazas reales.
5. Eliminar beneficios de cursos que no hayan sido confirmados.
6. Limpiar claims absolutos o difíciles de demostrar.
7. Eliminar la metodología duplicada de homepage.
8. Mejorar ligeramente la organización del catálogo sin rediseñarlo.
9. Mantener intacto todo lo que ya funciona correctamente.

==================================================
1. AUDITA ANTES DE MODIFICAR
==================================================

Primero inspecciona:

- /
- /formaciones
- /formaciones/talleres-intensivos
- /formaciones/curso-modular
- /formaciones/in-company
- /contacto
- /contacto?formacion=...
- /contacto?modalidad=in-company
- páginas individuales de talleres
- navbar
- footer
- formularios
- backend/server actions/API routes usados para contacto
- modelo de datos de formaciones

Ejecuta el proyecto antes de modificar para establecer un baseline.

No empieces creando componentes nuevos si el problema puede resolverse refactorizando los existentes.

==================================================
2. REHACER DEFINITIVAMENTE /CONTACTO
==================================================

Actualmente /contacto conserva contenido antiguo relacionado con:

- diagnóstico operativo;
- ingenieros de SyntIQ;
- arquitectura agéntica;
- infraestructura;
- viabilidad matemática;
- Cero Humo;
- Cero Vaporware;
- lenguaje de consultoría tecnológica.

ELIMINAR ese contenido de la experiencia pública de Contacto.

No ocultarlo simplemente cuando exista un query parameter.

Eliminarlo de la arquitectura actual de /contacto.

Debe existir UNA sola experiencia principal:

CONTACTO & ADMISIÓN

Hero:

“Hablemos de lo que quieres construir.”

Subcopy:

“Cuéntanos qué quieres aprender o qué necesita tu equipo y te orientaremos hacia la formación adecuada.”

Después ofrecer dos intenciones:

PARA MÍ

PARA MI EQUIPO

==================================================
3. CONTACTO INDIVIDUAL
==================================================

Cuando el usuario selecciona:

PARA MÍ

mostrar formulario orientado a estudiantes/profesionales.

Campos:

Nombre

Email

WhatsApp / teléfono
si actualmente forma parte del sistema

Formación de interés

Nivel actual
opcional

¿Qué te gustaría aprender o construir?
opcional

CTA:

“Enviar interés”

No utilizar:

“Solicitar diagnóstico”

“Agendar diagnóstico”

“Evaluar infraestructura”

ni terminología equivalente.

==================================================
4. CONTACTO IN-COMPANY
==================================================

Cuando llegue mediante:

/contacto?modalidad=in-company

o seleccione:

PARA MI EQUIPO

mostrar directamente la experiencia empresarial.

Hero/contexto:

“Formación para tu equipo”

Subcopy:

“Cuéntanos qué necesita aprender tu organización y qué procesos os gustaría trabajar durante la formación.”

Campos:

Nombre

Email corporativo

Empresa

Tamaño aproximado del equipo

Área de interés

Objetivo / proceso que quieren trabajar

CTA:

“Hablar sobre formación para mi equipo”

NO mostrar ninguna sección sobre:

arquitectura agéntica;

infraestructura;

implementaciones;

diagnóstico técnico;

SLA;

viabilidad matemática;

Cero Humo / Vaporware.

El producto In-Company es:

FORMACIÓN APLICADA.

No consultoría de implementación.

==================================================
5. CONTACTO DESDE UNA FORMACIÓN
==================================================

Si la URL contiene:

?formacion=SLUG

reconocer automáticamente la formación.

Ejemplo:

/contacto?formacion=vibe-coding-idea-app

mostrar:

“Estás interesado en”

“De Idea a App con IA”

Preseleccionar esa formación dentro del formulario.

No obligar al usuario a elegirla otra vez.

El asunto del email también debe incluirla.

==================================================
6. CORREO OFICIAL
==================================================

Todo lo relacionado con:

- Contacto;
- Admisión;
- Formación individual;
- Lista de interés;
- Talleres;
- Programa Modular;
- In-Company;
- Solicitudes generales;

debe llegar a:

syntiqgroup@gmail.com

Este es el correo oficial receptor.

Primero inspecciona cómo funciona actualmente el envío.

Si existe:

- server action;
- API route;
- SMTP;
- Resend;
- EmailJS;
- Formspree;
- otro servicio;

NO lo reemplaces si funciona.

Configura correctamente el destinatario.

Preferiblemente utilizar una variable server-side como:

CONTACT_EMAIL=syntiqgroup@gmail.com

cuando sea apropiado.

NO exponer:

API keys;

passwords;

SMTP credentials;

secrets

en componentes client-side.

==================================================
7. ESTRUCTURA DEL EMAIL
==================================================

El mensaje recibido en syntiqgroup@gmail.com debe ser fácil de interpretar.

Incluir:

Tipo de solicitud

Nombre

Email

Teléfono si existe

Formación

Modalidad

Empresa si aplica

Tamaño del equipo si aplica

Nivel actual si aplica

Objetivo/mensaje

Página de origen

Utilizar asuntos claros.

Ejemplos:

[SyntIQ] Interés — De Idea a App con IA

[SyntIQ] Lista de interés — Arquitecto de Workflows

[SyntIQ] Formación In-Company — Empresa

[SyntIQ] Contacto Web — Nombre

==================================================
8. VERIFICACIÓN REAL DEL FORMULARIO
==================================================

IMPORTANTE:

No considerar que el formulario funciona simplemente porque aparece:

“Mensaje enviado”.

Verificar realmente:

Frontend
→
Backend
→
Servicio de correo
→
Destinatario

Si existen limitaciones que impiden comprobar la llegada real al inbox, indícalo explícitamente en el reporte final.

No simular éxito si el envío falla.

==================================================
9. SUCCESS STATE
==================================================

Después de un envío exitoso:

Mostrar:

“Recibimos tu solicitud.”

Texto:

“Nos pondremos en contacto contigo usando los datos que proporcionaste.”

No prometer:

“en menos de 24 horas”

o equivalente,

salvo que exista un SLA real aprobado.

==================================================
10. ERROR STATE
==================================================

Si el envío falla:

Mostrar:

“Hubo un problema al enviar tu solicitud. Inténtalo nuevamente o escríbenos directamente.”

Debajo:

syntiqgroup@gmail.com

Crear:

mailto:syntiqgroup@gmail.com

No mostrar:

stack traces;

errores de servidor;

mensajes técnicos.

==================================================
11. CORREO VISIBLE
==================================================

Mostrar dentro de /contacto:

“¿Prefieres escribirnos directamente?”

syntiqgroup@gmail.com

Debe ser secundario respecto al formulario.

Utilizar:

mailto:syntiqgroup@gmail.com

==================================================
12. ELIMINAR URGENCIA ARTIFICIAL
==================================================

Auditar toda la web buscando:

“Plazas limitadas”

“Plazas disponibles”

“Últimas plazas”

“Reserva ahora”

“Solo quedan...”

o mensajes similares.

Si NO existe:

- una fecha real;
- una cohorte abierta;
- un cupo definido;

eliminarlos.

Sustituir según el caso por:

“Próxima edición por anunciar”

“Próximamente”

“Lista de interés”

“Avisarme de la próxima edición”

No utilizar escasez artificial.

==================================================
13. CTA SEGÚN ESTADO
==================================================

AVAILABLE:

“Reservar plaza”

ÚNICAMENTE si existe un mecanismo real para reservar.

COMING_SOON:

“Avisarme de la próxima edición”

WAITLIST:

“Unirme a la lista de interés”

DRAFT:

No mostrar públicamente.

Si una formación no tiene fecha:

NO utilizar “Reservar plaza”.

==================================================
14. AUDITAR BENEFICIOS INVENTADOS
==================================================

Revisa las páginas individuales.

Actualmente pueden existir afirmaciones como:

“Todas las sesiones se graban”

“Acceso de por vida”

“Código fuente incluido”

“Plantillas incluidas”

“Material disponible para siempre”

o beneficios similares.

NO asumir que estos beneficios existen.

Crear una lista interna de los beneficios encontrados.

Si NO existe una fuente de datos explícita que confirme ese beneficio:

eliminarlo temporalmente de la experiencia pública.

NO inventar sustitutos.

==================================================
15. ENTREGABLES DE LOS TALLERES
==================================================

Mantener solamente entregables coherentes con el modelo de datos actual y que estén claramente definidos.

Ejemplo válido si está aprobado:

“Proyecto construido durante la sesión.”

No asumir automáticamente:

- grabación;
- código fuente;
- certificado;
- templates premium;
- soporte posterior;
- comunidad privada;
- acceso de por vida.

Si hay dudas:

ocultarlo y marcarlo en el reporte final como:

PENDIENTE DE VALIDACIÓN.

==================================================
16. CLAIMS DE HOMEPAGE
==================================================

Ahora sí puedes realizar UNA limpieza limitada de homepage.

NO cambiar diseño.

NO cambiar Hero.

NO cambiar estructura general.

Buscar claims como:

“100% Determinista”

“0% Error”

“Cero alucinaciones”

“Sin alucinaciones”

“Componente funcional generado en 2 min”

“Sincronización continua 24/7”

“Garantizado”

“Precisión absoluta”

“Siempre”

o equivalentes.

Reformular únicamente aquellos que sean absolutos o difíciles de demostrar.

==================================================
17. EJEMPLOS DE REFORMULACIÓN
==================================================

NO:

“100% Determinista”

SÍ:

“Flujos estructurados con reglas y validaciones.”

NO:

“Sin alucinaciones”

SÍ:

“Respuestas apoyadas en fuentes y revisión cuando el caso lo requiere.”

NO:

“Componente funcional generado en 2 min”

SÍ:

“Prototipado rápido asistido por IA.”

NO:

“Sincronización continua 24/7”

SÍ:

“Automatizaciones capaces de ejecutarse sin intervención manual cuando el flujo lo permite.”

Mantener el estilo breve actual.

==================================================
18. NO CONVERTIR LOS CLAIMS EN PÁRRAFOS
==================================================

La limpieza de claims NO debe aumentar la cantidad de texto.

Si una frase puede resolverse en:

4–8 palabras,

hacerlo.

Mantener el carácter visual de las cards.

==================================================
19. ELIMINAR METODOLOGÍA DUPLICADA
==================================================

Auditar homepage.

Actualmente existe más de una explicación de:

AUDITA
DISEÑA
CONSTRUYE
DESPLIEGA

Mantener solamente UNA implementación visual completa.

Preferencia:

conservar la versión visual/interactiva más desarrollada.

Eliminar el bloque redundante que repite exactamente las mismas fases.

NO crear otra metodología nueva.

NO cambiar nombres de fases sin necesidad.

Después de eliminar la duplicación:

revisar spacing para que no quede un hueco artificial.

==================================================
20. CATÁLOGO DE FORMACIONES
==================================================

NO eliminar las formaciones actualmente creadas del modelo de datos.

Pero organizar la presentación pública.

La primera sección del catálogo debe destacar aproximadamente:

6 formaciones.

Prioridad:

1. De Prompt a Blueprint
2. De Idea a App con IA
3. Arquitecto de Workflows con IA
4. Tu Segundo Cerebro con IA
5. IA en Google Workspace
6. Agentes que revisan su propio trabajo

Estas son las formaciones principales.

==================================================
21. FORMACIONES SECUNDARIAS
==================================================

El resto puede aparecer bajo una sección separada:

“Próximamente en SyntIQ”

o equivalente.

Ejemplos:

IA Invisible

De 100 páginas a 10 decisiones

APIs, OAuth y Webhooks

Automatizaciones resistentes a errores

La Cabina de Mando

No crear una jerarquía exagerada.

Simplemente diferenciar:

OFERTA PRINCIPAL

de:

CATÁLOGO FUTURO.

==================================================
22. NO BORRAR LOS DATOS
==================================================

Aunque una formación no se muestre en la primera sección:

conservarla en el modelo de datos.

Puede permanecer:

COMING_SOON

WAITLIST

DRAFT

El objetivo es mejorar percepción comercial, no destruir el catálogo preparado.

==================================================
23. FOOTER
==================================================

Revisar el footer.

Eliminar:

“Próximo Taller: Plazas Disponibles”

si no existe actualmente una cohorte abierta.

Sustituir por algo estable como:

“Explora nuestras formaciones”

o:

“Aprende construyendo”

También revisar cualquier otro mensaje temporal o artificial.

Todos los enlaces deben seguir funcionando.

==================================================
24. “MAYORDOMÍA RADICAL”
==================================================

Revisar dónde aparece esta expresión.

Si aparece como claim comercial principal o dentro del footer sin explicación:

sustituirla por una expresión más inmediatamente comprensible.

Preferencia:

“Excelencia en la ejecución”

o:

“IA con criterio humano”

elige la que mejor encaje con el contexto existente.

Si “Mayordomía Radical” pertenece explícitamente a un marco interno importante de SyntIQ, mantenerla únicamente donde exista suficiente contexto para entenderla.

==================================================
25. CONSISTENCIA DE IDIOMA
==================================================

La web está orientada principalmente a público hispanohablante.

Revisar mezclas innecesarias como:

Available

Waitlist

Build

Workflow Complete

etc.

Los términos técnicos ampliamente utilizados pueden permanecer:

Prompting

Vibe Coding

Workflow

API

OAuth

Pero los estados comerciales deben mostrarse en español.

==================================================
26. NO TOCAR
==================================================

NO modificar:

Hero principal.

Animación principal del Hero.

Colorimetría.

Logo.

Tipografías globales.

Sistema visual.

Calculadora ROTI salvo claim incorrecto.

Página Nosotros salvo enlaces rotos.

Arquitectura del catálogo ya implementada.

Template individual salvo contenido incorrecto.

Programa Modular salvo copy falso.

In-Company salvo el funnel hacia contacto.

==================================================
27. NO AÑADIR
==================================================

No añadir:

chatbot;

newsletter;

login;

checkout;

sistema de pagos;

dashboard de estudiantes;

certificados;

blog;

comunidad;

reviews;

ratings;

countdowns;

popups;

nuevas librerías visuales.

No expandir el scope.

==================================================
28. QA DEL FUNNEL INDIVIDUAL
==================================================

Probar:

Homepage

→
Formaciones

→
De Idea a App con IA

→
Quiero participar

→
Contacto & Admisión

→
Formulario preseleccionado

→
Submit

→
Success state

Verificar también el contenido del correo generado.

==================================================
29. QA DEL FUNNEL IN-COMPANY
==================================================

Probar:

Homepage

→
Formaciones

→
In-Company

→
Hablar sobre mi equipo

→
/contacto?modalidad=in-company

Debe aparecer EXCLUSIVAMENTE:

Formación para equipos.

No debe existir ningún bloque antiguo de diagnóstico técnico.

Enviar formulario.

Verificar destinatario:

syntiqgroup@gmail.com

==================================================
30. QA DEL CONTACTO DIRECTO
==================================================

Entrar directamente a:

/contacto

Debe aparecer:

Contacto & Admisión

y las opciones:

Para mí

Para mi equipo

NO debe aparecer contenido antiguo.

==================================================
31. QA DE TODOS LOS ESTADOS
==================================================

Verificar:

loading

success

error

required fields

email validation

mobile keyboard

double submit

query parameters

refresh con query parameters

navegación back

No crear comportamiento frágil.

==================================================
32. RESPONSIVE
==================================================

Revisar las páginas modificadas en:

360px
390px
768px
1024px
1280px
1440px

Especialmente:

formularios;

tabs Para mí / Para mi equipo;

cards de catálogo;

CTA;

footer.

No debe existir overflow horizontal.

==================================================
33. ACCESSIBILITY
==================================================

Comprobar:

labels reales.

focus-visible.

tab navigation.

error messages asociados a inputs.

aria donde sea necesario.

contraste.

botones correctamente identificados.

mailto accesible.

==================================================
34. PRODUCTION BUILD
==================================================

Al terminar:

ejecuta production build.

Corregir:

TypeScript errors.

ESLint crítico si aplica.

hydration errors.

console errors.

broken imports.

404.

routes.

form errors.

No dar la tarea por terminada si existen errores de compilación.

==================================================
35. REPORTE FINAL OBLIGATORIO
==================================================

Al terminar, dame un resumen estructurado con:

CONTACTO

- qué contenido antiguo eliminaste;
- cómo funciona Para mí;
- cómo funciona Para mi equipo;
- cómo se procesan query params.

EMAIL

- sistema utilizado;
- destinatario configurado;
- variable de entorno utilizada;
- si fue posible verificar llegada real a syntiqgroup@gmail.com.

FORMACIONES

- qué mensajes de urgencia eliminaste;
- qué beneficios no confirmados eliminaste;
- qué cursos quedaron destacados;
- cuáles quedaron en Próximamente.

HOMEPAGE

- claims modificados;
- metodología duplicada eliminada.

FOOTER

- copy modificado;
- links comprobados.

PENDIENTE DE VALIDACIÓN HUMANA

Crear una lista explícita de todos los datos comerciales que todavía deben definir los responsables de SyntIQ, como:

- fechas;
- precios;
- duración definitiva;
- instructores;
- cupos;
- grabaciones;
- acceso posterior;
- certificados;
- materiales;
- soporte;
- mecanismo real de reserva.

BUILD

- resultado del production build;
- errores encontrados;
- errores corregidos.

==================================================
CRITERIO FINAL
==================================================

Después de esta iteración la web debe dejar de tener contradicciones entre:

“academia”

y

“consultoría enterprise”.

El mensaje principal debe ser:

SYNTIQ ENSEÑA A PERSONAS Y EQUIPOS A CONSTRUIR Y APLICAR SISTEMAS CON IA.

El visitante debe poder:

descubrir una formación

→
entender qué va a construir

→
mostrar interés

→
contactar a SyntIQ

sin encontrar:

404;

urgencia ficticia;

beneficios inventados;

claims absolutos;

narrativas comerciales contradictorias.

No continúes añadiendo cosas cuando esto esté resuelto.

Esta tarea es de LIMPIEZA Y CIERRE, no de expansión.