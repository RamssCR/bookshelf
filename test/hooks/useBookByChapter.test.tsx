import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, renderHook, waitFor } from '@testing-library/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { getBookChapterByNumber } from '@services/chapters'
import { useBookChapterByNumber } from '@hooks/useBookByChapter'

vi.mock('@services/chapters')

describe('useBookChapterByNumber', () => {
  afterEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  test('should fetch book chapter content by slug and chapter number', async () => {
    const mockData = { content: 'Chapter content' }
      ; (getBookChapterByNumber as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
        data: { data: mockData }
      })

    const { result } = renderHook(() => useBookChapterByNumber('test-slug', '1'), {
      wrapper: ({ children }) => {
        const queryClient = new QueryClient()
        return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      }
    })

    await waitFor(async () => {
      expect(result.current.chapterContent).toEqual(mockData)
      expect(result.current.isLoading).toBe(false)
    })
  })

  test('should handle missing slug or chapter', async () => {
    ; (getBookChapterByNumber as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      data: { data: undefined }
    })

    const { result } = renderHook(() => useBookChapterByNumber('1'),
      {
        wrapper: ({ children }) => {
          const queryClient = new QueryClient()
          return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
        }
      }
    )

    await waitFor(async () => {
      expect(result.current.isLoading).toBe(false)
      expect(result.current.chapterContent).toBeUndefined()
    })
  })

  test('should handle query error', async () => {
    const mockError = new Error('Network error')
      ; (getBookChapterByNumber as unknown as ReturnType<typeof vi.fn>).mockRejectedValue(mockError)

    const { result } = renderHook(() => useBookChapterByNumber(), {
      wrapper: ({ children }) => {
        const queryClient = new QueryClient()
        return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      }
    })

    await waitFor(async () => {
      expect(result.current.error).toEqual(null)
      expect(result.current.isLoading).toBe(false)
    })
  })
})