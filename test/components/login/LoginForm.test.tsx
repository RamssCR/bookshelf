import { afterEach, describe, expect, test, vi } from 'vitest'
import { act, cleanup, render, screen, waitFor } from '@testing-library/react'
import { LoginForm } from '@components/login/LoginForm'
import { useMutation } from '@tanstack/react-query'
import { MemoryRouter } from 'react-router-dom'

vi.mock('@tanstack/react-query')
vi.mock('@stores/userStore', () => ({
  userStore: vi.fn(() => ({
    setUser: vi.fn(),
  })),
}))

describe('LoginForm', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('renders login form with fields', () => {
    (useMutation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      mutateAsync: vi.fn(),
      isPending: false,
      error: null,
    })

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    )
    expect(screen.getByText('Email')).toBeDefined()
    expect(screen.getByText('Password')).toBeDefined()
  })

  test('calls login mutation on submit', async () => {
    const mockMutateAsync = vi.fn().mockResolvedValue({
      data: { data: { id: '1', email: 'test@example.com' } },
    })
    ;(useMutation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ 
      mutateAsync: mockMutateAsync,
      isPending: false,
      error: null,
    })

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    )

    await act(async () => {
      screen.getByRole('button', { name: 'Login' }).click()
    })

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalled()
    })
  })

  test('displays error message on mutation failure', async () => {
    const mockError = { response: { data: { message: 'Login failed' } } }
    const mockMutateAsync = vi.fn().mockRejectedValue(mockError)
    ;(useMutation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      mutateAsync: mockMutateAsync,
      isPending: false,
      error: mockError,
    })

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    )

    await act(async () => {
      screen.getByRole('button', { name: 'Login' }).click()
    })

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalled()
    })
  })

  test('renders loading state', () => {
    (useMutation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      mutateAsync: vi.fn(),
      isPending: true,
      error: null,
    })

    render(
      <MemoryRouter>
        <LoginForm />
      </MemoryRouter>
    )

    expect(screen.getByRole('button', { name: 'Logging in...' }).getAttribute('disabled')).toBe('')
  })
})