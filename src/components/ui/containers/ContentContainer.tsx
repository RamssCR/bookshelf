import { classMerger } from "@utils/classMerger"
import type { HTMLAttributes } from "react"

export const ContentContainer = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <section
      className={classMerger(
        'bg-background w-full h-full flex flex-col items-start gap-8 px-4 py-6 lg:px-8 lg:py-7',
        className
      )}
      {...props}
    />
  )
}