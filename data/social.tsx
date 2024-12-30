import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react"
import { JSX } from "react"

type SocialItem = {
  name: string
  link: string
  icon: JSX.Element
}

export const SocialListItems = (): SocialItem[] => {
  return [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/anilsoylu94/",
      icon: <IconBrandLinkedin />,
    },
    {
      name: "Github",
      link: "https://github.com/anilsoylu",
      icon: <IconBrandGithub />,
    },
  ]
}
