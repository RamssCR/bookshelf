import { Skeleton } from "@components/ui/skeleton"

export const BookCardSkeleton = () => {
  return (
    <div 
      className="w-full flex flex-col items-start gap-3"
      role="status"
      aria-label="Loading book information"
    >
      <Skeleton className="w-full h-82 aspect-[9_16] rounded-sm" />
      <Skeleton className="w-full h-5 rounded-sm" />
    </div>
  )
}