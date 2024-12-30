"use client"
import { memo, useMemo } from "react"
import { SocialListItems } from "@/data/social"
import Link from "next/link"
import MenuList from "./menu-list"
import { useCallback } from "react"

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
  name: string
}

const SocialLink = memo(({ href, icon, name }: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-gray-600 hover:text-black transition-colors duration-200"
    aria-label={name}
  >
    {icon}
    <span className="sr-only">{name}</span>
  </Link>
))

SocialLink.displayName = "SocialLink"

const Header = memo(() => {
  const socialListItems = useMemo(() => SocialListItems(), [])

  const renderSocialLink = useCallback(
    (item: ReturnType<typeof SocialListItems>[number], index: number) => (
      <SocialLink
        key={`${item.name}-${index}`}
        href={item.link}
        icon={item.icon}
        name={item.name}
      />
    ),
    []
  )

  return (
    <header className="flex justify-between items-end mt-5 mb-5 md:mt-[60px] md:mb-[50px]">
      <MenuList />
      <nav className="flex space-x-4" aria-label="Social media links">
        {socialListItems.map(renderSocialLink)}
      </nav>
    </header>
  )
})

Header.displayName = "Header"

export default Header
