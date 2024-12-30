import { memo } from "react"
import data from "@/data/data.json"
import SectionHeader from "./education/section-header"
import EducationItem from "./education/education-item"

const Education = memo(() => {
  if (!data.Education?.length) {
    return (
      <div className="text-gray-500 text-center py-4">
        No education data available
      </div>
    )
  }

  return (
    <section className="education-section">
      <SectionHeader />
      <div className="flex flex-col gap-7 w-full">
        {data.Education.map((detail) => (
          <EducationItem key={detail.name} detail={detail} />
        ))}
      </div>
    </section>
  )
})

Education.displayName = "Education"

export default Education
