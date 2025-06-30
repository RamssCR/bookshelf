import { afterEach, describe, expect, test, vi } from 'vitest'
import { axiosInstance } from '@plugins/axiosInstance'
import { getBookChapterByNumber } from '@services/chapters'

vi.mock('@plugins/axiosInstance')

describe('Chapters Service', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('getBookChapterByNumber calls axiosInstance.get with correct parameters', async () => {
    const bookId = 'test-book'
    const chapterNumber = '1'
    await getBookChapterByNumber(bookId, chapterNumber)
    expect(axiosInstance.get).toHaveBeenCalledWith(`/chapters/${bookId}/${chapterNumber}`)
  })
})
