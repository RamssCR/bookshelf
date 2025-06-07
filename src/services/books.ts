import { axiosInstance } from '@plugins/axiosInstance'

type GetBooks = {
  genre?: string | null
  page?: number
  limit?: number
}

/**
 * Retrieves a list of books based on the 
 * specified category, genre, page, and limit.
 */
export const getBooks = async ({ 
  genre, 
  page = 1, 
  limit = 10 
}: GetBooks = {}) =>
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