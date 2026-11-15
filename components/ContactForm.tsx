"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight } from "lucide-react"
import { contact } from "@/lib/profile"
import type { Dictionary, Lang } from "@/lib/i18n"

type Status = "idle" | "sending" | "sent" | "error"

/**
 * Netlify Forms: the static copy in public/__forms.html registers the form at build time,
 * and this component posts to it. Netlify stores submissions and filters spam (plus the honeypot).
 */
export default function ContactForm({ lang, t }: { lang: Lang; t: Dictionary["contact"]["form"] }) {
  const [status, setStatus] = useState<Status>("idle")
  const [type, setType] = useState(-1)

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus("sending")
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString()
      const response = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body })
      if (!response.ok) throw new Error(String(response.status))
      form.reset()
      setType(-1)
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <form className="contact-form" name="contact" onSubmit={onSubmit} aria-busy={status === "sending"}>
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="language" value={lang} />
      <p className="sr-only"><label>{t.honeypot} <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="field-row">
        <label className="field"><span>{t.name}</span><input name="name" required autoComplete="name" maxLength={120} /></label>
        <label className="field"><span>{t.email}</span><input name="email" type="email" required autoComplete="email" maxLength={200} /></label>
      </div>
      <div className="field-row">
        <label className="field"><span>{t.type}</span>
          <select name="project-type" required defaultValue="" onChange={(event) => setType(event.target.selectedIndex - 1)}><option value="" disabled>{t.typePlaceholder}</option>{t.types.map((item) => <option key={item}>{item}</option>)}</select>
        </label>
        <label className="field"><span>{t.budget}</span>
          <select name="budget" required defaultValue=""><option value="" disabled>{t.budgetPlaceholder}</option>{t.budgets.map((budget) => <option key={budget}>{budget}</option>)}</select>
        </label>
      </div>
      <label className="field"><span>{t.idea}</span><textarea name="message" required minLength={20} maxLength={4000} rows={6} placeholder={t.placeholders[type] ?? t.placeholders[t.placeholders.length - 1]} /></label>
      <div className="form-footer">
        <button className="hero-primary" type="submit" disabled={status === "sending"} data-umami-event="contact-form-submit">{status === "sending" ? t.sending : t.send} <ArrowUpRight aria-hidden="true" /></button>
        <p className="form-status" role="status" aria-live="polite" data-status={status}>
          {status === "sent" && t.sent}
          {status === "error" && <>{t.error} <a href={"mailto:" + contact.email} data-umami-event="email-click">{contact.email}</a> {t.errorEnd}</>}
        </p>
      </div>
    </form>
  )
}
