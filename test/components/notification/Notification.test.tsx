import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Notification } from '@components/notification/Notification'
import { themeStore } from '@stores/themeStore'

vi.mock('@stores/themeStore')

describe('Notification', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('renders notification with dark mode toggle', () => {
    (themeStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      theme: 'dark',
      setTheme: vi.fn(),
    })

    render(<Notification />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toBeDefined()
    fireEvent.click(switchElement)

    expect(screen.getByRole('region')).toBeDefined()
    expect(screen.getByText('Adding dark mode')).toBeDefined()
    expect(screen.getByText('Read your books in dark mode now!')).toBeDefined()
  })

  test('toggles theme on switch click', () => {
    const setThemeMock = vi.fn()
    ;(themeStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock,
    })

    render(<Notification />)

    const switchElement = screen.getByRole('switch')
    expect(switchElement).toBeDefined()

    fireEvent.click(switchElement)
    expect(setThemeMock).toHaveBeenCalledWith('dark')
  })
})