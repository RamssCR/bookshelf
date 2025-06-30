import { afterEach, describe, expect, test, vi } from 'vitest'
import { themeStore } from '@stores/themeStore'

vi.mock('zustand/middleware', () => ({
  persist: (fn: typeof vi.fn) => fn,
}))

describe('themeStore', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('initial state', () => {
    const state = themeStore.getState()
    expect(state.theme).toBe('system')
  })

  test('setTheme updates the theme', () => {
    const newTheme = 'dark'
    themeStore.getState().setTheme(newTheme)
    expect(themeStore.getState().theme).toBe(newTheme)
  })
})