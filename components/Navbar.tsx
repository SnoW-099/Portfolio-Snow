"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { House, Folders, Mail } from "lucide-react"

const items = [
  { label: "Home",     href: "/",        icon: House   },
  { label: "Projects", href: "/projects", icon: Folders },
  { label: "Contact",  href: "mailto:ryze0950@gmail.com", icon: Mail, external: true },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <motion.div
      className="fixed bottom-7 inset-x-0 z-50 flex justify-center pointer-events-none"
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0,   opacity: 1 }}
      transition={{ delay: 2.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="pointer-events-auto flex items-center gap-1 p-2 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/60">
        {items.map((item) => {
          const isActive = !item.external && pathname === item.href
          const Tag = item.external ? "a" : Link

          return (
            <Tag
              key={item.href}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              data-cursor-hover
            >
              <motion.div
                whileHover={{ scale: 1.25, y: -5 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                className={`relative flex flex-col items-center gap-1.5 px-4 py-2.5 rounded-xl transition-colors ${
                  isActive
                    ? "bg-white/8 text-white"
                    : "text-white/50 hover:text-white/80"
                }`}
              >
                <item.icon className="w-[18px] h-[18px]" />
                <span className="text-[10px] font-medium tracking-wide leading-none">
                  {item.label}
                </span>
                {}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-200" />
                )}
              </motion.div>
            </Tag>
          )
        })}
      </nav>
    </motion.div>
  )
}
