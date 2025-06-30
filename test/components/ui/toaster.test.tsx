import { describe, expect, test } from 'vitest'
import { Toaster } from '@components/ui/toaster'
import { render } from '@testing-library/react'

describe('Toaster', () => {
  test('renders with default props', () => {
    const { container } = render(<Toaster />)
    const toasterElement = container.querySelector('section')
    expect(toasterElement).toBeDefined()
    expect(toasterElement?.getAttribute('aria-label')).toBe('Notifications alt+T')
    expect(toasterElement?.getAttribute('aria-live')).toBe('polite')
  })
})