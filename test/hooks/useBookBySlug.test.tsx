import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, renderHook, waitFor } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { getBookBySlug } from '@services/books'
import { useBookBySlug } from '@hooks/useBookBySlug'

vi.mock('@services/books')

describe('useBookBySlug', () => {
  afterEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  test('should fetch book by slug', async () => {
    const mockData = { title: 'Test Book' }
    ; (getBookBySlug as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      data: { data: mockData }
    })

    const { result } = renderHook(() => useBookBySlug('test-slug'), {
      wrapper: ({ children }) => {
        const queryClient = new QueryClient()
        return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      }
    })

    await waitFor(() => {
      expect(result.current.book).toEqual(mockData)
      expect(result.current.isLoading).toBe(false)
    })
  })

  test('should handle missing slug', async () => {
    ; (getBookBySlug as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      data: { data: undefined }
    })

    const { result } = renderHook(() => useBookBySlug(), {
      wrapper: ({ children }) => {
        const queryClient = new QueryClient()
        return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      }
    })

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
      expect(result.current.book).toBeUndefined()
    })
  })

  test('should handle query error', async () => {
    const mockError = new Error('Network error')
    ; (getBookBySlug as unknown as ReturnType<typeof vi.fn>).mockRejectedValue(mockError)

    const { result } = renderHook(() => useBookBySlug(), {
      wrapper: ({ children }) => {
        const queryClient = new QueryClient()
        return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      }
    })

    await waitFor(() => {
      expect(result.current.error).toEqual(null)
      expect(result.current.isLoading).toBe(false)
    })
  })
})