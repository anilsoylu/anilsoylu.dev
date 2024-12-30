import dynamic from "next/dynamic"
import data from "@/data/data.json"

const Experience = dynamic(() => import("@/components/shared/home/experience"))
const Education = dynamic(() => import("@/components/shared/home/education"))
const Skills = dynamic(() => import("@/components/shared/home/skills"))
const Hobby = dynamic(() => import("@/components/shared/home/hobby"))

export const metadata = {
  title: `HomePage | ${data.SiteTitle ?? "Anıl Soylu"}`,
}

export default function HomePage() {
  return (
    <main>
      <Experience />
      <Education />
      <Skills />
      <Hobby />
    </main>
  )
}
