import { Skeleton } from '@components/ui/skeleton'
import { Title } from '@components/ui/title'

const SkeletonParagraph = () => (
  <div className="space-y-2 w-full">
    <Skeleton className="w-full h-3" />
    <Skeleton className="w-full h-3" />
    <Skeleton className="w-full h-3" />
  </div>
)

export const SkeletonReader = () => (
  <section 
    className="flex w-full flex-col items-start gap-5"
    aria-busy="true"
    aria-labelledby="book-reader-skeleton-title"
  >
    <Title 
      as="h2"
      className="sr-only"
      id="book-reader-skeleton-title"
    >
      Loading book content...
    </Title>
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