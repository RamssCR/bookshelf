import { Skeleton } from '@components/ui/skeleton'

const SkeletonParagraph = () => (
  <div className="space-y-2 w-full">
    <Skeleton className="w-full h-3" />
    <Skeleton className="w-full h-3" />
    <Skeleton className="w-full h-3" />
  </div>
)

export const SkeletonReader = () => (
  <section className="flex w-full flex-col items-start gap-5">
    <Skeleton className="h-8 w-full" />
    <article className="space-y-2 mb-4">
      <Skeleton className="w-40 h-5" />
      <Skeleton className="w-70 h-5" />
    </article>
    {Array.from({ length: 6 }).map((_, index) => (
      <SkeletonParagraph key={index} />
    ))}
  </section>
)