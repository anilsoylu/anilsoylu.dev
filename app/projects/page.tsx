import { AspectRatio } from "@/components/ui/aspect-ratio"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import data from "@/data/data.json"
import Image from "next/image"

export async function generateMetadata() {
  return {
    title: "My Projects",
  }
}

const AboutPage = () => {
  const sortedProjects = [...data.Projects].sort((a, b) => b.date - a.date)

  return (
    <div className="mb-7">
      <div className="flex flex-col mb-7">
        <p className="justify-end text-2xl font-bold text-black uppercase flex mb-2.5">
          {data.ProjectsTitle}
        </p>
        <div className="h-0.5 bg-black w-full" />
        <div className="h-1 bg-black w-full mt-0.5" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sortedProjects.map((project, index) => (
          <Card key={index} className="shadow-md">
            <CardHeader>
              <AspectRatio ratio={16 / 9} className="bg-muted">
                {project.path && (
                  <Image
                    src={project.path as string | ""}
                    alt={project.title}
                    fill
                    className="h-full w-full rounded-md object-cover"
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
                <p className="text-xs italic text-gray-400">
                  {project.explain}
                </p>
              )}
              <a
                href={project.slug}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm"
              >
                Visit Website
              </a>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default AboutPage
