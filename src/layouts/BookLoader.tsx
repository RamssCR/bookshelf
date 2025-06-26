import { Skeleton } from '@components/ui/skeleton'

export const BookLoader = () => (
  <section
    className="w-full flex flex-col items-center gap-8"
    role="status"
    aria-label="Loading book information... Please wait."
  >
    <section className="w-full flex flex-col items-center gap-4 md:flex-row md:items-start">
      <Skeleton className="w-[15em] h-[20em] rounded-xs aspect-[9_16] md:w-[18em] shadow" />
      <section className="flex w-full flex-col items-center gap-3 text-center md:text-left md:items-start md:mt-1">
        <Skeleton aria-hidden="true" className="w-full h-8" />
        <Skeleton aria-hidden="true" className="w-full h-6" />
        <Skeleton aria-hidden="true" className="w-full h-6 mt-8" />
        <Skeleton aria-hidden="true" className="w-full h-6" />
        <Skeleton aria-hidden="true" className="w-full h-6" />
        <Skeleton aria-hidden="true" className="w-full h-6" />
      </section>
    </section>
    <section className="w-full flex flex-col items-center gap-4 mt-8">
      {Array.from({ length: 5 }).map((_, index) => (
        <Skeleton key={index} aria-hidden="true" className="w-full h-6" />
      ))}
    </section>
  </section>
)