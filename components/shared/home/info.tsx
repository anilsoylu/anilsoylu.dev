import { memo } from "react"
import data from "@/data/data.json"

interface SiteDetail {
  title: string
  content: string
}

const DetailItem = memo(({ detail }: { detail: SiteDetail }) => (
  <div className="items-center border-b-2 border-black flex flex-row justify-between py-2.5 first:border-t-2">
    <dt className="text-black text-xs font-bold uppercase">{detail.title}</dt>
    <dd className="text-black text-xs font-bold uppercase">{detail.content}</dd>
  </div>
))

DetailItem.displayName = "DetailItem"

const LeftInformation = memo(() => {
  if (!data.SiteTitle || !data.SiteContent) {
    return (
      <div className="my-5 text-sm text-gray-500">
        Site information not available
      </div>
    )
  }

  return (
    <section aria-label="Personal Information">
      <h1 className="my-5 text-lg font-bold text-black">{data.SiteTitle}</h1>

      <p className="mt-3 text-sm text-black/60 leading-relaxed">
        {data.SiteContent}
      </p>

      <div className="mt-10">
        <dl className="w-full divide-y-2 divide-black border-y-2 border-black">
          {data.SiteInformation?.map((detail) => (
            <DetailItem key={detail.title} detail={detail} />
          )) ?? (
            <div className="py-2.5 text-sm text-gray-500 text-center">
              No additional information available
            </div>
          )}
        </dl>
      </div>
    </section>
  )
})

LeftInformation.displayName = "LeftInformation"

export default LeftInformation
