import { memo } from "react"

interface AboutHeaderProps {
  title: string
}

const AboutHeader = memo(({ title }: AboutHeaderProps) => {
  return (
    <header className="flex flex-col mb-7">
      <h1 className="justify-end text-2xl font-bold text-black uppercase flex mb-2.5">
        {title}
      </h1>
      <div aria-hidden="true" className="flex flex-col gap-0.5">
        <div className="h-0.5 bg-black w-full" />
        <div className="h-1 bg-black w-full" />
      </div>
    </header>
  )
})

AboutHeader.displayName = "AboutHeader"

export default AboutHeader
