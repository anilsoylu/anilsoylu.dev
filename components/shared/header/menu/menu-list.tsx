"use client"

import { memo, useMemo, useCallback } from "react"
import { usePathname } from "next/navigation"
import { MenuListItems } from "@/data/menus"
import MenuLink from "./menu-link"

const MenuList = memo(() => {
  const pathname = usePathname()
  const menuListItems = useMemo(() => MenuListItems(), [])

  const isActiveLink = useCallback(
    (link: string) => pathname === link,
    [pathname]
  )

  if (!menuListItems?.length) {
    return null
  }

  return (
    <nav className="flex space-x-4" aria-label="Main navigation">
      {menuListItems.map((item) => (
        <MenuLink
          key={item.link}
          item={item}
          isActive={isActiveLink(item.link)}
        />
      ))}
    </nav>
  )
})

MenuList.displayName = "MenuList"

export default MenuList
