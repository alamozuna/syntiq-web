import { NextRequest, NextResponse } from "next/server";
import {
  CONTACT_EMAIL,
  EMAIL_RE,
  clean,
  escapeHtml,
  isRateLimited,
  row,
  sendMail,
  wrapHtml,
} from "@/lib/server/mail";

export async function POST(request: NextRequest) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field. Answer 200 so bots don't adapt.
  if (clean(body.website)) {
    return NextResponse.json({ success: true });
  }

  if (isRateLimited(request)) {
    return NextResponse.json(
      { error: "Demasiadas solicitudes. Inténtalo de nuevo en unos minutos." },
      { status: 429 }
    );
  }

  const type = body.type === "empresa" ? "empresa" : "individual";
  const name = clean(body.name, 120);
  const email = clean(body.email, 200).toLowerCase();
  const phone = clean(body.phone, 60);
  const formacion = clean(body.formacion, 120);
  const formacionTitle = clean(body.formacionTitle, 200);
  const level = clean(body.level, 120);
  const message = clean(body.message, 3000);
  const company = clean(body.company, 160);
  const teamSize = clean(body.teamSize, 60);
  const area = clean(body.area, 120);
  const objective = clean(body.objective, 3000);
  const origin = clean(body.origin, 300);
  const consent = body.consent === true;

  if (!name || !email) {
    return NextResponse.json({ error: "Nombre y email son obligatorios." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "El email no parece válido." }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json(
      { error: "Debes aceptar la política de privacidad para enviar el formulario." },
      { status: 400 }
    );
  }
  if (type === "empresa" && !company) {
    return NextResponse.json({ error: "El nombre de la empresa es obligatorio." }, { status: 400 });
  }

  let subject = "[SyntIQ] Nuevo contacto desde la web";
  if (type === "individual" && formacionTitle) {
    subject = `[SyntIQ] Nuevo interés — ${formacionTitle}`;
  } else if (type === "empresa" && company) {
    subject = `[SyntIQ] Nueva solicitud In-Company — ${company}`;
  } else if (type === "individual") {
    subject = "[SyntIQ] Nueva solicitud de formación individual";
  }

  const typeLabel = type === "empresa" ? "Empresa / In-Company" : "Individual";
  const now = new Date();

  const lines: string[] = [
    `TIPO DE SOLICITUD: ${typeLabel}`,
    "",
    `Nombre: ${name}`,
    `Email: ${email}`,
  ];
  if (phone) lines.push(`Teléfono / WhatsApp: ${phone}`);
  if (formacionTitle) lines.push(`Formación seleccionada: ${formacionTitle}`);
  if (formacion) lines.push(`Slug: ${formacion}`);
  if (company) lines.push(`Empresa: ${company}`);
  if (teamSize) lines.push(`Tamaño del equipo: ${teamSize}`);
  if (area) lines.push(`Área de interés: ${area}`);
  if (level) lines.push(`Nivel actual: ${level}`);
  if (message) lines.push("", "Objetivo / Mensaje:", message);
  if (objective) lines.push("", "Objetivo:", objective);
  lines.push(
    "",
    "---",
    `Consentimiento RGPD: sí (${now.toISOString()})`,
    `Página de origen: ${origin || "No disponible"}`,
    `Fecha: ${now.toISOString()}`
  );

  // Every user-provided value goes through escapeHtml() before reaching the HTML body.
  const rows = [
    row("Tipo", typeLabel, { strong: true }),
    row("Nombre", name, { strong: true }),
    `<tr><td style="padding: 8px 0; color: #64748B; font-size: 13px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(
      email
    )}">${escapeHtml(email)}</a></td></tr>`,
    phone && row("Teléfono", phone),
    formacionTitle && row("Formación", formacionTitle, { strong: true, color: "#2563EB" }),
    company && row("Empresa", company, { strong: true }),
    teamSize && row("Equipo", teamSize),
    area && row("Área", area),
    level && row("Nivel IA", level),
  ]
    .filter(Boolean)
    .join("");

  const block = (label: string, value: string) =>
    `<div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #E2E8F0;"><p style="color: #64748B; font-size: 12px; margin: 0 0 8px;">${escapeHtml(
      label
    )}</p><p style="margin: 0; white-space: pre-wrap;">${escapeHtml(value)}</p></div>`;

  const htmlBody = wrapHtml(
    `SyntIQ — ${type === "empresa" ? "Solicitud In-Company" : "Nuevo Interés"}`,
    `<table style="width: 100%; border-collapse: collapse;">${rows}</table>
     ${message ? block("Mensaje", message) : ""}
     ${objective ? block("Objetivo", objective) : ""}
     <p style="margin-top: 16px; font-size: 11px; color: #94A3B8;">Consentimiento RGPD aceptado · Origen: ${escapeHtml(
       origin || "N/A"
     )} · ${escapeHtml(now.toLocaleString("es-ES"))}</p>`
  );

  try {
    await sendMail({
      to: CONTACT_EMAIL,
      replyTo: email,
      subject,
      text: lines.join("\n"),
      html: htmlBody,
    });
  } catch (error) {
    console.error("[SyntIQ Contact API Error]", error);
    return NextResponse.json(
      { error: `No hemos podido enviar tu solicitud. Escríbenos directamente a ${CONTACT_EMAIL}.` },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
