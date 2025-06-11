import type { BookFetch } from '@@types/fetchers'
import { axiosInstance } from '@plugins/axiosInstance'

/**
 * Retrives a list of books from the user's bookshelf.
 */
export const getBookshelf = async ({
  page = 1,
  limit = 10
}: BookFetch) =>
  await axiosInstance.get('/shelves', {
    params: {
      page,
      limit
    }
  })

/**
 * Retrieves a list of book IDs from the user's bookshelf.
 */
export const getBookshelfIds = async () =>
  await axiosInstance.get('/shelves/ids')

/**
 * Retrieves a book from the user's bookshelf by its slug.
 */
export const getBookshelfBookBySlug = async (slug: string) =>
  await axiosInstance.get(`/shelves/${slug}`)

/**
 * Adds a book to the user's bookshelf.
 */
export const addBookToShelf = async (slug: string) =>
  await axiosInstance.post('/shelves', { slug })

/**
 * Removes a book from the user's bookshelf.
 */
export const removeFromShelf = async (slug: string) =>
  await axiosInstance.delete(`/shelves/${slug}`)