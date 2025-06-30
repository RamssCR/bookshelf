import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { BookTooltip } from '@components/book-card/BookTooltip'

describe('BookTooltip', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders tooltip with correct label', () => {
    const { container } = render(<BookTooltip />)

    const tooltipTrigger = container.querySelector('[data-slot="tooltip-trigger"]')
    expect(tooltipTrigger).toBeDefined()
    expect(tooltipTrigger?.getAttribute('aria-label')).toBe('Add to your shelf')
  })

  test('calls onClick handler when clicked', () => {
    const onClickMock = vi.fn()
    render(<BookTooltip onClick={onClickMock} />)

    const tooltipTrigger = screen.getByRole('button')
    fireEvent.click(tooltipTrigger)

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test('shows "Remove from your shelf" when isAdded is true', () => {
    const { container } = render(<BookTooltip isAdded={true} />)

    const tooltipTrigger = container.querySelector('[data-slot="tooltip-trigger"]')
    expect(tooltipTrigger?.getAttribute('aria-label')).toBe('Remove from your shelf')
  })
})