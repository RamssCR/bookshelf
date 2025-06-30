import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { SkeletonReader } from '@components/book-reader/Skeleton'

describe('SkeletonReader', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders skeleton for book reader', () => {
    render(<SkeletonReader />)

    expect(screen.getByRole('heading', { name: /Loading book content.../i })).toBeDefined()
    expect(screen.getByRole('article')).toBeDefined()
  })
})