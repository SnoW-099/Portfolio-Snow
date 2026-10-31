"use client"

import { useState, type FormEvent } from "react"
import { ArrowUpRight } from "lucide-react"

export const projectTypes = ["Website", "Web application", "Automation", "Creative / prototype", "Something else"]
export const budgets = ["Under €500", "€500 – €1,500", "€1,500 – €3,000", "Over €3,000", "Not sure yet"]

type Status = "idle" | "sending" | "sent" | "error"

/**
 * Netlify Forms. `data-netlify` on the form (present in the prerendered HTML) registers it at deploy time;
 * submissions are posted to "/" and stored in Netlify (Forms tab). `netlify-honeypot` filters bots.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setStatus("sending")
    try {
      const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>).toString()
      const response = await fetch("/", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body })
      if (!response.ok) throw new Error(String(response.status))
      form.reset()
      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  return (
    <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={onSubmit}>
      <input type="hidden" name="form-name" value="contact" />
      <p className="sr-only"><label>Leave this empty: <input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <div className="field-row">
        <label className="field"><span>Name</span><input name="name" required autoComplete="name" maxLength={120} /></label>
        <label className="field"><span>Email</span><input name="email" type="email" required autoComplete="email" maxLength={200} /></label>
      </div>
      <div className="field-row">
        <label className="field"><span>Project type</span>
          <select name="project-type" required defaultValue=""><option value="" disabled>Choose one</option>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select>
        </label>
        <label className="field"><span>Budget (approx.)</span>
          <select name="budget" required defaultValue=""><option value="" disabled>Choose a range</option>{budgets.map((budget) => <option key={budget}>{budget}</option>)}</select>
        </label>
      </div>
      <label className="field"><span>Your idea</span><textarea name="message" required minLength={20} maxLength={4000} rows={6} placeholder="What do you want to build, and for whom?" /></label>
      <div className="form-footer">
        <button className="hero-primary" type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send proposal"} <ArrowUpRight aria-hidden="true" /></button>
        <p className="form-status" role="status" aria-live="polite" data-status={status}>
          {status === "sent" && "Thanks! Your message is in. I'll reply by email."}
          {status === "error" && <>Something went wrong. Please email <a href="mailto:ryze0950@gmail.com">ryze0950@gmail.com</a> instead.</>}
        </p>
      </div>
    </form>
  )
}
