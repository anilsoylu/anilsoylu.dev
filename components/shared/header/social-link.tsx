"use client"

import { memo } from "react"
import Link from "next/link"
import { SocialLinkProps } from "@/types/header"

const SocialLink = memo(({ href, icon, name }: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center space-x-2 text-gray-600 hover:text-black 
              transition-colors duration-200 group"
    aria-label={name}
  >
    <span className="group-hover:scale-110 transition-transform duration-200">
      {icon}
    </span>
    <span className="sr-only">{name}</span>
  </Link>
))

SocialLink.displayName = "SocialLink"

export default SocialLink
