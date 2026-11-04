import type { MetadataRoute } from "next"
import { visibleProjects } from "@/lib/projects"

const siteUrl = "https://portfolio-snow.netlify.app"

export default function sitemap(): MetadataRoute.Sitemap {
  const publicProjectUrls = visibleProjects
    .filter((project) => project.visibility !== "private")
    .map((project) => ({
      url: `${siteUrl}/projects/${project.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/projects`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...publicProjectUrls,
  ]
}
