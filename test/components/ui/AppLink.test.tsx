import { describe, expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { AppLink } from '@components/ui/AppLink'

describe('AppLink', () => {
  test('renders with default props', () => {
    render(
      <MemoryRouter>
        <AppLink to="/test">Test Link</AppLink>
      </MemoryRouter>
    )
    const linkElement = screen.getByText('Test Link')
    expect(linkElement).toBeDefined()
    expect(linkElement.getAttribute('href')).toBe('/test')
  })

  test('applies custom className', () => {
    render(
      <MemoryRouter>
        <AppLink to="/test" className="custom-class">Test Link</AppLink>
      </MemoryRouter>
    )
    const linkElement = screen.getByText('Test Link')
    expect(linkElement.getAttribute('class')).toContain('custom-class')
  })

  test('applies variant styles', () => {
    render(
      <MemoryRouter>
        <AppLink to="/test" variant="outline">Primary Link</AppLink>
      </MemoryRouter>
    )
    const linkElement = screen.getByText('Primary Link')
    expect(linkElement.getAttribute('class')).toContain('border-input')
  })
})