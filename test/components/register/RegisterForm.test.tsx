import { afterEach, describe, expect, test, vi } from 'vitest'
import { act, cleanup, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { RegisterForm } from '@components/register/RegisterForm'
import { useMutation } from '@tanstack/react-query'

vi.mock('@tanstack/react-query')
vi.mock('@stores/userStore', () => ({
  userStore: vi.fn(() => ({
    setUser: vi.fn(),
  })),
}))

describe('RegisterForm', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('renders register form with fields', () => {
    (useMutation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      mutateAsync: vi.fn(),
      isPending: false,
      error: null,
    })

    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    )
    expect(screen.getByText('Username')).toBeDefined()
    expect(screen.getByText('Email')).toBeDefined()
    expect(screen.getByText('Password')).toBeDefined()
  })

  test('calls register mutation on submit', async () => {
    const mockMutateAsync = vi.fn().mockResolvedValue({
      data: { data: { id: '1', email: 'john@example.com' } },
    })
    ;(useMutation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      mutateAsync: mockMutateAsync,
      isPending: false,
      error: null,
    })

    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    )

    await act(async () => {
      screen.getByRole('button', { name: 'Sign Up' }).click()
    })

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalled()
    })
  })

  test('shows error message on registration failure', async () => {
    const mockMutateAsync = vi.fn().mockRejectedValue(new Error('Registration failed'))
    ;(useMutation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      mutateAsync: mockMutateAsync,
      isPending: false,
      error: null,
    })

    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    )

    await act(async () => {
      screen.getByRole('button', { name: 'Sign Up' }).click()
    })

    await waitFor(() => {
      expect(mockMutateAsync).toHaveBeenCalled()
    })
  })

  test('shows loading state while registering', async () => {
    const mockMutateAsync = vi.fn().mockImplementation(() => new Promise(() => {}))
    ;(useMutation as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
      mutateAsync: mockMutateAsync,
      isPending: true,
      error: null,
    })

    render(
      <MemoryRouter>
        <RegisterForm />
      </MemoryRouter>
    )

    expect(screen.getByRole('button', { name: 'Signing up...' }).getAttribute('disabled')).toBe('')
  })
})