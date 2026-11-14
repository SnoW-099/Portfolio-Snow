import type { CSSProperties } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowDown, ArrowUpRight, Code, FileText, Github, Globe, LayoutDashboard, LifeBuoy, MessageSquare, Play, Plus, Rocket, Sparkles, Workflow, type LucideIcon } from "lucide-react"
import { getFeaturedProjects, getVisibilityLabels } from "@/lib/projects"
import { availableFrom, contact, getCapabilityAreas, getLevelLabels, type Level } from "@/lib/profile"
import { getServices } from "@/lib/services"
import { getProcess } from "@/lib/process"
import { getFaq } from "@/lib/faq"
import { getDictionary, isLang, siteUrl } from "@/lib/i18n"
import PortfolioMotion from "@/components/PortfolioMotion"
import ProjectArtwork from "@/components/ProjectArtwork"
import SiteHeader from "@/components/SiteHeader"
import Marquee from "@/components/Marquee"
import ContactForm from "@/components/ContactForm"
import BuildReel from "@/components/BuildReel"
import Showreel from "@/components/Showreel"
import SnowDevMark from "@/components/SnowDevMark"
import SectionTitle from "@/components/SectionTitle"
import JsonLd from "@/components/JsonLd"
import HeroOrbit from "@/components/HeroOrbit"
import SpinBadge from "@/components/SpinBadge"

const serviceIcons: Record<string, LucideIcon> = { web: Globe, apps: LayoutDashboard, automation: Workflow, creative: Sparkles }
const processIcons: LucideIcon[] = [MessageSquare, FileText, Code, Rocket, LifeBuoy]
const glanceLinks = ["#about", "#services", "#work", "#contact"]
const delay = (ms: number, name = "--enter-delay") => ({ [name]: ms + "ms" }) as CSSProperties
const two = (n: number) => String(n).padStart(2, "0")

function ServiceIcon({ id }: { id: string }) {
  const Icon = serviceIcons[id] ?? Sparkles
  return <Icon aria-hidden="true" />
}

