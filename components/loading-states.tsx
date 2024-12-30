import { memo } from "react"

interface SkeletonProps {
  gridCols?: number
  itemCount?: number
}

const SectionSkeleton = memo(({ gridCols, itemCount = 4 }: SkeletonProps) => {
  return (
    <div className="space-y-4 animate-pulse">
      <div className="h-8 bg-gray-200 rounded w-1/4" />
      {gridCols ? (
        <div className={`grid grid-cols-${gridCols} gap-4`}>
          {[...Array(itemCount)].map((_, i) => (
            <div key={i} className="h-12 bg-gray-200 rounded" />
          ))}
        </div>
      ) : (
        <div className="h-24 bg-gray-200 rounded" />
      )}
    </div>
  )
})

SectionSkeleton.displayName = "SectionSkeleton"

export const ExperienceSkeleton = () => <SectionSkeleton />
export const EducationSkeleton = () => <SectionSkeleton />
export const SkillsSkeleton = () => (
  <SectionSkeleton gridCols={3} itemCount={6} />
)
export const HobbySkeleton = () => (
  <SectionSkeleton gridCols={2} itemCount={4} />
)
