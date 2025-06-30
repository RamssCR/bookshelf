import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { EmptyDiscoverBooks } from '@components/discover/EmptyDiscoverBooks'

describe('EmptyDiscoverBooks', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders empty state message', () => {
    render(<EmptyDiscoverBooks />)
    expect(screen.getByText('No books found')).toBeDefined()
  })
})
