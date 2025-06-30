import { afterEach, describe, expect, test, vi } from 'vitest'
import { userStore } from '@stores/userStore'

describe('userStore', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('initial state', () => {
    const state = userStore.getState()
    expect(state.user).toBeNull()
    expect(state.loading).toBe(true)
  })

  test('setUser updates the user', () => {
    const newUser = { id: '1', username: 'Test User', email: 'test@example.com' }
    userStore.getState().setUser(newUser)
    expect(userStore.getState().user).toEqual(newUser)
  })

  test('setLoading updates the loading state', () => {
    userStore.getState().setLoading(false)
    expect(userStore.getState().loading).toBe(false)
  })

  test('clearUser resets the user to null', () => {
    userStore.getState().clearUser()
    expect(userStore.getState().user).toBeNull()
  })
})