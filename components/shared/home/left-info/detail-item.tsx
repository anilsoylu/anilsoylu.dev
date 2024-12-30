import { DetailItemProps } from "@/types/information"
import { memo } from "react"

const DetailItem = memo(({ detail }: DetailItemProps) => (
  <div
    className="items-center border-b-2 border-black flex flex-row justify-between py-2.5 first:border-t-2
                  hover:bg-black/5 transition-colors duration-200 group"
  >
    <dt className="text-black text-xs font-bold uppercase group-hover:scale-105 transition-transform duration-200">
      {detail.title}
    </dt>
    <dd className="text-black text-xs font-bold uppercase group-hover:scale-105 transition-transform duration-200">
      {detail.content}
    </dd>
  </div>
))

DetailItem.displayName = "DetailItem"

export default DetailItem
