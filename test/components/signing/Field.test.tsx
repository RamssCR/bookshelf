import { afterEach, describe, expect, test, vi } from 'vitest'
import { cleanup, render, screen } from '@testing-library/react'
import { Field } from '@components/signing/Field'
import { useForm } from 'react-hook-form'

vi.mock('react-hook-form', () => ({
  useForm: vi.fn(),
}))

describe('Field Component', () => {
  afterEach(() => {
    cleanup()
    vi.clearAllMocks()
  })

  test('renders with label and input', () => {
    const mockRegister = vi.fn()
    ;(useForm as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ register: mockRegister })

    render(
      <Field
        id="username"
        label="Username"
        placeholder="Enter your username"
        autoComplete="username"
        register={mockRegister}
      />
    )

    expect(screen.getByText('Username')).toBeDefined()
    expect(screen.getByPlaceholderText('Enter your username')).toBeDefined()
  })

  test('renders with required asterisk when required is true', () => {
    const mockRegister = vi.fn()
    ;(useForm as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ register: mockRegister })

    render(
      <Field
        id="email"
        label="Email"
        placeholder="Enter your email"
        autoComplete="email"
        register={mockRegister}
        required={true}
      />
    )

    expect(screen.getByText('*')).toBeDefined()
  })

  test('does not render required asterisk when required is false', () => {
    const mockRegister = vi.fn()
    ;(useForm as unknown as ReturnType<typeof vi.fn>).mockReturnValue({ register: mockRegister })

    render(
      <Field
        id="password"
        label="Password"
        placeholder="Enter your password"
        autoComplete="current-password"
        register={mockRegister}
        required={false}
      />
    )

    expect(screen.queryByText('*')).toBeNull()
  })
})