import Link from "next/link"
import { langs, type Lang } from "@/lib/i18n"

/** ES / EN selector. `path` is the current path without the language prefix ("" on the home page). */
export default function LangSwitch({ lang, path = "", label }: { lang: Lang; path?: string; label: string }) {
  return (
    <div className="lang-switch" role="group" aria-label={label}>
      {langs.map((item) => item === lang
        ? <span key={item} aria-current="true">{item.toUpperCase()}</span>
        : <Link key={item} href={"/" + item + path} hrefLang={item} lang={item} aria-label={label}>{item.toUpperCase()}</Link>)}
    </div>
  )
}
