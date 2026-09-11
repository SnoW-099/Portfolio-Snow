import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight, Github, Mail } from "lucide-react"
import { featuredProjects } from "@/lib/projects"
import PortfolioMotion from "@/components/PortfolioMotion"
import ProjectArtwork from "@/components/ProjectArtwork"

const stack = ["TypeScript", "React", "Electron", "Next.js", "Python", "Go", "PowerShell", "Git"]

export default function Portfolio() {
  return (
    <main className="site-shell">
      <a className="skip-link" href="#work">Skip to selected work</a>
      <PortfolioMotion />
      <div className="ambient-glow" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <nav className="nav-wrap" aria-label="Main navigation">
        <Link href="#top" className="brand" aria-label="Angel, home">
          A<span>/</span>26
        </Link>
        <div className="nav-links">
          <Link className="nav-link-work" href="#work">Work</Link>
          <Link className="nav-link-about" href="#about">About</Link>
          <Link className="nav-link-contact" href="#contact">Contact</Link>
        </div>
        <a className="availability" href="mailto:ryze0950@gmail.com">
          <span /> Available for work
        </a>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-kicker reveal reveal-1">
          <span>Angel / Creative developer</span>
          <span>Catalunya, Spain</span>
        </div>

        <h1 className="hero-title reveal reveal-2" aria-label="From rough ideas to sharp products">
          <span className="hero-line hero-line-solid"><span>From rough ideas</span></span>
          <span className="hero-line hero-line-stroke"><span>to sharp</span></span>
          <span className="hero-line hero-line-script"><em>products.</em></span>
        </h1>

        <div className="hero-bottom reveal reveal-3">
          <div>
            <p>
              I build desktop apps, web interfaces, and developer tools — from
              Windows diagnostics to Python systems and Spotify customization.
            </p>
            <div className="hero-proof" aria-label="Areas of focus">
              <span>Desktop apps</span><i />
              <span>Web interfaces</span><i />
              <span>Developer tools</span>
            </div>
          </div>
          <Link className="circle-link" href="#work" aria-label="See selected work">
            <ArrowDownRight />
          </Link>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          {stack.concat(stack).map((item, index) => (
            <span key={`${item}-${index}`}>{item}<i>+</i></span>
          ))}
        </div>
      </div>

      <section className="now-strip shell" aria-label="What I am doing now" data-reveal>
        <div className="now-heading">
          <span className="live-dot" />
          <span>Now / 2026</span>
        </div>
        {featuredProjects.map(project => (
          <article key={project.slug}>
            <small>{project.eyebrow}</small>
            <Link href={`/projects/${project.slug}`}><strong>{project.name}</strong></Link>
            <span>{project.tags.join(" / ")}</span>
          </article>
        ))}
      </section>

      <section id="work" className="work-section shell" data-reveal>
        <header className="section-heading">
          <div>
            <span className="index">01</span>
            <span className="eyebrow">Selected work</span>
          </div>
          <h2>Projects with a reason to exist.</h2>
          <p>A small selection of things I&apos;ve designed, built, and learned from.</p>
        </header>

        <div className="project-list">
          {featuredProjects.map((project, index) => (
            <article id={`project-${project.slug}`} className={`project-feature project-feature-${index + 1}`} key={project.slug} data-reveal>
              <Link href={`/projects/${project.slug}`} className={`project-visual project-visual-${project.slug}`} aria-label={`View ${project.name} case study`} data-tilt>
                <ProjectArtwork project={project} />
                <span className="project-image-label">0{index + 1}</span>
                <span className="project-open" aria-hidden="true">Open <ArrowUpRight /></span>
              </Link>

              <div className="project-copy">
                <div className="project-meta">
                  <span>{project.status}</span>
                  <span>{project.year}</span>
                </div>
                <h3>{project.name}</h3>
                <p>{project.shortDescription}</p>
                <div className="tag-row">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <div className="project-actions">
                  <Link href={`/projects/${project.slug}`} className="text-link">
                    View case study <ArrowUpRight />
                  </Link>
                  <a href={project.repoUrl} target="_blank" rel="noreferrer" className="repo-link">
                    <Github /> Source code <ArrowUpRight />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <Link className="archive-link" href="/projects">
          <span>Explore all projects</span><ArrowUpRight />
        </Link>
      </section>

      <section id="about" className="about-section shell" data-reveal>
        <div className="about-rail">
          <div className="about-label">
            <span className="index">02</span>
            <span className="eyebrow">About me</span>
          </div>
          <figure className="about-mark">
            <Image src="/logo.jpg" alt="Angel's personal cat mark" width={280} height={280} />
            <figcaption>Personal mark / Snow</figcaption>
          </figure>
        </div>
        <div className="about-copy">
          <p className="about-lead">
            I care about the space where <strong>clean code</strong> meets a
            <em> good idea.</em>
          </p>
          <div className="about-details">
            <p>
              I&apos;m a self-taught developer who learns by building. I enjoy turning
              rough ideas into focused products, especially when the solution needs
              equal parts logic, structure, and visual polish.
            </p>
            <p>
              My recent work spans Electron apps, Python inventory and user systems, and
              maintaining a Spicetify fork. I also build Python tools and Discord
              integrations, connecting interface design with practical functionality.
            </p>
          </div>
          <dl className="about-facts">
            <div><dt>Based in</dt><dd>Catalunya, Spain</dd></div>
            <div><dt>Focused on</dt><dd>Desktop + web tools</dd></div>
            <div><dt>Currently</dt><dd><span /> Open to work</dd></div>
          </dl>
        </div>
      </section>

      <section id="capabilities" className="capabilities shell" aria-label="What I build" data-reveal>
        <header className="capabilities-heading">
          <div><span className="index">03</span><span className="eyebrow">What I bring</span></div>
          <h2>Ideas are only good when they become <em>real.</em></h2>
        </header>
        <div className="capability-list">
          {[
            ["01", "Product interfaces", "Focused experiences that are easy to understand and satisfying to use.", "React / Next.js / CSS"],
            ["02", "Desktop applications", "Local tools for diagnostics and coding, with focused interfaces and system integration.", "Electron / TypeScript / PowerShell"],
            ["03", "Useful automation", "Bots and tools that remove repetitive work and stay understandable as they grow.", "Python / APIs / Discord"],
          ].map(([number, title, copy, tools]) => (
            <article key={number}>
              <span className="capability-number">{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
              <span className="capability-tools">{tools}</span>
              <ArrowUpRight aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="contact-section" data-reveal>
        <div className="shell">
          <div className="contact-topline">
            <span className="eyebrow">04 / Have a project or an opportunity?</span>
            <span><i /> Available for the right opportunity</span>
          </div>
          <h2>Let&apos;s make<br /><em>something good.</em></h2>
          <a className="contact-mail" href="mailto:ryze0950@gmail.com">
            <Mail /> ryze0950@gmail.com <ArrowUpRight />
          </a>
          <div className="footer-row">
            <span>Angel (c) 2026</span>
            <a href="https://github.com/SnoW-099" target="_blank" rel="noreferrer">
              <Github /> GitHub
            </a>
            <span>Designed &amp; built with care</span>
          </div>
        </div>
      </footer>
    </main>
  )
}
