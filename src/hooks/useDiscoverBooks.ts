import { usePaginationFilter } from '@hooks/usePaginationFilter'
import { usePagination } from '@hooks/usePagination'
import { useQuery as useReactQuery } from '@tanstack/react-query'
import { useQuery as useSearchParams } from '@hooks/useQuery'
import { getBooks } from '@services/books'
import { getGenres } from '@services/genres'
import { getBookshelfIds } from '@services/bookshelves'
import { BOOKS_PER_PAGE } from '@utils/constants'
import type { BookCardProps } from '@@types/bookCard'
import type { BookFetch } from '@@types/fetchers'

export const useDiscoverBooks = () => {
  const query = useSearchParams()
  const page = query.get('page')
  const genre = query.get('genre')

  const { data, status } = usePaginationFilter<BookCardProps, BookFetch>({
    fetcher: getBooks,
    page,
    limit: BOOKS_PER_PAGE,
    genre,
  })

  const { data: genresData } = useReactQuery({
    queryKey: ['genres'],
    queryFn: getGenres,
  })

  const { pageActive, nextLimit, previousLimit } = usePagination({
    query: page,
    limit: data?.totalPages,
    path: 'discover',
  })

  const { data: ids, refetch } = useReactQuery({
    queryKey: ['booksIds'],
    queryFn: getBookshelfIds,
  })

  const genres = genresData?.data?.data ?? []
  const isAdded = (slug: string) => ids?.data?.data?.includes(slug) ?? false

  return {
    data,
    status,
    genres,
    isAdded,
    refetch,
    pageActive,
    nextLimit,
    previousLimit,
  }
}
