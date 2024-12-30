import { Suspense, memo } from "react"
import type { ReactNode } from "react"

interface SectionWrapperProps {
  children: ReactNode
  fallback: ReactNode
}

const SectionWrapper = memo(({ children, fallback }: SectionWrapperProps) => {
  return <Suspense fallback={fallback}>{children}</Suspense>
})

SectionWrapper.displayName = "SectionWrapper"

export default SectionWrapper
