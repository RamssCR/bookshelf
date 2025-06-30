import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Label } from '@components/ui/label'

describe('Label', () => {
  test('renders with default props', () => {
    render(<Label>Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toBeDefined()
  })

  test('applies custom className', () => {
    render(<Label className="custom-class">Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label.getAttribute('class')).toContain('custom-class')
  })
})