import { describe, expect, test } from 'vitest'
import { render } from '@testing-library/react'
import { AccountContainer } from '@components/ui/containers/AccountContainer'

describe('AccountContainer', () => {
  test('renders correctly', () => {
    const { container } = render(<AccountContainer />)
    expect(container).toBeDefined()
  })
})
