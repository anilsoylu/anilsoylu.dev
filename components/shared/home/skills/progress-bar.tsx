import { memo } from "react"
import { Progress } from "@/components/ui/progress"
import { ProgressBarProps } from "@/types/skills"

const ProgressBar = memo(({ value, name }: ProgressBarProps) => (
  <Progress
    value={value}
    className="h-1 rounded-full transition-all duration-300 hover:h-1.5"
    style={{
      backgroundColor: "rgba(0, 0, 0, 0.1)",
    }}
    aria-label={`${name} skill level: ${value}%`}
  />
))

ProgressBar.displayName = "ProgressBar"

export default ProgressBar
