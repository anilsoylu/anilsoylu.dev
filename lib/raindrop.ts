import { cache } from "react"
import "server-only"

import { COLLECTION_IDS } from "@/lib/constants"

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN}`,
  },
  next: {
    revalidate: 60 * 60 * 24 * 2, // 2 days
  },
}

const RAINDROP_API_URL = "https://api.raindrop.io/rest/v1"

type CollectionId = (typeof COLLECTION_IDS)[number]

interface Bookmark {
  _id: CollectionId
}

interface BookmarkResponse {
  result: boolean
  items: {
    _id: CollectionId
    title: string
    slug: string
    count: number
  }[]
}

export const getBookmarkItems = cache(
  async (id: CollectionId, pageIndex = 0) => {
    try {
      const response = await fetch(
        `${RAINDROP_API_URL}/raindrops/${id}?` +
          new URLSearchParams({
            page: pageIndex.toString(),
            perpage: "50",
          }),
        options
      )
      return await response.json()
    } catch (error) {
      console.info(error)
      return null
    }
  }
)

export const getBookmarks = cache(async () => {
  try {
    const response = await fetch(`${RAINDROP_API_URL}/collections`, options)
    const data = await response.json()

    if (!data || !data.items) {
      console.info("Invalid response format:", data)
      return []
    }

    const filteredBookmarks = data.items.filter((bookmark: Bookmark) =>
      COLLECTION_IDS.includes(bookmark._id)
    )
    return filteredBookmarks
  } catch (error) {
    console.info(error)
    return []
  }
})

export const getBookmark = cache(async (id: CollectionId) => {
  try {
    const response = await fetch(
      `${RAINDROP_API_URL}/collection/${id}`,
      options
    )
    return await response.json()
  } catch (error) {
    console.info(error)
    return null
  }
})
