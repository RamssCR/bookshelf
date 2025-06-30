import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Switch } from '@components/ui/switch'

describe('Switch', () => {
  test('renders with default props', () => {
    render(<Switch />)
    const switchElement = screen.getByRole('switch')
    expect(switchElement).toBeDefined()
  })
})