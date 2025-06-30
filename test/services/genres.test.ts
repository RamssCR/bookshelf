import { afterEach, describe, expect, test, vi } from 'vitest'
import { axiosInstance } from '@plugins/axiosInstance'
import { getGenres } from '@services/genres'

vi.mock('@plugins/axiosInstance')

describe('Genres Service', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('getGenres calls axiosInstance.get with correct parameters', async () => {
    await getGenres()
    expect(axiosInstance.get).toHaveBeenCalledWith('/genres')
  })
})