import { Be_Vietnam_Pro } from "next/font/google"
import "./globals.css"
import dynamic from "next/dynamic"
import data from "@/data/data.json"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"

const Header = dynamic(() => import("@/components/shared/header"), {
  loading: () => <div className="h-16" />,
})

const LeftSide = dynamic(() => import("@/components/shared/home/left-side"), {
  loading: () => <div className="w-4/12 h-screen bg-gray-50" />,
})

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr" className={beVietnamPro.variable}>
      <body className="antialiased">
        <Suspense fallback={<div>Loading...</div>}>
          <div className="container px-5 md:px-0 mx-auto max-w-6xl">
            <Header />
            <main className="flex flex-col md:flex-row items-start gap-x-[70px] flex-none flex-nowrap justify-between w-full">
              <LeftSide />
              <div className="flex-initial w-full md:w-8/12">
                <Suspense fallback={<div>Loading content...</div>}>
                  {children}
                </Suspense>
              </div>
            </main>
            <SpeedInsights />
          </div>
        </Suspense>
      </body>
    </html>
  )
}
