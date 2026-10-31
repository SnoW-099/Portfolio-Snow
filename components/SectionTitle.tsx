/** Section heading in two lines (second one muted). Each line rises into view with scroll (CSS only). */
export default function SectionTitle({ id, a, b, className = "" }: { id: string; a: string; b: string; className?: string }) {
  return (
    <h2 id={id} className={"section-title " + className}>
      <span className="line"><span>{a}</span></span>
      <span className="line line-muted"><span>{b}</span></span>
    </h2>
  )
}
