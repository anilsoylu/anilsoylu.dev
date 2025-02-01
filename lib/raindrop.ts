import { cache } from "react"
import "server-only"

import { COLLECTION_IDS } from "@/lib/constants"

export interface RaindropItem {
  _id: CollectionId
  title: string
  link: string
  created: string
  excerpt: string
  tags: string[]
  cover: string
  collectionId: CollectionId
  domain: string
  note?: string
}

export interface RaindropCollection {
  _id: CollectionId
  title: string
  slug: string
  count: number
  created: string
  lastUpdate: string
}

export interface RaindropResponse {
  result: boolean
  items: RaindropItem[]
  count: number
  page: number
}

export interface CollectionResponse {
  result: boolean
  items: RaindropCollection[]
}

type CollectionId = (typeof COLLECTION_IDS)[number]

const RAINDROP_API_URL = "https://api.raindrop.io/rest/v1" as const
const CACHE_REVALIDATION_TIME = 60 * 60 * 24 * 2 // 2 days
const DEFAULT_PER_PAGE = 50

const apiConfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_RAINDROP_ACCESS_TOKEN}`,
  },
  next: {
    revalidate: CACHE_REVALIDATION_TIME,
  },
} as const

const createApiUrl = (endpoint: string, params?: Record<string, string>) => {
  const url = new URL(`${RAINDROP_API_URL}${endpoint}`)
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value)
    })
  }
  return url.toString()
}

const handleApiResponse = async <T>(response: Response): Promise<T | null> => {
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`)
  }
  return await response.json()
}

export const getBookmarkItems = cache(
  async (id: CollectionId, pageIndex = 0): Promise<RaindropResponse | null> => {
    try {
      const url = createApiUrl(`/raindrops/${id}`, {
        page: pageIndex.toString(),
        perpage: DEFAULT_PER_PAGE.toString(),
      })

      const response = await fetch(url, apiConfig)
      return await handleApiResponse<RaindropResponse>(response)
    } catch (error) {
      console.error("Error fetching bookmark items:", error)
      return null
    }
  }
)

export const getBookmarks = cache(async (): Promise<RaindropCollection[]> => {
  try {
    const url = createApiUrl("/collections")
    const response = await fetch(url, apiConfig)
    const data = await handleApiResponse<CollectionResponse>(response)

    if (!data?.items) {
      throw new Error("Invalid response format")
    }

    return data.items.filter((bookmark) =>
      COLLECTION_IDS.includes(bookmark._id)
    )
  } catch (error) {
    console.error("Error fetching bookmarks:", error)
    return []
  }
})

export const getBookmark = cache(
  async (id: CollectionId): Promise<RaindropCollection | null> => {
    try {
      const url = createApiUrl(`/collection/${id}`)
      const response = await fetch(url, apiConfig)
      return await handleApiResponse<RaindropCollection>(response)
    } catch (error) {
      console.error("Error fetching bookmark:", error)
      return null
    }
  }
)
