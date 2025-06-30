import { describe, expect, test, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from '@components/header/Header'
import { MemoryRouter } from 'react-router-dom'
import { userStore } from '@stores/userStore'

vi.mock('@stores/userStore')

describe('Header', () => {
  test('renders correctly', () => {
    const mockUser = { username: undefined }
    vi.mocked(userStore).mockReturnValue({ user: mockUser })

    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(container).toBeDefined()
  })

  test('displays the correct title', () => {
    const mockUser = { username: undefined }
    vi.mocked(userStore).mockReturnValue({ user: mockUser })

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const titleElement = screen.getByRole('heading', { name: /Bookshelf/i })
    expect(titleElement).toBeDefined()
  })

  test('shows the user name when user is logged in', () => {
    const mockUser = { username: 'testuser' }
    vi.mocked(userStore).mockReturnValue({ user: mockUser })

    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    const userElement = screen.getByText(/testuser/i)
    expect(userElement).toBeDefined()
  })
})