import { Suspense } from "react"
import data from "@/data/data.json"
import { AboutContent, AboutHeader } from "@/components/shared/about"

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about my background and experience",
  }
}

export default function AboutPage() {
  if (!data.AboutPage?.content) {
    return (
      <div className="text-gray-500 text-center py-4">
        About page content is not available
      </div>
    )
  }

  return (
    <article className="about-page">
      <Suspense
        fallback={<div className="h-8 bg-gray-200 animate-pulse rounded" />}
      >
        <AboutHeader title={data.AboutPage.title} />
      </Suspense>

      <Suspense
        fallback={
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 animate-pulse rounded" />
            ))}
          </div>
        }
      >
        <AboutContent content={data.AboutPage.content} />
      </Suspense>
    </article>
  )
}
