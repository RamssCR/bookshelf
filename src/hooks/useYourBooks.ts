import { usePaginationFilter } from '@hooks/usePaginationFilter'
import { usePagination } from '@hooks/usePagination'
import { useQuery as useSearchParams } from '@hooks/useQuery'
import { getBookshelf } from '@services/bookshelves'
import { BOOKS_PER_PAGE } from '@utils/constants'
import type { BookCardProps } from '@@types/bookCard'
import type { BookFetch } from '@@types/fetchers'

export const useYourBooks = () => {
  const query = useSearchParams()
  const page = query.get('page')

  const { data, status, refetch } = usePaginationFilter<BookCardProps, BookFetch>({
    fetcher: getBookshelf,
    page,
    limit: BOOKS_PER_PAGE,
    functionKey: 'your-books',
  })

  const { pageActive, nextLimit, previousLimit } = usePagination({
    query: page,
    path: 'your-books',
    limit: data?.totalPages,
  })

  return {
    data,
    status,
    refetch,
    pageActive,
    nextLimit,
    previousLimit,
  }
}
