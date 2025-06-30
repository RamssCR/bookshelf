import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { InnerPagination } from '@components/discover/InnerPagination'
import { MemoryRouter } from 'react-router-dom'

describe('InnerPagination', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders pagination controls', () => {
    render(
      <MemoryRouter>
        <InnerPagination 
          path="discover"
          previous="previous-page"
          next="next-page"
          pagination={[
            { id: '1', current: 1, isActive: true },
            { id: '2', current: 2, isActive: false },
            { id: '3', current: 3, isActive: false },
          ]}
        />
      </MemoryRouter>
    )
    expect(screen.getByText('Previous')).toBeDefined()
    expect(screen.getByText('Next')).toBeDefined()
  })
})