import { memo } from "react"
import data from "@/data/data.json"
import SiteContent from "@/components/shared/home/left-info/site-content"
import DetailItem from "@/components/shared/home/left-info/detail-item"

const LeftInformation = memo(() => {
  if (!data.SiteTitle || !data.SiteContent) {
    return (
      <div className="my-5 text-sm text-gray-500">
        Site information not available
      </div>
    )
  }

  return (
    <section
      aria-label="Personal Information"
      className="hover:transform hover:translate-y-[-2px] transition-transform duration-300"
    >
      <SiteContent title={data.SiteTitle} content={data.SiteContent} />

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
