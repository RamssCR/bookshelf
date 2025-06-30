import type { AxiosError } from 'axios'
import type { BookContent } from '@@types/bookContent'
import { getBookChapterByNumber } from '@services/chapters'
import { useQuery } from '@tanstack/react-query'

export const useBookChapterByNumber = (
  slug?: string,
  chapter?: string
) => {
  const { data, isLoading, error } = useQuery<BookContent, AxiosError>({
    queryKey: ['chapter', slug, chapter],
    queryFn: async () => {
      const response = await getBookChapterByNumber(slug, chapter)
      return response.data.data
    },
    enabled: !!slug && !!chapter,
  })

  return {
    chapterContent: data,
    isLoading,
    error,
  }
}