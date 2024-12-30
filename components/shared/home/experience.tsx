import { memo } from "react"
import data from "@/data/data.json"
import SectionHeader from "@/components/shared/home/experience/section-header"
import ExperienceItem from "@/components/shared/home/experience/experience-item"

const Experience = memo(() => {
  if (!data.Experience?.length) {
    return (
      <div className="text-gray-500 text-center py-4">
        No experience data available
      </div>
    )
  }

  return (
    <section className="experience-section">
      <SectionHeader />
      <div className="flex flex-col gap-7 w-full">
        {data.Experience.map((detail, index) => (
          <ExperienceItem key={`${detail.title}-${index}`} detail={detail} />
        ))}
      </div>
    </section>
  )
})

Experience.displayName = "Experience"

export default Experience
