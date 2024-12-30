import { Badge } from "@/components/ui/badge"
import data from "@/data/data.json"

const Hobby = () => {
  return (
    <>
      <div className="flex flex-col mb-7">
        <p className="justify-end text-2xl font-bold text-black uppercase flex mb-2.5">
          {data.HobbyTitle}
        </p>
        <div className="h-0.5 bg-black w-full" />
        <div className="h-1 bg-black w-full mt-0.5" />
      </div>

      <div className="flex flex-col w-full mb-7">
        <p className="text-black text-opacity-60 mb-7 text-sm font-normal duration-1000">
          {data.Hobby.content}
        </p>
        <div className="flex items-start flex-row flex-wrap gap-2 -translate-x-1.5 duration-1000">
          {data.Hobby.hobbies.map((hobby, idx) => (
            <Badge
              key={idx}
              variant="outline"
              className="border-black hover:cursor-default text-xs font-bold  uppercase"
            >
              {hobby}
            </Badge>
          ))}
        </div>
      </div>
    </>
  )
}

export default Hobby
