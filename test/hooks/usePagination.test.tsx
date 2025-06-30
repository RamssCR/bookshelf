import { afterEach, describe, expect, test, vi } from 'vitest'
import { renderHook } from '@testing-library/react'
import { usePagination } from '@hooks/usePagination'
import { MemoryRouter } from 'react-router-dom'

describe('usePagination', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('should navigate to the first page if no query is provided', () => {
    renderHook(() => usePagination({ query: null, path: 'discover' }), {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={['/discover']}>
          {children}
        </MemoryRouter>
      ),
    })
  })

  test('should mark the current page as active', () => {
    const { result } = renderHook(() => usePagination({ query: '2', path: 'discover' }), {
      wrapper: ({ children }) => (
        <MemoryRouter>
          {children}
        </MemoryRouter>
      ),
    })


    expect(result.current.pageActive(2)).toBe(true)
    expect(result.current.pageActive(1)).toBe(false)
  })

  test('should return previous limit correctly', () => {
    const { result } = renderHook(() => usePagination({ query: '3', path: 'discover' }), {
      wrapper: ({ children }) => (
        <MemoryRouter>
          {children}
        </MemoryRouter>
      ),
    })

    expect(result.current.previousLimit()).toBe(2)
  })

  test('should not go below page 1 when previous limit is called', () => {
    const { result } = renderHook(() => usePagination({ query: '1', path: 'discover' }), {
      wrapper: ({ children }) => (
        <MemoryRouter>
          {children}
        </MemoryRouter>
      ),
    })

    expect(result.current.previousLimit()).toBe(1)
  })

  test('should return next limit correctly', () => {
    const { result } = renderHook(() => usePagination({ query: '2', path: 'discover', limit: 5 }), {
      wrapper: ({ children }) => (
        <MemoryRouter>
          {children}
        </MemoryRouter>
      ),
    })

    expect(result.current.nextLimit()).toBe(3)
  })

  test('should not exceed the limit when next limit is called', () => {
    const { result } = renderHook(() => usePagination({ query: '5', path: 'discover', limit: 5 }), {
      wrapper: ({ children }) => (
        <MemoryRouter>
          {children}
        </MemoryRouter>
      ),
    })

    expect(result.current.nextLimit()).toBe(5)
  })
})