export default async function Portfolio({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  const t = getDictionary(lang)
  const featured = getFeaturedProjects(lang)
  const visibility = getVisibilityLabels(lang)
  const services = getServices(lang)
  const steps = getProcess(lang)
  const faq = getFaq(lang)
  const levels = getLevelLabels(lang)
  const areas = getCapabilityAreas(lang)
  const home = "/" + lang
  const available = availableFrom?.[lang]

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Person", "@id": siteUrl + "/#person", name: "Angel", alternateName: "Snow", url: siteUrl + home, jobTitle: t.about.role, sameAs: [contact.github, contact.x] },
      {
        "@type": "ProfessionalService",
        "@id": siteUrl + "/#service",
        name: "Snow Dev",
        url: siteUrl + home,
        description: t.meta.description,
        email: contact.email,
        image: siteUrl + "/opengraph-image.png",
        founder: { "@id": siteUrl + "/#person" },
        areaServed: { "@type": "Country", name: "Spain" },
        address: { "@type": "PostalAddress", addressCountry: "ES" },
        availableLanguage: ["es", "en"],
        hasOfferCatalog: { "@type": "OfferCatalog", name: t.services.eyebrow, itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.title, description: service.description } })) },
      },
      { "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.q, acceptedAnswer: { "@type": "Answer", text: item.a } })) },
    ],
  }

  return (
    <main className="site-shell">
      <a className="skip-link" href="#work">{t.hero.skip}</a>
      <JsonLd data={structuredData} />
      <PortfolioMotion />
      <SiteHeader lang={lang} t={t.nav} />

      <section id="top" className="hero shell" aria-labelledby="hero-title">
        <HeroOrbit labels={t.reel.steps} />
        <div className="hero-content">
          <div className="hero-heading">
            <p className="hero-kicker hero-enter" style={delay(300)}><span className="live-dot" /><span><span className="kicker-prefix">Snow Dev — </span>{t.hero.kicker}</span></p>
            <h1 id="hero-title" className="hero-title">
              {t.hero.lines.map((line, index) => (
                <span className={"line" + (index ? " line-muted" : "")} key={line}><span style={delay(380 + index * 110, "--d")}>{line} </span></span>
              ))}
            </h1>
          </div>
          <div className="hero-aside hero-enter" style={delay(560)}>
            <p className="hero-description">{t.hero.description}</p>
            <p className="hero-supporting">{t.hero.supporting}</p>
            <div className="hero-actions">
              <Link className="hero-primary" href="#contact">{t.hero.primary} <ArrowUpRight aria-hidden="true" /></Link>
              <Link className="hero-secondary" href="#work">{t.hero.secondary} <ArrowDown aria-hidden="true" /></Link>
              <Link className="hero-film" href="#showreel"><Play aria-hidden="true" /> {t.hero.film}</Link>
            </div>
            {available && <p className="hero-footnote hero-status"><span className="live-dot" /> {t.hero.availableFrom} {available}</p>}
          </div>
        </div>
        <ul className="glance hero-enter" style={delay(700)} aria-label={t.hero.glanceLabel}>
          {t.hero.glance.map((item, index) => (
            <li key={item.key}>
              <a href={glanceLinks[index]}>
                <span className="glance-k">{item.key}</span>
                <strong>{index === 2 ? featured.length + " " + item.title : item.title}</strong>
                <small>{item.text} <ArrowUpRight aria-hidden="true" /></small>
              </a>
            </li>
          ))}
        </ul>
        <BuildReel t={t.reel} />
      </section>

      <section id="work" className="work-section shell" aria-labelledby="work-title">
        <header className="section-heading" data-reveal>
          <div><span className="eyebrow">01 — {t.work.eyebrow}</span></div>
          <SectionTitle id="work-title" a={t.work.a} b={t.work.b} />
          <p>{t.work.intro}</p>
        </header>
        <Showreel t={t.showreel} />
        <ol className="stack">
          {featured.map((project, index) => (
            <li id={"project-" + project.slug} className={"stack-card stack-card-" + project.slug} key={project.slug} style={{ "--i": index } as CSSProperties}>
              <div className="stack-copy">
                <div className="stack-top">
                  <span className="index">{two(index + 1)} / {two(featured.length)}</span>
                  <span className="visibility-badge" data-visibility={project.visibility}>{visibility[project.visibility]} · {project.year}</span>
                </div>
                <span className="stack-category">{project.category}</span>
                <h3><Link href={home + "/projects/" + project.slug}>{project.name}</Link></h3>
                <p>{project.shortDescription}</p>
                {project.cardNote && <p className="stack-note">{project.cardNote}</p>}
                {project.aiAssisted && <span className="ai-badge"><Sparkles aria-hidden="true" /> {t.work.aiBadge}</span>}
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-actions">
                  <Link href={home + "/projects/" + project.slug} className="stack-cta">{t.work.explore}<span className="sr-only">: {project.name}</span> <ArrowUpRight aria-hidden="true" /></Link>
                  {project.repoUrl && !project.privateRepo && <a href={project.repoUrl} target="_blank" rel="noreferrer" className="repo-link"><Github aria-hidden="true" /> {t.work.code}<span className="sr-only"> {t.work.codeFor} {project.name}</span></a>}
                </div>
              </div>
              <Link href={home + "/projects/" + project.slug} className="stack-visual" tabIndex={-1} aria-hidden="true">
                <ProjectArtwork project={project} lang={lang} />
                <span className="project-open"><ArrowUpRight /></span>
              </Link>
            </li>
          ))}
        </ol>
        <Link className="archive-link" href={home + "/projects"}>{t.work.archive} <ArrowUpRight aria-hidden="true" /></Link>
      </section>

      <section id="services" className="services-section shell" aria-labelledby="services-title">
        <header className="section-heading" data-reveal>
          <div><span className="eyebrow">02 — {t.services.eyebrow}</span></div>
          <SectionTitle id="services-title" a={t.services.a} b={t.services.b} />
          <p>{t.services.intro}</p>
        </header>
        <ol className="service-list">
          {services.map((service, index) => (
            <li className="service-row" key={service.id}>
              <span className="index">{two(index + 1)}</span>
              <div className="service-main">
                <h3><ServiceIcon id={service.id} />{service.title}</h3>
                <p>{service.description}</p>
                {service.priceFrom && <p className="service-price">{service.priceFrom}</p>}
              </div>
              <div className="service-side">
                <ul className="service-items">{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="service-proof">
                  <span>{service.scope}</span>
                  <div>{service.proof.map((proof) => <Link href={home + proof.href} key={proof.href}>{proof.label} <ArrowUpRight aria-hidden="true" /></Link>)}</div>
                </div>
              </div>
            </li>
          ))}
        </ol>
        <p className="price-note" data-reveal><span className="live-dot" aria-hidden="true" /> {t.services.priceNote}</p>
      </section>

      <section id="process" className="process-section shell" aria-labelledby="process-title">
        <header className="section-heading" data-reveal>
          <div><span className="eyebrow">03 — {t.process.eyebrow}</span></div>
          <SectionTitle id="process-title" a={t.process.a} b={t.process.b} />
          <p>{t.process.intro}</p>
        </header>
        <ol className="process-list">
          {steps.map((step, index) => {
            const Icon = processIcons[index] ?? Sparkles
            return (
              <li className="process-step" key={step.title} data-reveal>
                <span className="process-top"><span className="index">{two(index + 1)}</span><Icon aria-hidden="true" /></span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                {step.time && <span className="process-time">{step.time}</span>}
              </li>
            )
          })}
        </ol>
      </section>

      <section id="capabilities" className="skills-section shell" aria-labelledby="capabilities-title">
        <header className="skills-heading" data-reveal>
          <div><span className="eyebrow">04 — {t.stack.eyebrow}</span></div>
          <SectionTitle id="capabilities-title" a={t.stack.a} b={t.stack.b} />
          <p>{t.stack.intro}</p>
        </header>
        <ul className="level-legend" aria-label={t.stack.levels}>
          {(Object.keys(levels) as Level[]).map((level) => <li key={level} data-level={level}>{levels[level]}</li>)}
        </ul>
        <div className="skill-grid">
          {areas.map((area, index) => (
            <article className={"skill-card skill-card-" + area.id} key={area.id} data-reveal>
              <div className="skill-card-top"><span className="index">{two(index + 1)}</span></div>
              <h3>{area.title}</h3><p>{area.description}</p>
              <ul className="skill-items">{area.items.map((item) => <li key={item.name} data-level={item.level}>{item.name}<span className="sr-only"> ({levels[item.level]})</span></li>)}</ul>
              {area.evidence.length > 0 && <div className="skill-evidence">{area.evidence.map((proof) => <Link href={home + proof.href} key={proof.href}>{proof.label} <ArrowUpRight aria-hidden="true" /></Link>)}</div>}
            </article>
          ))}
        </div>
      </section>

      <Marquee words={t.marquee} />

      <section id="about" className="about-section shell" aria-labelledby="about-title">
        <div className="about-rail" data-reveal>
          <span className="eyebrow">05 — {t.about.eyebrow}</span>
          <div className="about-id">
            <span className="about-avatar"><SnowDevMark size={120} /></span>
            <strong className="about-name">Snow</strong>
            <span>{t.about.place}</span>
            <span>{t.about.role}</span>
          </div>
        </div>
        <div className="about-copy" data-reveal>
          <SectionTitle id="about-title" className="about-lead" a={t.about.a} b={t.about.b} />
          <div className="about-details"><p>{t.about.p1}</p><p>{t.about.p2}</p></div>
          <dl className="about-facts">{t.about.facts.map((fact) => <div key={fact.k}><dt>{fact.k}</dt><dd>{fact.v}</dd></div>)}</dl>
        </div>
      </section>

      <section id="faq" className="faq-section shell" aria-labelledby="faq-title">
        <header className="section-heading" data-reveal>
          <div><span className="eyebrow">06 — {t.faq.eyebrow}</span></div>
          <SectionTitle id="faq-title" a={t.faq.a} b={t.faq.b} />
          <p>{t.faq.intro}</p>
        </header>
        <div className="faq-list">
          {faq.map((item, index) => (
            <details className="faq-item" key={item.q} name="faq" data-reveal>
              <summary><span className="index">{two(index + 1)}</span><span>{item.q}</span><Plus aria-hidden="true" /></summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="shell">
          <div className="contact-topline" data-reveal><span className="eyebrow">07 — {t.contact.eyebrow}</span><span>{t.contact.topline}</span></div>
          <SpinBadge text={t.nav.cta} />
          <SectionTitle id="contact-title" a={t.contact.a} b={t.contact.b} />
          <div className="contact-grid">
            <ContactForm lang={lang} t={t.contact.form} />
            <aside className="contact-direct" aria-label={t.contact.asideLabel}>
              <p className="contact-intro">{t.contact.intro}</p>
              <ul className="contact-checklist">{t.contact.checklist.map((item) => <li key={item}>{item}</li>)}</ul>
              <a className="contact-mail" href={"mailto:" + contact.email} data-umami-event="email-click"><span>{contact.email}</span><ArrowUpRight aria-hidden="true" /></a>
              <div className="contact-links">
                <a href={contact.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub · SnoW-099</a>
                <a href={contact.x} target="_blank" rel="noreferrer">X · @Ryze517182</a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell">
          <div className="footer-brand">
            <Link href="#top" className="brand" aria-label={t.footer.top}><span className="brand-mark"><SnowDevMark /></span>Snow Dev<span className="brand-dot">.</span></Link>
            <p>{t.footer.blurb}</p>
          </div>
          <nav className="footer-links" aria-label={t.footer.label}>
            <a href="#top">{t.footer.home}</a>
            {Object.entries(t.nav.links).map(([key, label]) => <a href={"#" + key} key={key}>{label}</a>)}
          </nav>
          <div className="footer-links">
            <a href={contact.github} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
            <a href={contact.x} target="_blank" rel="noreferrer">X / Twitter</a>
            <a href={"mailto:" + contact.email} data-umami-event="email-click">{t.footer.email}</a>
          </div>
          <div className="footer-row">
            <span>© {new Date().getFullYear()} Snow Dev · {t.footer.built}</span>
            <Link href={home + "/projects/portfolio"} className="footer-colophon"><Sparkles aria-hidden="true" /> {t.footer.colophon}</Link>
          </div>
          <p className="footer-wordmark" aria-hidden="true">Snow Dev</p>
        </div>
      </footer>
    </main>
  )
}
