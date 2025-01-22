import { memo } from "react"
import Image from "next/image"
import Link from "next/link"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Project } from "@/types/project"
import TechnologiesList from "./tech-list"

interface ProjectCardProps {
  project: Project
  isPriority?: boolean
}

const ProjectCard = memo(
  ({ project, isPriority = false }: ProjectCardProps) => {
    return (
      <Card className="shadow-md group hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
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
        </CardHeader>
        <CardContent className="flex-grow">
          <CardTitle className="text-lg font-bold mt-4">
            {project.title}
          </CardTitle>
          <CardDescription className="text-sm text-gray-500">
            {project.domain}
          </CardDescription>
          {project.technologies && <TechnologiesList project={project} />}
        </CardContent>
        <CardFooter className="flex flex-row items-center justify-start gap-2">
          <p className="text-sm text-gray-600">Year: {project.date}</p>
          {project.explain && (
            <p className="text-xs italic text-gray-400">{project.explain}</p>
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
        </CardFooter>
      </Card>
    )
  }
)

ProjectCard.displayName = "ProjectCard"

export default ProjectCard
