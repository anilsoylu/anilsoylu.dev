import { memo } from "react"
import { Progress } from "@/components/ui/progress"
import data from "@/data/data.json"

interface SkillItem {
  name: string
  count: number
}

interface SkillSection {
  does: SkillItem[]
  use: SkillItem[]
}

const SectionHeader = memo(() => (
  <section className="flex flex-col my-7">
    <h2 className="text-2xl font-bold text-black uppercase mb-2.5">
      {data.SkillsTitle}
    </h2>
    <div aria-hidden="true" className="flex flex-col gap-0.5">
      <div className="h-0.5 bg-black w-full" />
      <div className="h-1 bg-black w-full" />
    </div>
  </section>
))

SectionHeader.displayName = "SectionHeader"

const SkillList = memo(
  ({ title, items }: { title: string; items: SkillItem[] }) => (
    <div className="flex flex-col justify-start items-start flex-nowrap w-full mb-5">
      <h3 className="text-black text-lg font-bold h-auto mb-3.5 leading-6 uppercase">
        {title}
      </h3>
      <ul className="flex flex-col gap-3 w-full">
        {items.map((item) => (
          <li key={item.name}>
            <div className="mb-1.5 flex justify-between items-center">
              <p className="text-lg font-bold text-black">{item.name}</p>
              <span className="text-sm text-black/60">{item.count}%</span>
            </div>
            <Progress
              value={item.count}
              className="h-1 rounded-full transition-all duration-300 hover:h-1.5"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.1)",
              }}
              aria-label={`${item.name} skill level: ${item.count}%`}
            />
          </li>
        ))}
      </ul>
    </div>
  )
)

SkillList.displayName = "SkillList"

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
