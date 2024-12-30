import { HighlightedTextProps } from "@/types/about"
import { memo } from "react"

const HighlightedText = memo(({ text, keywords }: HighlightedTextProps) => {
  const words = text.split(/(\s+)/)

  return (
    <>
      {words.map((word, index) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9.]/g, "")
        if (keywords.includes(cleanWord)) {
          return (
            <span
              key={`${cleanWord}-${index}`}
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
})

HighlightedText.displayName = "HighlightedText"

export default HighlightedText
