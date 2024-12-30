import { memo } from "react"

const ProjectsLoadingSkeleton = memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="aspect-video bg-gray-200 rounded-md mb-4" />
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    ))}
  </div>
))

ProjectsLoadingSkeleton.displayName = "ProjectsLoadingSkeleton"

export default ProjectsLoadingSkeleton
