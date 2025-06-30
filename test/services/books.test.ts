import { afterEach, describe, expect, test, vi } from 'vitest'
import { getBookBySlug, getBooks } from '@services/books'
import { axiosInstance } from '@plugins/axiosInstance'

vi.mock('@plugins/axiosInstance')

describe('Books Service', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('getBooks calls axiosInstance.get with correct parameters', async () => {
    const params = { genre: 'fiction', page: 1, limit: 10 }
    await getBooks(params)
    expect(axiosInstance.get).toHaveBeenCalledWith('/books', { params })
  })

  test('getBookBySlug calls axiosInstance.get with correct slug', async () => {
    const slug = 'test-book'
    await getBookBySlug(slug)
    expect(axiosInstance.get).toHaveBeenCalledWith(`/books/${slug}`)
  })
})