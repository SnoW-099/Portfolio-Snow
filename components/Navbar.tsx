"use client";

import React, { useState, useEffect } from "react";
import { Home, ExternalLink, User, MessageCircle, Code2 } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Projects", href: "/projects", icon: Code2 },
    ];

    return (
        <div className="fixed top-4 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
            <nav
                className={cn(
                    "pointer-events-auto flex items-center gap-2 p-2 rounded-2xl transition-all duration-300",
                    scrolled
                        ? "bg-background/40 backdrop-blur-xl border border-white/10 shadow-lg shadow-black/20"
                        : "bg-transparent border border-transparent"
                )}
            >
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2",
                                isActive
                                    ? "text-foreground"
                                    : "text-muted-foreground hover:text-foreground"
                            )}
                        >
                            {isActive && (
                                <span className="absolute inset-0 bg-white/5 border border-white/5 rounded-xl z-0" />
                            )}
                            <item.icon className="w-4 h-4 relative z-10" />
                            <span className="relative z-10 hidden sm:inline-block">{item.name}</span>
                        </Link>
                    );
                })}

                <div className="w-px h-6 bg-white/10 mx-2 hidden sm:block"></div>

                <a
                    href="mailto:contact@angel.dev"
                    className="group relative px-4 py-2 rounded-xl text-sm font-medium text-foreground transition-all duration-300 flex items-center gap-2 hover:bg-white/5"
                >
                    <MessageCircle className="w-4 h-4" />
                    <span className="hidden sm:inline-block">Contact</span>
                </a>
            </nav>
        </div>
    );
}
