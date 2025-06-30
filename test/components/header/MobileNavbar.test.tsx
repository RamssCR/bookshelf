import { describe, expect, test, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { MobileNavbar } from '@components/header/MobileNavbar'
import { userStore } from '@stores/userStore'
import { logout } from '@services/authentication'

vi.mock('@stores/userStore')
vi.mock('@services/authentication')

describe('MobileNavbar', () => {
  (userStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
    user: { username: 'testuser' },
    clearUser: vi.fn(),
    logout: vi.fn(),
  })

  test('renders the mobile navbar with menu button', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MobileNavbar />
      </MemoryRouter>
    )
    const button = screen.getByRole('button')
    expect(button).toBeDefined()
  })

  test('triggers the logout handler on button click', async () => {
    const mockLogout = vi.fn()

    ;(userStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      user: { username: 'testuser' },
      clearUser: vi.fn(),
    })

    ;(logout as unknown as ReturnType<typeof vi.fn>).mockImplementation(mockLogout)

    render(
      <MemoryRouter initialEntries={['/discover']}>
        <MobileNavbar />
      </MemoryRouter>
    )

    const button = screen.getByRole('button')
    act(() => {
      fireEvent.click(button)
    })

    const logoutLink = screen.getByRole('link', { name: /logout/i })
    act(() => {
      fireEvent.click(logoutLink)
    })

    expect(mockLogout).toHaveBeenCalled()
  })
})