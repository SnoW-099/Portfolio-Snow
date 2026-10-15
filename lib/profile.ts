export const primaryStack = ["Python", "HTML", "CSS"]

export const skillGroups = [
  {
    id: "projects",
    title: "Used in projects",
    label: "Public work",
    description: "My foundation: small Python systems and web interfaces. The repositories show what I have built.",
    iconIds: "python,html,css,git",
    items: [...primaryStack, "Git", "JSON"],
    evidence: [{ label: "Python projects", href: "/projects/py-mini-systems" }, { label: "Rez Bot", href: "/projects/rez-bot" }],
  },
  {
    id: "familiar",
    title: "Familiar with",
    label: "Private work",
    description: "I have used Supabase and MongoDB in private projects. There is no public demo of that work here yet.",
    iconIds: "supabase,mongodb",
    items: ["Supabase", "MongoDB"],
    evidence: [],
  },
  {
    id: "learning",
    title: "Learning with AI",
    label: "In progress",
    description: "Used in StarOptimizer and this portfolio with AI assistance. I am still developing my independent skills in this stack.",
    iconIds: "js,ts,react,nextjs,electron",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Electron"],
    evidence: [{ label: "How this site was built", href: "/projects/portfolio" }],
  },
]
