"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function NotFound() {
    const containerRef = useRef<HTMLDivElement>(null)
    const textRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        document.documentElement.classList.add("dark")

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 3 })

            if (textRef.current) {
                tl.to(textRef.current, {
                    x: () => Math.random() * 10 - 5,
                    y: () => Math.random() * 10 - 5,
                    skewX: () => Math.random() * 20 - 10,
                    opacity: 0.8,
                    duration: 0.1,
                    ease: "rough({ template: none.out, strength: 1, points: 20, taper: none, randomize: true, clamp: false })"
                })
                    .to(textRef.current, {
                        x: 0,
                        y: 0,
                        skewX: 0,
                        opacity: 1,
                        duration: 0.1
                    })
            }
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-[#050505] flex flex-col items-center justify-center relative overflow-hidden"
        >
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-noise opacity-[0.4] bg-repeat z-10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-[150px] animate-blob" />
            </div>

            <div className="relative z-10 text-center px-4 flex flex-col items-center">
                <div ref={textRef} className="relative">
                    <h1 className="text-[10rem] md:text-[15rem] font-black text-white/10 leading-none tracking-tighter select-none mix-blend-screen">
                        404
                    </h1>
                    <h1 className="absolute inset-0 text-[10rem] md:text-[15rem] font-black text-white/5 leading-none tracking-tighter select-none blur-[2px] animate-pulse">
                        404
                    </h1>
                </div>

                <div className="mt-8 mb-12 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
                        Lost in the void.
                    </h2>
                    <p className="text-white/40 max-w-md mx-auto">
                        The page you're looking for has been moved, deleted, or never existed in the first place.
                    </p>
                </div>

                <Link
                    href="/"
                    className="group relative px-6 py-3 rounded-full bg-white/5 border border-white/10 overflow-hidden"
                >
                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                    <span className="relative z-10 text-white/70 group-hover:text-white font-medium text-sm transition-colors duration-300">
                        Return Home
                    </span>
                </Link>
            </div>
        </div>
    )
}
