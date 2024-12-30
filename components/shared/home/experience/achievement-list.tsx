import { Fragment, memo } from "react"
import { Separator } from "@/components/ui/separator"
import { AchievementListProps } from "@/types/experience"

const AchievementList = memo(({ achievements }: AchievementListProps) => (
  <div className="flex flex-col gap-1.5 w-full text-black/60 text-sm mt-5 text-justify">
    {achievements.map((achievement, idx) => (
      <Fragment key={idx}>
        <p className="transition-colors duration-200 hover:text-black/80">
          {achievement}
        </p>
        {idx !== achievements.length - 1 && <Separator className="my-3" />}
      </Fragment>
    ))}
  </div>
))

AchievementList.displayName = "AchievementList"

export default AchievementList
