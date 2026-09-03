import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "syntiqgroup@gmail.com";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const {
      type,
      name,
      email,
      phone,
      formacion,
      formacionTitle,
      level,
      message,
      company,
      teamSize,
      area,
      objective,
      origin,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "Nombre y email son obligatorios." },
        { status: 400 }
      );
    }

    // Build subject
    let subject = "[SyntIQ] Nuevo contacto desde la web";
    if (type === "individual" && formacionTitle) {
      subject = `[SyntIQ] Nuevo interés — ${formacionTitle}`;
    } else if (type === "empresa" && company) {
      subject = `[SyntIQ] Nueva solicitud In-Company — ${company}`;
    } else if (type === "individual") {
      subject = "[SyntIQ] Nueva solicitud de formación individual";
    }

    // Build email body
    const lines: string[] = [];
    lines.push(`TIPO DE SOLICITUD: ${type === "empresa" ? "Empresa / In-Company" : "Individual"}`);
    lines.push("");
    lines.push(`Nombre: ${name}`);
    lines.push(`Email: ${email}`);

    if (phone) lines.push(`Teléfono / WhatsApp: ${phone}`);
    if (formacionTitle) lines.push(`Formación seleccionada: ${formacionTitle}`);
    if (formacion) lines.push(`Slug: ${formacion}`);

    lines.push(
      `Modalidad: ${type === "empresa" ? "Empresa" : "Individual"}`
    );

    if (company) lines.push(`Empresa: ${company}`);
    if (teamSize) lines.push(`Tamaño del equipo: ${teamSize}`);
    if (area) lines.push(`Área de interés: ${area}`);
    if (level) lines.push(`Nivel actual: ${level}`);
    if (message) {
      lines.push("");
      lines.push(`Objetivo / Mensaje:`);
      lines.push(message);
    }
    if (objective) {
      lines.push("");
      lines.push(`Objetivo:`);
      lines.push(objective);
    }

    lines.push("");
    lines.push(`---`);
    lines.push(`Página de origen: ${origin || "No disponible"}`);
    lines.push(`Fecha: ${new Date().toISOString()}`);

    const textBody = lines.join("\n");

    // Build HTML body
    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <div style="background: #0F172A; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; font-size: 20px; margin: 0;">SyntIQ — ${type === "empresa" ? "Solicitud In-Company" : "Nuevo Interés"}</h1>
        </div>
        <div style="background: #F8FAFC; padding: 24px; border: 1px solid #E2E8F0; border-top: none; border-radius: 0 0 12px 12px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #64748B; font-size: 13px;">Tipo</td><td style="padding: 8px 0; font-weight: 600;">${type === "empresa" ? "Empresa / In-Company" : "Individual"}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748B; font-size: 13px;">Nombre</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #64748B; font-size: 13px;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #64748B; font-size: 13px;">Teléfono</td><td style="padding: 8px 0;">${phone}</td></tr>` : ""}
            ${formacionTitle ? `<tr><td style="padding: 8px 0; color: #64748B; font-size: 13px;">Formación</td><td style="padding: 8px 0; font-weight: 600; color: #2563EB;">${formacionTitle}</td></tr>` : ""}
            ${company ? `<tr><td style="padding: 8px 0; color: #64748B; font-size: 13px;">Empresa</td><td style="padding: 8px 0; font-weight: 600;">${company}</td></tr>` : ""}
            ${teamSize ? `<tr><td style="padding: 8px 0; color: #64748B; font-size: 13px;">Equipo</td><td style="padding: 8px 0;">${teamSize}</td></tr>` : ""}
            ${area ? `<tr><td style="padding: 8px 0; color: #64748B; font-size: 13px;">Área</td><td style="padding: 8px 0;">${area}</td></tr>` : ""}
            ${level ? `<tr><td style="padding: 8px 0; color: #64748B; font-size: 13px;">Nivel IA</td><td style="padding: 8px 0;">${level}</td></tr>` : ""}
          </table>
          ${message ? `<div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #E2E8F0;"><p style="color: #64748B; font-size: 12px; margin: 0 0 8px;">Mensaje</p><p style="margin: 0;">${message}</p></div>` : ""}
          ${objective ? `<div style="margin-top: 16px; padding: 16px; background: white; border-radius: 8px; border: 1px solid #E2E8F0;"><p style="color: #64748B; font-size: 12px; margin: 0 0 8px;">Objetivo</p><p style="margin: 0;">${objective}</p></div>` : ""}
          <p style="margin-top: 16px; font-size: 11px; color: #94A3B8;">Origen: ${origin || "N/A"} · ${new Date().toLocaleString("es-ES")}</p>
        </div>
      </div>
    `;

    await resend.emails.send({
      from: "SyntIQ Web <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[SyntIQ Contact API Error]", error);
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}
