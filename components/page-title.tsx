import { cn } from "@/lib/utils"

export const PageTitle = ({ title, subtitle, className, ...rest }: any) => {
  return (
    <div className={cn("mb-6", className)}>
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle}
    </div>
  )
}
