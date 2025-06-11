import type { BookFetch } from '@@types/fetchers';
import { axiosInstance } from '@plugins/axiosInstance'

/**
 * Retrieves a list of books based on the 
 * specified category, genre, page, and limit.
 */
export const getBooks = async ({ 
  genre, 
  page = 1, 
  limit = 10 
}: BookFetch = {}) =>
  await axiosInstance.get('/books', {
    params: {
      genre,
      page,
      limit
    }
  })

/**
 * Retrieves a book by its slug.
 */
export const getBookBySlug = async (slug: string) =>
  await axiosInstance.get(`/books/${slug}`)