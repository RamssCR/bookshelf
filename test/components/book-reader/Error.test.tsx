import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { BookReaderError } from '@components/book-reader/Error'
import { MemoryRouter } from 'react-router-dom'

describe('BookReaderError', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders error message when chapter is not found', () => {
    render(
      <MemoryRouter>
        <BookReaderError />
      </MemoryRouter>
    )

    expect(screen.getByRole('alert')).toBeDefined()
    expect(screen.getByText('Chapter not found!')).toBeDefined()
    expect(screen.getByText('The chapter you are looking for does not exist or is not available')).toBeDefined()
  })

  test('renders specific error message when chapter is provided', () => {
    render(
      <MemoryRouter>
        <BookReaderError chapter="2" />
      </MemoryRouter>
    )

    expect(screen.getByRole('alert')).toBeDefined()
    expect(screen.getByText('Chapter not found!')).toBeDefined()
    expect(screen.getByText('Chapter 2 of this book does not exist or is not available.')).toBeDefined()
  })
})