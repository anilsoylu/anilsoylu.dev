import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { EducationItemProps } from "@/types/education"

const EducationItem = memo(({ detail }: EducationItemProps) => (
  <article className="flex flex-col flex-nowrap justify-center duration-300 w-full group">
    <header className="flex justify-between items-start flex-nowrap w-full">
      <h3 className="text-black text-sm md:text-lg font-bold leading-6 text-start uppercase">
        {detail.name}
      </h3>
      <div className="flex flex-col justify-end items-end">
        <Badge
          variant="outline"
          className="border-black transition-colors duration-200 
                   group-hover:bg-black group-hover:text-white"
          aria-label={`Education period: ${detail.date}`}
        >
          {detail.date}
        </Badge>
      </div>
    </header>
    <p className="prose mt-5 font-normal text-black/60 leading-relaxed">
      {detail.cron}
    </p>
  </article>
))

EducationItem.displayName = "EducationItem"

export default EducationItem
