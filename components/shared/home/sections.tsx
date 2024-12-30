import dynamic from "next/dynamic"
import {
  ExperienceSkeleton,
  EducationSkeleton,
  SkillsSkeleton,
  HobbySkeleton,
} from "@/components/loading-states"

export const Experience = dynamic(
  () => import("@/components/shared/home/experience"),
  {
    loading: () => <ExperienceSkeleton />,
  }
)

export const Education = dynamic(
  () => import("@/components/shared/home/education"),
  {
    loading: () => <EducationSkeleton />,
  }
)

export const Skills = dynamic(() => import("@/components/shared/home/skills"), {
  loading: () => <SkillsSkeleton />,
})

export const Hobby = dynamic(() => import("@/components/shared/home/hobby"), {
  loading: () => <HobbySkeleton />,
})
