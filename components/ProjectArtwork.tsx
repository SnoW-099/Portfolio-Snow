import Image from "next/image"
import type { Project } from "@/lib/projects"

export default function ProjectArtwork({ project, priority = false }: { project: Project; priority?: boolean }) {
  if (project.image) {
    return <Image src={project.image} alt={`${project.name} interface`} width={1200} height={760} sizes="(max-width: 768px) 100vw, 60vw" priority={priority} />
  }

  return (
    <div className={`project-artwork artwork-${project.slug}`} aria-label={`${project.name}: ${project.eyebrow}`}>
      <span className="artwork-category">{project.eyebrow}</span>
      <div className="artwork-center">
        <span className="artwork-symbol" aria-hidden="true">{project.slug === "staroptimizer" ? "✳" : project.slug === "snowtify" ? "❄" : ">_"}</span>
        <strong>{project.name}</strong>
      </div>
      <div className="artwork-highlights">{project.highlights?.map(item => <span key={item}>{item}</span>)}</div>
    </div>
  )
}
