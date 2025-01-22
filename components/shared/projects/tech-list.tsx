import { Project } from "@/types/project"
import { memo } from "react"
import { Badge } from "@/components/ui/badge"

interface Props {
  project: Project
}

const TechnologiesList = memo(function TechnologiesList(props: Props) {
  const { project } = props

  return (
    <div className="flex flex-col gap-2 my-1.5 text-sm text-gray-600">
      <span>Technologies:</span>
      <div className="flex flex-wrap gap-2">
        {project.technologies?.map((tech, index) => (
          <Badge
            key={index}
            variant="secondary"
            className="bg-black hover:bg-gray-800 text-white"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
})

export default TechnologiesList
