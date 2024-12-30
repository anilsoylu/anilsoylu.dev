"use client"

import { usePathname } from "next/navigation"
import { MenuListItems } from "@/data/menus"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useMemo } from "react"

const MenuList = () => {
  const pathname = usePathname()
  const menuListItems = useMemo(() => MenuListItems(), [])

  return (
    <div className="flex space-x-4">
      {menuListItems.map((item) => (
        <Link
          key={item.link}
          href={item.link}
          className={cn(
            "flex items-center space-x-2 text-gray-600 hover:text-black hover:underline leading-6",
            pathname === item.link ? "text-black underline" : ""
          )}
          aria-current={pathname === item.link ? "page" : undefined}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default MenuList
