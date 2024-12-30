import { memo } from "react"
import { SocialListItems } from "@/data/social"
import Link from "next/link"
import MenuList from "./menu-list"

const Header = memo(() => {
  const socialListItems = SocialListItems()

  return (
    <header className="flex justify-between items-end mt-5 mb-5 md:mt-[60px] md:mb-[50px]">
      <MenuList />
      <div className="flex space-x-4">
        {socialListItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-gray-600 hover:text-black"
          >
            {item.icon}
            <span className="sr-only">{item.name}</span>
          </Link>
        ))}
      </div>
    </header>
  )
})

Header.displayName = "Header"

export default Header
