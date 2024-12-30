export interface SkillItem {
  name: string
  count: number
}

export interface SkillSection {
  does: SkillItem[]
  use: SkillItem[]
}

export interface SkillListProps {
  title: string
  items: SkillItem[]
}

export interface ProgressBarProps {
  value: number
  name: string
}
