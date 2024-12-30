import { HobbyContentProps } from "@/types/hobby"
import { memo } from "react"

const HobbyContent = memo(({ content }: HobbyContentProps) => (
  <p
    className="text-black/60 mb-7 text-sm font-normal duration-300 leading-relaxed
              hover:text-black/80 transition-colors"
  >
    {content}
  </p>
))

HobbyContent.displayName = "HobbyContent"

export default HobbyContent
