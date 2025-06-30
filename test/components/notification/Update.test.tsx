import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Update } from '@components/notification/Update'

describe('Update Component', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders update with title and description', () => {
    render(
      <Update 
        title="New Feature Available" 
        description="Check out the latest updates in the app!" 
      />
    )

    expect(screen.getByRole('region')).toBeDefined()
    expect(screen.getByText('New Feature Available')).toBeDefined()
    expect(screen.getByText('Check out the latest updates in the app!')).toBeDefined()
  })
})