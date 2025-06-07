import {
  keepPreviousData,
  useQuery as useReactQuery
} from '@tanstack/react-query'
import { getBooks } from "@services/books"
import type { BookCardProps } from '@@types/bookCard'

type BookResult = {
  total: number,
  page: number,
  size: number,
  totalPages: number,
  books: BookCardProps | BookCardProps[]
}

type PaginationFilterProps = {
  query: string | null,
  limit?: number,
  genre?: string | null
}

export const usePaginationFilter = ({ query, genre, limit }: PaginationFilterProps) => {
  const {
    data: { data: { data } } = { data: { data: null } },
    status,
  } = useReactQuery({
    queryKey: ['discover', query],
    queryFn: () => getBooks({
      page: Number(query),
      limit,
      genre
    }),
    placeholderData: keepPreviousData,
    staleTime: 5000
  })

  return {
    data: data as BookResult,
    status,
  }
}