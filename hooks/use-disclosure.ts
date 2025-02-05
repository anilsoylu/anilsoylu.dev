import { useState, useCallback } from "react"

export const useDisclosure = (initial = false) => {
  const [isOpen, setIsOpen] = useState(initial)

  const onOpen = useCallback(() => setIsOpen(true), [])
  const onClose = useCallback(() => setIsOpen(false), [])
  const onToggle = useCallback(() => setIsOpen((prev) => !prev), [])

  return {
    isOpen,
    onOpen,
    onClose,
    onToggle,
  }
}
