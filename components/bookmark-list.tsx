"use client"

import { useEffect, useState, useCallback, useMemo, memo } from "react"
import { ArrowDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { BookmarkCard } from "@/components/bookmark-card"
import { getBookmarkItemsByPageIndex } from "@/app/action"
import { cn } from "@/lib/utils"
import { COLLECTION_IDS, TWEETS_COLLECTION_ID } from "@/lib/constants"
import type { RaindropItem, RaindropResponse } from "@/lib/raindrop"

interface BookmarkListProps {
  initialData: RaindropResponse | null
  id: (typeof COLLECTION_IDS)[number]
}

export const BookmarkList = memo(({ initialData, id }: BookmarkListProps) => {
  const [data, setData] = useState<RaindropItem[]>(
    initialData?.result ? initialData.items : []
  )
  const [pageIndex, setPageIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const loadMore = () => {
    if (!isReachingEnd && !isLoading) {
      setPageIndex((prevPageIndex) => prevPageIndex + 1)
    }
  }

  const fetchInfiniteData = useCallback(async () => {
    try {
      setIsLoading(true)
      const newData = await getBookmarkItemsByPageIndex(id, pageIndex)

      if (newData && newData.result) {
        setData((prevData) => [...prevData, ...newData.items])
      }
    } catch (error) {
      console.error("Error fetching bookmarks:", error)
    } finally {
      setIsLoading(false)
    }
  }, [id, pageIndex])

  useEffect(() => {
    if (pageIndex > 0) {
      fetchInfiniteData()
    }
  }, [pageIndex, fetchInfiniteData])

  const getChunks = useCallback(
    (items: RaindropItem[]): [RaindropItem[], RaindropItem[]] => {
      const firstChunk: RaindropItem[] = []
      const lastChunk: RaindropItem[] = []

      items.forEach((element, index) => {
        if (index % 2 === 0) {
          firstChunk.push(element)
        } else {
          lastChunk.push(element)
        }
      })

      return [firstChunk, lastChunk]
    },
    []
  )

  const chunks = useMemo(() => getChunks(data), [data, getChunks])
  const isReachingEnd = data.length >= (initialData?.count ?? 0)
  const isTweetCollection = id === TWEETS_COLLECTION_ID

  const renderBookmarkCard = (bookmark: RaindropItem, index: number) => (
    <BookmarkCard key={bookmark._id} bookmark={bookmark} order={index} />
  )

  const renderLoadMoreButton = () => (
    <div className="mt-8 flex min-h-16 items-center justify-center text-sm lg:mt-12">
      {!isReachingEnd ? (
        <>
          {isLoading ? (
            <div
              className="inline-block size-4 animate-spin rounded-full border-2 border-current border-t-transparent text-black"
              role="status"
              aria-label="loading"
            >
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <Button
              variant="outline"
              onClick={loadMore}
              disabled={isLoading}
              className="w-full justify-center bg-white"
            >
              Load more
              <ArrowDownIcon size={16} className="ml-2" />
            </Button>
          )}
        </>
      ) : (
        <span>{`That's all for now. Come back later for more.`}</span>
      )}
    </div>
  )

  return (
    <div>
      <div className="flex flex-col gap-4 @lg:hidden">
        {data.map((bookmark, index) => (
          <div
            key={bookmark._id}
            className={cn(
              "grid gap-4",
              isTweetCollection ? "h-fit" : "place-content-start"
            )}
          >
            {renderBookmarkCard(bookmark, index)}
          </div>
        ))}
      </div>

      <div className="hidden @lg:grid @lg:grid-cols-2 @lg:gap-4">
        {chunks.map((chunk, chunkIndex) => (
          <div
            key={`chunk_${chunkIndex}`}
            className={cn(
              "grid gap-4",
              isTweetCollection ? "h-fit" : "place-content-start"
            )}
          >
            {chunk.map((bookmark, bookmarkIndex) =>
              renderBookmarkCard(bookmark, bookmarkIndex)
            )}
          </div>
        ))}
      </div>

      {data.length > 0 ? (
        renderLoadMoreButton()
      ) : (
        <div className="mt-8 flex min-h-16 flex-col items-center justify-center lg:mt-12">
          <span>No bookmarks found.</span>
        </div>
      )}
    </div>
  )
})

BookmarkList.displayName = "BookmarkList"
