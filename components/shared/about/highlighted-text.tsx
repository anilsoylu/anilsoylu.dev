import { HighlightedTextProps } from "@/types/about"
import { memo, useMemo } from "react"

const HighlightedText = memo(({ text, keywords }: HighlightedTextProps) => {
  const segments = useMemo(() => {
    const sortedKeywords = [...keywords].sort((a, b) => b.length - a.length)
    let result = [{ text, isHighlighted: false }]

    sortedKeywords.forEach((keyword) => {
      result = result.flatMap((segment) => {
        if (segment.isHighlighted) return [segment]

        const parts = segment.text.split(new RegExp(`(${keyword})`, "i"))
        return parts.map((part) => ({
          text: part,
          isHighlighted: part.toLowerCase() === keyword.toLowerCase(),
        }))
      })
    })

    return result
  }, [text, keywords])

  return (
    <>
      {segments.map((segment, index) =>
        segment.isHighlighted ? (
          <span
            key={`highlighted-${index}`}
            className="font-bold transition-colors duration-200 hover:text-black/80"
          >
            {segment.text}
          </span>
        ) : (
          segment.text
        )
      )}
    </>
  )
})

HighlightedText.displayName = "HighlightedText"

export default HighlightedText
