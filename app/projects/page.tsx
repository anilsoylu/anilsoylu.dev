import { Suspense } from "react"
import data from "@/data/data.json"
import {
  ProjectHeader,
  ProjectGrid,
  ProjectsLoadingSkeleton,
} from "@/components/shared/projects"

export async function generateMetadata() {
  return {
    title: "My Projects",
    description: "Showcase of my recent projects and work",
  }
}

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
