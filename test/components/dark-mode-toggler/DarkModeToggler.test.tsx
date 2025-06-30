import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { DarkModeToggler } from '@components/dark-mode-toggler/DarkModeToggler'
import { themeStore } from '@stores/themeStore'

vi.mock('@stores/themeStore')

describe('DarkModeToggler', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders dark mode toggle button', () => {
    (themeStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      theme: 'light',
      setTheme: vi.fn(),
    })

    render(<DarkModeToggler />)
    fireEvent.click(screen.getByRole('switch'))
    expect(screen.getByRole('switch')).toBeDefined()
  })

  test('toggles dark mode on button click', async () => {
    const setTheme = vi.fn()
    ;(themeStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      theme: 'dark',
      setTheme,
    })

    render(<DarkModeToggler />)

    const button = screen.getByRole('switch')
    fireEvent.click(button)

    expect(setTheme).toHaveBeenCalled()
  })

  test('applies correct aria attributes', () => {
    (themeStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      theme: 'system',
      setTheme: vi.fn(),
    })

    render(<DarkModeToggler />)

    const button = screen.getByRole('switch')
    expect(button.getAttribute('aria-labelledby')).toBe('dark-mode-toggler')
  })
})