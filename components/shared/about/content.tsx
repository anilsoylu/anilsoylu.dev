import { memo } from "react"

interface AboutContentProps {
  content: string
  keywords?: string[]
}

const HighlightedText = memo(
  ({ text, keywords }: { text: string; keywords: string[] }) => {
    const words = text.split(/(\s+)/)

    return (
      <>
        {words.map((word, index) => {
          const cleanWord = word.replace(/[^a-zA-Z0-9.]/g, "")
          if (keywords.includes(cleanWord)) {
            return (
              <span
                key={index}
                className="font-bold transition-colors duration-200 hover:text-black/80"
              >
                {word}
              </span>
            )
          }
          return word
        })}
      </>
    )
  }
)

HighlightedText.displayName = "HighlightedText"

const AboutContent = memo(
  ({
    content,
    keywords = ["React", "Next.js", "React Native"], // Default keywords
  }: AboutContentProps) => {
    return (
      <div className="space-y-4">
        {content.split("\n").map((paragraph, index) => (
          <p key={index} className="text-base text-black/80 leading-relaxed">
            <HighlightedText text={paragraph} keywords={keywords} />
          </p>
        ))}
      </div>
    )
  }
)

AboutContent.displayName = "AboutContent"

export default AboutContent
