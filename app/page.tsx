import type { CSSProperties } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowUpRight, Github, Sparkles } from "lucide-react"
import { featuredProjects } from "@/lib/projects"
import { skillGroups } from "@/lib/profile"
import PortfolioMotion from "@/components/PortfolioMotion"
import ProjectArtwork from "@/components/ProjectArtwork"
import SiteHeader from "@/components/SiteHeader"
import ProjectSpotlight from "@/components/ProjectSpotlight"
import SnowLogo from "@/components/SnowLogo"

export default function Portfolio() {
  return (
    <main className="site-shell">
      <a className="skip-link" href="#work">Skip to selected work</a>
      <PortfolioMotion />
      <SiteHeader />

      <section id="top" className="hero shell" aria-labelledby="hero-title">
        <div className="hero-aura" aria-hidden="true" />
        <div className="hero-content">
          <p className="hero-kicker hero-enter" style={{ "--enter-delay": "0ms" } as CSSProperties}>
            <span className="hero-monogram"><SnowLogo size={40} /></span> Angel, online as Snow
          </p>
          <h1 id="hero-title" className="hero-title hero-enter" style={{ "--enter-delay": "80ms" } as CSSProperties}>
            Small ideas.<br /><span>Thoughtfully built.</span>
          </h1>
          <p className="hero-description hero-enter" style={{ "--enter-delay": "160ms" } as CSSProperties}>
            I&apos;m Angel, a junior developer in Spain. I turn curiosity into
            useful tools, clear interfaces, and projects worth learning from.
          </p>
          <div className="hero-actions hero-enter" style={{ "--enter-delay": "240ms" } as CSSProperties}>
            <Link className="hero-primary" href="#work">Explore my work <ArrowDown aria-hidden="true" /></Link>
            <a className="hero-secondary" href="mailto:ryze0950@gmail.com">Get in touch <ArrowUpRight aria-hidden="true" /></a>
          </div>
          <div className="hero-footnote hero-enter" style={{ "--enter-delay": "300ms" } as CSSProperties}>
            <span className="hero-status"><span className="live-dot" /> Open to junior opportunities</span>
            <span className="hero-location">Based in Spain · Building at my own pace</span>
          </div>
        </div>
        <ProjectSpotlight />
        <a className="hero-scroll" href="#work"><span>A closer look at my work</span><ArrowDown aria-hidden="true" /></a>
      </section>

      <section id="work" className="work-section shell" aria-labelledby="work-title">
        <header className="section-heading" data-reveal>
          <div><span className="index">01</span><span className="eyebrow">Selected work</span></div>
          <h2 id="work-title">Different ideas.<br /><span className="heading-muted">The same attention to detail.</span></h2>
          <p>Python systems, a Discord bot, and a community fork. Each one has a story, a scope, and something I&apos;m learning.</p>
        </header>
        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <article id={"project-" + project.slug} className={"project-feature project-feature-" + (index + 1) + " project-feature-" + project.slug} key={project.slug} data-reveal>
              <Link href={"/projects/" + project.slug} className={"project-visual project-visual-" + project.slug} aria-label={"Explore " + project.name}>
                <ProjectArtwork project={project} />
                <span className="project-image-label">0{index + 1}</span>
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
                  <Link href={"/projects/" + project.slug} className="text-link">Behind the project <ArrowUpRight aria-hidden="true" /></Link>
                  {project.liveUrl && <a href={project.liveUrl} className="text-link">View website <ArrowUpRight aria-hidden="true" /></a>}
                  {project.repoUrl && !project.privateRepo && <a href={project.repoUrl} target="_blank" rel="noreferrer" className="repo-link"><Github aria-hidden="true" /> Code<span className="sr-only"> for {project.name}</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
        <Link className="archive-link" href="/projects">All projects &amp; experiments <ArrowUpRight aria-hidden="true" /></Link>
      </section>

      <section id="about" className="about-section shell" aria-labelledby="about-title">
        <div className="about-rail" data-reveal>
          <div className="about-label"><span className="index">02</span><span className="eyebrow">A little about me</span></div>
          <figure className="about-mark"><Image src="/logo.jpg" alt="Snow's cat mark" width={200} height={200} /><figcaption>Angel, aka Snow.</figcaption></figure>
        </div>
        <div className="about-copy" data-reveal>
          <h2 id="about-title" className="about-lead">I like things simple.<br /><strong>And thoughtfully made.</strong></h2>
          <p className="about-intro">Curious by nature.<br />A developer in the making.</p>
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
          <div><span className="index">03</span><span className="eyebrow">An honest stack</span></div>
          <h2 id="skills-title">What I use.<br /><span className="heading-muted">Where I&apos;m growing.</span></h2>
          <p>Public projects, private experience, and tools I&apos;m learning with AI. Different levels of experience, made clear.</p>
        </header>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article className={"skill-card skill-card-" + group.id} key={group.id} data-reveal>
              <div className="skill-card-top"><span className="skill-index">0{index + 1}</span><span className="skill-label">{group.label}</span></div>
              <h3>{group.title}</h3><p>{group.description}</p>
              <ul className="skill-items">{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
              {group.evidence.length > 0 && <div className="skill-evidence">{group.evidence.map((proof) => <Link href={proof.href} key={proof.href}>{proof.label} <ArrowUpRight aria-hidden="true" /></Link>)}</div>}
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="contact-section" aria-labelledby="contact-title">
        <div className="shell">
          <div className="contact-topline" data-reveal><span className="eyebrow">04 / Let&apos;s talk</span><span>Good things start with a conversation.</span></div>
          <h2 id="contact-title" data-reveal>Something in mind?<br /><em>Say hello.</em></h2>
          <p className="contact-intro">A junior opportunity, a small collaboration, or an interesting idea.<br />I&apos;d love to hear about it.</p>
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

