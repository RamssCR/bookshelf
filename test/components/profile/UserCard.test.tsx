import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { UserCard } from '@components/profile/UserCard'
import { userStore } from '@stores/userStore'

vi.mock('@stores/userStore')

describe('UserCard', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('renders user information', () => {
    const mockUser = {
      id: '1',
      username: 'John Doe',
      email: 'john@example.com',
    }

    ;(userStore as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      user: mockUser,
    })

    render(<UserCard user={mockUser} />)

    expect(screen.getByText('John Doe')).toBeDefined()
    expect(screen.getByText('john@example.com')).toBeDefined()
  })
})