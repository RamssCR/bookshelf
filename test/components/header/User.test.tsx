import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { User } from '@components/header/User'

describe('User', () => {
  test('renders the user component', () => {
    render(
      <MemoryRouter>
        <User username='testuser' />
      </MemoryRouter>
    )
    const userElement = screen.getByText(/testuser/i)
    expect(userElement).toBeDefined()
  })
})