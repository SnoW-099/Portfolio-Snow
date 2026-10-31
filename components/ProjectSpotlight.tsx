import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { featuredProjects } from "@/lib/projects"
import PythonArtwork from "@/components/PythonArtwork"

export default function ProjectSpotlight() {
  return (
    <div className="spotlight" aria-label="Explore featured projects">
      <div className="spotlight-caption"><span>Featured projects</span><Link href="#work">Explore the work <ArrowUpRight aria-hidden="true" /></Link></div>
      <div className="spotlight-grid">
        {featuredProjects.map((project) => {
          return (
            <Link className={"spotlight-card spotlight-" + project.slug} href={"/projects/" + project.slug} key={project.slug}>
              <div className="spotlight-scene" aria-hidden="true">
                {project.slug === "py-mini-systems" ? <PythonArtwork compact /> : project.slug === "snowtify" ? (
                  <div className="snowtify-study"><Image src="/projects/snowtify/logo.png" alt="" width={88} height={88} /><strong>Snowtify<span>Make it yours.</span></strong><div className="snowtify-study-wave">{Array.from({ length: 21 }, (_, index) => <i key={index} style={{ height: `${16 + ((index * 13 + 9) % 43)}px` }} />)}</div></div>
                ) : (
                  <div className="rez-study"><Image src="/projects/rez-bot/logo.png" alt="" width={91} height={85} /><strong>Rez<span>A little company.</span></strong><span className="rez-study-label">A bot for your community</span></div>
                )}
              </div>
              <div className="spotlight-bottom"><div><strong>{project.name}</strong><span>{project.eyebrow}</span></div><ArrowUpRight aria-hidden="true" /></div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
