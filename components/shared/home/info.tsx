import { memo } from "react"
import data from "@/data/data.json"

const LeftInformation = memo(() => {
  return (
    <>
      <div className="my-5 text-lg font-bold text-black">{data.SiteTitle}</div>
      <div className="mt-3 text-sm text-black text-opacity-60">
        {data.SiteContent}
      </div>
      <div className="mt-10 flex flex-col items-center">
        <dl className="w-full">
          {data.SiteInformation?.map((detail) => (
            <div
              key={detail.title}
              className="items-center border-b-2 border-black flex flex-row justify-between py-2.5 first:border-t-2"
            >
              <dt className="text-black text-xs font-bold uppercase">
                {detail.title}
              </dt>
              <dd className="text-black text-xs font-bold uppercase">
                {detail.content}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </>
  )
})

LeftInformation.displayName = "LeftInformation"

export default LeftInformation
