import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Be_Vietnam_Pro } from "next/font/google"
import "./globals.css"
import dynamic from "next/dynamic"
import data from "@/data/data.json"
import { Suspense } from "react"
import { getBookmarks } from "@/lib/raindrop"
import { sortByProperty } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"

const Header = dynamic(() => import("@/components/shared/header"), {
  loading: () => <div className="h-16" />,
})

const LeftSide = dynamic(() => import("@/components/shared/home/left-side"), {
  loading: () => (
    <div className="w-full min-h-[200px] md:min-h-screen bg-gray-50" />
  ),
})

async function fetchData() {
  const bookmarks = await getBookmarks()
  const sortedBookmarks = bookmarks ? sortByProperty(bookmarks, "title") : []
  return { bookmarks: sortedBookmarks }
}

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-be-vietnam-pro",
  preload: true,
  display: "swap",
})

export const metadata = {
  title: {
    template: `%s | ${data.SiteTitle ?? "Anıl Soylu"}`,
    default: data.SiteTitle ?? "Anıl Soylu",
  },
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const { bookmarks } = await fetchData()

  return (
    <html lang="tr" className={beVietnamPro.variable}>
      <body className="antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="container px-5 md:px-0 mx-auto max-w-6xl">
            <Header />
            <main className="flex flex-col md:flex-row items-start gap-y-8 md:gap-x-[70px] flex-none flex-nowrap justify-between w-full relative">
              <LeftSide bookmarks={bookmarks} />
              <div className="flex-initial w-full md:w-8/12 bg-white md:bg-transparent z-10 relative">
                <Suspense fallback={<div>Loading content...</div>}>
                  {children}
                </Suspense>
              </div>
            </main>
            <Analytics />
            <SpeedInsights />
            <Toaster />
          </div>
        </Suspense>
      </body>
    </html>
  )
}
