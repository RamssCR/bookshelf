import { afterEach, describe, expect, test, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Sidebar } from '@components/sidebar/Sidebar'
import { userStore } from '@stores/userStore'
import { logout } from '@services/authentication'

vi.mock('@stores/userStore')
vi.mock('@services/authentication')

describe('Sidebar', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('renders the sidebar with navigation links', () => {
    (userStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      user: { username: 'testuser' },
      clearUser: vi.fn(),
    })

    render(
      <MemoryRouter initialEntries={['/discover']}>
        <Sidebar />
      </MemoryRouter>
    )
    const title = screen.getByRole('heading', { name: /menu/i })
    expect(title).toBeDefined()

    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThan(0)
  })

  test('handles logout click', async () => {
    const clearUserMock = vi.fn()
    const logoutMock = vi.fn()
    ;(userStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      clearUser: clearUserMock,
    })
    ;(logout as unknown as ReturnType<typeof vi.fn>).mockImplementation(logoutMock)

    render(
      <MemoryRouter initialEntries={['/discover']}>
        <Sidebar />
      </MemoryRouter>
    )

    const logoutLink = screen.getByRole('link', { name: /Logout/i })
    act(() => {
      fireEvent.click(logoutLink)
    })

    expect(logoutMock).toHaveBeenCalled()
  })
})