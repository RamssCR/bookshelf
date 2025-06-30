import { afterEach, describe, expect, test, vi } from 'vitest'
import { 
  addBookToShelf, 
  getBookshelf, 
  getBookshelfBookBySlug, 
  getBookshelfIds, 
  removeFromShelf 
} from '@services/bookshelves'
import { axiosInstance } from '@plugins/axiosInstance'

vi.mock('@plugins/axiosInstance')

describe('Bookshelves Service', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('getBookshelf calls axiosInstance.get with correct parameters', async () => {
    const params = { page: 1, limit: 10 }
    await getBookshelf(params)
    expect(axiosInstance.get).toHaveBeenCalledWith('/shelves', { params })
  })

  test('getBookshelfIds calls axiosInstance.get without parameters', async () => {
    await getBookshelfIds()
    expect(axiosInstance.get).toHaveBeenCalledWith('/shelves/ids')
  })

  test('getBookshelfBookBySlug calls axiosInstance.get with correct slug', async () => {
    const slug = 'test-book'
    await getBookshelfBookBySlug(slug)
    expect(axiosInstance.get).toHaveBeenCalledWith(`/shelves/${slug}`)
  })

  test('addBookToShelf calls axiosInstance.post with correct slug', async () => {
    const slug = 'test-book'
    await addBookToShelf(slug)
    expect(axiosInstance.post).toHaveBeenCalledWith('/shelves', { slug })
  })

  test('removeFromShelf calls axiosInstance.delete with correct slug', async () => {
    const slug = 'test-book'
    await removeFromShelf(slug)
    expect(axiosInstance.delete).toHaveBeenCalledWith(`/shelves/${slug}`)
  })
})