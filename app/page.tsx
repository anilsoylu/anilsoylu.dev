import data from "@/data/data.json"
import SectionWrapper from "@/components/shared/home/section-wrapper"
import {
  Experience,
  Education,
  Skills,
  Hobby,
} from "@/components/shared/home/sections"
import {
  ExperienceSkeleton,
  EducationSkeleton,
  SkillsSkeleton,
  HobbySkeleton,
} from "@/components/loading-states"

export const metadata = {
  title: `HomePage | ${data.SiteTitle ?? "Anıl Soylu"}`,
  description: "Personal portfolio and resume",
}

const sections = [
  { Component: Experience, Skeleton: ExperienceSkeleton },
  { Component: Education, Skeleton: EducationSkeleton },
  { Component: Skills, Skeleton: SkillsSkeleton },
  { Component: Hobby, Skeleton: HobbySkeleton },
]

export default function HomePage() {
  return (
    <main className="space-y-12 pb-7">
      {sections.map(({ Component, Skeleton }, index) => (
        <SectionWrapper key={index} fallback={<Skeleton />}>
          <Component />
        </SectionWrapper>
      ))}
    </main>
  )
}
