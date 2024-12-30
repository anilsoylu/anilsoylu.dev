import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import data from "@/data/data.json"

const SectionHeader = memo(() => (
  <section className="flex flex-col my-7">
    <h2 className="text-2xl font-bold text-black uppercase mb-2.5">
      {data.HobbyTitle}
    </h2>
    <div aria-hidden="true" className="flex flex-col gap-0.5">
      <div className="h-0.5 bg-black w-full" />
      <div className="h-1 bg-black w-full" />
    </div>
  </section>
))

SectionHeader.displayName = "SectionHeader"

const HobbyContent = memo(({ content }: { content: string }) => (
  <p className="text-black/60 mb-7 text-sm font-normal duration-300 leading-relaxed">
    {content}
  </p>
))

HobbyContent.displayName = "HobbyContent"

const HobbyBadges = memo(({ hobbies }: { hobbies: string[] }) => (
  <div
    className="flex items-start flex-row flex-wrap gap-2 -translate-x-1.5 duration-300"
    role="list"
    aria-label="List of hobbies"
  >
    {hobbies.map((hobby, idx) => (
      <Badge
        key={`${hobby}-${idx}`}
        variant="outline"
        className="border-black hover:bg-black hover:text-white transition-colors duration-200 
                 text-xs font-bold uppercase group"
        role="listitem"
      >
        <span className="group-hover:scale-105 duration-200 inline-block">
          {hobby}
        </span>
      </Badge>
    ))}
  </div>
))

HobbyBadges.displayName = "HobbyBadges"

const Hobby = memo(() => {
  if (!data.Hobby?.hobbies?.length) {
    return (
      <div className="text-gray-500 text-center py-4">
        No hobby data available
      </div>
    )
  }

  return (
    <section className="hobby-section">
      <SectionHeader />
      <div className="flex flex-col w-full mb-7">
        <HobbyContent content={data.Hobby.content} />
        <HobbyBadges hobbies={data.Hobby.hobbies} />
      </div>
    </section>
  )
})

Hobby.displayName = "Hobby"

export default Hobby
