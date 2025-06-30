import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Title } from '@components/ui/title'

describe('Title', () => {
  test('renders with default props', () => {
    render(<Title>Test Title</Title>)
    const titleElement = screen.getByText('Test Title')
    expect(titleElement).toBeDefined()
    expect(titleElement.tagName).toBe('H1')
  })

  test('renders with custom tag', () => {
    render(<Title as="h2">Custom Tag Title</Title>)
    const titleElement = screen.getByText('Custom Tag Title')
    expect(titleElement.tagName).toBe('H2')
  })

  test('applies custom className', () => {
    render(<Title className="custom-class">Styled Title</Title>)
    const titleElement = screen.getByText('Styled Title')
    expect(titleElement.getAttribute('class')).toContain('custom-class')
  })
})