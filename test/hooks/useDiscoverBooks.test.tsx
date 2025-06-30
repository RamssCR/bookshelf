import { afterEach, describe, expect, test, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { getBookshelfIds } from '@services/bookshelves'
import { getBooks } from '@services/books'
import { getGenres } from '@services/genres'
import { renderHook, waitFor } from '@testing-library/react'
import { useDiscoverBooks } from '@hooks/useDiscoverBooks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

vi.mock('@services/bookshelves')
vi.mock('@services/books')
vi.mock('@services/genres')

describe('useDiscoverBooks', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('should fetch books and genres', async () => {
    const mockBooks = { data: [], totalPages: 1 }
    const mockGenres = { data: [] }
    const mockIds = { data: [] }
    ;(getBookshelfIds as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ data: mockIds })
    ;(getBooks as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ data: mockBooks })
    ;(getGenres as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ data: mockGenres })


    const { result } = renderHook(() => useDiscoverBooks(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={new QueryClient()}>
          <MemoryRouter initialEntries={['/discover?page=1&genre=all']}>
            {children}
          </MemoryRouter>
        </QueryClientProvider>
      ),
    })

    await waitFor(async () => {
      expect(result.current.data).toEqual([])
      expect(result.current.isAdded).toBeDefined()
      expect(result.current.isAdded('test-slug')).toBe(false)
    })
  })

  test('should handle pagination', async () => {
    const mockBooks = { data: [], totalPages: 5 }
    const mockGenres = { data: [] }
    const mockIds = { data: ['test-id'] }
    ;(getBookshelfIds as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ data: mockIds })
    ;(getBooks as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ data: mockBooks })
    ;(getGenres as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ data: mockGenres })

    const { result } = renderHook(() => useDiscoverBooks(), {
      wrapper: ({ children }) => (
        <QueryClientProvider client={new QueryClient()}>
          <MemoryRouter initialEntries={['/discover?page=1&genre=all']}>
            {children}
          </MemoryRouter>
        </QueryClientProvider>
      ),
    })

    await waitFor(() => {
      expect(result.current.pageActive(1)).toBe(true)
      expect(result.current.isAdded('test-id')).toBe(true)
    })
  })
})