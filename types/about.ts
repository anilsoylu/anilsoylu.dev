export interface AboutHeaderProps {
  title: string
  subtitle?: string
}

export interface AboutContentProps {
  content: string | string[]
  skills?: {
    [category: string]: string[]
  }
  experience?: {
    company: string
    position: string
    years: string
    description?: string
  }[]
  contact?: {
    email?: string
    github?: string
    linkedin?: string
  }
}

export interface HighlightedTextProps {
  text: string
  keywords: string[]
}
