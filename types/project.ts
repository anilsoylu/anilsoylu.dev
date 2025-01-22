export interface Project {
  title: string
  domain: string
  date: number
  path?: string
  explain?: string
  technologies?: string[]
  slug: string
}

export interface ProjectHeaderProps {
  title: string
}

export interface ProjectGridProps {
  projects: Project[]
}

export interface ProjectCardProps {
  project: Project
  isPriority?: boolean
}
