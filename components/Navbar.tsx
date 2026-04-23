"use client"

import { motion } from "framer-motion"
import { House, User, Wrench, Folders, Mail } from "lucide-react"
import Magnetic from "./Magnetic"

const items = [
  { label: "Home", href: "#hero", icon: House },
  { label: "About", href: "#about", icon: User },
  { label: "Skills", href: "#skills", icon: Wrench },
  { label: "Projects", href: "#projects", icon: Folders },
  { label: "Contact", href: "#contact", icon: Mail },
]

export function Navbar() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.div
      className="fixed bottom-7 inset-x-0 z-50 flex justify-center pointer-events-none"
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="pointer-events-auto flex items-center gap-1 p-2 rounded-2xl bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/60">
        {items.map((item) => (
          <Magnetic key={item.href}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              data-cursor-hover
            >
              <motion.div
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                className="relative flex flex-col items-center gap-1.5 px-4 py-2.5 rounded-xl transition-colors text-white/50 hover:text-white/80"
              >
                <item.icon className="w-[18px] h-[18px]" />
                <span className="text-[10px] font-medium tracking-wide leading-none">
                  {item.label}
                </span>
              </motion.div>
            </a>
          </Magnetic>
        ))}
      </nav>
    </motion.div>
  )
}
