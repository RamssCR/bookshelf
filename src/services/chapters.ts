import { axiosInstance } from '@plugins/axiosInstance'

/**
 * Fetches a book chapter by its slug and chapter number.
 */
export const getBookChapterByNumber = async (slug?: string, chapter?: string) =>
  await axiosInstance.get(`/chapters/${slug}/${chapter}`)