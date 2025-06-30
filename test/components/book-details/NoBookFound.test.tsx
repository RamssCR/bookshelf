import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { NoBookFound } from '@components/book-details/NoBookFound'
import { MemoryRouter } from 'react-router-dom'

describe('NoBookFound', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders NoBookFound component with default path', () => {
    render(
      <MemoryRouter>
        <NoBookFound />
      </MemoryRouter>
    )

    const title = screen.getByText('Book not found!')
    const message = screen.getByText("We couldn't find the book you were looking for.")
    const goBackLink = screen.getByText('Go back to Discover')

    expect(title).toBeDefined()
    expect(message).toBeDefined()
    expect(goBackLink).toBeDefined()
  })

  test('renders NoBookFound component with custom path', () => {
    render(
      <MemoryRouter>
        <NoBookFound path="your-books" />
      </MemoryRouter>
    )

    const goBackLink = screen.getByText('Go back to your Bookshelf')
    expect(goBackLink).toBeDefined()
  })
})