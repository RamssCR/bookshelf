import type { BookCardProps } from "@@types/bookCard"
import { getBookBySlug } from "@services/books"
import { useQuery } from "@tanstack/react-query"

export const useBookBySlug = (slug?: string) => {
  const { data, isLoading, error } = useQuery<BookCardProps>({
    queryKey: ['book', slug],
    queryFn: async () => {
      if (!slug) throw new Error('Slug is required')
      const response = await getBookBySlug(slug)
      return response.data.data
    },
    enabled: !!slug,
  })

  return {
    book: data,
    isLoading,
    error,
  }
}