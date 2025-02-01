import { ListItem } from "@/components/list-item"
import { ScreenLoadingSpinner } from "@/components/screen-loading-spinner"
import { Toaster } from "@/components/ui/sonner"
import { getBookmarks } from "@/lib/raindrop"
import { sortByProperty } from "@/lib/utils"
import { Suspense } from "react"

async function fetchData() {
  const bookmarks = await getBookmarks()
  const sortedBookmarks = bookmarks ? sortByProperty(bookmarks, "title") : []
  return { bookmarks: sortedBookmarks }
}

export default async function BookmarksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { bookmarks } = await fetchData()

  return (
    <>
      <div className="lg:bg-grid flex-1 px-4">{children}</div>
      <Toaster
        closeButton
        richColors
        toastOptions={{
          duration: 5000,
        }}
      />
    </>
  )
}

export const viewport = {
  //  To fix the zoom issue on mobile for the bookmark submit form
  maximumScale: 1,
}
