import { Suspense } from "react"
import data from "@/data/data.json"
import ProjectHeader from "@/components/shared/projects/header"
import ProjectGrid from "@/components/shared/projects/project-grid"

export async function generateMetadata() {
  return {
    title: "My Projects",
    description: "Showcase of my recent projects and work",
  }
}

const ProjectsLoadingSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="animate-pulse">
        <div className="aspect-video bg-gray-200 rounded-md mb-4" />
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
      </div>
    ))}
  </div>
)

export default function ProjectPage() {
  if (!data.Projects?.length) {
    return (
      <div className="text-gray-500 text-center py-4">
        No projects available
      </div>
    )
  }

  return (
    <div className="mb-7">
      <ProjectHeader title={data.ProjectsTitle} />
      <Suspense fallback={<ProjectsLoadingSkeleton />}>
        <ProjectGrid projects={data.Projects} />
      </Suspense>
    </div>
  )
}
