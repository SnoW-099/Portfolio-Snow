import Image from "next/image"
import Link from "next/link"
import { ArrowDownRight, ArrowUpRight, Coffee, Github, Mail } from "lucide-react"
import { featuredProjects } from "@/lib/projects"
import { primaryStack, skillGroups } from "@/lib/profile"
import PortfolioMotion from "@/components/PortfolioMotion"
import ProjectArtwork from "@/components/ProjectArtwork"

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
          <Link className="nav-link-skills" href="#skills">Skills</Link>
          <Link className="nav-link-contact" href="#contact">Contact</Link>
        </div>
        <a className="availability" href="mailto:ryze0950@gmail.com">
          <span /> Available for work
        </a>
      </nav>

      <section id="top" className="hero shell">
        <div className="hero-kicker reveal reveal-1">
          <span>Angel / Junior developer</span>
          <span>Based in Spain</span>
        </div>

        <h1 className="hero-title reveal reveal-2" aria-label="Junior developer from Spain">
          <span className="hero-line hero-line-solid"><span>Junior developer</span></span>
          <span className="hero-line hero-line-stroke"><span>from</span></span>
          <span className="hero-line hero-line-script"><em>Spain.</em></span>
        </h1>

        <div className="hero-bottom reveal reveal-3">
          <div>
            <p>
              I build web projects and Python tools. My foundation is Python,
              HTML and CSS, and I&apos;m currently learning JavaScript and TypeScript.
            </p>
            <div className="hero-proof" aria-label="Current focus">
              <span>Python + web</span><i />
              <span>Learning by building</span><i />
              <span>Junior opportunities</span>
            </div>
          </div>
          <div className="hero-actions">
            <Link className="hero-primary" href="#work">View projects <ArrowDownRight /></Link>
            <a className="hero-secondary" href="mailto:ryze0950@gmail.com">Get in touch <ArrowUpRight /></a>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>
          {[0, 1].map((copy) => (
            <div className="ticker-group" key={copy}>
              {Array.from({ length: 4 }, () => primaryStack).flat().map((item, index) => (
                <span key={`${item}-${index}`}>{item}<i>+</i></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="now-strip shell" aria-label="What I am doing now" data-reveal>
        <div className="now-heading">
          <span className="live-dot" />
          <span>Now / 2026</span>
        </div>
        <article>
          <small>Working with</small>
          <strong>Python, HTML &amp; CSS</strong>
          <span>Web projects &amp; Python tools</span>
        </article>
        <article>
          <small>Learning</small>
          <strong>JavaScript &amp; TypeScript</strong>
          <span>One project at a time</span>
        </article>
        <article>
          <small>Looking for</small>
          <strong>A place to grow</strong>
          <span>Junior opportunities</span>
        </article>
      </section>

      <section id="work" className="work-section shell" data-reveal>
        <header className="section-heading">
          <div>
            <span className="index">01</span>
            <span className="eyebrow">Selected work</span>
          </div>
          <h2>Learning through real projects.</h2>
          <p>A selection of web projects and Python tools I&apos;ve been building.</p>
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
                  {project.repoUrl && !project.privateRepo && (
                    <a href={project.repoUrl} target="_blank" rel="noreferrer" className="repo-link">
                      <Github /> Source code <ArrowUpRight />
                    </a>
                  )}
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
            I&apos;m a <strong>junior developer</strong> who learns by
            <em> building.</em>
          </p>
          <div className="about-details">
            <p>
              I&apos;m based in Spain and enjoy building web projects and useful Python
              tools. Python, HTML and CSS are my starting point, and each project
              gives me a new problem to work through.
            </p>
            <p>
              Right now I&apos;m learning JavaScript and TypeScript while exploring
              the frameworks and tools in my stack. I&apos;m looking for a junior
              opportunity where I can contribute, learn from others and keep improving.
            </p>
          </div>
          <dl className="about-facts">
            <div><dt>Based in</dt><dd>Spain</dd></div>
            <div><dt>Learning</dt><dd>JavaScript + TypeScript</dd></div>
            <div><dt>Currently</dt><dd><span /> Open to work</dd></div>
          </dl>
        </div>
      </section>

      <section id="skills" className="skills-section shell" aria-labelledby="skills-title">
        <header className="skills-heading" data-reveal>
          <div><span className="index">03</span><span className="eyebrow">My stack</span></div>
          <h2 id="skills-title">What I use.<br /><em>What I&apos;m learning.</em></h2>
          <p>A foundation in Python, HTML and CSS. New languages to learn, and tools to help me turn practice into projects.</p>
        </header>
        <div className="skill-grid">
          {skillGroups.map((group, index) => (
            <article className={`skill-card skill-card-${group.id}`} key={group.id} data-reveal>
              <div className="skill-card-top">
                <span className="skill-index">0{index + 1}</span>
                {group.id === "learning" && <span className="learning-label">Learning</span>}
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <Image
                className="skill-icons"
                src={`https://skillicons.dev/icons?i=${group.iconIds}&theme=dark`}
                alt=""
                width={group.items.length * 48 + (group.items.length - 1) * 8}
                height={48}
                unoptimized
              />
              <ul className="skill-items">
                {group.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="contact-section" data-reveal>
        <div className="shell">
          <div className="contact-topline">
            <span className="eyebrow">04 / Have a junior opportunity?</span>
            <span><i /> Open to junior roles</span>
          </div>
          <h2>Let&apos;s make<br /><em>something good.</em></h2>
          <a className="contact-mail" href="mailto:ryze0950@gmail.com">
            <Mail /> ryze0950@gmail.com <ArrowUpRight />
          </a>
          <a className="support-link" href="https://www.buymeacoffee.com/snow099" target="_blank" rel="noreferrer">
            <Coffee /> Buy me a coffee <ArrowUpRight />
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
