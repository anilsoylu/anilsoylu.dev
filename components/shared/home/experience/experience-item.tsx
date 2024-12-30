import { memo } from "react"
import AchievementList from "./achievement-list"
import { ExperienceItemProps } from "@/types/experience"

const ExperienceItem = memo(({ detail }: ExperienceItemProps) => (
  <article className="flex items-center flex-col flex-nowrap justify-center duration-1000 w-full group">
    <header className="flex justify-between items-start flex-nowrap w-full">
      <h3
        className="text-black text-sm md:text-lg font-bold leading-6 text-start uppercase 
                     transition-colors duration-200 group-hover:text-black/80"
      >
        {detail.title}
      </h3>
      <div className="flex flex-col justify-end items-end">
        <time className="text-xs font-bold text-right">{detail.date}</time>
        <p className="text-xs font-bold text-right">{detail.job}</p>
      </div>
    </header>

    <AchievementList achievements={detail.achievements} />
  </article>
))

ExperienceItem.displayName = "ExperienceItem"

export default ExperienceItem
