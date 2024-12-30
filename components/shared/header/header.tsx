"use client"

import { memo } from "react"
import MenuList from "./menu/menu-list"
import SocialNav from "./social-nav"

const Header = memo(() => {
  return (
    <header className="flex justify-between items-end mt-5 mb-5 md:mt-[60px] md:mb-[50px]">
      <MenuList />
      <SocialNav />
    </header>
  )
})

Header.displayName = "Header"

export default Header
