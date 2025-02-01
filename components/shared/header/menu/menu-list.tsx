"use client"

import { memo, useMemo, useCallback, useState } from "react"
import { usePathname } from "next/navigation"
import { MenuListItems } from "@/data/menus"
import MenuLink from "./menu-link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerClose,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"

const MenuList = memo(() => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const menuListItems = useMemo(() => MenuListItems(), [])

  const isActiveLink = useCallback(
    (link: string) => pathname === link,
    [pathname]
  )

  const handleLinkClick = useCallback(() => {
    setIsOpen(false)
  }, [])

  if (!menuListItems?.length) {
    return null
  }

  return (
    <>
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-center">Menu</DrawerTitle>
          </DrawerHeader>
          <nav className="flex flex-col space-y-2 p-4 max-w-xs mx-auto">
            {menuListItems.map((item) => (
              <MenuLink
                key={item.link}
                item={item}
                isActive={isActiveLink(item.link)}
                onClick={handleLinkClick}
              />
            ))}
          </nav>
        </DrawerContent>
      </Drawer>

      <nav className="hidden md:flex space-x-4" aria-label="Main navigation">
        {menuListItems.map((item) => (
          <MenuLink
            key={item.link}
            item={item}
            isActive={isActiveLink(item.link)}
            onClick={() => {}}
          />
        ))}
      </nav>
    </>
  )
})

MenuList.displayName = "MenuList"

export default MenuList
