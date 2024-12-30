import { memo } from "react"
import data from "@/data/data.json"

const SectionHeader = memo(() => (
  <section className="flex flex-col my-7">
    <h2 className="text-2xl font-bold text-black uppercase mb-2.5">
      {data.HobbyTitle}
    </h2>
    <div aria-hidden="true" className="flex flex-col gap-0.5">
      <div className="h-0.5 bg-black w-full" />
      <div className="h-1 bg-black w-full" />
    </div>
  </section>
))

SectionHeader.displayName = "SectionHeader"

export default SectionHeader
