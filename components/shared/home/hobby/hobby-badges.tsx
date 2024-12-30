import { memo } from "react"
import { Badge } from "@/components/ui/badge"
import { HobbyBadgesProps } from "@/types/hobby"

const HobbyBadges = memo(({ hobbies }: HobbyBadgesProps) => (
  <div
    className="flex items-start flex-row flex-wrap gap-2 -translate-x-1.5 duration-300"
    role="list"
    aria-label="List of hobbies"
  >
    {hobbies.map((hobby, idx) => (
      <Badge
        key={`${hobby}-${idx}`}
        variant="outline"
        className="border-black hover:bg-black hover:text-white 
                 transition-colors duration-200 text-xs font-bold uppercase group"
        role="listitem"
      >
        <span className="group-hover:scale-105 duration-200 inline-block">
          {hobby}
        </span>
      </Badge>
    ))}
  </div>
))

HobbyBadges.displayName = "HobbyBadges"

export default HobbyBadges
