import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import data from "@/data/data.json"

const Education = memo(() => {
  return (
    <>
      <section className="flex flex-col my-7">
        <h2 className="text-2xl font-bold text-black uppercase mb-2.5">
          {data.EducationTitle}
        </h2>
        <div className="h-0.5 bg-black w-full" />
        <div className="h-1 bg-black w-full mt-0.5" />
      </section>
      <div className="flex flex-col gap-7 w-full">
        {data.Education.map((detail) => (
          <div
            key={detail.name}
            className="flex flex-col flex-nowrap justify-center duration-300 w-full"
          >
            <div className="flex justify-between items-start flex-nowrap w-full">
              <p className="text-black text-sm md:text-lg font-bold h-auto leading-6 text-start w-auto justify-center uppercase">
                {detail.name}
              </p>
              <div className="flex flex-col justify-end items-end">
                <Badge
                  variant="outline"
                  className="border-black"
                  aria-label={`Education date: ${detail.date}`}
                >
                  {detail.date}
                </Badge>
              </div>
            </div>
            <p className="prose mt-5 font-normal text-black text-opacity-60">
              {detail.cron}
            </p>
          </div>
        ))}
      </div>
    </>
  )
})

Education.displayName = "Education"

export default Education
