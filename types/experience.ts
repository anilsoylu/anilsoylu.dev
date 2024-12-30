export interface Achievement {
  achievements: string[]
  date: string
  job: string
  title: string
}

export interface ExperienceItemProps {
  detail: Achievement
}

export interface AchievementListProps {
  achievements: string[]
}
