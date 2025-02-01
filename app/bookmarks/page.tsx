import { getBookmarks } from "@/lib/raindrop"
import { sortByProperty } from "@/lib/utils"
import { TWEETS_COLLECTION_ID } from "@/lib/constants"
import { BookmarkList } from "@/components/bookmark-list"

async function fetchData() {
  const bookmarks = await getBookmarks()
  const sortedBookmarks = Array.isArray(bookmarks)
    ? sortByProperty(bookmarks, "title")
    : []
  return { bookmarks: sortedBookmarks }
}

export default async function Writing() {
  const { bookmarks } = await fetchData()

  return (
    <div className="relative">
      <BookmarkList initialData={bookmarks} id={TWEETS_COLLECTION_ID} />
    </div>
  )
}

export async function generateMetadata() {
  const siteUrl = "/bookmarks"

  return {
    title: "Bookmarks",
    description: "Bookmarks",
    openGraph: {
      title: "Bookmarks",
      description: "Bookmarks",
      url: siteUrl,
    },
    alternates: {
      canonical: siteUrl,
    },
  }
}
