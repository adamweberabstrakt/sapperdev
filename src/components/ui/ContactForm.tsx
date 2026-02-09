"use client";

import { useState } from "react";
import { fireChiliPiper } from "@/components/integrations/ChiliPiper";

interface ContactFormProps {
  compact?: boolean;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
}

export default function ContactForm({ compact = false }: ContactFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!form.company.trim()) newErrors.company = "Company is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        // Fire ChiliPiper for scheduling
        fireChiliPiper({
          name: form.name,
          email: form.email,
          company: form.company,
          phone: form.phone,
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof FormErrors]) {
      setErrors({ ...errors, [e.target.name]: undefined });
    }
  };

  if (status === "sent") {
    return (
      <div className="text-center py-8">
        <div className="text-2xl font-bold text-cyan mb-2">Thank you!</div>
        <p className="text-white/70">
          We&apos;ll be in touch shortly. Check for a scheduling widget to book
          your meeting now.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"}>
        {/* Name */}
        <div className={compact ? "" : "sm:col-span-1"}>
          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/10 border rounded-md text-white placeholder-white/40 text-sm focus:outline-none focus:border-cyan transition-colors ${
              errors.name ? "border-red-400" : "border-white/20"
            }`}
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Work Email *"
            value={form.email}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/10 border rounded-md text-white placeholder-white/40 text-sm focus:outline-none focus:border-cyan transition-colors ${
              errors.email ? "border-red-400" : "border-white/20"
            }`}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        {/* Company */}
        <div>
          <input
            type="text"
            name="company"
            placeholder="Company *"
            value={form.company}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-white/10 border rounded-md text-white placeholder-white/40 text-sm focus:outline-none focus:border-cyan transition-colors ${
              errors.company ? "border-red-400" : "border-white/20"
            }`}
          />
          {errors.company && (
            <p className="text-red-400 text-xs mt-1">{errors.company}</p>
          )}
        </div>

        {/* Phone */}
        {!compact && (
          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/40 text-sm focus:outline-none focus:border-cyan transition-colors"
            />
          </div>
        )}
      </div>

      {/* Message (full form only) */}
      {!compact && (
        <div>
          <textarea
            name="message"
            placeholder="Tell us about your pipeline goals..."
            value={form.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-md text-white placeholder-white/40 text-sm focus:outline-none focus:border-cyan transition-colors resize-none"
          />
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-cyan text-navy font-semibold py-3 px-6 rounded-md hover:bg-cyan/90 transition-all duration-200 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Book a Meeting"}
      </button>

      {status === "error" && (
        <p className="text-red-400 text-sm text-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
