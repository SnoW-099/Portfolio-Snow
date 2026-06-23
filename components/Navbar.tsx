"use client"

import { motion } from "framer-motion"
import { Folders, House, Mail, User, Wrench } from "lucide-react"
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
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <motion.div
      className="fixed bottom-4 inset-x-0 z-50 flex justify-center px-3 pointer-events-none md:bottom-7"
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <nav className="pointer-events-auto flex max-w-full items-center gap-1 overflow-x-auto rounded-2xl border border-white/12 bg-black/45 p-1.5 shadow-2xl shadow-black/70 backdrop-blur-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => (
          <Magnetic key={item.href}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              data-cursor-hover
              aria-label={item.label}
            >
              <motion.div
                whileHover={{ scale: 1.25 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 500, damping: 28 }}
                className="relative flex min-w-[58px] flex-col items-center gap-1.5 rounded-xl px-3 py-2.5 text-white/55 transition-colors hover:bg-white/[0.06] hover:text-white/85 md:min-w-[70px] md:px-4"
              >
                <item.icon className="h-[18px] w-[18px]" />
                <span className="text-[10px] font-medium leading-none tracking-wide">
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
