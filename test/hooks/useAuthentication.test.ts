import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, renderHook, waitFor } from '@testing-library/react'
import { profile } from '@services/authentication'
import { useAuthentication } from '@hooks/useAuthentication'
import { useCookies } from 'react-cookie'
import { userStore } from '@stores/userStore'

vi.mock('@services/authentication')
vi.mock('@stores/userStore')
vi.mock('react-cookie', () => ({
  useCookies: vi.fn()
}))

describe('useAuthentication', () => {
  afterEach(() => {
    vi.clearAllMocks()
    cleanup()
  })

  test('should return user profile and cookies', async () => {
    (useCookies as unknown as ReturnType<typeof vi.fn>).mockReturnValue([{ token: 'token' }, {}])
    ;(userStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      user: null,
      loading: false,
      setUser: vi.fn(),
      setLoading: vi.fn(),
      clearUser: vi.fn()
    })
    ;(profile as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
      data: {
        data: {
          id: 'test-user',
          name: 'Test User',
          email: 'test@example.com'
        }
      }
    })

    const { result } = renderHook(() => useAuthentication())
    await waitFor(async () => {
      expect(result.current.loading).toBe(false)
    })
  })

  test('should handle authentication failure', async () => {
    (useCookies as unknown as ReturnType<typeof vi.fn>).mockReturnValue([{ token: 'token' }, {}])
    const clearUserMock = vi.fn()
    ;(userStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      user: null,
      loading: false,
      setUser: vi.fn(),
      setLoading: vi.fn(),
      clearUser: clearUserMock
    })
    ;(profile as unknown as ReturnType<typeof vi.fn>).mockRejectedValue(new Error('Authentication failed'))

    const { result } = renderHook(() => useAuthentication())
    await waitFor(async () => {
      expect(clearUserMock).toHaveBeenCalled()
      expect(result.current.loading).toBe(false)
    })
  })

  test('should not validate authentication if token is not present', async () => {
    (useCookies as unknown as ReturnType<typeof vi.fn>).mockReturnValue([{}, {}])
    const setLoadingMock = vi.fn()
    ;(userStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      user: null,
      loading: false,
      setUser: vi.fn(),
      setLoading: setLoadingMock,
      clearUser: vi.fn()
    })

    renderHook(() => useAuthentication())
    await waitFor(async () => {
      expect(setLoadingMock).toHaveBeenCalledWith(false)
    })
  })
})