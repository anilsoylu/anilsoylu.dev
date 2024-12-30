import { memo } from "react"

interface ProjectHeaderProps {
  title: string
}

const ProjectHeader = memo(({ title }: ProjectHeaderProps) => {
  return (
    <div className="flex flex-col mb-7">
      <h1 className="text-2xl font-bold text-black uppercase mb-2.5">
        {title}
      </h1>
      <div aria-hidden="true" className="flex flex-col gap-0.5">
        <div className="h-0.5 bg-black w-full" />
        <div className="h-1 bg-black w-full" />
      </div>
    </div>
  )
})

ProjectHeader.displayName = "ProjectHeader"

export default ProjectHeader
