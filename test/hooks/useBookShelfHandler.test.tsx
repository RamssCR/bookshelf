import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, renderHook, screen, waitFor } from '@testing-library/react'
import { useBookshelfHandler } from '@hooks/useBookshelfHandler'
import { useShelfMutation } from '@hooks/useShelfMutation'
import { Toaster } from 'sonner'

vi.mock('@hooks/useShelfMutation', () => ({
  useShelfMutation: vi.fn().mockReturnValue({
    addToShelfAsync: vi.fn(),
    removeFromShelfAsync: vi.fn()
  })
}))

vi.mock('sonner', async (importOriginal) => {
  const actual = await importOriginal<typeof import('sonner')>()
  return {
    ...actual,
    toast: {
      ...actual.toast,
      success: vi.fn(),
      error: vi.fn(),
      dismiss: vi.fn()
    },
    Toaster: vi.fn().mockImplementation(() => {
      return <div>
        <button onClick={() => actual.toast.dismiss('Dismiss!')}>Dismiss</button>
      </div>
    })
  }
})

describe('useBookshelfHandler', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('should add book to shelf and trigger success toast', async () => {
    const mockAddToShelfAsync = vi.fn().mockResolvedValue({})
    ;(useShelfMutation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      addToShelfAsync: mockAddToShelfAsync,
      removeFromShelfAsync: vi.fn()
    })

    const { result } = renderHook(() => useBookshelfHandler({
      isAdded: false,
      slug: 'test-book'
    }), {
      wrapper: ({ children }) => (
        <>
          {children}
          <Toaster />
        </>
      )
    })

    await result.current()

    expect(mockAddToShelfAsync).toHaveBeenCalled()
  })

  test('should remove book from shelf and trigger success toast', async () => {
    const mockRemoveFromShelfAsync = vi.fn().mockResolvedValue({})
    ;(useShelfMutation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      addToShelfAsync: vi.fn(),
      removeFromShelfAsync: mockRemoveFromShelfAsync
    })

    const { result } = renderHook(() => useBookshelfHandler({
      isAdded: true,
      slug: 'test-book'
    }), {
      wrapper: ({ children }) => (
        <>
          {children}
          <Toaster />
        </>
      )
    })

    await result.current()

    expect(mockRemoveFromShelfAsync).toHaveBeenCalled()
  })

  test('should handle errors gracefully', async () => {
    const mockAddToShelfAsync = vi.fn().mockRejectedValue(new Error('Network error'))
    ;(useShelfMutation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      addToShelfAsync: mockAddToShelfAsync,
      removeFromShelfAsync: vi.fn()
    })

    const { result } = renderHook(() => useBookshelfHandler({
      isAdded: false,
      slug: 'test-book'
    }), {
      wrapper: ({ children }) => (
        <>
          {children}
          <Toaster />
        </>
      )
    })

    await result.current()
    expect(mockAddToShelfAsync).toHaveBeenCalled()
  })

  test('should refetch data if refetch function is provided', async () => {
    const mockRefetch = vi.fn().mockResolvedValue({})
    const mockAddToShelfAsync = vi.fn().mockResolvedValue({})

    ;(useShelfMutation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      addToShelfAsync: mockAddToShelfAsync,
      removeFromShelfAsync: vi.fn()
    })

    const { result } = renderHook(() => useBookshelfHandler({
      isAdded: false,
      slug: 'test-book',
      refetch: mockRefetch
    }), {
      wrapper: ({ children }) => (
        <>
          {children}
          <Toaster />
        </>
      )
    })

    await result.current()
    expect(mockRefetch).toHaveBeenCalled()

    await waitFor(async () => {
      const button = screen.getByRole('button')
      expect(button).toBeDefined()

      import('sonner').then(({ toast }) => {
        const config = (toast.success as unknown as ReturnType<typeof vi.fn>).mock.calls[0][1];
        config.action.onClick();
        expect(toast.dismiss).toHaveBeenCalled();
      })
    })
  })
})