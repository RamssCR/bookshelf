import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { BookCard } from '@components/book-card/BookCard'
import { MemoryRouter } from 'react-router-dom'
import { useBookshelfHandler } from '@hooks/useBookshelfHandler'

vi.mock('@hooks/useBookshelfHandler')

describe('BookCard', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('renders book card with title, author, and cover', () => {
    (useBookshelfHandler as unknown as ReturnType<typeof vi.fn>).mockReturnValue(vi.fn())

    const props = {
      title: 'Test Book',
      author: 'Test Author',
      cover: 'test-cover.jpg',
      slug: 'test-book',
      genre: 'Fiction',
      isAdded: false,
      refetch: vi.fn(),
      subtitle: 'Test Subtitle',
      synopsis: 'This is a test synopsis for the book.',
      chapters: 10,
      pages: 200,
    }

    render(
      <MemoryRouter initialEntries={['/your-books']}>
        <BookCard {...props} />
      </MemoryRouter>
    )

    const titleElement = screen.getByText(/test book/i)
    const authorElement = screen.getByText(/test author/i)

    expect(titleElement).toBeDefined()
    expect(authorElement).toBeDefined()
  })

  test('calls shelf mutation on button click', async () => {
    const mockMutation = vi.fn()
    ;(useBookshelfHandler as unknown as ReturnType<typeof vi.fn>).mockReturnValue(mockMutation)

    const props = {
      title: 'Test Book',
      author: 'Test Author',
      cover: 'test-cover.jpg',
      slug: 'test-book',
      genre: 'Fiction',
      isAdded: true,
      refetch: vi.fn(),
      subtitle: 'Test Subtitle',
      synopsis: 'This is a test synopsis for the book.',
      chapters: 10,
      pages: 200,
    }

    render(
      <MemoryRouter initialEntries={['/discover']}>
        <BookCard {...props} />
      </MemoryRouter>
    )

    const buttonElement = screen.getByTestId('shelf-button')
    await fireEvent.click(buttonElement)

    expect(mockMutation).toHaveBeenCalled()
  })
})