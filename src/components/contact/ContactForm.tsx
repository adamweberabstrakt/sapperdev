"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site.config";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD =
  "w-full rounded-md border border-steel/30 bg-ink/60 px-4 py-3 text-bone placeholder:text-bone/30 outline-none transition-colors focus:border-acid focus:ring-1 focus:ring-acid";
const LABEL =
  "mb-1.5 block font-mono text-[11px] uppercase tracking-[0.18em] text-steel";

const EMPTY = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  message: "",
};

/**
 * Contact form. On submit it (1) posts to /api/contact so Resend sends a
 * confirmation to the visitor + a notification to Sapper, and (2) fires the
 * real ChiliPiper router (siteConfig.integrations.chilipiperRouter) via the
 * site-wide concierge to route + book the lead. The ChiliPiper call is guarded
 * so a misconfig never blocks the confirmation the visitor just earned.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState(EMPTY);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.company) {
      setStatus("error");
      return;
    }
    setStatus("submitting");
    const name = `${form.firstName} ${form.lastName}`.trim();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: form.email,
          company: form.company,
          phone: form.phone,
          message: form.message,
        }),
      });
      if (!res.ok) throw new Error("Request failed");

      // Standard conversion event for GTM/GA4.
      const w = window as unknown as { dataLayer?: Record<string, unknown>[] };
      w.dataLayer = w.dataLayer || [];
      w.dataLayer.push({ event: "generate_lead", form_name: "contact" });

      // Route + book through the real ChiliPiper router (concierge is loaded
      // site-wide). Optional at runtime — never block the confirmation on it.
      try {
        const { chilipiperDomain, chilipiperRouter } = siteConfig.integrations;
        const cp = (
          window as unknown as {
            ChiliPiper?: {
              submit: (d: string, r: string, o?: Record<string, unknown>) => void;
            };
          }
        ).ChiliPiper;
        cp?.submit(chilipiperDomain, chilipiperRouter, {
          lead: {
            firstName: form.firstName,
            lastName: form.lastName,
            email: form.email,
            company: form.company,
            phone: form.phone,
          },
        });
      } catch {
        /* concierge optional */
      }

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-md border-t-2 border-acid bg-panel p-6 ring-1 ring-steel/20">
        <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-acid">
          Message received
        </p>
        <h3 className="mt-3 font-display text-2xl uppercase leading-tight text-bone">
          It&apos;s on its way.
        </h3>
        <p className="mt-2 text-sm text-bone/70">
          Check your inbox for a confirmation — a strategist will reach out to
          lock in your appointment goal. Keep your phone close.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="firstName">
            First name
          </label>
          <input
            id="firstName"
            className={FIELD}
            value={form.firstName}
            onChange={set("firstName")}
            autoComplete="given-name"
          />
        </div>
        <div>
          <label className={LABEL} htmlFor="lastName">
            Last name
          </label>
          <input
            id="lastName"
            className={FIELD}
            value={form.lastName}
            onChange={set("lastName")}
            autoComplete="family-name"
          />
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="email">
          Work email
        </label>
        <input
          id="email"
          type="email"
          className={FIELD}
          value={form.email}
          onChange={set("email")}
          autoComplete="email"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={LABEL} htmlFor="company">
            Company
          </label>
          <input
            id="company"
            className={FIELD}
            value={form.company}
            onChange={set("company")}
            autoComplete="organization"
          />
        </div>
        <div>
          <label className={LABEL} htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className={FIELD}
            value={form.phone}
            onChange={set("phone")}
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label className={LABEL} htmlFor="message">
          What are you trying to fix?{" "}
          <span className="text-bone/30">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={4}
          className={FIELD}
          value={form.message}
          onChange={set("message")}
        />
      </div>

      {status === "error" && (
        <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-danger">
          Add your name, work email, and company — then try again.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-md bg-acid px-6 py-3.5 font-mono text-[12px] font-bold uppercase tracking-[0.2em] text-ink transition-colors hover:bg-acid/90 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Lock onto my pipeline →"}
      </button>
      <p className="text-center text-[11px] text-bone/40">
        We&apos;ll follow up by phone — no spam.
      </p>
    </form>
  );
}
