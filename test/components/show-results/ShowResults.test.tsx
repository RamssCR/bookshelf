import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { ShowResults } from '@components/show-results/ShowResults'

describe('ShowResults Component', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders with default props', () => {
    render(<ShowResults />)
    const resultText = screen.getByText(/Page 0 of 0/i)
    expect(resultText).toBeDefined()
    expect(resultText.getAttribute('class')).toBe('-mt-2 text-muted-foreground text-sm font-medium')
  })

  test('renders with custom page and total', () => {
    render(<ShowResults page={2} total={5} />)
    const resultText = screen.getByText(/Page 2 of 5/i)
    expect(resultText).toBeDefined()
  })
})