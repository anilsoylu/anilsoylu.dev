import { ReactNode } from "react"

export interface SocialLinkProps {
  href: string
  icon: ReactNode
  name: string
}

export interface SocialItem {
  name: string
  link: string
  icon: ReactNode
}
