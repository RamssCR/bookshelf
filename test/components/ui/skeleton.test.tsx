import { describe, expect, test } from 'vitest'
import { Skeleton } from '@components/ui/skeleton'
import { render } from '@testing-library/react'

describe('Skeleton', () => {
  test('renders with default props', () => {
    const { container } = render(<Skeleton />)
    const skeleton = container.querySelector('[data-slot="skeleton"]')
    expect(skeleton).toBeDefined()
  })
})