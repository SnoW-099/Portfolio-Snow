import type { CSSProperties } from "react"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, Github, Sparkles } from "lucide-react"
import { featuredProjects } from "@/lib/projects"
import { skillGroups } from "@/lib/profile"
import { services } from "@/lib/services"
import PortfolioMotion from "@/components/PortfolioMotion"
import ProjectArtwork from "@/components/ProjectArtwork"
import SiteHeader from "@/components/SiteHeader"
import ProjectSpotlight from "@/components/ProjectSpotlight"

export default function Portfolio() {
  return (
    <main className="site-shell">
      <a className="skip-link" href="#work">Skip to selected work</a>
      <PortfolioMotion />
      <SiteHeader />

      <section id="top" className="hero shell" aria-labelledby="hero-title">
        <div className="hero-content">
          <div className="hero-heading">
            <p className="hero-kicker hero-enter"><span className="live-dot" /> Snow Dev — Independent Digital Development</p>
            <h1 id="hero-title" className="hero-title hero-enter" style={{ "--enter-delay": "80ms" } as CSSProperties}>Building<br /><span>digital experiences.</span></h1>
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
        <ProjectSpotlight />
      </section>

      <section id="work" className="work-section shell" aria-labelledby="work-title">
        <header className="section-heading" data-reveal>
          <div><span className="eyebrow">Selected work</span></div>
          <h2 id="work-title">Small projects.<br /><span className="heading-muted">A closer look.</span></h2>
          <p>The tools I&apos;m building, the code I&apos;m learning, and the decisions behind both.</p>
        </header>
        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <article id={"project-" + project.slug} className={"project-feature project-feature-" + (index + 1) + " project-feature-" + project.slug} key={project.slug} data-reveal>
              <Link href={"/projects/" + project.slug} className={"project-visual project-visual-" + project.slug} aria-label={"Explore " + project.name}>
                <ProjectArtwork project={project} />
                <span className="project-open" aria-hidden="true"><ArrowUpRight /></span>
              </Link>
              <div className="project-copy">
                <div className="project-meta"><span>{project.eyebrow}</span><span>{project.year}</span></div>
                <h3><Link href={"/projects/" + project.slug}>{project.name}</Link></h3>
                {project.aiAssisted && <span className="ai-badge"><Sparkles aria-hidden="true" /> Vibe-coded · AI-assisted</span>}
                <p>{project.shortDescription}</p>
                {project.cardNote && <p className="project-card-note">{project.cardNote}</p>}
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-actions">
                  <Link href={"/projects/" + project.slug} className="text-link">Explore the project <ArrowUpRight aria-hidden="true" /></Link>
                  {project.liveUrl && <a href={project.liveUrl} className="text-link">View website <ArrowUpRight aria-hidden="true" /></a>}
                  {project.repoUrl && !project.privateRepo && <a href={project.repoUrl} target="_blank" rel="noreferrer" className="repo-link"><Github aria-hidden="true" /> Code<span className="sr-only"> for {project.name}</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
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
              <span className="index">0{index + 1}</span>
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

      <section id="about" className="about-section shell" aria-labelledby="about-title">
        <div className="about-rail" data-reveal>
          <div className="about-label"><span className="eyebrow">The person behind the projects</span></div>
          <span className="about-signature">Angel / Snow</span>
        </div>
        <div className="about-copy" data-reveal>
          <h2 id="about-title" className="about-lead">Still learning.<br /><strong>Already making.</strong></h2>
          <div className="about-details">
            <p>I&apos;m Angel, a junior developer based in Spain. Snow is the name I use online. My starting point is Python, HTML and CSS, and I enjoy turning small ideas into useful tools.</p>
            <p>I also build with AI. StarOptimizer and this portfolio are vibe-coded projects: a way to explore ideas while I keep learning JavaScript, TypeScript and the tools behind them.</p>
          </div>
          <dl className="about-facts">
            <div><dt>Name</dt><dd>Angel</dd></div>
            <div><dt>Online</dt><dd>Snow / SnoW-099</dd></div>
            <div><dt>Approach</dt><dd>Build. Understand. Refine.</dd></div>
          </dl>
        </div>
      </section>

      <section id="skills" className="skills-section shell" aria-labelledby="skills-title">
        <header className="skills-heading" data-reveal>
          <div><span className="eyebrow">Tools &amp; experience</span></div>
          <h2 id="skills-title">An honest stack.</h2>
          <p>What I&apos;ve used, what I know a little, and what I&apos;m learning with help.</p>
        </header>
        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article className={"skill-card skill-card-" + group.id} key={group.id} data-reveal>
                <div className="skill-card-top"><span className="skill-label">{group.label}</span></div>
              <h3>{group.title}</h3><p>{group.description}</p>
              <ul className="skill-items">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              {group.evidence.length > 0 && <div className="skill-evidence">{group.evidence.map((proof) => <Link href={proof.href} key={proof.href}>{proof.label} <ArrowUpRight aria-hidden="true" /></Link>)}</div>}
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="shell">
          <div className="contact-topline" data-reveal><span className="eyebrow">Let&apos;s talk</span><span>Based in Spain. Open to what&apos;s next.</span></div>
          <h2 id="contact-title" data-reveal>Have something<br /><em>in mind?</em></h2>
          <p className="contact-intro">A junior role, a small collaboration, or just a good idea.<br />My inbox is open.</p>
          <a className="contact-mail" href="mailto:ryze0950@gmail.com"><span>ryze0950@gmail.com</span><ArrowUpRight aria-hidden="true" /></a>
          <div className="footer-row">
            <span>© {new Date().getFullYear()} Angel / Snow</span>
            <a href="https://github.com/SnoW-099" target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub</a>
            <Link href="/projects/portfolio" className="footer-colophon"><Sparkles aria-hidden="true" /> Built with care &amp; AI</Link>
          </div>
        </div>
      </footer>
    </main>
  )
}

