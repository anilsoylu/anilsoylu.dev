export interface Project {
  title: string
  domain: string
  date: number
  path?: string
  explain?: string
  slug: string
}

export interface ProjectsData {
  ProjectsTitle: string
  Projects: Project[]
}
