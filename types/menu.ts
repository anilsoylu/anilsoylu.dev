export interface MenuItem {
  name: string
  link: string
}

export interface MenuLinkProps {
  item: MenuItem
  isActive: boolean
  onClick: () => void
}
