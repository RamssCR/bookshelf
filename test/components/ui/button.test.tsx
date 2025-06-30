import { describe, expect, test, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Button } from '@components/ui/button'

describe('Button', () => {
  test('renders with default props', () => {
    render(<Button>Default Button</Button>)
    const button = screen.getByText('Default Button')
    expect(button).toBeDefined()
    expect(button.getAttribute('class')).toContain('bg-primary')
  })

  test('renders with custom className', () => {
    render(<Button className="custom-class">Custom Class Button</Button>)
    const button = screen.getByText('Custom Class Button')
    expect(button.getAttribute('class')).toContain('custom-class')
  })

  test('renders with variant styles', () => {
    render(<Button variant="outline">Outline Button</Button>)
    const button = screen.getByText('Outline Button')
    expect(button.getAttribute('class')).toContain('border-input')
  })

  test('calls onClick handler when clicked', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Clickable Button</Button>)
    const button = screen.getByText('Clickable Button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  test('renders as a child component', () => {
    render(
      <Button asChild>
        <span>Child Button</span>
      </Button>
    )
    const button = screen.getByText('Child Button')
    expect(button).toBeDefined()
    expect(button.tagName).toBe('SPAN')
  })
})