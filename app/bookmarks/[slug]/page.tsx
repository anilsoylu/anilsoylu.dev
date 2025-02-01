import { Suspense } from "react"
import { notFound } from "next/navigation"

import { ScrollArea } from "@/components/ui/scroll-area"
import { PageTitle } from "@/components/page-title"
import { FloatingHeader } from "@/components/floating-header"
import { ScreenLoadingSpinner } from "@/components/screen-loading-spinner"
import { BookmarkList } from "@/components/bookmark-list"
import { getBookmarkItems, getBookmarks } from "@/lib/raindrop"
import { sortByProperty } from "@/lib/utils"
import { SCROLL_AREA_ID } from "@/lib/constants"

export async function generateStaticParams() {
  const bookmarks = await getBookmarks()
  return bookmarks.map((bookmark: { slug: string }) => ({
    slug: bookmark.slug,
  }))
}

async function fetchData(slug: string) {
  const bookmarks = await getBookmarks()
  const currentBookmark = bookmarks.find(
    (bookmark: { slug: string }) => bookmark.slug === slug
  )
  if (!currentBookmark) notFound()

  const sortedBookmarks = sortByProperty(bookmarks, "title")
  const bookmarkItems = await getBookmarkItems(currentBookmark._id)

  return {
    bookmarks: sortedBookmarks,
    currentBookmark,
    bookmarkItems,
  }
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug
  const data = await fetchData(slug)

  if (!data) return null

  return (
    <ScrollArea className="bg-grid w-full" id={SCROLL_AREA_ID}>
      <FloatingHeader
        scrollTitle={data.currentBookmark.title}
        goBackLink="/bookmarks"
        bookmarks={data.bookmarks}
        currentBookmark={data.currentBookmark}
      />
      <div className="content-wrapper">
        <div className="content @container">
          <PageTitle title={data.currentBookmark.title} />
          <Suspense fallback={<ScreenLoadingSpinner />}>
            <BookmarkList
              id={data.currentBookmark._id}
              initialData={data.bookmarkItems}
            />
          </Suspense>
        </div>
      </div>
    </ScrollArea>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const slug = (await params).slug

  const bookmarks = await getBookmarks()
  const currentBookmark = bookmarks.find(
    (bookmark: { slug: string }) => bookmark.slug === slug
  )
  if (!currentBookmark) return null

  const siteUrl = `/bookmarks/${slug}`
  const seoTitle = `${currentBookmark.title} | Bookmarks`
  const seoDescription = `A curated selection of various handpicked ${currentBookmark.title.toLowerCase()} bookmarks by Onur Şuyalçınkaya`

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: [
      currentBookmark.title,
      "bookmarks",
      `${currentBookmark.title} bookmarks`,
      "collection",
      `${currentBookmark.title} collection`,
    ],
    alternates: {
      canonical: siteUrl,
    },
  }
}
