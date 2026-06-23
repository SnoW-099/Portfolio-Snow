"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Copy, Check } from "lucide-react"
import { DialogClose } from "@/components/ui/dialog"


const highlightCode = (code: string) => {
    const keywords = ["const", "let", "var", "function", "return", "if", "else", "import", "export", "from", "default", "async", "await", "try", "catch", "interface", "type", "class", "extends", "implements", "true", "false", "null", "undefined"]
    const globals = ["console", "window", "document", "fetch", "Promise", "JSON", "Math", "Object", "Array", "String", "Number", "Boolean"]

    return code.split(/(\s+|[()[\].,;="'#])/g).map((token, i) => {
        if (keywords.includes(token)) return <span key={i} className="text-purple-400">{token}</span>
        if (globals.includes(token)) return <span key={i} className="text-blue-400">{token}</span>
        if (!isNaN(Number(token))) return <span key={i} className="text-orange-400">{token}</span>
        if (token.startsWith('"') || token.startsWith("'") || token.startsWith("`")) return <span key={i} className="text-green-400">{token}</span>
        if (token.match(/^[A-Z]\w+$/)) return <span key={i} className="text-yellow-200">{token}</span>
        return <span key={i} className="text-[#e6edf3]">{token}</span>
    })
}

const snippets = [
    {
        title: "useLocalStorage.ts",
        desc: "Custom React hook for persistent state management.",
        code: `import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}`
    },
    {
        title: "AuthMiddleware.ts",
        desc: "Robust JWT validation for backend routes.",
        code: `import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function middleware(req: NextRequest) {
  const token = req.headers.get('Authorization')?.split(' ')[1];

  if (!token) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const decoded = await verifyToken(token);
    (req as any).user = decoded;
    return NextResponse.next();
  } catch (error) {
    return NextResponse.json({ error: 'Invalid Token' }, { status: 403 });
  }
}`
    },
    {
        title: "PortfolioData.ts",
        desc: "Strictly typed interface for project data.",
        code: `interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

const projects: Project[] = [
  {
    id: "rez-bot",
    title: "Rez Bot",
    description: "Multipurpose Discord bot.",
    tags: ["Python", "Discord.py", "MongoDB"],
    links: {
      github: "https://github.com/SnoW-099/Rez"
    }
  }
];

export type { Project };
export { projects };`
    }
]

export function SnippetCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [copied, setCopied] = useState(false)

    const nextSnippet = () => {
        setCurrentIndex((prev) => (prev + 1) % snippets.length)
        setCopied(false)
    }

    const prevSnippet = () => {
        setCurrentIndex((prev) => (prev - 1 + snippets.length) % snippets.length)
        setCopied(false)
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(snippets[currentIndex].code)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="relative w-full overflow-hidden rounded-xl bg-[#0d1117] border border-white/10 shadow-2xl font-mono text-sm group">
            
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-[#161b22]">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5 group-hover:opacity-100 transition-opacity">
                        
                        <DialogClose asChild>
                            <button className="w-3 h-3 rounded-full bg-[#ff5f56] hover:bg-[#ff5f56]/80 flex items-center justify-center group/close cursor-pointer">
                                <span className="opacity-0 group-hover/close:opacity-100 text-[8px] text-black/50 font-bold leading-none">x</span>
                            </button>
                        </DialogClose>
                        <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                        <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                    </div>
                    <span className="text-xs text-[#8b949e] ml-2 truncate font-semibold opacity-70">
                        {snippets[currentIndex].title}
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        onClick={handleCopy}
                        className="p-1.5 rounded-md hover:bg-white/10 transition-colors text-[#8b949e] hover:text-white"
                        title="Copy to clipboard"
                    >
                        {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                </div>
            </div>

            
            <div className="relative p-0 bg-[#0d1117] min-h-[320px] max-h-[400px] flex flex-col group/code">
                
                <div className="absolute inset-0 overflow-auto p-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                    <pre className="text-[13px] leading-6 tab-4 font-normal">
                        <code>
                            {highlightCode(snippets[currentIndex].code)}
                        </code>
                    </pre>
                </div>

                
                <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#0d1117] to-transparent pointer-events-none"></div>
            </div>

            
            <div className="px-4 py-3 border-t border-white/5 bg-[#161b22] flex items-center justify-between">
                <div className="text-[11px] text-[#8b949e] w-2/3 truncate">
                    {snippets[currentIndex].desc}
                </div>

                <div className="flex items-center gap-1">
                    <button onClick={prevSnippet} className="p-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-[#c9d1d9]">
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-[10px] text-[#8b949e] font-mono px-2 select-none">
                        {currentIndex + 1}/{snippets.length}
                    </span>
                    <button onClick={nextSnippet} className="p-1.5 rounded bg-white/5 hover:bg-white/10 border border-white/5 transition-colors text-[#c9d1d9]">
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    )
}
