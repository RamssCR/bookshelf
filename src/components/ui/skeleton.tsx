import { classMerger } from "@utils/classMerger"

export const Skeleton = ({ className, ...props }: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="skeleton"
      className={classMerger(
        "bg-neutral-100 animate-pulse rounded-md dark:bg-neutral-800", 
        className
      )}
      {...props}
    />
  )
}
