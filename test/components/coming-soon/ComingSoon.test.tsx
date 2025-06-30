import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { ComingSoon } from '@components/coming-soon/ComingSoon'

describe('ComingSoon', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders coming soon message', () => {
    render(<ComingSoon />)

    expect(screen.getByRole('heading', { name: /Coming Soon/i })).toBeDefined()
    expect(screen.getByText('This feature is not available yet. Stay tuned for updates!')).toBeDefined()
  })
})