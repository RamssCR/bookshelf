import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from '@components/ui/badge'

describe('Badge', () => {
  test('renders with default props', () => {
    render(<Badge>Default Badge</Badge>)
    const badge = screen.getByText('Default Badge')
    expect(badge).toBeDefined()
    expect(badge.getAttribute('class')).toContain('gap-1')
  })

  test('renders with custom className', () => {
    render(<Badge className="custom-class">Custom Class Badge</Badge>)
    const badge = screen.getByText('Custom Class Badge')
    expect(badge.getAttribute('class')).toContain('custom-class')
  })

  test('renders with custom color', () => {
    render(<Badge variant="destructive">Blue Badge</Badge>)
    const badge = screen.getByText('Blue Badge')
    expect(badge.getAttribute('class')).toContain('bg-red-500')
  })

  test('renders as a child component', () => {
    render(
      <Badge asChild>
        <span>Child Badge</span>
      </Badge>
    )
    const badge = screen.getByText('Child Badge')
    expect(badge).toBeDefined()
    expect(badge.tagName).toBe('SPAN')
  })
})