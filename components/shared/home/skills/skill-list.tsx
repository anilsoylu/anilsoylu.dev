import { memo } from "react"
import ProgressBar from "@/components/shared/home/skills/progress-bar"
import { SkillListProps } from "@/types/skills"

const SkillList = memo(({ title, items }: SkillListProps) => (
  <div className="flex flex-col justify-start items-start flex-nowrap w-full mb-5">
    <h3 className="text-black text-lg font-bold h-auto mb-3.5 leading-6 uppercase">
      {title}
    </h3>
    <ul className="flex flex-col gap-3 w-full">
      {items.map((item) => (
        <li key={item.name} className="group">
          <div className="mb-1.5 flex justify-between items-center">
            <p className="text-lg font-bold text-black group-hover:scale-105 transition-transform duration-200">
              {item.name}
            </p>
            <span className="text-sm text-black/60 group-hover:text-black/80 transition-colors duration-200">
              {item.count}%
            </span>
          </div>
          <ProgressBar value={item.count} name={item.name} />
        </li>
      ))}
    </ul>
  </div>
))

SkillList.displayName = "SkillList"

export default SkillList
