import type { RefetchOptions, QueryObserverResult } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'
import type { BookCardProps } from '@@types/bookCard'
import { TooltipProvider } from '@components/ui/tooltip'
import { BookCard } from '@components/book-card/BookCard'
import { BookCardSkeleton } from '@components/book-card/BookCardSkeleton'
import { EmptyDiscoverBooks } from '@components/discover/EmptyDiscoverBooks'
import { NoBooks } from '@components/no-books/NoBooks'

type BookGridViewProps = {
  books: BookCardProps[]
  status: 'pending' | 'error' | 'success'
  refetch?: (options?: RefetchOptions) => Promise<QueryObserverResult<AxiosResponse<{ data: unknown }, unknown>, Error>>
  isAdded?: (slug: string) => boolean
  skeletonCount?: number
  location?: 'discover' | 'your-books'
}

const EmptyComponentByLocation = ({ location = 'discover' }) => {
  if (location === 'discover') {
    return (
      <section className="w-full h-full flex flex-col items-center justify-center gap-4 mt-4">
        <EmptyDiscoverBooks />
      </section>
    )
  }

  if (location === 'your-books') {
    return (
      <section className="w-full h-full flex flex-col items-center justify-center gap-4 mt-4">
        <NoBooks />
      </section>
    )
  }
}

export const BookGridView = ({
  books,
  status,
  location = 'discover',
  isAdded = () => false,
  refetch,
  skeletonCount = 10,
}: BookGridViewProps) => {
  if (status === 'pending') {
    return (
      <section className="w-full grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-4 lg:gap-y-7 xl:grid-cols-5">
        {Array.from({ length: skeletonCount }, (_, index) => (
          <BookCardSkeleton key={index} />
        ))}
      </section>
    )
  }

  if (status === 'error') {
    return <EmptyComponentByLocation location={location} />
  }

  if (books.length === 0) {
    return <EmptyComponentByLocation location={location} />
  }

  return (
    <section className="w-full grid grid-cols-2 gap-x-4 gap-y-7 md:grid-cols-4 xl:grid-cols-5">
      <TooltipProvider>
        {books.map((book) => (
          <BookCard
            key={book.slug}
            {...book}
            isAdded={isAdded(book.id)}
            refetch={refetch}
          />
        ))}
      </TooltipProvider>
    </section>
  )
}