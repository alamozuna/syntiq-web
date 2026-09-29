import { Resend } from "resend";
import { NextRequest } from "next/server";

/**
 * Shared helpers for the lead endpoints: Resend error handling, HTML escaping
 * and basic abuse protection in one place.
 */

export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || "syntiqgroup@gmail.com";

// `onboarding@resend.dev` only works in Resend test mode, and only towards the account owner.
// Set CONTACT_FROM once the domain is verified, e.g. "SyntIQ Web <web@syntiqgroup.com>".
export const CONTACT_FROM = process.env.CONTACT_FROM || "SyntIQ Web <onboarding@resend.dev>";

const resend = new Resend(process.env.RESEND_API_KEY || "re_missing_key");

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Escape user input before interpolating it into an HTML email body. */
export function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Trim and cap a free-text field so one request can't produce a huge email. */
export function clean(value: unknown, max = 500): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

// Small in-memory limiter. Serverless instances don't share state, so treat this as a first
// line of defence against naive spam rather than a hard guarantee.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

export function isRateLimited(request: NextRequest): boolean {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > MAX_PER_WINDOW;
}

type SendArgs = {
  to: string | string[];
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
};

/**
 * Send an email, throwing when Resend reports a failure.
 *
 * The Resend SDK does NOT throw on API errors — it resolves with `{ data, error }`. Callers that
 * only wrap the call in try/catch therefore report success for mail that was never delivered.
 */
export async function sendMail(args: SendArgs): Promise<void> {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY no está configurada.");
  }
  const { error } = await resend.emails.send({
    from: CONTACT_FROM,
    to: Array.isArray(args.to) ? args.to : [args.to],
    replyTo: args.replyTo,
    subject: args.subject,
    text: args.text,
    html: args.html,
  });
  if (error) {
    throw new Error(`Resend: ${error.name} — ${error.message}`);
  }
}

/** Branded wrapper so every notification looks the same. */
export function wrapHtml(title: string, inner: string): string {
  return `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
        <div style="background: #0F172A; padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; font-size: 20px; margin: 0;">${escapeHtml(title)}</h1>
        </div>
        <div style="background: #F8FAFC; padding: 24px; border: 1px solid #E2E8F0; border-top: none; border-radius: 0 0 12px 12px;">
          ${inner}
        </div>
      </div>
    `;
}

export function row(
  label: string,
  value: string,
  opts: { strong?: boolean; color?: string } = {}
): string {
  const style = `padding: 8px 0;${opts.strong ? " font-weight: 600;" : ""}${
    opts.color ? ` color: ${opts.color};` : ""
  }`;
  return `<tr><td style="padding: 8px 0; color: #64748B; font-size: 13px; vertical-align: top;">${escapeHtml(
    label
  )}</td><td style="${style}">${escapeHtml(value)}</td></tr>`;
}
