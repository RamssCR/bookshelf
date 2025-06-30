import { afterEach, describe, expect, test, vi } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import { renderHook } from '@testing-library/react'
import { useYourBooks } from '@hooks/useYourBooks'

vi.mock('@hooks/usePaginationFilter', () => ({
  usePaginationFilter: vi.fn(() => ({
    data: { totalPages: 5 },
    status: 'success',
    refetch: vi.fn(),
  })),
}))

vi.mock('@hooks/usePagination', () => ({
  usePagination: vi.fn(() => ({
    pageActive: 1,
    nextLimit: vi.fn(),
    previousLimit: vi.fn(),
  })),
}))

describe('useYourBooks', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('should return your books', () => {
    const { result } = renderHook(() => useYourBooks(), {
      wrapper: MemoryRouter,
    })
    expect(result.current).toEqual({
      data: { totalPages: 5 },
      status: 'success',
      refetch: expect.any(Function),
      nextLimit: expect.any(Function),
      previousLimit: expect.any(Function),
      pageActive: 1,
    })
  })
})