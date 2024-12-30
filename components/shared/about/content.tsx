import { memo } from "react"
import HighlightedText from "./highlighted-text"
import { AboutContentProps } from "@/types/about"

const defaultKeywords = ["React Native", "React", "Next.js"]

const AboutContent = memo(
  ({ content, keywords = defaultKeywords }: AboutContentProps) => {
    return (
      <div className="space-y-4">
        {content.split("\n").map((paragraph, index) => (
          <p
            key={`paragraph-${index}`}
            className="text-base text-black/80 leading-relaxed"
          >
            <HighlightedText text={paragraph} keywords={keywords} />
          </p>
        ))}
      </div>
    )
  }
)

AboutContent.displayName = "AboutContent"

export default AboutContent
