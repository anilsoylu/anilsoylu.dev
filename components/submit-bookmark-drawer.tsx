interface SubmitBookmarkDrawerProps {
  bookmarks: any
  currentBookmark: any
  children?: React.ReactNode
}

export const SubmitBookmarkDrawer = ({
  bookmarks,
  currentBookmark,
  children,
}: SubmitBookmarkDrawerProps) => {
  return (
    <div className="submit-bookmark-drawer">
      {/* Drawer içeriği */}
      {children}
    </div>
  )
}
