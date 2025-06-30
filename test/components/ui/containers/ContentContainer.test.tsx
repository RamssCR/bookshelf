import { describe, expect, test } from 'vitest'
import { ContentContainer } from '@components/ui/containers/ContentContainer'
import { render } from '@testing-library/react'

describe('ContentContainer', () => {
  test('renders correctly', () => {
    const { container } = render(<ContentContainer />)
    expect(container).toBeDefined()
  })
})