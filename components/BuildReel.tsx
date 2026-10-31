"use client"

import { useState, type CSSProperties } from "react"
import { Check, Pause, Play } from "lucide-react"

const v = (vars: Record<string, string | number>) => vars as CSSProperties

// Typed line by line in the Develop scene; `kw` is highlighted, --n is the line length in characters.
const code = [
  { kw: "export function", rest: " Dashboard() {" },
  { kw: "  const", rest: " data = useStats()" },
  { kw: "  return", rest: " <Chart data={data} />" },
  { kw: "", rest: "}" },
]

/**
 * 12-second CSS loop in three wiped scenes: DESIGN (an interface takes shape and gets clicked),
 * DEVELOP (code types itself next to the tool it builds), CONNECT (a form reaches an inbox through an automation).
 * Pausable; shown as three static panels under reduced motion.
 */
export default function BuildReel() {
  const [paused, setPaused] = useState(false)

  return (
    <figure className="reel" data-paused={paused} aria-labelledby="reel-caption">
      <div className="reel-stage" aria-hidden="true">
        <div className="reel-scene reel-design" style={v({ "--d": "0s" })}>
          <div className="r-window">
            <div className="r-bar-top r-anim" style={v({ "--i": 0 })}><i /><i /><i /><span>Snow Dev</span></div>
            <div className="r-hero r-anim" style={v({ "--i": 1 })}>
              <b /><b /><em />
              <svg className="r-cursor" viewBox="0 0 24 24"><path d="M5 3l14 8-6 2-2 6z" /></svg>
            </div>
            <div className="r-cards">{[2, 3, 4].map((i) => <div className="r-card r-anim" key={i} style={v({ "--i": i })} />)}</div>
          </div>
          <span className="r-tag">Interfaces &amp; websites</span>
        </div>

        <div className="reel-scene reel-develop" style={v({ "--d": "4s" })}>
          <div className="r-code">
            {code.map((line, i) => <span className="r-type" key={i} style={v({ "--n": line.kw.length + line.rest.length, "--i": i })}><b>{line.kw}</b>{line.rest}</span>)}
          </div>
          <div className="r-app">
            <div className="r-app-head r-anim" style={v({ "--i": 2 })}><span>Dashboard</span><i /></div>
            <div className="r-chart">{[40, 70, 55, 90, 65].map((h, i) => <span className="r-col r-anim" key={i} style={v({ "--h": h + "%", "--i": i + 4 })} />)}</div>
          </div>
          <span className="r-tag">Applications &amp; tools</span>
        </div>

        <div className="reel-scene reel-connect" style={v({ "--d": "8s" })}>
          <div className="r-flow">
            <span className="r-node r-anim" style={v({ "--i": 0 })}>Form</span>
            <span className="r-link r-anim" style={v({ "--i": 1 })}><i className="r-pulse" /></span>
            <span className="r-node r-anim" style={v({ "--i": 2 })}>Automation</span>
            <span className="r-link r-anim" style={v({ "--i": 3 })}><i className="r-pulse" style={v({ "--p": "0.9s" })} /></span>
            <span className="r-node r-anim" style={v({ "--i": 4 })}>Inbox</span>
          </div>
          <span className="r-toast"><Check /> New proposal received</span>
          <span className="r-tag">Automations &amp; integrations</span>
        </div>
      </div>

      <figcaption className="reel-caption">
        <span id="reel-caption" className="sr-only">Animation: Snow Dev designs interfaces, develops applications and connects tools with automations.</span>
        <ol className="reel-steps">
          {[["Design", "0s"], ["Develop", "4s"], ["Connect", "8s"]].map(([label, d], i) => (
            <li key={label} style={v({ "--d": d })}><span className="index">0{i + 1}</span> {label}<i className="reel-progress" aria-hidden="true" /></li>
          ))}
        </ol>
        <button type="button" className="reel-toggle" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Play animation" : "Pause animation"}>
          {paused ? <Play aria-hidden="true" /> : <Pause aria-hidden="true" />}
        </button>
      </figcaption>
    </figure>
  )
}
