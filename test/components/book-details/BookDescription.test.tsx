import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { BookDescription } from '@components/book-details/BookDescription'

describe('BookDescription', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders book description with correct content', () => {
    render(<BookDescription synopsis="This is a test synopsis." />)

    const description = screen.getByText('This is a test synopsis.')
    expect(description).toBeDefined()
  })

  test('renders multiple paragraphs correctly', () => {
    render(<BookDescription synopsis="Paragraph 1.|Paragraph 2.|Paragraph 3." />)

    const paragraphs = screen.getAllByText(/Paragraph \d+/)
    expect(paragraphs).toHaveLength(3)
  })
})