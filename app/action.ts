"use server"

import { getBookmarkItems } from "@/lib/raindrop"
import { COLLECTION_IDS } from "@/lib/constants"

type CollectionId = (typeof COLLECTION_IDS)[number]

export async function getBookmarkItemsByPageIndex(
  id: CollectionId,
  pageIndex: number
): Promise<ReturnType<typeof getBookmarkItems>> {
  if (pageIndex < 0) {
    throw new Error("Page index must be non-negative")
  }

  return await getBookmarkItems(id, pageIndex)
}
