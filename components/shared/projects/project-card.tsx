import { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Project } from "@/types/project"

interface ProjectCardProps {
  project: Project
  isPriority?: boolean
}

const ProjectCard = memo(
  ({ project, isPriority = false }: ProjectCardProps) => {
    return (
      <Card className="shadow-md group hover:shadow-lg transition-shadow duration-300">
        <CardHeader>
          <AspectRatio ratio={16 / 9} className="bg-muted overflow-hidden">
            {project.path && (
              <Image
                src={project.path}
                alt={project.title}
                fill
                className="h-full w-full rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
                priority={isPriority}
              />
            )}
          </AspectRatio>
          <CardTitle className="text-lg font-bold mt-4">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            {project.domain}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 mb-2">Year: {project.date}</p>
          {project.explain && (
            <p className="text-xs italic text-gray-400 mb-2">
              {project.explain}
            </p>
          )}
          <Link
            href={project.slug}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline text-sm inline-block
                   transition-colors duration-200 hover:text-blue-600"
          >
            Visit Website
          </Link>
        </CardContent>
      </Card>
    )
  }
)

ProjectCard.displayName = "ProjectCard"

export default ProjectCard
