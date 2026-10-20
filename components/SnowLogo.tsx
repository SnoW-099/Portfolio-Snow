import Image from "next/image"

/** Snow's original artwork; adjacent text supplies the accessible name. */
export default function SnowLogo({ size = 40, priority = false }: { size?: number; priority?: boolean }) {
  return <Image className="snow-logo" src="/logo.jpg" alt="" width={size} height={size} priority={priority} />
}
