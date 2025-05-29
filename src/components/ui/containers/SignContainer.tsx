import type { HTMLAttributes } from "react"
import { classMerger } from '@utils/classMerger'

export const SignContainer = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <main
      className={classMerger(
        'py-6 px-3 bg-background w-full min-h-screen grid grid-cols-1 place-items-center lg:place-items-start lg:py-0 lg:px-0 lg:grid-cols-[2fr_1fr]',
        className
      )}
      {...props}
    />
  )
}