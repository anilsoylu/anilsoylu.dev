"use client"

import { memo, Suspense } from "react"
import dynamic from "next/dynamic"
import { usePathname } from "next/navigation"
import { ListItem } from "@/components/list-item"
import { ScreenLoadingSpinner } from "@/components/screen-loading-spinner"

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

const LeftSide = memo(({ bookmarks }: { bookmarks: any }) => {
  const pathname = usePathname()
  const isBookmarksPath = pathname.startsWith("/bookmarks")

  if (isBookmarksPath) {
    return (
      <aside
        className="flex-none w-full sticky top-4 md:w-4/12 md:sticky md:top-4"
        aria-label="Sidebar with personal information"
      >
        <Suspense fallback={<ScreenLoadingSpinner />}>
          <div className="flex flex-col gap-1">
            {bookmarks?.map((bookmark: any) => {
              return (
                <ListItem
                  key={bookmark._id}
                  path={`/bookmarks/${bookmark.slug}`}
                  title={bookmark.title}
                  description={`${bookmark.count} bookmarks`}
                />
              )
            })}
          </div>
        </Suspense>
      </aside>
    )
  }

  return (
    <aside
      className="flex-none w-full sticky top-4 md:w-4/12 md:sticky md:top-4"
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
