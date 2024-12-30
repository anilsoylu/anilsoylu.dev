type MenuItem = {
  name: string
  link: string
}

export const MenuListItems = (): MenuItem[] => {
  return [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About me",
      link: "/about",
    },
    {
      name: "Projects",
      link: "/projects",
    },
  ]
}
