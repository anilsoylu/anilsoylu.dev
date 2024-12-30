import { memo } from "react"
import dynamic from "next/dynamic"

const AvatarComponent = dynamic(
  () => import("@/components/shared/home/avatar"),
  {
    loading: () => (
      <div className="w-32 h-32 rounded-full bg-gray-200 animate-pulse" />
    ),
  }
)

const LeftInformation = dynamic(() => import("@/components/shared/home/info"), {
  loading: () => (
    <div className="space-y-4 mt-4">
      <div className="h-6 bg-gray-200 rounded animate-pulse" />
      <div className="h-20 bg-gray-200 rounded animate-pulse" />
    </div>
  ),
})

const ContactButton = dynamic(() => import("./contact-button"), {
  loading: () => (
    <div className="my-10 w-full h-12 bg-gray-200 rounded-md animate-pulse" />
  ),
})

const LeftSide = memo(() => {
  return (
    <aside
      className="flex-none w-full md:w-1/4 sticky top-4"
      aria-label="Sidebar with personal information"
    >
      <AvatarComponent />
      <LeftInformation />
      <ContactButton />
    </aside>
  )
})

LeftSide.displayName = "LeftSide"

export default LeftSide
