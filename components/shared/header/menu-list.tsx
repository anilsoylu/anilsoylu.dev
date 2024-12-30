"use client"

import { usePathname } from "next/navigation"
import { MenuListItems } from "@/data/menus"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { memo, useMemo, useCallback } from "react"

interface MenuItem {
  name: string
  link: string
}

const MenuLink = memo(
  ({ item, isActive }: { item: MenuItem; isActive: boolean }) => (
    <Link
      href={item.link}
      className={cn(
        "flex items-center space-x-2 text-gray-600 hover:text-black hover:underline leading-6 transition-colors duration-200",
        isActive ? "text-black underline" : ""
      )}
      aria-current={isActive ? "page" : undefined}
    >
      {item.name}
    </Link>
  )
)

MenuLink.displayName = "MenuLink"

const MenuList = memo(() => {
  const pathname = usePathname()
  const menuListItems = useMemo(() => MenuListItems(), [])

  const isActiveLink = useCallback(
    (link: string) => pathname === link,
    [pathname]
  )

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
