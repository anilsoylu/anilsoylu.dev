import data from "@/data/data.json"
import Education from "@/components/shared/home/education"
import Experience from "@/components/shared/home/experience"
import Hobby from "@/components/shared/home/hobby"
import Skills from "@/components/shared/home/skills"

export async function generateMetadata() {
  return {
    title: `HomePage | ${data.SiteTitle ?? `Anıl Soylu`}`,
  }
}

export default function HomePage() {
  return (
    <>
      <Experience />
      <Education />
      <Skills />
      <Hobby />
    </>
  )
}
