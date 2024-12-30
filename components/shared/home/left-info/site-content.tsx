import { memo } from "react"

interface SiteContentProps {
  title: string
  content: string
}

const SiteContent = memo(({ title, content }: SiteContentProps) => (
  <>
    <h1 className="my-5 text-lg font-bold text-black hover:text-black/80 transition-colors duration-200">
      {title}
    </h1>
    <p className="mt-3 text-sm text-black/60 leading-relaxed hover:text-black/80 transition-colors duration-200">
      {content}
    </p>
  </>
))

SiteContent.displayName = "SiteContent"

export default SiteContent
