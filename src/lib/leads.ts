import { createHmac } from "node:crypto";
import nodemailer from "nodemailer";
import { SITE } from "@/data/site";

/**
 * Every inquiry goes two ways:
 * 1. an email to the studio (Gmail SMTP: EMAIL_USER / EMAIL_PASS, EMAIL_TO), and
 * 2. a signed copy to the Velour Web dashboard (VELOUR_TRACK_URL / VELOUR_SITE_SLUG / VELOUR_LEAD_SECRET),
 *    where the owner sees every lead with the page it came from and where the visit began.
 * Without EMAIL_* the inquiry is logged to the server console so nothing is lost in development.
 */

export interface Inquiry {
  name: string;
  email: string;
  phone: string;
  eventDate?: string;
  venue?: string;
  guests?: string;
  needs: string[];
  budget?: string;
  colors?: string;
  message?: string;
  /** Where on the site the form was sent from, and where the visit began. */
  page?: string;
  landing?: string;
  referrer?: string;
  utm?: { source?: string; medium?: string; campaign?: string };
  visit?: string;
}

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function clean(v: unknown, max = 2000): string {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export function escapeHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

export function emailConfigured(): boolean {
  return Boolean(process.env.EMAIL_USER && process.env.EMAIL_PASS);
}

function transporter() {
  return nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });
}

function rows(i: Inquiry): [string, string][] {
  return [
    ["Name", i.name],
    ["Email", i.email],
    ["Phone", i.phone],
    ["Event date", i.eventDate || "Not given"],
    ["Venue or town", i.venue || "Not given"],
    ["Guest count", i.guests || "Not given"],
    ["Flowers needed", i.needs.length ? i.needs.join(", ") : "Not given"],
    ["Colors & style", i.colors || "Not given"],
    ["Budget", i.budget || "Not given"],
    ["Message", i.message || "None"],
    ["Sent from", i.page || "/contact"],
    ["Visit began on", i.landing || "unknown"],
    ["Came from", i.referrer || (i.utm?.source ? `utm ${i.utm.source}` : "direct or unknown")],
  ];
}

export function ownerMail(i: Inquiry) {
  const subject = `New floral inquiry: ${i.name}${i.eventDate ? ` (${i.eventDate})` : ""}`;
  const text = rows(i)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  const html = `<div style="font-family:Georgia,serif;font-size:16px;line-height:1.6;color:#38252d">
    <h2 style="font-weight:500;margin:0 0 16px">New floral inquiry</h2>
    <table style="border-collapse:collapse">${rows(i)
      .map(
        ([k, v]) =>
          `<tr><td style="padding:6px 16px 6px 0;color:#7a666c;vertical-align:top;white-space:nowrap">${k}</td><td style="padding:6px 0">${escapeHtml(v).replace(/\n/g, "<br>")}</td></tr>`,
      )
      .join("")}</table>
    <p style="margin-top:20px;color:#7a666c;font-size:13px">Reply to this email to answer ${escapeHtml(i.name)} directly.</p>
  </div>`;
  return { subject, text, html };
}

export function confirmationMail(i: Inquiry) {
  const first = i.name.split(/\s+/)[0] || "there";
  const subject = `We received your inquiry, ${first}`;
  const text = `Hi ${first},\n\nThank you for reaching out to ${SITE.name}. We received your inquiry and will reply ${SITE.responseTime}. On wedding days we are on site with the flowers, so a weekend note may be answered the next morning.\n\nIf your event is within days and something urgent comes up, call or text ${SITE.phone}.\n\nWarmly,\n${SITE.founder}\n${SITE.name}\n${SITE.url}`;
  const html = `<div style="font-family:Georgia,serif;font-size:16px;line-height:1.7;color:#38252d;max-width:560px">
    <p>Hi ${escapeHtml(first)},</p>
    <p>Thank you for reaching out to ${SITE.name}. We received your inquiry and will reply ${SITE.responseTime}. On wedding days we are on site with the flowers, so a weekend note may be answered the next morning.</p>
    <p>If your event is within days and something urgent comes up, call or text <a href="tel:${SITE.phoneTel}" style="color:#a2555f">${SITE.phone}</a>.</p>
    <p style="margin-top:24px">Warmly,<br>${SITE.founder}<br>${SITE.name}<br><a href="${SITE.url}" style="color:#a2555f">${SITE.url.replace("https://", "")}</a></p>
  </div>`;
  return { subject, text, html };
}

async function sendMail(to: string, mail: { subject: string; text: string; html: string }, replyTo?: string): Promise<boolean> {
  if (!emailConfigured()) {
    console.log(`[inquiry] email not configured; would send to ${to}: ${mail.subject}\n${mail.text}`);
    return false;
  }
  try {
    await transporter().sendMail({
      from: `"${SITE.name}" <${process.env.EMAIL_USER}>`,
      to,
      replyTo,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
    });
    return true;
  } catch (err) {
    console.error("Could not send email", err);
    return false;
  }
}

/** Forward the inquiry to the Velour Web dashboard, signed with the site's lead secret. */
async function forwardToVelour(i: Inquiry): Promise<boolean> {
  const url = process.env.VELOUR_TRACK_URL?.trim();
  const site = process.env.VELOUR_SITE_SLUG?.trim();
  const secret = process.env.VELOUR_LEAD_SECRET?.trim();
  if (!url || !site || !secret) return false;
  const body = JSON.stringify({
    site,
    page: i.page,
    landing: i.landing,
    referrer: i.referrer,
    utm: i.utm,
    visit: i.visit,
    name: i.name,
    phone: i.phone,
    email: i.email,
    message: i.message,
    details: {
      form: "floral-inquiry",
      eventDate: i.eventDate,
      venue: i.venue,
      guests: i.guests,
      needs: i.needs.join(", ") || undefined,
      colors: i.colors,
      budget: i.budget,
    },
  });
  const timestamp = String(Math.floor(Date.now() / 1000));
  const signature = createHmac("sha256", secret).update(`${timestamp}.${body}`).digest("hex");
  try {
    const res = await fetch(`${url.replace(/\/api\/track\/?$/, "")}/api/track/lead`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Velour-Timestamp": timestamp, "X-Velour-Signature": signature },
      body,
      signal: AbortSignal.timeout(8_000),
    });
    return res.ok;
  } catch (err) {
    console.error("Could not forward the lead to Velour Web", err);
    return false;
  }
}

export interface Delivery {
  ownerSent: boolean;
  confirmationSent: boolean;
  dashboardSaved: boolean;
}

export async function deliverInquiry(i: Inquiry): Promise<Delivery> {
  // The studio's inbox is set in the environment (EMAIL_TO) and falls back to the sending account.
  const to = process.env.EMAIL_TO?.trim() || process.env.EMAIL_USER || SITE.email;
  const [ownerSent, dashboardSaved] = await Promise.all([to ? sendMail(to, ownerMail(i), i.email) : Promise.resolve(false), forwardToVelour(i)]);
  const confirmationSent = EMAIL_RE.test(i.email) ? await sendMail(i.email, confirmationMail(i)) : false;
  return { ownerSent, confirmationSent, dashboardSaved };
}
