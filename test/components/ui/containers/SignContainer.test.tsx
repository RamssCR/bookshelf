import { describe, expect, test } from 'vitest'
import { SignContainer } from '@components/ui/containers/SignContainer'
import { render } from '@testing-library/react'

describe('SignContainer', () => {
  test('renders correctly', () => {
    const { container } = render(<SignContainer />)
    expect(container).toBeDefined()
  })
})