import { GitFork, Star } from "lucide-react"
import type { Dictionary, Lang } from "@/lib/i18n"

type Repo = { stargazers_count: number; forks_count: number; pushed_at: string }

/**
 * Live numbers from the public GitHub API, refreshed once a day. If the request fails, nothing is shown.
 * Zero stars or forks are hidden: only the last update is always real news.
 */
export default async function GithubStats({ repoUrl, lang, t }: { repoUrl: string; lang: Lang; t: Dictionary["caseStudy"]["github"] }) {
  const match = repoUrl.match(/^https:\/\/github\.com\/([\w.-]+)\/([\w.-]+)/)
  if (!match) return null
  let repo: Repo
  try {
    const response = await fetch(`https://api.github.com/repos/${match[1]}/${match[2]}`, { headers: { Accept: "application/vnd.github+json" }, next: { revalidate: 86400 } })
    if (!response.ok) return null
    repo = await response.json()
  } catch {
    return null
  }
  const updated = new Date(repo.pushed_at)
  if (Number.isNaN(updated.getTime())) return null

  return (
    <div>
      <span>{t.label}</span>
      <strong className="github-stats">
        {repo.stargazers_count > 0 && <span><Star aria-hidden="true" /> {repo.stargazers_count} {t.stars}</span>}
        {repo.forks_count > 0 && <span><GitFork aria-hidden="true" /> {repo.forks_count} {t.forks}</span>}
        <span>{t.updated} <time dateTime={repo.pushed_at}>{updated.toLocaleDateString(lang, { year: "numeric", month: "short", timeZone: "UTC" })}</time></span>
      </strong>
    </div>
  )
}
