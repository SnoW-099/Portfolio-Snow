import Image from "next/image"
import { ArrowUpRight, Code2, Monitor, Snowflake, Sparkles } from "lucide-react"
import type { Project } from "@/lib/projects"
import { getProjectCover } from "@/lib/project-media"

export default function ProjectArtwork({ project, priority = false }: { project: Project; priority?: boolean }) {
  const cover = getProjectCover(project)
  if (cover) {
    return (
      <div className={"project-capture capture-" + project.slug}>
        <div className="capture-chrome" aria-hidden="true"><span /><span /><span /><small>{project.name}</small></div>
        <Image className="capture-image" src={cover} alt={project.name + " — actual project screenshot"} width={1600} height={1000} sizes="(max-width: 700px) calc(100vw - 64px), (max-width: 1200px) 52vw, 620px" priority={priority} />
      </div>
    )
  }
  const Icon = project.slug === "snowtify" ? Snowflake : project.slug === "staroptimizer" ? Sparkles : project.slug === "portfolio" ? Monitor : Code2
  return (
    <div className={"project-artwork artwork-" + project.slug} aria-label={project.name + ": project overview"}>
      <div className="artwork-top"><span className="artwork-category">{project.eyebrow}</span><ArrowUpRight aria-hidden="true" /></div>
      <div className="artwork-center"><span className="artwork-symbol"><Icon aria-hidden="true" /></span><strong>{project.name}</strong></div>
      <div className="artwork-bottom"><div className="artwork-highlights">{project.highlights?.map((item) => <span key={item}>{item}</span>)}</div><small>Project overview</small></div>
    </div>
  )
}
