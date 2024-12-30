import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import data from "@/data/data.json"

interface Education {
  name: string
  date: string
  cron: string
}

const SectionHeader = memo(() => (
  <section className="flex flex-col my-7">
    <h2 className="text-2xl font-bold text-black uppercase mb-2.5">
      {data.EducationTitle}
    </h2>
    <div aria-hidden="true" className="flex flex-col gap-0.5">
      <div className="h-0.5 bg-black w-full" />
      <div className="h-1 bg-black w-full" />
    </div>
  </section>
))

SectionHeader.displayName = "SectionHeader"

const EducationItem = memo(({ detail }: { detail: Education }) => (
  <article className="flex flex-col flex-nowrap justify-center duration-300 w-full group">
    <header className="flex justify-between items-start flex-nowrap w-full">
      <h3 className="text-black text-sm md:text-lg font-bold leading-6 text-start uppercase">
        {detail.name}
      </h3>
      <div className="flex flex-col justify-end items-end">
        <Badge
          variant="outline"
          className="border-black transition-colors group-hover:bg-black group-hover:text-white"
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
