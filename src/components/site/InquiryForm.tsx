"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/data/site";
import { Button } from "./Buttons";
import { readVisit } from "./Tracker";

const NEED_OPTIONS = [
  "Bridal bouquet",
  "Bridesmaids & bridal party",
  "Boutonnières & corsages",
  "Ceremony flowers",
  "Arch or installation",
  "Reception centerpieces",
  "Cake & bar flowers",
  "Elopement or micro wedding",
  "Private party or shower",
  "Corporate or special event",
];

const BUDGETS = ["Under $1,500", "$1,500 – $3,000", "$3,000 – $5,000", "$5,000 – $8,000", "$8,000+", "Not sure yet"];

const field =
  "w-full border-0 border-b border-plum-900/25 bg-transparent px-0 py-3 text-[1rem] text-plum-900 placeholder:text-muted/70 focus:border-rose-600 focus:outline-none focus:ring-0 transition-colors";
const label = "block text-[10px] font-semibold uppercase tracking-luxe text-rose-600";

export function InquiryForm({ compact = false }: { compact?: boolean }) {
  const router = useRouter();
  const pathname = usePathname();
  const [startedAt] = useState(() => Date.now());
  const [needs, setNeeds] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [sending, setSending] = useState(false);

  const toggle = (s: string) => setNeeds((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (sending) return;
    setError("");
    const form = new FormData(e.currentTarget);
    const visit = readVisit();
    const payload = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
      eventDate: form.get("eventDate"),
      venue: form.get("venue"),
      guests: form.get("guests"),
      needs,
      budget: form.get("budget"),
      colors: form.get("colors"),
      message: form.get("message"),
      bsb_hp: form.get("bsb_hp"),
      startedAt,
      page: pathname,
      landing: visit?.landing,
      referrer: visit?.referrer,
      utm: visit?.utm,
      visit: visit?.visit,
    };
    setSending(true);
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setError(data.error || `Something went wrong. Please call or text ${SITE.phone}.`);
        setSending(false);
        return;
      }
      router.push("/thank-you");
    } catch {
      setError(`We could not send your message. Please call or text ${SITE.phone}.`);
      setSending(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <div className={`grid gap-x-8 gap-y-7 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="name" className={label}>
            Your name
          </label>
          <input id="name" name="name" required autoComplete="name" className={field} placeholder="First and last name" />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={field} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={field} placeholder="(805) 000-0000" />
        </div>
        <div>
          <label htmlFor="eventDate" className={label}>
            Wedding or event date
          </label>
          <input id="eventDate" name="eventDate" type="date" className={field} />
        </div>
        <div>
          <label htmlFor="venue" className={label}>
            Venue or town
          </label>
          <input id="venue" name="venue" className={field} placeholder="Venue name, or the town if undecided" />
        </div>
        <div>
          <label htmlFor="guests" className={label}>
            Estimated guest count
          </label>
          <input id="guests" name="guests" inputMode="numeric" className={field} placeholder="e.g. 120" />
        </div>
      </div>

      <fieldset>
        <legend className={label}>What flowers do you need?</legend>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {NEED_OPTIONS.map((s) => {
            const on = needs.includes(s);
            return (
              <button
                type="button"
                key={s}
                onClick={() => toggle(s)}
                aria-pressed={on}
                className={`rounded-full border px-4 py-2 text-[12px] tracking-wide transition-colors duration-300 ${on ? "border-plum-900 bg-plum-900 text-petal" : "border-plum-900/25 text-plum-900 hover:border-rose-500 hover:text-rose-600"}`}
              >
                {s}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className={`grid gap-x-8 gap-y-7 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="colors" className={label}>
            Colors &amp; style
          </label>
          <input id="colors" name="colors" className={field} placeholder="e.g. blush and ivory, garden whites, sunset tones" />
        </div>
        <div>
          <label htmlFor="budget" className={label}>
            Floral budget
          </label>
          <select id="budget" name="budget" className={`${field} appearance-none`} defaultValue="">
            <option value="" disabled>
              Choose a range
            </option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>
          Tell us about your day
        </label>
        <textarea id="message" name="message" rows={4} className={field} placeholder="Your vision, a link to your Pinterest board, the flowers you love or want to avoid, anything you are unsure about." />
      </div>

      {/* Honeypot: hidden from people, filled by bots. */}
      <div className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="bsb_hp">Leave this empty</label>
        <input id="bsb_hp" name="bsb_hp" tabIndex={-1} autoComplete="off" />
      </div>

      {error && (
        <p role="alert" className="border-l-2 border-rose-500 pl-4 text-sm text-rose-700">
          {error}
        </p>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" disabled={sending} className="disabled:opacity-60">
          {sending ? "Sending…" : "Send inquiry"}
        </Button>
        <p className="text-xs leading-relaxed text-muted">
          We reply {SITE.responseTime}. Prefer to talk? Call or text{" "}
          <a href={`tel:${SITE.phoneTel}`} className="text-plum-900 underline decoration-gold-400 underline-offset-4">
            {SITE.phone}
          </a>
          .
        </p>
      </div>
    </form>
  );
}
