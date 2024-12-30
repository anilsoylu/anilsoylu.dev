"use client"

import { memo } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { MenuLinkProps } from "@/types/menu"

const MenuLink = memo(({ item, isActive }: MenuLinkProps) => (
  <Link
    href={item.link}
    className={cn(
      "flex items-center space-x-2 text-gray-600 hover:text-black hover:underline",
      "leading-6 transition-colors duration-200 group",
      isActive ? "text-black underline" : ""
    )}
    aria-current={isActive ? "page" : undefined}
  >
    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
      {item.name}
    </span>
  </Link>
))

MenuLink.displayName = "MenuLink"

export default MenuLink
