import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { NoBooks } from '@components/no-books/NoBooks'
import { MemoryRouter } from 'react-router-dom'

describe('NoBooks', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders NoBooks component with correct content', () => {
    render(
      <MemoryRouter>
        <NoBooks />
      </MemoryRouter>
    )

    expect(screen.getByRole('region')).toBeDefined()
    expect(screen.getByText('No books in your shelf!')).toBeDefined()
    expect(screen.getByText('Discover')).toBeDefined()
  })
})