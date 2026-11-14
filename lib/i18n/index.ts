import { en } from "./en"
import { es } from "./es"

export const langs = ["en", "es"] as const
export type Lang = (typeof langs)[number]
export const siteUrl = "https://portfolio-snow.netlify.app"

/** A text written once in both languages, next to each other, in the data files of lib/. */
export type L<T = string> = { en: T; es: T }

/** The same data with every `{ en, es }` pair replaced by one language. */
export type Resolved<T> = T extends L<infer U> ? U : T extends (infer A)[] ? Resolved<A>[] : T extends object ? { [K in keyof T]: Resolved<T[K]> } : T

function isPair(value: object): value is L<unknown> {
  const keys = Object.keys(value)
  return keys.length === 2 && "en" in value && "es" in value
}

export function localize<T>(value: T, lang: Lang): Resolved<T> {
  if (Array.isArray(value)) return value.map((item) => localize(item, lang)) as Resolved<T>
  if (value && typeof value === "object") {
    if (isPair(value)) return value[lang] as Resolved<T>
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, localize(item, lang)])) as Resolved<T>
  }
  return value as Resolved<T>
}

export type Dictionary = typeof en
const dictionaries: Record<Lang, Dictionary> = { en, es }

export function isLang(value: string): value is Lang {
  return (langs as readonly string[]).includes(value)
}

export function getDictionary(lang: Lang) {
  return dictionaries[lang]
}

/** Canonical + hreflang for a path without the language prefix ("" for the home page). */
export function alternates(lang: Lang, path = "") {
  return {
    canonical: "/" + lang + path,
    languages: { en: "/en" + path, es: "/es" + path, "x-default": "/en" + path },
  }
}
