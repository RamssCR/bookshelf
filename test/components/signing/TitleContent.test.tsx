import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { TitleContent } from '@components/signing/TitleContent'

describe('TitleContent Component', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders title and description', () => {
    render(
      <MemoryRouter>
        <TitleContent title="Test Title" description="Test Description" />
      </MemoryRouter>
    )

    expect(screen.getByText('Test Title')).toBeDefined()
    expect(screen.getByText('Test Description')).toBeDefined()
  })

  test('renders back link with correct text and icon', () => {
    render(
      <MemoryRouter>
        <TitleContent title="Test Title" description="Test Description" />
      </MemoryRouter>
    )

    const backLink = screen.getByRole('link', { name: /Back to the landing page/i })
    expect(backLink).toBeDefined()
    expect(backLink.querySelector('.fill-primary')).toBeDefined()
  })
})