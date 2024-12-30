import { memo } from "react"
import ProjectCard from "./project-card"
import type { Project } from "@/types/project"

interface ProjectGridProps {
  projects: Project[]
}

const ProjectGrid = memo(({ projects }: ProjectGridProps) => {
  const sortedProjects = [...projects].sort((a, b) => b.date - a.date)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {sortedProjects.map((project, index) => (
        <ProjectCard
          key={`${project.title}-${index}`}
          project={project}
          isPriority={index === 0}
        />
      ))}
    </div>
  )
})

ProjectGrid.displayName = "ProjectGrid"

export default ProjectGrid
