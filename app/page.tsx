import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, Github, Globe, LayoutDashboard, Sparkles, Workflow, type LucideIcon } from "lucide-react"
import { featuredProjects, visibilityLabels } from "@/lib/projects"
import { capabilityAreas, levelLabels, type Level } from "@/lib/profile"
import { services } from "@/lib/services"
import PortfolioMotion from "@/components/PortfolioMotion"
import ProjectArtwork from "@/components/ProjectArtwork"
import SiteHeader from "@/components/SiteHeader"
import Marquee from "@/components/Marquee"
import ContactForm from "@/components/ContactForm"
import BuildReel from "@/components/BuildReel"
import SnowDevMark from "@/components/SnowDevMark"
import SnowLogo from "@/components/SnowLogo"

const serviceIcons: Record<string, LucideIcon> = { web: Globe, apps: LayoutDashboard, automation: Workflow, creative: Sparkles }

function ServiceIcon({ id }: { id: string }) {
  const Icon = serviceIcons[id] ?? Sparkles
  return <Icon aria-hidden="true" />
}

export default function Portfolio() {
  return (
    <main className="site-shell">
      <a className="skip-link" href="#work">Skip to featured projects</a>
      <PortfolioMotion />
      <SiteHeader />

      <section id="top" className="hero shell" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="hero-heading">
            <p className="hero-kicker hero-enter"><span className="live-dot" /> Snow Dev — Independent Digital Development</p>
            <h1 id="hero-title" className="hero-title">
              <span className="line"><span style={{ "--d": "60ms" } as CSSProperties}>Building </span></span>
              <span className="line line-muted"><span style={{ "--d": "160ms" } as CSSProperties}>digital </span></span>
              <span className="line line-muted"><span style={{ "--d": "260ms" } as CSSProperties}>experiences.</span></span>
            </h1>
          </div>
          <div className="hero-aside hero-enter" style={{ "--enter-delay": "160ms" } as CSSProperties}>
            <p className="hero-description">Websites, applications, automations and creative digital products.</p>
            <p className="hero-supporting">An independent brand by Snow, building small, careful things that work.</p>
            <div className="hero-actions">
              <Link className="hero-primary" href="#work">Explore projects <ArrowDown aria-hidden="true" /></Link>
              <Link className="hero-secondary" href="#contact">Contact <ArrowUpRight aria-hidden="true" /></Link>
            </div>
            <div className="hero-footnote"><span>Based in Spain · Independent</span></div>
          </div>
        </div>
        <BuildReel />
      </section>

      <Marquee />

      <section id="work" className="work-section shell" aria-labelledby="work-title">
        <header className="section-heading" data-reveal>
          <div><span className="eyebrow">Featured projects</span></div>
          <h2 id="work-title">Real projects.<br /><span className="heading-muted">Built to be used.</span></h2>
          <p>One project for each kind of work: open source, web apps, automation and desktop. Each says whether it is public, private or still in development.</p>
        </header>
        <ol className="stack">
          {featuredProjects.map((project, index) => (
            <li id={"project-" + project.slug} className={"stack-card stack-card-" + project.slug} key={project.slug} style={{ "--i": index } as CSSProperties}>
              <div className="stack-copy">
                <div className="stack-top">
                  <span className="index">{String(index + 1).padStart(2, "0")} / {String(featuredProjects.length).padStart(2, "0")}</span>
                  <span className="visibility-badge" data-visibility={project.visibility}>{visibilityLabels[project.visibility]} · {project.year}</span>
                </div>
                <span className="stack-category">{project.category}</span>
                <h3><Link href={"/projects/" + project.slug}>{project.name}</Link></h3>
                <p>{project.shortDescription}</p>
                {project.cardNote && <p className="stack-note">{project.cardNote}</p>}
                {project.aiAssisted && <span className="ai-badge"><Sparkles aria-hidden="true" /> Vibe-coded · AI-assisted</span>}
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-actions">
                  <Link href={"/projects/" + project.slug} className="stack-cta">Explore the project<span className="sr-only">: {project.name}</span> <ArrowUpRight aria-hidden="true" /></Link>
                  {project.liveUrl && <a href={project.liveUrl} className="text-link">View website <ArrowUpRight aria-hidden="true" /></a>}
                  {project.repoUrl && !project.privateRepo && <a href={project.repoUrl} target="_blank" rel="noreferrer" className="repo-link"><Github aria-hidden="true" /> Code<span className="sr-only"> for {project.name}</span></a>}
                </div>
              </div>
              <Link href={"/projects/" + project.slug} className="stack-visual" tabIndex={-1} aria-hidden="true">
                <ProjectArtwork project={project} />
                <span className="project-open"><ArrowUpRight /></span>
              </Link>
            </li>
          ))}
        </ol>
        <Link className="archive-link" href="/projects">All projects &amp; experiments <ArrowUpRight aria-hidden="true" /></Link>
      </section>

      <section id="services" className="services-section shell" aria-labelledby="services-title">
        <header className="section-heading" data-reveal>
          <div><span className="eyebrow">Services</span></div>
          <h2 id="services-title">What Snow Dev builds.<br /><span className="heading-muted">Backed by real work.</span></h2>
          <p>Four kinds of work, each linked to a project that shows it. Small and focused, by design.</p>
        </header>
        <div className="service-grid">
          {services.map((service, index) => (
            <article className="service-card" key={service.id} data-reveal>
              <div className="service-top"><span className="index">0{index + 1}</span><ServiceIcon id={service.id} /></div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-items">{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <div className="service-proof">
                <span>{service.scope}</span>
                <div>{service.proof.map((proof) => <Link href={proof.href} key={proof.label}>{proof.label} <ArrowUpRight aria-hidden="true" /></Link>)}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="capabilities" className="skills-section shell" aria-labelledby="capabilities-title">
        <header className="skills-heading" data-reveal>
          <div><span className="eyebrow">Capabilities</span></div>
          <h2 id="capabilities-title">What I can build with.<br /><span className="heading-muted">And how far it goes.</span></h2>
          <p>Grouped by area, with an honest level for each tool and a project that shows it.</p>
        </header>
        <ul className="level-legend" aria-label="Levels">
          {(Object.keys(levelLabels) as Level[]).map((level) => <li key={level} data-level={level}>{levelLabels[level]}</li>)}
        </ul>
        <div className="skill-grid">
          {capabilityAreas.map((area, index) => (
            <article className={"skill-card skill-card-" + area.id} key={area.id} data-reveal>
              <div className="skill-card-top"><span className="index">0{index + 1}</span></div>
              <h3>{area.title}</h3><p>{area.description}</p>
              <ul className="skill-items">{area.items.map((item) => <li key={item.name} data-level={item.level}>{item.name}<span className="sr-only"> ({levelLabels[item.level]})</span></li>)}</ul>
              {area.evidence.length > 0 && <div className="skill-evidence">{area.evidence.map((proof) => <Link href={proof.href} key={proof.label}>{proof.label} <ArrowUpRight aria-hidden="true" /></Link>)}</div>}
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="about-section shell" aria-labelledby="about-title">
        <div className="about-rail" data-reveal>
          <div className="about-label"><span className="eyebrow">The person behind Snow Dev</span></div>
          <span className="about-signature"><span className="about-avatar"><SnowLogo size={44} /></span>Snow</span>
        </div>
        <div className="about-copy" data-reveal>
          <h2 id="about-title" className="about-lead">One person.<br /><strong>Building with care.</strong></h2>
          <div className="about-details">
            <p>Snow Dev is the independent brand of Snow, the online name of Angel, a developer based in Spain. It is not an agency: every project is designed, built and looked after by one person, so you talk directly to whoever writes the code.</p>
            <p>I like taking digital products from idea to something people use, with a creative eye for the interface. I experiment with new technologies and use AI openly while I learn them; each project says where it helped.</p>
          </div>
          <dl className="about-facts">
            <div><dt>Founder</dt><dd>Snow / SnoW-099</dd></div>
            <div><dt>How I work</dt><dd>Small scope. Clear steps. Honest progress.</dd></div>
            <div><dt>Also</dt><dd>Open to junior developer roles</dd></div>
          </dl>
        </div>
      </section>

      <section id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="shell">
          <div className="contact-topline" data-reveal><span className="eyebrow">Contact</span><span>Based in Spain. Replies by email.</span></div>
          <h2 id="contact-title" data-reveal>Have an idea?<br /><em>Let&apos;s build it.</em></h2>
          <div className="contact-grid">
            <ContactForm />
            <aside className="contact-direct" aria-label="Other ways to reach Snow Dev">
              <p className="contact-intro">Tell me what you have in mind: a website, a small app, an automation or an experiment. Rough ideas are welcome.</p>
              <a className="contact-mail" href="mailto:ryze0950@gmail.com"><span>ryze0950@gmail.com</span><ArrowUpRight aria-hidden="true" /></a>
              <a className="contact-mail" href="https://github.com/SnoW-099" target="_blank" rel="noreferrer"><span>GitHub · SnoW-099</span><ArrowUpRight aria-hidden="true" /></a>
              <a className="contact-mail" href="https://x.com/Snow_099" target="_blank" rel="noreferrer"><span>X · @Snow_099</span><ArrowUpRight aria-hidden="true" /></a>
            </aside>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell">
          <div className="footer-brand">
            <Link href="#top" className="brand" aria-label="Snow Dev, back to top"><span className="brand-mark"><SnowDevMark /></span>Snow Dev<span className="brand-dot">.</span></Link>
            <p>Independent digital development. Websites, applications, automations and creative digital products, built by Snow.</p>
          </div>
          <nav className="footer-links" aria-label="Footer">
            <a href="#top">Home</a><a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a><a href="#contact">Contact</a>
          </nav>
          <div className="footer-links">
            <a href="https://github.com/SnoW-099" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
            <a href="https://x.com/Snow_099" target="_blank" rel="noreferrer">X / Twitter</a>
            <a href="mailto:ryze0950@gmail.com">Email</a>
          </div>
          <div className="footer-row">
            <span>© {new Date().getFullYear()} Snow Dev · Built by Snow</span>
            <Link href="/projects/portfolio" className="footer-colophon"><Sparkles aria-hidden="true" /> Built with care &amp; AI</Link>
          </div>
          <p className="footer-wordmark" aria-hidden="true">Snow Dev</p>
        </div>
      </footer>
    </main>
  )
}

