import { keepPreviousData, useQuery } from '@tanstack/react-query'
import type { AxiosResponse } from 'axios'

type PaginationResult<T> = {
  total: number
  page: number
  size: number
  totalPages: number
  books: T | T[]
}

type PaginationFilterProps<TParam, TData> = {
  fetcher: (props: Partial<TParam>) => Promise<AxiosResponse<{ data: PaginationResult<TData> }>>
  page?: string | null
  limit?: number
  genre?: string | null
  functionKey?: string
}

export const usePaginationFilter = <
  TData = unknown,
  TParam = Record<string, unknown>
>({ 
  page, 
  genre, 
  limit,
  fetcher,
  functionKey = 'discover'
}: PaginationFilterProps<TParam, TData>) => {
  const { data, status, refetch } = useQuery({
    queryKey: [functionKey, { page, limit, genre }],
    queryFn: () => fetcher({
      page: Number(page),
      limit,
      genre
    } as unknown as Partial<TParam>),
    placeholderData: keepPreviousData,
    staleTime: 5000
  })

  return {
    data: data?.data?.data,
    status,
    refetch,
  }
}
