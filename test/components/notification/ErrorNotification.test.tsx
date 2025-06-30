import { afterEach, describe, expect, test } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { ErrorNotification } from '@components/notification/ErrorNotification'
import { MemoryRouter } from 'react-router-dom'

describe('ErrorNotification', () => {
  afterEach(() => {
    cleanup()
  })

  test('renders ErrorNotification with message', () => {
    render(
      <MemoryRouter>
        <ErrorNotification message="An error has occurred" />
      </MemoryRouter>
    )

    expect(screen.getByRole('alert')).toBeDefined()
    expect(screen.getByText('An error has occurred')).toBeDefined()
  })

  test('renders ErrorNotification without message', () => {
    render(
      <MemoryRouter>
        <ErrorNotification />
      </MemoryRouter>
    )

    expect(screen.getByRole('alert')).toBeDefined()
    expect(screen.queryByText('An error has occurred')).toBeNull()
  })
})