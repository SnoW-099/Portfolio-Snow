import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import SnowDevMark from "@/components/SnowDevMark"
import LangSwitch from "@/components/LangSwitch"
import type { Lang } from "@/lib/i18n"

/** Header of the archive and the case studies: a way back, the language selector and the brand. */
export default function SubNav({ lang, path, back, backLabel, switchLabel }: { lang: Lang; path: string; back: string; backLabel: string; switchLabel: string }) {
  return (
    <header className="subnav shell">
      <Link href={back} className="back-link"><ArrowLeft aria-hidden="true" /> {backLabel}</Link>
      <LangSwitch lang={lang} path={path} label={switchLabel} />
      <Link href={"/" + lang} className="subnav-brand"><SnowDevMark size={28} /> Snow Dev<span>.</span></Link>
    </header>
  )
}
