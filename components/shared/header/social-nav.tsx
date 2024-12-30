"use client"

import { memo, useCallback, useMemo } from "react"
import { SocialListItems } from "@/data/social"
import SocialLink from "./social-link"
import { SocialItem } from "@/types/header"

const SocialNav = memo(() => {
  const socialListItems = useMemo(() => SocialListItems(), [])

  const renderSocialLink = useCallback(
    (item: SocialItem, index: number) => (
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
    <nav className="flex space-x-4" aria-label="Social media links">
      {socialListItems.map(renderSocialLink)}
    </nav>
  )
})

SocialNav.displayName = "SocialNav"

export default SocialNav
