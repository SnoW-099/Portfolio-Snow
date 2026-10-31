import Image from "next/image"

/** Snow Dev mark: the cat. Decorative, so the wordmark beside it names the brand. */
export default function SnowDevMark({ size = 30 }: { size?: number }) {
  return <Image className="snow-dev-mark" src="/brand/snow-dev-logo.png" alt="" width={size} height={size} />
}
