export interface Education {
  name: string
  date: string
  cron: string
}

export interface EducationItemProps {
  detail: Education
}

export interface EducationData {
  EducationTitle: string
  Education: Education[]
}
