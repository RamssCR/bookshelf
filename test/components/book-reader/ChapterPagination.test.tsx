import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { ChapterPagination } from '@/components/book-reader/ChapterPagination'
import { MemoryRouter } from 'react-router-dom'

describe('ChapterPagination', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders previous and next chapter links', () => {
    const basePath = 'discover'
    const bookSlug = 'test-book'
    const previousChapter = 1
    const nextChapter = 3

    render(
      <MemoryRouter>
        <ChapterPagination
          basePath={basePath}
          bookSlug={bookSlug}
          previous={previousChapter}
          next={nextChapter}
        />
      </MemoryRouter>
    )

    expect(screen.getByRole('navigation')).toBeDefined()
    expect(screen.getByLabelText('Go to previous chapter').getAttribute('href')).toBe(
      `/${basePath}/books/read/${bookSlug}/${previousChapter}`
    )
    expect(screen.getByLabelText('Go to next chapter').getAttribute('href')).toBe(
      `/${basePath}/books/read/${bookSlug}/${nextChapter}`
    )
  })

  test('renders ellipsis when there are more chapters', () => {
    const basePath = 'your-books'
    const bookSlug = 'test-book'
    const previousChapter = 1
    const nextChapter = 3

    render(
      <MemoryRouter>
        <ChapterPagination
          basePath={basePath}
          bookSlug={bookSlug}
          previous={previousChapter}
          next={nextChapter}
        />
      </MemoryRouter>
    )

    expect(screen.getByText('More pages')).toBeDefined()
  })
})