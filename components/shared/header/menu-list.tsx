"use client"

import { usePathname } from "next/navigation"
import { MenuListItems } from "@/data/menus"
import { cn } from "@/lib/utils"
import Link from "next/link"

const MenuList = () => {
  const pathname = usePathname()
  const menuListItems = MenuListItems()

  return (
    <div className="flex space-x-4">
      {menuListItems.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={cn(
            "flex items-center space-x-2 text-gray-600 hover:text-black hover:underline leading-6",
            pathname === item.link && "text-black underline"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

export default MenuList
