import { classMerger } from "@utils/classMerger"
import type { HTMLAttributes } from "react"

export const AccountContainer = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <main
      className={classMerger(
        'w-full bg-background flex flex-col items-start',
        className
      )}
      {...props}
    />
  )
}