import { Braces, FolderCode, Package, UserRound } from "lucide-react"
import type { Lang } from "@/lib/i18n"

const text = {
  en: { label: "Python Mini Systems: inventory and user-management learning projects", store: "Products. Search. Discounts.", users: "Registration. Login. JSON.", footer: "Small systems. Real practice." },
  es: { label: "Python Mini Systems: proyectos de aprendizaje de inventario y gestión de usuarios", store: "Productos. Búsqueda. Descuentos.", users: "Registro. Inicio de sesión. JSON.", footer: "Sistemas pequeños. Práctica real." },
}

/** An editorial diagram of the two real projects, not a simulated app screenshot. */
export default function PythonArtwork({ lang }: { lang: Lang }) {
  const t = text[lang]
  return (
    <div className="python-study" role="img" aria-label={t.label}>
      <div className="python-study-heading"><span>Python Mini Systems</span><Braces aria-hidden="true" /></div>
      <div className="python-folders">
        <div className="python-folder python-folder-store">
          <span className="python-folder-tab" />
          <Package aria-hidden="true" />
          <strong>Mini Store</strong>
          <span>{t.store}</span>
        </div>
        <div className="python-folder python-folder-users">
          <span className="python-folder-tab" />
          <UserRound aria-hidden="true" />
          <strong>Mini Users</strong>
          <span>{t.users}</span>
        </div>
      </div>
      <div className="python-study-footer"><FolderCode aria-hidden="true" /><span>{t.footer}</span><span>.py</span></div>
    </div>
  )
}
