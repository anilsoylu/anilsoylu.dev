import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import data from "@/data/data.json"

const Hobby = memo(() => {
  return (
    <>
      <section className="flex flex-col my-7">
        <h2 className="text-2xl font-bold text-black uppercase mb-2.5">
          {data.HobbyTitle}
        </h2>
        <div className="h-0.5 bg-black w-full" />
        <div className="h-1 bg-black w-full mt-0.5" />
      </section>

      <div className="flex flex-col w-full mb-7">
        <p className="text-black text-opacity-60 mb-7 text-sm font-normal duration-300">
          {data.Hobby.content}
        </p>
        <div className="flex items-start flex-row flex-wrap gap-2 -translate-x-1.5 duration-300">
          {data.Hobby.hobbies.map((hobby, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="border-black hover:cursor-default text-xs font-bold uppercase"
            >
              {hobby}
            </Badge>
          ))}
        </div>
      </div>
    </>
  )
})

Hobby.displayName = "Hobby"

export default Hobby
