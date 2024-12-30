import { memo } from "react"
import dynamic from "next/dynamic"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import data from "@/data/data.json"

const AvatarComponent = dynamic(() => import("./avatar"))
const LeftInformation = dynamic(() => import("./info"))

const LeftSide = memo(() => {
  return (
    <aside className="flex-none w-full md:w-1/4">
      <AvatarComponent />
      <LeftInformation />
      <Button
        variant="link"
        className="my-10 w-full font-bold uppercase border-2 border-black rounded-none hover:bg-black hover:text-white hover:no-underline"
        asChild
        aria-label="Send a message via email"
      >
        <Link href={`mailto:${data.SiteMail}`} prefetch={false}>
          Send Message
        </Link>
      </Button>
    </aside>
  )
})

LeftSide.displayName = "LeftSide"

export default LeftSide
