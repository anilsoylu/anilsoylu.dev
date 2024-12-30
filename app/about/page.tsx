import { memo } from "react"
import data from "@/data/data.json"

export async function generateMetadata() {
  return {
    title: "About Me",
  }
}

const boldKeywords = ["React", "Next.js", "React Native"]

const formatContent = (content: string) => {
  return content.split(" ").map((word, index) => {
    const cleanWord = word.replace(/[^a-zA-Z0-9.]/g, "") // Noktalama işaretlerini temizle
    if (boldKeywords.includes(cleanWord)) {
      return (
        <span key={index} className="font-bold">
          {word}{" "}
        </span>
      )
    }
    return <span key={index}>{word} </span>
  })
}

const AboutPage = memo(() => {
  return (
    <>
      <div className="flex flex-col mb-7">
        <p className="justify-end text-2xl font-bold text-black uppercase flex mb-2.5">
          {data.AboutPage.title}
        </p>
        <div className="h-0.5 bg-black w-full" />
        <div className="h-1 bg-black w-full mt-0.5" />
      </div>

      <p className="text-base text-black text-opacity-80 leading-relaxed">
        {data.AboutPage.content.split("\n").map((paragraph, index) => (
          <span key={index}>{formatContent(paragraph)}</span>
        ))}
      </p>
    </>
  )
})

AboutPage.displayName = "AboutPage"

export default AboutPage
