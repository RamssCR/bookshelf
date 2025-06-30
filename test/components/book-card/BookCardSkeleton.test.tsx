import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { BookCardSkeleton } from '@components/book-card/BookCardSkeleton'

describe('BookCardSkeleton', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders skeleton elements', () => {
    render(<BookCardSkeleton />)

    const skeletonElements = screen.getByRole('status')
    expect(skeletonElements).toBeDefined()
  })

  test('has correct class names for skeleton elements', () => {
    render(<BookCardSkeleton />)

    const skeletonElement = screen.getByRole('status')
    expect(skeletonElement).toBeDefined()
    expect(skeletonElement.getAttribute('role')).toBe('status')
    expect(skeletonElement.getAttribute('aria-label')).toBe('Loading book information')
    expect(skeletonElement.getAttribute('class')).toBe('w-full flex flex-col items-start gap-3')
  })
})