import data from "@/data/data.json"
import { cn } from "@/lib/utils"

const LeftInformation = () => {
  return (
    <>
      <div className="my-5 text-lg font-bold text-black">{data.SiteTitle}</div>
      <div className="mt-3 text-sm text-black text-opacity-60 justify-between">
        {data.SiteContent}
      </div>
      <div className="mt-10 flex flex-col items-center flex-nowrap">
        {data.SiteInformation.map((detail, index) => (
          <div
            key={index}
            className={cn(
              "items-center border-b-2 border-black flex flex-row flex-nowrap h-auto justify-between py-2.5 w-full",
              index === 0 && "border-t-2"
            )}
          >
            <p className="text-black text-xs font-bold h-auto leading-6 text-center w-auto justify-center uppercase">
              {detail.title}
            </p>
            <p className="text-black text-xs font-bold h-auto leading-6 text-center w-auto justify-center uppercase">
              {detail.content}
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default LeftInformation
