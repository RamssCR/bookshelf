import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { BookSummary } from '@components/book-details/BookSummary'

describe('BookSummary', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders book summary with subtitle, pages, and chapters', () => {
    render(<BookSummary subtitle="Test Subtitle" pages={300} chapters={10} />)

    const subtitle = screen.getByText('Test Subtitle')
    const pages = screen.getByText('300 Pages')
    const chapters = screen.getByText('10 Chapters')
    expect(subtitle).toBeDefined()
    expect(pages).toBeDefined()
    expect(chapters).toBeDefined()
  })

  test('renders book summary with default values when props are missing', () => {
    render(<BookSummary />)

    const subtitle = screen.getByText('No subtitle provided.')
    const pages = screen.getByText('Pages')
    const chapters = screen.getByText('Chapters')
    expect(subtitle).toBeDefined()
    expect(pages).toBeDefined()
    expect(chapters).toBeDefined()
  })
})