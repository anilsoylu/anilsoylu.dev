import { Fragment, memo } from "react"
import { Separator } from "@/components/ui/separator"
import data from "@/data/data.json"

const Experience = memo(() => {
  return (
    <>
      <section className="flex flex-col mb-7">
        <h2 className="text-2xl font-bold text-black uppercase mb-2.5">
          {data.ExperienceTitle}
        </h2>
        <div className="h-0.5 bg-black w-full" />
        <div className="h-1 bg-black w-full mt-0.5" />
      </section>
      <div className="flex flex-col gap-7 w-full">
        {data.Experience.map((detail, index) => (
          <div
            key={index}
            className="flex items-center flex-col flex-nowrap justify-center duration-1000 w-full"
          >
            <div className="flex justify-between items-start flex-nowrap w-full">
              <p className="text-black text-sm md:text-lg font-bold h-auto leading-6 text-start w-auto justify-center uppercase">
                {detail.title}
              </p>
              <div className="flex flex-col justify-end items-end">
                <p className="text-xs font-bold text-right">{detail.date}</p>
                <p className="text-xs font-bold text-right">{detail.job}</p>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 w-full text-black text-opacity-60 text-sm font-normal mt-5 text-justify">
              {detail.achievements.map((achievement, idx) => (
                <Fragment key={idx}>
                  <div>{achievement}</div>
                  {idx !== detail.achievements.length - 1 && (
                    <Separator className="my-3" />
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  )
})

Experience.displayName = "Experience"

export default Experience
