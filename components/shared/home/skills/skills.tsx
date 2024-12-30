import { memo } from "react"
import data from "@/data/data.json"
import SectionHeader from "./section-header"
import SkillList from "./skill-list"
import { SkillSection } from "@/types/skills"

const Skills = memo(() => {
  if (!data.Skills?.length) {
    return (
      <div className="text-gray-500 text-center py-4">
        No skills data available
      </div>
    )
  }

  return (
    <section className="skills-section">
      <SectionHeader />
      <div className="flex flex-col w-full mb-7">
        {data.Skills.map((detail: SkillSection, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row gap-7 flex-nowrap justify-center duration-300 w-full"
          >
            <SkillList title={data.DoesTitle} items={detail.does} />
            <SkillList title={data.UseTitle} items={detail.use} />
          </div>
        ))}
      </div>
    </section>
  )
})

Skills.displayName = "Skills"

export default Skills
