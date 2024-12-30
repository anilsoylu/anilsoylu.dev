import { Fragment, memo } from "react"
import { Separator } from "@/components/ui/separator"
import data from "@/data/data.json"

interface Achievement {
  achievements: string[]
  date: string
  job: string
  title: string
}

const SectionHeader = memo(() => (
  <section className="flex flex-col mb-7">
    <h2 className="text-2xl font-bold text-black uppercase mb-2.5">
      {data.ExperienceTitle}
    </h2>
    <div aria-hidden="true" className="flex flex-col gap-0.5">
      <div className="h-0.5 bg-black w-full" />
      <div className="h-1 bg-black w-full" />
    </div>
  </section>
))

SectionHeader.displayName = "SectionHeader"

const ExperienceItem = memo(({ detail }: { detail: Achievement }) => (
  <article className="flex items-center flex-col flex-nowrap justify-center duration-1000 w-full">
    <header className="flex justify-between items-start flex-nowrap w-full">
      <h3 className="text-black text-sm md:text-lg font-bold leading-6 text-start uppercase">
        {detail.title}
      </h3>
      <div className="flex flex-col justify-end items-end">
        <time className="text-xs font-bold text-right">{detail.date}</time>
        <p className="text-xs font-bold text-right">{detail.job}</p>
      </div>
    </header>

    <div className="flex flex-col gap-1.5 w-full text-black/60 text-sm mt-5 text-justify">
      {detail.achievements.map((achievement, idx) => (
        <Fragment key={idx}>
          <p>{achievement}</p>
          {idx !== detail.achievements.length - 1 && (
            <Separator className="my-3" />
          )}
        </Fragment>
      ))}
    </div>
  </article>
))

ExperienceItem.displayName = "ExperienceItem"

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
