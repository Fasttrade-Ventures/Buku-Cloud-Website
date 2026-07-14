"use client";

import { useState } from "react";
import { Eyebrow } from "./ui";
import { useT } from "./i18n-provider";
import { HELLO_EMAIL } from "@/lib/site";

type FormState = {
  name: string;
  email: string;
  company: string;
  whatsapp: string;
  need: string;
};

export function ContactForm() {
  const t = useT();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    whatsapp: "",
    need: t.contact.form.needOptions[0],
  });

  function handleChange<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `BukuCloud walkthrough — ${form.company || form.name || "new lead"}`;
    const body = [
      `Name: ${form.name || "-"}`,
      `Company: ${form.company || "-"}`,
      `Email: ${form.email || "-"}`,
      `WhatsApp: ${form.whatsapp || "-"}`,
      `What they need: ${form.need || "-"}`,
      "",
      "Sent from bukucloud.com/contact",
    ].join("\n");

    const url =
      `mailto:${HELLO_EMAIL}?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = url;
    setSubmitted(true);
  }

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 rounded-[16px] border border-border bg-surface p-7"
    >
      <Eyebrow>{t.contact.form.eyebrow}</Eyebrow>
      <h2 className="font-display text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-ink">
        {t.contact.form.title}
      </h2>
      <Field
        label={t.contact.form.name}
        placeholder="Aishah Lim"
        value={form.name}
        onChange={(v) => handleChange("name", v)}
      />
      <Field
        label={t.contact.form.email}
        type="email"
        placeholder="aishah@example.com"
        value={form.email}
        onChange={(v) => handleChange("email", v)}
        required
      />
      <Field
        label={t.contact.form.company}
        placeholder="Andalus Catering Sdn Bhd"
        value={form.company}
        onChange={(v) => handleChange("company", v)}
      />
      <Field
        label={t.contact.form.whatsapp}
        placeholder="+60 12 345 6789"
        value={form.whatsapp}
        onChange={(v) => handleChange("whatsapp", v)}
      />
      <div className="flex flex-col gap-1.5">
        <label className="text-[12px] font-semibold uppercase tracking-[0.075em] text-ink-muted">
          {t.contact.form.need}
        </label>
        <select
          value={form.need}
          onChange={(e) => handleChange("need", e.target.value)}
          className="rounded-[10px] border border-border bg-bg-cream px-3 py-2.5 text-[14px] text-ink focus:border-ink focus:outline-none"
        >
          {t.contact.form.needOptions.map((o) => (
            <option key={o}>{o}</option>
          ))}
        </select>
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-[12px] bg-accent px-5 py-3 text-[14px] font-semibold text-white transition-colors hover:bg-accent-dark"
      >
        {t.contact.form.submit} <span aria-hidden>→</span>
      </button>
      <p className="text-[12px] text-ink-muted">
        {submitted
          ? "Thanks — your email client should now be open."
          : t.contact.form.footnote}
      </p>
    </form>
  );
}

function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required,
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[12px] font-semibold uppercase tracking-[0.075em] text-ink-muted">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="rounded-[10px] border border-border bg-bg-cream px-3 py-2.5 text-[14px] text-ink placeholder:text-ink-muted/60 focus:border-ink focus:outline-none"
      />
    </div>
  );
}
