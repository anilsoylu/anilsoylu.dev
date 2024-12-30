import { Badge } from "@/components/ui/badge"
import data from "@/data/data.json"

const Education = () => {
  return (
    <>
      <div className="flex flex-col mb-7">
        <p className="justify-end text-2xl font-bold text-black uppercase flex mb-2.5">
          {data.EducationTitle}
        </p>
        <div className="h-0.5 bg-black w-full" />
        <div className="h-1 bg-black w-full mt-0.5" />
      </div>
      <div className="flex flex-col gap-7 w-full">
        {data.Education.map((detail, index) => (
          <div
            key={index}
            className="flex flex-col flex-nowrap justify-center duration-1000 w-full"
          >
            <div className="flex justify-between items-start flex-nowrap w-full">
              <p className="text-black text-sm md:text-lg font-bold h-auto leading-6 text-start w-auto justify-center uppercase">
                {detail.name}
              </p>
              <div className="flex flex-col justify-end items-end">
                <Badge variant="outline" className="border-black">
                  {detail.date}
                </Badge>
              </div>
            </div>
            <p className="text-sm mt-5 font-normal text-black text-opacity-60">
              {detail.cron}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Education
