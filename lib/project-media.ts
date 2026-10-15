import { existsSync } from "node:fs"
import path from "node:path"
import type { Project } from "@/lib/projects"

export type ProjectMedia = { src: string; title: string; caption: string; kind: "image" | "video" }

const shots: Record<string, { file: string; title: string; caption: string }[]> = {
  staroptimizer: [
    { file: "review", title: "Before a change", caption: "The action review screen, showing the setting and its explanation." },
    { file: "restore", title: "The recovery workflow", caption: "The supported change history and restore controls." },
  ],
  snowtify: [
    { file: "doctor", title: "Diagnosing a problem", caption: "The diagnostic command and its actual output." },
    { file: "repair", title: "The repair workflow", caption: "The repair command or update panel in use." },
  ],
  portfolio: [
    { file: "mobile", title: "On a smaller screen", caption: "The mobile layout and navigation." },
    { file: "projects", title: "The project stories", caption: "The work section and its case studies." },
  ],
  vibe: [{ file: "detail", title: "Inside the dashboard", caption: "A closer look at the dashboard." }],
  "rez-bot": [{ file: "commands", title: "Commands in use", caption: "A real command and its response." }],
  "py-mini-systems": [{ file: "inventory", title: "The inventory workflow", caption: "Creating, finding and updating a product from the terminal." }],
}

function publicFile(src: string) {
  return existsSync(path.join(process.cwd(), "public", src.slice(1)))
}

function findImage(base: string) {
  return ["webp", "png", "jpg", "jpeg"].map((extension) => base + "." + extension).find(publicFile)
}

export function getProjectCover(project: Project) {
  return findImage("/projects/" + project.slug + "/overview") || (project.image && publicFile(project.image) ? project.image : undefined)
}

export function getProjectMedia(project: Project): ProjectMedia[] {
  const base = "/projects/" + project.slug + "/"
  const images = (shots[project.slug] || []).flatMap((shot): ProjectMedia[] => {
    const src = findImage(base + shot.file)
    return src ? [{ src, title: shot.title, caption: shot.caption, kind: "image" }] : []
  })
  if (publicFile(base + "demo.mp4")) images.unshift({ src: base + "demo.mp4", title: "A short walkthrough", caption: "A recording of the actual project in use.", kind: "video" })
  return images
}
