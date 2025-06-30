import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, renderHook } from '@testing-library/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { addBookToShelf, removeFromShelf } from '@services/bookshelves'
import { useShelfMutation } from '@hooks/useShelfMutation'

vi.mock('@services/bookshelves')

describe('useShelfMutation', () => {
  const queryClient = new QueryClient()

  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('should add book to shelf', async () => {
    const slug = 'test-book'

    ;(addBookToShelf as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ success: true })
    const { result } = renderHook(() => useShelfMutation(slug), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    })

    await result.current.addToShelfAsync()
    expect(result.current.addToShelfAsync).toBeDefined()
  })

  test('should remove book from shelf', async () => {
    const slug = 'test-book'
    ;(removeFromShelf as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ success: true })
    const { result } = renderHook(() => useShelfMutation(slug), {
      wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    })

    await result.current.removeFromShelfAsync()
    expect(result.current.removeFromShelfAsync).toBeDefined()
  })
})