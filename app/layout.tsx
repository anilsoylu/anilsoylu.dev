import { Be_Vietnam_Pro } from "next/font/google"
import "./globals.css"
import Header from "@/components/shared/header"
import data from "@/data/data.json"
import LeftSide from "@/components/shared/home/left-side"
import { SpeedInsights } from "@vercel/speed-insights/next"

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-be-vietnam-pro",
  preload: true,
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
    <html lang="tr">
      <body className={`${beVietnamPro.variable}  antialiased`}>
        <div className="container px-5 md:px-0 mx-auto max-w-6xl">
          <Header />
          <main className="flex flex-col md:flex-row items-start gap-x-[70px] flex-none flex-nowrap justify-between  w-full">
            <LeftSide />
            <div className="flex-initial w-full md:w-8/12">{children}</div>
          </main>
          <SpeedInsights />
        </div>
      </body>
    </html>
  )
}
