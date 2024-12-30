import { memo } from "react"
import data from "@/data/data.json"
import SectionHeader from "@/components/shared/home/hobby/section-header"
import HobbyContent from "@/components/shared/home/hobby/hobby-content"
import HobbyBadges from "@/components/shared/home/hobby/hobby-badges"

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
