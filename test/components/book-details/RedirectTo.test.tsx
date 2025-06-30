import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { RedirectTo } from '@components/book-details/RedirectTo'
import { MemoryRouter } from 'react-router-dom'

describe('RedirectTo', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders "Continue Reading" link for Your Books with slug', () => {
    render(
      <MemoryRouter>
        <RedirectTo isYourBooks={true} slug="test-book" />
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: 'Continue Reading' })
    expect(link).toBeDefined()
    expect(link.getAttribute('href')).toBe('/your-books/books/read/test-book/1')
  })

  test('renders "Read Book" link for Discover without slug', () => {
    render(
      <MemoryRouter>
        <RedirectTo isYourBooks={false} slug="test-book" />
      </MemoryRouter>
    )

    const link = screen.getByRole('link', { name: 'Read Book' })
    expect(link).toBeDefined()
    expect(link.getAttribute('href')).toBe('/discover/books/read/test-book/1')
  })
})